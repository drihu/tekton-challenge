class ApplicationController < ActionController::API
  before_action :access_any_origin

  rescue_from ActiveRecord::RecordNotFound do |e|
    render json: { message: e.message }, status: :not_found
  end

  private
  def access_any_origin
    headers['Access-Control-Allow-Origin'] = '*'
    return
  end
end
