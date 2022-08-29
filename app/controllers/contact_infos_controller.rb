class ContactInfosController < ApplicationController
    skip_before_action :is_authorized?, only: [:create]
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
end
