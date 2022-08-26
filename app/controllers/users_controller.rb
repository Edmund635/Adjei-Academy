class UsersController < ApplicationController
    skip_before_action :authorize_user, only: [:create]
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
end
