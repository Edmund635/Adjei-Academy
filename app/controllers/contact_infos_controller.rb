class ContactInfosController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_errors
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
    def create
        contactInfo = ContactInfo.create!(created_params)
        render json: contactInfo, status: :created
    end

    def index
        render json: ContactInfo.all
    end

    def show
        contactInfo = ContactInfo.find(params[:id])
        render json: contactInfo, serializer: ContactInfoSerializer
    end

    def update
        contactInfo = ContactInfo.find(params[:id])
        contactInfo.update!(created_params) 
        render json: contactInfo, status: :accepted
    end

    def destroy
        contactInfo = contactInfo.find(params[:id])
        contactInfo.destroy
        head :no_content
    end


    private
    def created_params
        params.permit(:last_name, :first_name, :email, :city, :phone_number, :age, :user_id)
    end

    def render_not_found_error
        render json: {error: "Not found"}, status: 404
    end

    def render_unprocessable_errors(exception)
        render json: { errors: [exception.message] }, status: :unprocessable_entity
    end
end
