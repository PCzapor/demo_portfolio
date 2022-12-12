import React from 'react';

const ConfirmationScreen = ({ orderDetails }) => {
  return (
    <div>
      Twoja rezerwacja <strong>{orderDetails.userName}</strong> została
      dokonana. Potwierdzenie rezerwacji przyjdzie na adres{' '}
      <strong>{orderDetails.userEmail}</strong>.
    </div>
  );
};

export default ConfirmationScreen;
