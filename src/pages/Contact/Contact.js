import React from 'react';
import phone from '../../pictures/phone.png';
import styles from './Contact.module.scss';
const Contact = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.photo}
        src={phone}
        title="contact"
        alt="Potrzebujesz samochodu, zadzwoń do nas!"
      />
      <div className={styles.innerContainer}>
        <span>
          Godziny otwarcia biura 8-16 (Wynajem w godzinach nocnych za dodatkowa
          opłatą)
        </span>
        <span>ul.Lotniskowa 102b, Rzeszów</span>
        <span>nr 1234567890</span>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
