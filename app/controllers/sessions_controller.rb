class SessionsController < ApplicationController
  skip_before_action :authorize_user, only: [:create]
  
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password]) #If user exists and user is authenticated '&.' 
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { errors: 'Invalid credentials' }, status: :unauthorized
    end
  end

  def destroy
    if current_user
      session.clear
    else
      render json: { errors: "No active session" }, status: :unauthorized
    end
  end
end
