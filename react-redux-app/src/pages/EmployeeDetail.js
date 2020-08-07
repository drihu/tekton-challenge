import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { Container, Title } from '../components/StyledComponents';

const EmployeeCard = styled.article`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;

  img {
    margin-right: 30px;
  }

  section {
    width: 100%;

    h4 {
      margin-bottom: 15px;
      font-family: Ubuntu;
      font-size: 1.25rem;
    }

    p {
      margin-bottom: 10px;
      color: #757575;
      font-family: Hind;
      font-weight: 300;

      strong {
        font-weight: 500;
      }
    }
  }
`;

const Button = styled.button`
  padding: 10px 25px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-family: Ubuntu;
  font-size: 1rem;
  font-weight: 700;
`;

const EmployeeDetail = () => {
  const { employeeId } = useParams();
  const employee = useSelector((state) =>
    state.employees.items.find((employee) => employee.id === Number(employeeId))
  );
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  return (
    <Container>
      <Title>
        {employee.first_name} {employee.last_name}
      </Title>

      <EmployeeCard>
        <img src={employee.photo_url} alt={employee.first_name} />
        <section>
          <h4>
            {employee.first_name} {employee.last_name}
          </h4>
          <p>
            <strong>Position:</strong> {employee.position}
          </p>
          <p>
            <strong>Email:</strong> {employee.email}
          </p>
          <p>
            <strong>Phone number:</strong> {employee.phone_number}
          </p>
          <p>
            <strong>Gender:</strong> {employee.gender}
          </p>
          <p>
            <strong>Birthday:</strong> {employee.birthday}
          </p>
        </section>
      </EmployeeCard>

      <Button onClick={handleGoBack}>Go Back</Button>
    </Container>
  );
};

export default EmployeeDetail;
