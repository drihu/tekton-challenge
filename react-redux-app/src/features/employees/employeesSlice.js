import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { API_ROOT } from '../../utils';

const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const response = await fetch(`${API_ROOT}/employees`);
    const data = await response.json();

    if (response.ok) return data;
    return Promise.reject(data);
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    status: 'idle',
    items: [],
    error: null,
  },
  extraReducers: {
    [fetchEmployees.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchEmployees.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      const employees = action.payload;
      state.items = employees;
    },
    [fetchEmployees.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default employeesSlice.reducer;

export { fetchEmployees };
