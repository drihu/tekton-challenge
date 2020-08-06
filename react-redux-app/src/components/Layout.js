import React from 'react';
import styled from '@emotion/styled';

import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  min-height: 100%;
  background: #f2f3f5;
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
