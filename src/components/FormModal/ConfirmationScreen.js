import React from 'react';

const ConfirmationScreen = ({ orderDetails }) => {
  return (
    <div>
      Twoja rezerwacja {orderDetails.user_name} została dokonana. Potwierdzenie
      rezerwacji przyjdzie na adres {orderDetails.user_email}.
    </div>
  );
};

export default ConfirmationScreen;
