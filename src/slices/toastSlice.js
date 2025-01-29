import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showToast: false,
  error: '',
  success: '',
  info: ''
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.showToast = true;
      state.error = action.payload.error || '';
      state.success = action.payload.success || '';
      state.info = action.payload.info || '';
    },
    hideToast: (state) => {
      state.showToast = false;
      state.error = '';
      state.success = '';
      state.info = '';
    }
  }
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;