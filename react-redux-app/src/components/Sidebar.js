import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import {
  LogoIcon,
  HomeIcon,
  EmployeesIcon,
  PettyCashIcon,
  CashFlowIcon,
} from './Icons';

const Wrapper = styled.aside`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.04);
  z-index: 1;
`;

const Header = styled.header`
  width: 100%;
  padding: 30px;
`;

const MyLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 30px;
  color: #334455;

  &.active {
    background: #f5f5f5;
  }

  & svg {
    margin-right: 15px;
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <Header>
        <Link to="/">
          <LogoIcon height="30" color="#333333" />
        </Link>
      </Header>

      <nav>
        <MyLink exact to="/">
          <HomeIcon width="15" color="#ff6464" />
          <span>Home</span>
        </MyLink>

        <MyLink exact to="/employees">
          <EmployeesIcon width="15" color="#ffc080" />
          <span>Employees</span>
        </MyLink>

        <MyLink exact to="/petty-cash">
          <PettyCashIcon width="15" color="#7ae665" />
          <span>Petty Cash</span>
        </MyLink>

        <MyLink exact to="/cash-flow">
          <CashFlowIcon width="15" color="#fedb41" />
          <span>Cash Flow</span>
        </MyLink>
      </nav>
    </Wrapper>
  );
};

export default Sidebar;
