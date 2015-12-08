# Be sure to restart your server when you modify this file.

# The .store extension display a snapshot of the store for the given
# action.
Mime::Type.register "application/json", :store

ActionController::Renderers.add :hal do |obj, options|
  self.content_type ||= Mime[:hal]
  obj
end
