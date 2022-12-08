import React from 'react';
import styles from './Container.module.scss';
const Container = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Container;
