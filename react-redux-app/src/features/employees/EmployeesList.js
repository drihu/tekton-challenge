import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchEmployees } from './employeesSlice';
import EmployeeItem from './EmployeeItem';
import { Table } from '../../components/StyledComponents';

const EmployeesList = () => {
  const employees = useSelector((state) => state.employees.items);
  const status = useSelector((state) => state.employees.status);
  const error = useSelector((state) => state.employees.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmployees());
    }
  }, [dispatch, status]);

  if (status === 'pending') {
    return <h3>Loading employees ...</h3>;
  }

  if (error) console.log(error);

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Email</th>
          <th>Profile</th>
        </tr>
      </thead>

      {employees.length > 0 && (
        <tbody>
          {employees.map((employee) => (
            <EmployeeItem employee={employee} key={employee.id} />
          ))}
        </tbody>
      )}
    </Table>
  );
};

export default EmployeesList;
