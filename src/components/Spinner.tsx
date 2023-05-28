import React from 'react';
import classNames from 'classnames';
import { default as BootstrapSpinner } from 'react-bootstrap/Spinner';

interface ISpinner {
  className?: string;
}

const Spinner: React.FC<ISpinner> = ({ className }) => (
  <div className={classNames('d-flex align-items-center justify-content-center', className)}>
    <BootstrapSpinner animation="border" variant="primary" />
  </div>
);

export default Spinner;
