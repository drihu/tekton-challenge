class EmployeesController < ApplicationController
  def index
    employees = Employee.all.order(first_name: :asc)
    render json: employees, status: :ok
  end

  def show
    id = params[:id]
    employee = Employee.find(id)

    if employee.avatar.attached?
      photo_url = url_for(employee.avatar)
      render json: employee.as_json.merge(photo_url: photo_url), status: :ok
    else
      render json: employee, status: :ok
    end
  end
end
