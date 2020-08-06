require 'rails_helper'
require 'faker'

describe EmployeesController do
  before(:each) do
    @employee = Employee.create(
      first_name: Faker::Name.unique.first_name,
      last_name: Faker::Name.unique.last_name,
      position: Faker::Job.position,
      email: Faker::Internet.unique.email,
      phone_number: Faker::PhoneNumber.unique.cell_phone_with_country_code,
      gender: [0, 1][rand(2)],
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
    )
  end

  context 'GET to index' do
    before(:each) do
      get :index
    end

    it 'returns an http status ok' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns a json with all employees' do
      employees = JSON.parse(response.body)
      expect(employees.size).to eq 1
    end
  end

  context 'GET to show' do
    before(:each) do
      get :show, params: { id: @employee.id }
    end

    it 'return an http status ok' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns the correct employee' do
      get :show, params: { id: @employee.id }
      expected_employee = JSON.parse(response.body)
      expect(expected_employee['id']).to eq(@employee.id)
    end
  end
end
