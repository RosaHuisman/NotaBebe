import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

import logo from 'src/images/NotaBebe_logo.png';

import './styles.scss';

const Header = () => (
  // <>
  //   {!isLogged ? (
  //     <header className="header">
  //       <h1 className="header-title">Lien parent-crèche</h1>
  //       <Link to="/">
  //         <img src={logo} className="header-logo" alt="Logo NotaBebe" />
  //       </Link>
  //     </header>
  //   ) : (
  <header className="header">
    <Dropdown
      icon="content"
      floating
      button
      className="icon iconBurger"
    >
      <Dropdown.Menu>
        <Dropdown.Item>MENU1</Dropdown.Item>
        <Dropdown.Item>MENU2</Dropdown.Item>
        <Dropdown.Item>MENU2</Dropdown.Item>
        <Dropdown.Item>Se déconnecter</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <h1 className="header-title">Lien parent-crèche</h1>
    <Link to="/">
      <img src={logo} className="header-logo" alt="Logo NotaBebe" />
    </Link>
  </header>

  //   )}
  // </>
);

export default Header;
