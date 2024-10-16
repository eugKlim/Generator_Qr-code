import { createSlice } from '@reduxjs/toolkit';

const QrSlice = createSlice({
  name: 'qrSlice',
  initialState: {
    inputValue: '',
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = QrSlice.actions;
export default QrSlice.reducer;
