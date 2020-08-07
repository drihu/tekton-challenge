import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTransactions } from './transactionsSlice';
import { Table } from '../../components/StyledComponents';
import { MONTHS } from '../../utils';

const reduceByCategories = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    const month = transaction.operation_date.slice(5, 7);
    const category = transaction.category;

    if (!acc[category]) acc[category] = {};
    if (!acc[category][month]) acc[category][month] = 0;

    acc[category][month] += transaction.amount_cents;
    return acc;
  }, {});
};

const TransactionsCashFlow = ({ currency }) => {
  const transactions = useSelector((state) => state.transactions.items);
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
      reduceByCategories(
        transactions.filter((transaction) => transaction.group === 'income')
      )
    );
    setExpenses(
      reduceByCategories(
        transactions.filter((transaction) => transaction.group === 'expense')
      )
    );
  }, [transactions]);

  if (status === 'pending') {
    return <h3>Loading transactions ...</h3>;
  }

  if (error) console.log(error);

  return (
    <Table>
      <thead>
        <tr>
          <th>Fiscal Year</th>
          {incomes &&
            (window.t = transactions) &&
            incomes.invoice &&
            Object.keys(incomes.invoice).map((month, idx) => (
              <th key={idx}>{MONTHS[month]}</th>
            ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <strong>Incomes</strong>
          </td>
        </tr>

        <tr>
          <td>invoice</td>
          {incomes &&
            incomes.invoice &&
            Object.values(incomes.invoice).map((amount_cents, idx) => (
              <td key={idx}>{amount_cents / 100}</td>
            ))}
        </tr>

        <tr>
          <td>
            <strong>Expenses</strong>
          </td>
        </tr>

        {expenses &&
          Object.keys(expenses).map((category, idx) => (
            <tr key={idx}>
              <td>{category}</td>
              {Object.values(expenses[category]).map((amount_cents, idx) => (
                <td key={idx}>{amount_cents / 100}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TransactionsCashFlow;
