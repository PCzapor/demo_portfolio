import React from 'react';
import styles from './ThirdStep.module.scss';

const ThirdStep = () => {
  return (
    <div className={styles.container}>
      <span>W razie uwag do rezerwacji prosimy je umieścic tutaj:</span>
      <textarea title="questions" />
    </div>
  );
};

export default ThirdStep;
