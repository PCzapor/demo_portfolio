import React from 'react';

const RentLocations = ({ onChange, name, value }) => {
  return (
    <select
      onChange={onChange}
      name={name}
      required
      aria-required="true"
      value={value}
    >
      <option></option>
      <option value="Jasionka Lotnisko">Jasionka Lotnisko</option>
      <option value="Rzeszów Centrum">Rzeszów Centrum</option>
      <option value="Rzeszów ul.3maja 55">Rzeszów ul.3maja 55</option>
      <option value="Bogóchwała 311">Bogóchwała 311</option>
    </select>
  );
};

export default RentLocations;
