import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../features/employees/employeesSlice';
import transactionsReducer from '../features/transactions/transactionsSlice';

export default configureStore({
  reducer: {
    employees: employeesReducer,
    transactions: transactionsReducer,
  },
});
