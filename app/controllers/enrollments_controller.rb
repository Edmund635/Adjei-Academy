class EnrollmentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_errors
    def create
        enrollment = Enrollment.create!(created_params)
        render json: app, status: :created
    end


    private

    def created_params
        params.permit(:course_id, :user_id)
    end

    def render_unprocessable_errors(exception)
        render json: { errors: [exception.message] }, status: :unprocessable_entity
    end
end
