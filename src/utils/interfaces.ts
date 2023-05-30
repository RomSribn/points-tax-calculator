type TYear = 2019 | 2020 | 2021 | 2022;
type TTheme = 'light' | 'dark';

type TTaxBracket = {
  /**
   * max salary amount
   */
  max: number;
  /**
   * min salary amount
   */
  min: number;
  /**
   * tax rate percentage
   */
  rate: number;
};

interface ITaxesResponse {
  /**
   * taxes array with salary intervals and tax rates
   */
  tax_brackets: TTaxBracket[];
}

export type { ITaxesResponse }; // Interfaces
export type { TYear, TTheme, TTaxBracket }; // Types
