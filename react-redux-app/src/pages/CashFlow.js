import React, { useState } from 'react';

import TransactionsCashFlow from '../features/transactions/TransactionsCashFlow';
import { Container, Title, Select } from '../components/StyledComponents';

const CashFlow = () => {
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

      <TransactionsCashFlow currency={currency} />
    </Container>
  );
};

export default CashFlow;
