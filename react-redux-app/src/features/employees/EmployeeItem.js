import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeItem = ({ employee }) => {
  return (
    <tr>
      <td>
        {employee.first_name} {employee.last_name}
      </td>
      <td>{employee.position}</td>
      <td>{employee.email}</td>
      <td>
        <Link to={`/employees/${employee.id}`}>Details</Link>
      </td>
    </tr>
  );
};

export default EmployeeItem;
