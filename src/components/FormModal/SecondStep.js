import React from 'react';

const SecondStep = ({ orderDetails, car, onChangeHandler }) => {
  const rentTime =
    (new Date(orderDetails.rentUntil) - new Date(orderDetails.rentFrom)) /
    1000 /
    3600 /
    24;

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
      <div className="summary">
        <div>
          Chcesz wypożyczyć: {car.title} na okres {rentTime} dni od{' '}
          {orderDetails.rentFrom}, {orderDetails.startHour} -
          {orderDetails.pickupPlace} do {orderDetails.rentUntil},{' '}
          {orderDetails.endHour} - {orderDetails.returnPlace} Cena:{' '}
          {pricePerDay() * rentTime} PLN
        </div>
        <span></span>
        <span>
          Administratorem Państwa danych osobowych jest Ekarent S.C. z siedzibą
          w 81-415 Gdynia, ul. Batalionów Chłopskich 25. Informujemy o
          możliwości wycofania w dowolnym momencie udzielonej zgody. Jeżeli
          akceptujesz powyższe warunki uzupełnij dane osobowe
        </span>
      </div>
      <input type="text" name="company_name" placeholder="Nazwa firmy" />
      <input
        type="text"
        name="user_name"
        placeholder="Twoje imię i nazwisko*"
        required={true}
        aria-required="true"
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="user_adress"
        placeholder="Adres*"
        required={true}
        aria-required="true"
      ></input>
      <input
        type="text"
        name="user_city"
        placeholder="Miasto*"
        required={true}
        aria-required="true"
      ></input>
      <input
        type="text"
        name="user_post_code"
        placeholder="Kod pocztowy*"
        required={true}
        aria-required="true"
      ></input>
      <input
        type="text"
        name="user_country"
        placeholder="Kraj*"
        required={true}
        aria-required="true"
      ></input>
      <input
        type="text"
        name="user_email"
        placeholder="e-mail*"
        required={true}
        aria-required="true"
        onChange={onChangeHandler}
      ></input>
      <input
        type="text"
        name="user_phone_number"
        placeholder="Twój numer telefonu*"
        required={true}
        aria-required="true"
      ></input>
    </div>
  );
};

export default SecondStep;
