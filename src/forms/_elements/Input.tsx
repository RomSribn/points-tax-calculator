import React, { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

export type InputSize = 'medium' | 'large';
export type InputType = 'text' | 'password' | 'email';

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  className?: string;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Input: any = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, label, type = 'text', className = '', placeholder, ...props }, ref) => {
    return (
      <div className="form-group">
        <input
          id={id}
          ref={ref}
          name={name}
          type={type}
          aria-label={label}
          placeholder={placeholder}
          className={classNames(['form-control', className])}
          {...props}
        />
      </div>
    );
  }
);

export { Input };
