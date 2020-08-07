import React from 'react';

const TransactionItem = ({ transaction }) => {
  return (
    <tr>
      <td>
        {transaction.group === 'income' ? (
          transaction.category
        ) : (
          <strong>{transaction.category}</strong>
        )}
      </td>
      <td>{transaction.operation_date}</td>
      <td>{transaction.description}</td>
      <td>
        {transaction.group === 'income' ? '+ ' : '- '}
        {transaction.amount_cents / 100}
      </td>
    </tr>
  );
};

export default TransactionItem;
