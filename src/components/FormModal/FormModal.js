import React from 'react';
import styles from './FormModal.module.scss';
import { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import ConfirmationScreen from './ConfirmationScreen';

const PageDisplay = ({ page, selectedCar, setIsNextButtonDisabled }) => {
  const [orderDetails, setOrderDetails] = useState({});
  const onChangeHandler = event => {
    const { value, name } = event.target;
    return setOrderDetails(prev => {
      return { ...prev, [name]: value };
    });
  };
  switch (page) {
    case 0:
      return (
        <FirstStep
          car={selectedCar}
          orderDetails={orderDetails}
          onChangeHandler={onChangeHandler}
          setIsNextButtonDisabled={setIsNextButtonDisabled}
        />
      );
    case 1:
      return (
        <SecondStep
          orderDetails={orderDetails}
          car={selectedCar}
          onChangeHandler={onChangeHandler}
          setIsNextButtonDisabled={setIsNextButtonDisabled}
        />
      );
    case 2:
      return (
        <ThirdStep
          onChangeHandler={onChangeHandler}
          orderDetails={orderDetails}
          car={selectedCar}
          setIsNextButtonDisabled={setIsNextButtonDisabled}
        />
      );
    default:
      return <ConfirmationScreen orderDetails={orderDetails} />;
  }
};

const NextButton = ({ page, isNextButtonDisabled, nextHandler }) => {
  let text;
  switch (page) {
    case 2:
      text = 'Rezerwuj';
      break;
    case 3:
      text = 'Zakończ';
      break;
    default:
      text = 'Dalej';
      console.log(isNextButtonDisabled);
      break;
  }
  return (
    <button disabled={isNextButtonDisabled} onClick={nextHandler}>
      {text}
    </button>
  );
};

const FormModal = ({ selectedCar, rezerwujCloseHandler }) => {
  const [page, setPage] = useState(0);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const formTitles = [
    'Dane rezerwacji',
    'Dane osobowe',
    'Rezerwacja',
    'Potwierdzenie rezerwacji'
  ];

  function nextHandler() {
    if (page < formTitles.length - 1) setPage(currpage => currpage + 1);
    else rezerwujCloseHandler();
  }
  function backHandler() {
    setPage(currpage => currpage - 1);
  }

  return (
    <div className={styles.formModal}>
      <div className={styles.progressbar}></div>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1>{formTitles[page]}</h1>
        </div>
        <div className={styles.body}>
          <PageDisplay
            page={page}
            selectedCar={selectedCar}
            setIsNextButtonDisabled={setIsNextButtonDisabled}
          />
        </div>
        <div className={styles.footer}>
          <button disabled={page === 0} onClick={backHandler}>
            Wróć
          </button>
          <NextButton
            page={page}
            isNextButtonDisabled={isNextButtonDisabled}
            nextHandler={nextHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default FormModal;
