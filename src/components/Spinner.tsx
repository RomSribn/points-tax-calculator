import React from 'react';
import classNames from 'classnames';
import { default as BootstrapSpinner } from 'react-bootstrap/Spinner';

interface ISpinner {
  /**
   * custom class
   */
  className?: string;
}
/**
 * Spinner component
 * @param {ISpinner['className']} className optional.
 * @returns {React.FC<ISpinner>}
 */
const Spinner: React.FC<ISpinner> = ({ className }) => (
  <div
    className={classNames('d-flex align-items-center justify-content-center', className)}
    data-testid="spinner-container">
    <BootstrapSpinner animation="border" variant="primary" />
  </div>
);

export default Spinner;
