class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_errors

    def create
        user = User.create!(created_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end

    def index
        render json: User.all
    end

    def show
        if current_user
            render json: current_user, serializer: UserSerializer, status: :ok
        else
            render json: { errors: "No active session" }, status: :unauthorized
        end
    end


    private

    def created_params
        params.permit(:username, :password)
    end

    def render_not_found_error
        render json: {error: "User not found"}, status: 404
    end

    def render_unprocessable_errors(exception)
        render json: { errors: [exception.record.errors] }, status: :unprocessable_entity
    end
end
