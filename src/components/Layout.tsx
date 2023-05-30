import React, { ReactNode } from 'react';
import { ThemeConsumer } from '@context/ThemeContext';
import classNames from 'classnames';

import Header from './Header';
/**
 * Layout component.
 * @param {ReactNode} children
 * @returns {React.FC<{ children: ReactNode }>} React FC with children props.
 */
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeConsumer>
    {({ theme }) => (
      <div className={classNames('layout', theme)} data-testid="layout">
        <Header />
        {children}
      </div>
    )}
  </ThemeConsumer>
);

export default Layout;
