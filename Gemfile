source 'https://rubygems.org'


## DEV AND TEST
# =======

group :development, :test do
  # Rspec for testing purpose
  gem "rspec-rails", "~> 3.1.0"
  gem "factory_girl_rails", "~> 4.4.1"

  # Call 'byebug' to start a debugger console in the terminal
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background.
  # Read more: https://github.com/rails/spring
  gem 'spring'

  # Check best practice with `rails_best_practices -f html .`
  # Will save the generated report in rails_best_practices_output.html
  gem 'rails_best_practices'
end

group :test do
  gem "faker", "~> 1.4.3"
  gem "capybara", "~> 2.4.3"
  gem "database_cleaner", "~> 1.3.0"
  gem "launchy", "~> 2.4.2"
  gem "selenium-webdriver", "~> 2.43.0"
end

## DOCUMENTATION
# ============

group :doc do
    # `bundle exec rake doc:rails` generates the API under doc/api.
    # See rdoc : https://github.com/rdoc/rdoc
    gem 'sdoc', '~> 0.4.0', group: :doc
end

# Heroku tools to enable logging
gem 'rails_12factor', group: :production

## BACKEND
# ======

gem 'rails', '4.2.4'

# Use Puma as the app server for production
# See https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server
gem 'puma'

# Use postgresql as the database for Active Record.
# Start a postgresql server locally with the data defined in /config/database.yml
gem 'pg'

# To have plain model to break fat models.
# see docs https://github.com/makandra/active_type
gem 'active_type', '~> 0.4.3'


# FRONTEND
# =======

group :assets do
  gem 'foundation'
  gem 'compass'

  # Use Uglifier as compressor for JavaScript assets
  gem 'uglifier', '>= 1.3.0'

  # Allow CoffeeScript for .coffee assets.
  # Please don't use for react components.
  gem 'coffee-rails', '~> 4.1.0'

  # Use SCSS for stylesheets .scss
  gem 'sass-rails'
end

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Use turbolink, to avoid reloading <head> part of the HTML page while
# changing page.
gem 'turbolinks'

ruby "2.2.3"
