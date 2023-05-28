import React, { ReactNode } from 'react';
import { ThemeConsumer } from '@context/ThemeContext';
import classNames from 'classnames';

import Header from './Header';

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
