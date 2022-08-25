class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
    def create
        app = User.create!(created_params)
        render json: app, status: :created
    end

    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json: user, serializer: UsersWithCoursesSerializer, 
    end

    def update
        user = User.find(params[:id])
        user.update!(created_params) 
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end


    private

    def created_params
        params.permit(:username, :password)
    end

    def render_not_found_error
        render json: {error: "User not found"}, status: 404
    end
end
