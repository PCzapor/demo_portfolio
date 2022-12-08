import React, { useState, onClick } from 'react';
import styles from './CarCard.module.scss';
import {
  FaGasPump,
  FaSnowman,
  FaUsb,
  FaSatelliteDish,
  FaVolumeUp
} from 'react-icons/fa';
import Backdrop from '../Backdrop/Backdrop';
import FormModal from '../FormModal/FormModal';

const config = ['1-2 dni', '3 dni', '4-14 dni', '>14 dni'];
const Prices = ({ minPrice, priceChange }) => {
  return (
    <ul className={styles.specificPrices}>
      {config.map((item, index) => {
        const maxPrice = minPrice + config.length * 10;
        const priceAdjustment = priceChange + index * 10;
        return (
          <li key={index}>
            {item}
            <span className={styles.spanHelp}>
              {maxPrice - priceAdjustment}
              <p>PLN</p>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

const Icon = ({ type }) => {
  switch (type) {
    case 'gasoline':
      return (
        <FaGasPump
          title="benzyna"
          style={{ color: 'green', width: '45px', height: '45px' }}
        />
      );
    case 'diesel':
      return (
        <FaGasPump
          title="diesel"
          style={{ color: 'black', width: '45px', height: '45px' }}
        />
      );
    case 'aircon':
      return (
        <FaSnowman
          title="klimatyzacja"
          style={{ color: 'white', width: '45px', height: '45px' }}
        />
      );
    case 'usb':
      return (
        <FaUsb
          title="USB"
          style={{ color: 'red', width: '45px', height: '45px' }}
        />
      );
    case 'gps':
      return (
        <FaSatelliteDish
          title="GPS"
          style={{ color: 'red', width: '45px', height: '45px' }}
        />
      );
    case 'aux':
      return (
        <FaVolumeUp
          title="AUX"
          style={{ color: 'red', width: '45px', height: '45px' }}
        />
      );
    default:
      return null;
  }
};

const CarCard = props => {
  const {
    title,
    model,
    engine,
    type,
    doorsSeats,
    minPrice,
    priceChange,
    image,
    options
  } = props;
  const [backdropIsOpen, setIsBackdropOpen] = useState(false);

  function rezerwujHandler() {
    setIsBackdropOpen(true);
  }
  function rezerwujCloseHandler() {
    setIsBackdropOpen(false);
  }
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="carpicture" />
        <span className={styles.priceTag}>{minPrice} PLN</span>
        <div className={styles.priceTagStyle}></div>
        <div className={styles.carFeatures}>
          {options.map(function (item, index) {
            return <Icon type={item} key={index} />;
          })}
        </div>
      </div>
      <div className={styles.details}>
        <h3>{title.slice(0, 16)} </h3>
        <span>Model: {model}</span>
        <span>Silnik: {engine}</span>
        <span>Nadwozie: {type}</span>
        <span>Drzwi/siedzienia: {doorsSeats}</span>
      </div>

      <div className={styles.prices}>
        <h4>ceny za dzien</h4>
        <Prices minPrice={minPrice} priceChange={priceChange} />
        <div className={styles.info}>
          <span>Dłuższe terminy - indywidualnie</span>
        </div>
        <div className={styles.linkplacement}>
          <button onClick={rezerwujHandler}>Rezerwuj</button>
          {backdropIsOpen ? (
            <>
              <Backdrop onClick={rezerwujCloseHandler} />
              <FormModal
                selectedCar={props}
                rezerwujCloseHandler={rezerwujCloseHandler}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
