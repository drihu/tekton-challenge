import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTransactions } from './transactionsSlice';
import TransactionItem from './TransactionItem';
import { Table } from '../../components/StyledComponents';

const TransactionsList = ({ currency, date }) => {
  const transactions = useSelector((state) =>
    state.transactions.items.filter(
      (transaction) => transaction.operation_date === date
    )
  );
  const [incomes, setIncomes] = useState(null);
  const [expenses, setExpenses] = useState(null);
  const status = useSelector((state) => state.transactions.status);
  const error = useSelector((state) => state.transactions.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTransactions({ currency }));
    }
  }, [dispatch, status, currency]);

  useEffect(() => {
    dispatch(fetchTransactions({ currency }));
  }, [dispatch, currency]);

  useEffect(() => {
    setIncomes(
      transactions.filter((transaction) => transaction.group === 'income')
    );
    setExpenses(
      transactions.filter((transaction) => transaction.category === 'other')
    );
  }, [date]);

  if (status === 'pending') {
    return <h3>Loading transactions ...</h3>;
  }

  if (error) console.log(error);

  return (
    <Table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>

      {transactions.length > 0 && (
        <tbody>
          {incomes.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}

          {expenses.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}

          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td />
            <td />
            <td>
              {(incomes.reduce((acc, tr) => acc + tr.amount_cents, 0) -
                expenses.reduce((acc, tr) => acc + tr.amount_cents, 0)) /
                100}
            </td>
          </tr>
        </tbody>
      )}
    </Table>
  );
};

export default TransactionsList;
