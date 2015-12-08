module ApplicationHelper
  ##
  # Return an escaped JSON string representing the alt state for all stores
  # (kind of snapshot). In the same time, complete the
  # `:snapshot_binary_alt` yield with a JSON version of the screenshot.
  # When can this way send a shorter http file, and bootstrap client side.
  def server_side_alt_bootstrap
    json_alt_bootstrap = @react_stores.to_json
    json_result = json_escape(json_alt_bootstrap)
    content_for(:snapshot_binary_alt, Base64.strict_encode64(json_result))
    return json_result
  end

  def _recursive_display_routes route_path, route_component, route_childs
    react_script = ""
    if route_component.nil?
      route_childs.each do |route_path, route_spec|
        react_script <<= _recursive_display_routes(route_path,
                                                   route_spec[:component],
                                                   route_spec[:childs]);
      end
      return react_script
    end

    route_path = {path: route_path, component: route_component}
    react_script = <<-JS
      React.createElement(Route,
        #{route_path.to_json}
    JS
    if route_childs.count > 0
      react_script <<= ",\n"
      route_childs.each do |route_path, route_spec|
        react_script <<= "\t\t" << _recursive_display_routes(route_path, route_spec[:component], route_spec[:childs]) << "\n"

        if route_path != route_childs.keys.last
          react_script <<= ","
        end
      end
    end
    return "#{react_script})"
  end

  def display_routes
    react_script = ""
    routes = application_routes
    routes.each do |route_path, route_spec|
      react_script <<= _recursive_display_routes(route_path, route_spec[:component], route_spec[:childs])
      if route_path != routes.keys.last
        react_script <<= ","
      end
    end
    return react_script.html_safe << ";"
  end

  def application_routes
    # FROM http://stackoverflow.com/questions/19611104/rails-3-get-list-of-routes-in-namespace-programmatically
    routes_tree = {}
    prev_current = {}
    Rails.application.routes.routes.map do |route|
      current = routes_tree
      # Turn route path spec into string; use "1" for all params
      path = route.path.spec.to_s.gsub(/\(\.:format\)/, "")
      verb = %W{ GET POST PUT PATCH DELETE }.grep(route.verb).first.downcase.to_sym

      if route.dispatcher? and verb == :get and not path.start_with?('/rails/')
        controller_name = File.basename(route.defaults[:controller])
        action_name = route.defaults[:action]
        component_name = "#{controller_name}_#{action_name}_page".camelcase
        resource =  "/"
        # loop from root to basename directory.
        Pathname(path).descend do |f|
          ressource = File.basename(f.to_s)
          # its a ressource (or index action)
          unless current.has_key? ressource
            current[ressource] = {childs: {}}
          end
          prev_current = current[ressource]
          current = current[ressource][:childs]
        end
        unless prev_current.has_key? component_name
          prev_current[:component] = component_name
        end
        prev_current = current
      end
    end
    return routes_tree
  end
end
