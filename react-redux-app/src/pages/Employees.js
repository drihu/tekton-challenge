import React from 'react';

import { Container, Title } from '../components/StyledComponents';
import EmployeesList from '../features/employees/EmployeesList';

const Employees = () => {
  return (
    <Container>
      <Title>Employees</Title>
      <EmployeesList />
    </Container>
  );
};

export default Employees;
