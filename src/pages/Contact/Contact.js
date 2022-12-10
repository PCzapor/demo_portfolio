import React from 'react';
import phone from '../../pictures/phone.png';
import styles from './Contact.module.scss';
import IFrame from 'react-iframe';
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
        <div>
          <IFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.4753739091634!2d22.02240395177622!3d50.11482597932946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ce4888abe5f01%3A0xa7e946a83e7a48cc!2sPort%20Lotniczy%20Rzesz%C3%B3w-Jasionka!5e0!3m2!1spl!2spl!4v1670589757733!5m2!1spl!2spl"
            width="600"
            height="450"
            style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></IFrame>
        </div>
      </div>
    </div>
  );
};

export default Contact;
