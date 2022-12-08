import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import styles from './CarList.module.scss';
import CarCard from '../CarCard/CarCard';
import bmwM5 from '../../pictures/bmwM5.png';
import bmwM3 from '../../pictures/BmwM3.png';
import RenaultTwingo from '../../pictures/RenaultTwingo.png';
import SuzukiSwift from '../../pictures/SuzukiSwift.png';
import FordFocus from '../../pictures/FordFocus.png';
import FordFocusKombi from '../../pictures/FordFocusKombi.png';

import CITROENC4Cactus from '../../pictures/CitroenC4.png';
import RenaultMegane from '../../pictures/RenaultMegane.png';
import HyundaiI30II from '../../pictures/Hyundaii30II.png';
import ToyotaAuris from '../../pictures/ToyotaAuris.png';
import DaciaLodgy from '../../pictures/DaciaLodgy.png';
import CitroenGrand from '../../pictures/CitroenGrand.png';

const CAR_LIST = [
  {
    title: 'BMW M5',
    model: 'M5',
    engine: '5.0 v10 benzyna',
    type: 'sedan',
    doorsSeats: '5/5',
    minPrice: 80,
    priceChange: 10,
    image: bmwM5,
    options: ['gasoline', 'aircon', 'usb']
  },
  {
    title: 'BMW M3',
    model: 'M3',
    engine: '3.0 v6 benzyna',
    type: 'sedan',
    doorsSeats: '3/3',
    minPrice: 90,
    priceChange: 10,
    image: bmwM3,
    options: ['gasoline', 'aircon', 'usb']
  },
  {
    title: 'Renault Twingo',
    model: 'Twingo',
    engine: '1.0 benzyna',
    type: 'hatchback',
    doorsSeats: '5/5',
    minPrice: 120,
    priceChange: 10,
    image: RenaultTwingo,
    options: ['gasoline', 'aircon', 'usb']
  },
  {
    title: 'Suzuki Swift',
    model: 'Suzuki Swift',
    engine: '1.2 benzyna',
    type: 'hatchback',
    doorsSeats: '5/5',
    minPrice: 110,
    priceChange: 10,
    image: SuzukiSwift,
    options: ['gasoline', 'aircon', 'usb']
  },
  {
    title: 'Ford Focus',
    model: 'Ford Focus',
    engine: '1.5 diesel',
    type: 'hatchback',
    doorsSeats: '5/5',
    minPrice: 120,
    priceChange: 10,
    image: FordFocus,
    options: ['diesel', 'aircon', 'usb']
  },
  {
    title: 'CITROEN C4 Cactus',
    model: 'CITROEN C4',
    engine: '1.2 benzyna',
    type: 'crossover',
    doorsSeats: '5/5',
    minPrice: 120,
    priceChange: 10,
    image: CITROENC4Cactus,
    options: ['gasoline', 'aircon', 'usb']
  },
  {
    title: 'FORD Focus',
    model: 'FORD Focus',
    engine: '1.6 diesel',
    type: 'kombi',
    doorsSeats: '5/5',
    minPrice: 110,
    priceChange: 10,
    image: FordFocusKombi,
    options: ['diesel', 'aircon', 'usb']
  },
  {
    title: 'Renault megane IV',
    model: 'RENAULT Megane',
    engine: '1.6 benzyna',
    type: 'sedan',
    doorsSeats: '5/5',
    minPrice: 120,
    priceChange: 10,
    image: RenaultMegane,
    options: ['gasoline', 'aircon', 'usb', 'auxs']
  },
  {
    title: 'Hyundai i30 II',
    model: 'HYUNDAI i30 II',
    engine: '1.4 diesel',
    type: 'kombi',
    doorsSeats: '5/5',
    minPrice: 110,
    priceChange: 10,
    image: HyundaiI30II,
    options: ['diesel', 'aircon', 'usb', 'aux']
  },
  {
    title: 'Toyota Auris',
    model: 'Toyota Auris',
    engine: '1.3 benzyna',
    type: 'hatchback',
    doorsSeats: '5/5',
    minPrice: 120,
    priceChange: 10,
    image: ToyotaAuris,
    options: ['gasoline', 'aircon', 'usb']
  },
  {
    title: 'Dacia Lodgy',
    model: 'DACIA Lodgy',
    engine: '1.6 benzyna',
    type: 'van',
    doorsSeats: '5/7',
    minPrice: 130,
    priceChange: 10,
    image: DaciaLodgy,
    options: ['gasoline', 'aircon', 'usb']
  },
  {
    title: 'Citroen GRAND C4 Picasso',
    model: 'CITROEN Picasso',
    engine: '1.6 diesel',
    type: 'van',
    doorsSeats: '5/7',
    minPrice: 140,
    priceChange: 10,
    image: CitroenGrand,
    options: ['diesel', 'aircon', 'usb', 'gps', 'aux']
  }
];
const AVAILABLE_OPTIONS = ['gasoline', 'diesel', 'aircon', 'usb', 'gps', 'aux'];
const limitPerPage = 5;

const CarList = () => {
  const [carList, setCarList] = useState(CAR_LIST);
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pagesCount, setPagesCount] = useState(
    Math.ceil(CAR_LIST.length / limitPerPage)
  );

  const filterChangeHandler = event => {
    // funkcja obslugujaca filterCHange, zmienia sie gdy ktora wartosc z nawiasu [] ulegnie zmienie.
    if (event.target.checked) {
      //onChange wskazuje gdzie even ma patrzec
      return setOptionsSelected(prev => {
        //prev to poprzedni state domysle jest jako pierwszy w funkcji
        return [...prev, event.target.value]; // spread operator  na poprzedni state, i co zostalo klikniete
      });
    } else {
      return setOptionsSelected(prev => {
        return prev.filter(el => el !== event.target.value); // jak nie jest checked to z preva filtrujemy elementy rozne od checked
      });
    }
  };

  useEffect(() => {
    let startIndex = 0;
    const end = limitPerPage * activePage;
    if (activePage !== 1) {
      startIndex = limitPerPage * activePage - limitPerPage;
    }
    if (!optionsSelected.length) {
      // jjak puste
      return setCarList(prev => {
        //odpala funkcje w srodku tworzy zmienna, tworzy enda
        setPagesCount(Math.ceil(CAR_LIST.length / limitPerPage));
        return CAR_LIST.slice(startIndex, end); // slice mowisz startowy index i koncowy
      });
    } else {
      setCarList(prev => {
        const carListCopy = CAR_LIST.filter(car => {
          //car nazywa caly jeden obiek ktory wyciaga filtrem . filter idzie po kazdym elemecie i sprawdza czy jest true czy nie
          let optionsCount = 0;
          for (const opt of car.options) {
            //wchodze do srodka obiektu i ide przez wszystkie opcje
            if (optionsSelected.includes(opt)) optionsCount += 1; //jesli opcje zawieraja w sobie opcie to dodaj 1
          }
          return optionsCount === optionsSelected.length; // z dodanych checkboxow do state['gasoline','usb'] sprawdza czy dlugosc tego jest rowna ilosci wybranych opji i porownoje
        });

        setPagesCount(Math.ceil(carListCopy.length / limitPerPage));
        return carListCopy.slice(startIndex, end);
      });
    }
  }, [optionsSelected, activePage]); //jak sie cos z tego zmieni to sie odswieza effect,,,,, filter,findindex,find,map OPERACJE NA ARRAYACH
  return (
    <>
      <div className={styles.optionsContainer}>
        {AVAILABLE_OPTIONS.map((option, idx) => {
          return (
            <label className={styles.container} key={idx}>
              {option}
              <input
                type="checkbox"
                value={option}
                onChange={filterChangeHandler}
              />
              <span className={styles.checkmark} />
            </label>
          );
        })}
      </div>
      {carList.map((car, index) => {
        //carList array obiektow z ktorego wyciagamy nasz car
        return <CarCard {...car} key={`car_${index}`} />;
      })}
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        pagesCount={pagesCount}
      />
    </>
  );
};

export default CarList;
