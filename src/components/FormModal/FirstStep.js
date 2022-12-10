import React, { useEffect } from 'react';
import RentLocations from './RentLocations';
import styles from './FirstStep.module.scss';

const validate = ({
  rentFrom,
  rentUntil,
  startHour,
  endHour,
  returnPlace,
  pickupPlace
}) => {
  let isOkay = false;
  if (
    rentFrom &&
    rentUntil &&
    startHour &&
    endHour &&
    returnPlace &&
    pickupPlace
  ) {
    if (new Date(rentFrom) < new Date(rentUntil)) {
      isOkay = true;
    }
  }

  return isOkay;
};

const FirstStep = ({
  orderDetails,
  onChangeHandler,
  setIsNextButtonDisabled
}) => {
  useEffect(() => {
    if (validate(orderDetails)) {
      return setIsNextButtonDisabled(false);
    }
  }, [orderDetails, setIsNextButtonDisabled]);
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.rentDay}>
          <label>Wypożycz od:</label>
          <input
            type="date"
            id="rentFrom"
            name="rentFrom"
            required={true}
            aria-required="true"
            defaultValue={orderDetails.rentFrom}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.endRentDay}>
          <label>Data zwrotu pojazdu:</label>
          <input
            type="date"
            id="rentUntil"
            name="rentUntil"
            min={orderDetails['rentFrom']}
            required={true}
            aria-required="true"
            defaultValue={orderDetails.rentUntil}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.rentHour}>
          <label>Godzina najmu:</label>
          <input
            type="time"
            name="startHour"
            required={true}
            defaultValue={orderDetails.startHour}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.endRentHour}>
          <label>Godzina zwrotu:</label>
          <input
            type="time"
            name="endHour"
            required={true}
            defaultValue={orderDetails.endHour}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.rentPlace}>
          <span>Miejsce najmu:</span>
          <RentLocations
            value={orderDetails.pickupPlace ?? ''}
            name="pickupPlace"
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.endRentPlace}>
          <span>Miejsce zwrotu:</span>
          <RentLocations
            value={orderDetails.returnPlace ?? ''}
            name="returnPlace"
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className={styles.bonusOption}>
        <label>Pakiet dodatkowego ubezpieczenia(10 PLN / doba)</label>
        <input
          name="Insurance"
          type="checkbox"
          title="Pakiet ubezpieczenia dostępny od 5 dni najmu"
        ></input>
      </div>
    </>
  );
};

export default FirstStep;
