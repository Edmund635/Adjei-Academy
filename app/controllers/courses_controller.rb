class CoursesController < ApplicationController
    skip_before_action :authorize_user
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
    def index
        render json: Course.all
    end

    def show
        course = Course.find(params[:id])
        render json: course, serializer: CourseSerializer
    end


    # allow user to remove course from collection
    def destroy
        if current_user
            current_user.course.destroy
            head :no_content
        else
            render json: { errors: "No active session" }, status: :unauthorized
        end
    end


    private

    def render_not_found_error
        render json: {error: "Course not found"}, status: 404
    end
end
