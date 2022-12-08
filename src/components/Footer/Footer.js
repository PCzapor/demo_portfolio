import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../pictures/logo.png';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="footer-logo" />
      <span>&copy; Demo by Piotr Czapor.</span>
    </footer>
  );
};

export default Footer;
