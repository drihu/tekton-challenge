import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTransactions } from './transactionsSlice';
import TransactionItem from './TransactionItem';
import { Table } from '../../components/StyledComponents';

const TransactionsList = ({ currency }) => {
  const transactions = useSelector((state) => state.transactions.items);
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
          {transactions
            .filter(
              (transaction) =>
                transaction.group === 'income' ||
                transaction.category === 'other'
            )
            .map((transaction) => (
              <TransactionItem transaction={transaction} key={transaction.id} />
            ))}
        </tbody>
      )}
    </Table>
  );
};

export default TransactionsList;
