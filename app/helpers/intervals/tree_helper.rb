module Intervals::TreeHelper
  def callout_class resource, class_if_fine='primary'
    if resource.errors.any?
        'alert'
    else
      class_if_fine
    end
  end

  def display_label_error resource
    render partial: "intervals/tree/errors",
           locals: { errors: resource.errors} if resource.errors.any?
  end
end
