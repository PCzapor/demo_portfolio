import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BurgerHeader.module.scss';

const BurgerHeader = ({ PAGES, open }) => {
  return (
    <nav className={open ? styles.naviOpen : styles.naviClosed}>
      <ul>
        {PAGES.map((page, idx) => {
          return (
            <li key={idx}>
              <Link to={page.path}>{page.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BurgerHeader;
