import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TYear } from '@utils/interfaces';

interface IState {
  year: TYear;
}
const initialState: IState = {
  year: 2022
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<TYear>) => {
      state.year = action.payload;
    }
  }
});

export const { setYear } = appSlice.actions;
