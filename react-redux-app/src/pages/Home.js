import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { Container } from '../components/StyledComponents';
import { LogoIcon } from '../components/Icons';

const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  figure {
    margin-bottom: 30px;
    padding: 30px;
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }

  h1 {
    margin-bottom: 30px;
    font-family: Ubuntu;
    font-size: 2.5rem;
    font-weight: 700;
  }

  h3 {
    margin-bottom: 30px;
    font-family: Hind;
    font-size: 1.75rem;
    font-weight: 300;
  }

  nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  }
`;

const MyLink = styled(Link)`
  width: 100%;
  padding: 15px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const Home = () => {
  return (
    <MyContainer>
      <figure>
      <LogoIcon width="200" />
      </figure>
      <h1>Ricardo Huamani Parian</h1>
      <h3>Challenge with Ruby on Rails, React and Redux</h3>

      <nav>
        <MyLink to="/employees">Employees</MyLink>
        <MyLink to="/petty-cash">Petty Cash</MyLink>
        <MyLink to="/cash-flow">Cash Flow</MyLink>
      </nav>
    </MyContainer>
  );
};

export default Home;
