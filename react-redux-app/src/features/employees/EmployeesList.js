import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';

import { fetchEmployees } from './employeesSlice';
import EmployeeItem from './EmployeeItem';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  thead {
    background: #ffffff;

    th {
      padding: 20px;
      font-family: Hind;
      font-weight: 500;
      line-height: 1;
    }
  }

  tbody {
    tr {
      background: #ffffff;
      border-bottom: 1px solid #dddddd;
    }

    tr:first-of-type {
      border-top: 1px solid #dddddd;
    }

    tr:last-child {
      border-bottom: 0;
    }

    td {
      padding: 25px;
      font-family: Hind;
      font-weight: 300;
      text-align: center;
    }
  }
`;

const EmployeesList = () => {
  const employees = useSelector((state) => state.employees.items);
  const status = useSelector((state) => state.employees.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmployees());
    }
  }, [dispatch, status]);

  if (status === 'pending') {
    return <h3>Loading employees ...</h3>;
  }

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
