import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TYear, TTaxBracket, ITaxesResponse } from '@utils/interfaces';

interface IState {
  /**
   * current taxable year
   */
  year: TYear;
  /**
   * salary income amount
   */
  income: number;
  /**
   * NET income amount
   */
  result: number | null;
  /**
   * current tax bracket object.
   */
  currentBracket: TTaxBracket | null;
}
const initialState: IState = {
  year: 2022,
  income: 0,
  result: null,
  currentBracket: null
};
/**
 * Main application data.
 */
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<TYear>) => {
      state.year = action.payload;
    },
    setIncome: (state, action: PayloadAction<number>) => {
      state.income = action.payload;
    },
    setResult: (state, action: PayloadAction<ITaxesResponse>) => {
      const taxBrackets = action.payload.tax_brackets;
      if (state.income) {
        const currentBracket =
          taxBrackets.find(({ min, max }) => {
            if (!max && state.income >= min) return true;

            return state.income > min && state.income < max;
          }) || taxBrackets[taxBrackets.length - 1];

        state.currentBracket = currentBracket;
        state.result = state.income * Number(1 - currentBracket.rate);
      }
    }
  }
});

export const { setYear, setIncome, setResult } = appSlice.actions;
