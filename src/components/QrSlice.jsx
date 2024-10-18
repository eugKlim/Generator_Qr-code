import { createSlice } from '@reduxjs/toolkit';

const QrSlice = createSlice({
  name: 'qrSlice',
  initialState: {
    inputValue: '',
    qrHistoryStorage: [],
    qrHistoryCounter: 0,
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },

    getQrHistoryStorage: (state) => {
      const getQrStorage = localStorage.getItem('qrStorage');
      const haveQrStorage = getQrStorage ? JSON.parse(getQrStorage) : [];
      const filterStorage = haveQrStorage.filter(
        (item) => !state.qrHistoryStorage.includes(item)
      );
      state.qrHistoryStorage.push(...filterStorage);
      state.qrHistoryCounter = haveQrStorage.length;
    },

    setNewQrInStorage: (state, action) => {
      const getQrStorage = localStorage.getItem('qrStorage');
      const haveQrStorage = getQrStorage ? JSON.parse(getQrStorage) : [];

      if (haveQrStorage.includes(state.inputValue)) return;
      const updateHistoryStorage = [...haveQrStorage, action.payload];
      localStorage.setItem('qrStorage', JSON.stringify(updateHistoryStorage));
      state.qrHistoryCounter = haveQrStorage.length + 1;
    },
  },
});

export const { setInputValue, getQrHistoryStorage, setNewQrInStorage } =
  QrSlice.actions;
export default QrSlice.reducer;
