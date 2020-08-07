import React, { useState } from 'react';

import TransactionsList from '../features/transactions/TransactionsList';
import { Container, Title, Select } from '../components/StyledComponents';

const PettyCash = () => {
  const [currency, setCurrency] = useState('');

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Container>
      <Title>Petty Cash</Title>

      <Select value={currency} onChange={handleCurrency}>
        <option>Select currency</option>
        <option value="USD">USD</option>
        <option value="PEN">PEN</option>
      </Select>

      <TransactionsList currency={currency} />
    </Container>
  );
};

export default PettyCash;
