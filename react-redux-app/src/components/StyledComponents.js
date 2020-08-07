import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 30px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-family: Ubuntu;
  font-size: 2rem;
  font-weight: 700;
`;

export const Table = styled.table`
  width: 100%;
  background: #ffffff;
  border-collapse: collapse;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  thead {
    th {
      padding: 20px;
      background: #ffffff;
      border-bottom: 1px solid #dddddd;
      font-family: Hind;
      font-weight: 500;
      line-height: 1;
    }
  }

  tbody {
    tr {
      background: #ffffff;
      border-top: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
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

export const Select = styled.select`
  width: 40%;
  max-width: 300px;
  margin-right: 30px;
  margin-bottom: 15px;
  padding: 8px 15px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 40%;
  max-width: 300px;
  padding: 8px 15px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;
