class ApplicationController < ActionController::API
  before_action :authorize_user
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_errors

  def is_authorized? 
    permitted = current_user.admin?
    render json: { errors: { User: "No admin access" }}, status: :forbidden unless permitted
  end
  
  private

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def authorize_user
    return render json: { error: {User: "Not authorized"} }, status: :unauthorized unless current_user
  end

  def render_not_found_error
    render json: {error: "User not found"}, status: 404
  end

  def render_unprocessable_errors(exception)
    render json: { errors: [exception.record.errors] }, status: :unprocessable_entity
  end

end
