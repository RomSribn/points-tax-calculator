import React from 'react';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';
import { ThemeConsumer } from '@context/ThemeContext';

const Header: React.FC = () => {
  return (
    <>
      <header className="light-bb">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ml-auto">
              <Dropdown className="header-custom-icon">
                <ThemeConsumer>
                  {({ theme, updateTheme }) => (
                    <Button variant="default" onClick={updateTheme} data-testid="darkTheme">
                      {theme === 'light' ? (
                        <img data-testid="moon-icon" src="/img/icon/moon.svg" />
                      ) : (
                        <img data-testid="sunny-icon" src="/img/icon/sunny.svg" />
                      )}
                    </Button>
                  )}
                </ThemeConsumer>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
