import React from 'react';
import { TYear } from '@utils/interfaces';
import { getCurrencyAmount } from '@utils/helpers';

export interface IResultCard {
  /**
   * salary income amount
   */
  income: number;
  /**
   * current tax percentage number
   */
  tax: number;
  /**
   * current taxable year
   */
  year: TYear;
  /**
   * NET income amount
   */
  result: number;
}
/**
 * ResultCard component with the calculated result.
 * @param {ISpinner['income']} income salary income amount.
 * @param {ISpinner['tax']} tax current tax percentage number.
 * @param {ISpinner['year']} year current taxable number.
 * @param {ISpinner['result']} result NET income amount.
 * @returns {React.FC<IResultCard>}
 */
const ResultCard: React.FC<IResultCard> = ({ income, tax, year, result }) => {
  return (
    <div className="card" data-testid="result-card">
      <div className="card-body">
        <h5 className="card-title">Result</h5>
        <div className="settings-notification">
          <ul>
            <li>
              <div className="notification-info">
                <p>Tax rate</p>
                <span>Total tax rate for the {year} year</span>
              </div>
              <p>{tax}%</p>
            </li>
            <li>
              <div className="notification-info">
                <p>Total pay</p>
                <span>Your gross salary income</span>
              </div>
              <p>{getCurrencyAmount(income)}$</p>
            </li>
            <li>
              <div className="notification-info">
                <p>Taxes pay</p>
                <span>Tax you pay</span>
              </div>
              <p>{getCurrencyAmount(income - result)}$</p>
            </li>
            <li className="text-success">
              <div className="notification-info">
                <p>Net pay</p>
                <span></span>
              </div>
              <p>{getCurrencyAmount(result)}$</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
