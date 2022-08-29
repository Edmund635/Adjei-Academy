class EnrollmentsController < ApplicationController
    def create
        enrollment = Enrollment.create!(created_params)
        render json: enrollment, status: :created
    end


    private

    def created_params
        params.permit(:course_id, :user_id)
    end
end
