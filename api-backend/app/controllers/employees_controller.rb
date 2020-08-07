class EmployeesController < ApplicationController
  def index
    employees = Employee.all.order(first_name: :asc)
    render json: employees, status: :ok
  end

  def show
    id = params[:id]
    employee = Employee.find(id)
    render json: employee, status: :ok
  end
end
