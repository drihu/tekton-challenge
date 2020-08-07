import React, { useState } from 'react';

import TransactionsList from '../features/transactions/TransactionsList';
import {
  Container,
  Title,
  Select,
  Input,
} from '../components/StyledComponents';
import { getToday } from '../utils';

const PettyCash = () => {
  const [currency, setCurrency] = useState('');
  const [date, setDate] = useState(getToday());

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <Container>
      <Title>Petty Cash</Title>

      <Select value={currency} onChange={handleCurrency}>
        <option>Select currency</option>
        <option value="USD">USD</option>
        <option value="PEN">PEN</option>
      </Select>

      <Input type="date" value={date} onChange={handleDate} />

      <TransactionsList currency={currency} date={date} />
    </Container>
  );
};

export default PettyCash;
