class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    render json: { success: true, data: self.resource }, status: 200
  end

  def failure
    warden.custom_failure!
    render json: { success: false, errors: ["Login Credentials Failed"] }, status: 401
  end

  def destroy
    signed_out = sign_out(resource_name)
    render json: { success: true, data: self.resource }, status: 200
  end

  protected

  def auth_options
    {scope: resource_name, recall: "#{controller_path}#failure"}
  end

end
