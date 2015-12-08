ActionController::Renderers.add :hal do |obj, options|
  self.content_type ||= Mime[:hal]
  obj
end
