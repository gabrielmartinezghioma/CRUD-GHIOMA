import { createSlice } from '@reduxjs/toolkit';

function getInitialMode() {
  const storedMode = localStorage.getItem('theme');
  if (storedMode != null) {
    return storedMode === 'true';
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches;
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState:getInitialMode(),
    reducers: {
      setMode: (state, action) => {
        return action.payload;
      },
    },
})

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
