class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?
  skip_before_action :verify_authenticity_token
  before_action :underscore_params!
  private

  

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        @current_user = user
        user.reset_session_token!
        session[:session_token] = user.session_token
        
    end

    def logout!
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in
        redirect_to new_api_session_url unless logged_in?
    end

    
    

    before_action :underscore_params!

    def underscore_params!
        underscore_hash = -> (hash) do
          hash.transform_keys!(&:underscore)
          hash.each do |key, value|
            if value.is_a?(ActionController::Parameters)
              underscore_hash.call(value)
            elsif value.is_a?(Array)
              value.each do |item|
                next unless item.is_a?(ActionController::Parameters)
                underscore_hash.call(item)
              end
            end
          end
        end
        underscore_hash.call(params)
      end

end
