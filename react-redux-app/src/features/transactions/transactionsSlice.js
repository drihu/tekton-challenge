import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { API_ROOT } from '../../utils';

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async ({ currency }) => {
    const response = await fetch(
      `${API_ROOT}/transactions${currency ? `?currency=${currency}` : ''}`
    );
    const data = await response.json();

    if (response.ok) return data;
    return Promise.reject(data);
  }
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    status: 'idle',
    items: [],
    error: null,
  },
  extraReducers: {
    [fetchTransactions.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchTransactions.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      const transactions = action.payload;
      state.items = transactions;
    },
    [fetchTransactions.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default transactionsSlice.reducer;

export { fetchTransactions };
