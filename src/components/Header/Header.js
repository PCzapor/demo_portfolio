import React from 'react';
import styles from './Header.module.scss';
import logo from '../../pictures/logo.png';
import Burger from './Burger';
import { Link } from 'react-router-dom';
const PAGES = [
  { title: 'Home', path: '/' },
  { title: 'Rent a car', path: '/rent' },
  { title: 'Contact us', path: '/contact' }
];
const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <nav>
        <div className={styles.fullScreenNavi}>
          <ul>
            {PAGES.map((page, idx) => {
              return (
                <li key={idx}>
                  <Link to={page.path}>{page.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Burger PAGES={PAGES} />
      </nav>
    </header>
  );
};
export default Header;
