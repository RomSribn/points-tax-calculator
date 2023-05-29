import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

export type FormErrorMessageProps = {
  className?: string;
  children: ReactNode;
};

const ErrorMessage: FC<FormErrorMessageProps> = ({ children, className }) => (
  <p className={classNames('font-serif text-sm text-left block text-red-600', className)} data-testid="error-message">
    {children}
  </p>
);

export { ErrorMessage };
