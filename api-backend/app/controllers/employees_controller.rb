class EmployeesController < ApplicationController
  def index
    employees = Employee.all
    render json: employees, status: :ok
  end

  def show
    id = params[:id]
    employee = Employee.find(id)
    render json: employee, status: :ok
  end
end
