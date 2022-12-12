import React from 'react';
import { useEffect } from 'react';
import styles from './SecondStep.module.scss';

const validate = ({ userName, userEmail, userNumber }) => {
  let isOkay = false;
  // console.log('isokayFAlse', isOkay);

  if (userName && userEmail && userNumber && userNumber.length > 8)
    isOkay = true;

  console.log('isokay', isOkay);
  console.log('iusername', userName);
  console.log('iuserem', userEmail);
  console.log('iusernum', userNumber);
  console.log(typeof userNumber, typeof numberLenght);
  return isOkay;
};

const SecondStep = ({
  orderDetails,
  car,
  onChangeHandler,
  setIsNextButtonDisabled
}) => {
  const rentTime =
    (new Date(orderDetails.rentUntil) - new Date(orderDetails.rentFrom)) /
    1000 /
    3600 /
    24;
  // console.log('1', { isNextButtonDisabled });
  useEffect(() => {
    if (validate(orderDetails)) {
      return setIsNextButtonDisabled(false);
    } else {
      return setIsNextButtonDisabled(true);
    }
  }, [orderDetails, setIsNextButtonDisabled]);

  // console.log(isNextButtonDisabled);
  const pricePerDay = () => {
    let finalChange = car.priceChange;
    if (rentTime < 3) {
      finalChange = finalChange * 3;
    }
    if (rentTime < 4 && rentTime >= 3) {
      finalChange = finalChange * 2;
    }
    if (rentTime >= 4 && rentTime <= 14) {
      finalChange = finalChange * 1;
    }
    return finalChange + car.minPrice;
  };
  return (
    <div>
      <div>
        <div className={styles.summary}>
          Chcesz wypożyczyć: <strong>{car.title}</strong> na okres{' '}
          <strong>{rentTime} dni</strong> <br />
          od <strong>{orderDetails.rentFrom}</strong>,
          <strong> {orderDetails.startHour}</strong> do
          <strong>
            {' '}
            {orderDetails.rentUntil}, {orderDetails.endHour}
          </strong>{' '}
          <br />
          Odbiór z {orderDetails.pickupPlace} a oddać na{' '}
          {orderDetails.returnPlace} <br />
          Cena: <strong>{pricePerDay() * rentTime}</strong> PLN
        </div>
        <div className={styles.personalInfo}>
          <span>
            Administratorem Państwa danych osobowych jest Firma XYZ. z siedzibą
            w ________, ul. _____________. Informujemy o możliwości wycofania w
            dowolnym momencie udzielonej zgody. Jeżeli akceptujesz powyższe
            warunki uzupełnij dane osobowe
          </span>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" name="company_name" placeholder="Nazwa firmy" />
        <input
          type="text"
          name="userName"
          placeholder="Twoje imię i nazwisko*"
          required
          aria-required="true"
          onChange={onChangeHandler}
        />
        <input type="text" name="user_adress" placeholder="Adres"></input>
        <input type="text" name="user_city" placeholder="Miasto"></input>
        <input
          type="text"
          name="user_post_code"
          placeholder="Kod pocztowy"
        ></input>
        <input type="text" name="user_country" placeholder="Kraj"></input>
        <input
          type="email"
          name="userEmail"
          placeholder="e-mail*"
          required
          aria-required="true"
          onChange={onChangeHandler}
        ></input>
        <input
          type="tel"
          name="userNumber"
          minlenght="9"
          placeholder="Twój numer telefonu*"
          required
          aria-required="true"
          onChange={onChangeHandler}
        ></input>
      </div>
    </div>
  );
};

export default SecondStep;
