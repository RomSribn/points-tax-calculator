type TYear = 2019 | 2020 | 2021 | 2022;
type TTheme = 'light' | 'dark';

type TTaxBracket = {
  max: number;
  min: number;
  rate: number;
};

interface ITaxesResponse {
  tax_brackets: TTaxBracket[];
}

export type { ITaxesResponse }; // Interfaces
export type { TYear, TTheme }; // Types
