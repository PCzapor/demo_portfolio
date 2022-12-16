import React, { useState } from 'react';
import styles from './Burger.module.scss';
import BurgerHeader from './BurgerHeader';
const classes = ['burgerOpened', 'burgerClosed'];
const burgerHandler = open => {
  if ((open = false)) {
    return classes[1];
  } else {
    return classes[0];
  }
};

const Burger = ({ PAGES }) => {
  const [open, setOpen] = useState(false);
  console.log(burgerHandler(open));
  return (
    <div
      className={open ? styles.burgerOpened : styles.burgerClosed}
      open={open}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <BurgerHeader PAGES={PAGES} open={open} />
    </div>
  );
};

export default Burger;
