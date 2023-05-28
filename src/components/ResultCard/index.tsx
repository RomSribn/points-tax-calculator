import React from 'react';
import { TYear } from '@utils/interfaces';
import { getCurrencyAmount } from '@utils/helpers';

export interface IResultCard {
  income: number;
  tax: number;
  year: TYear;
  result: number;
}

const ResultCard: React.FC<IResultCard> = ({ income, tax, year, result }) => {
  return (
    <div className="card">
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
