import React from 'react';
import styled from '@emotion/styled';

import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  @media (min-width: 960px) {
    grid-template-columns: 300px 1fr;
  }
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: #f2f3f5;
  overflow: auto;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
