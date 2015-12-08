class ReadonlyValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    return unless record.send "#{attribute}_changed?"
    record.errors[attribute] << (options[:message] || "can not be updated")
  end
end
