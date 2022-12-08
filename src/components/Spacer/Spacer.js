import React from 'react';
import styles from './Spacer.module.scss';
import { FaInfo } from 'react-icons/fa';

const Spacer = () => {
  return (
    <div className={styles.container}>
      <span>Oferta na wynajem samochodów.</span>
      <div className={styles.smallContainer}>
        <FaInfo
          style={{ color: 'rgb(8, 112, 8)', width: '20px', height: '20px' }}
        />
        <span>
          Zdjęcia nie zawszę odzwierciedlają faktyczny stan samochodu.
        </span>
      </div>
    </div>
  );
};

export default Spacer;
