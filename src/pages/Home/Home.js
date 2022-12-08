import React from 'react';
import CarCard from '../../components/CarCard/CarCard';
import Container from '../../components/Container';
import Baner from '../../components/Baner/Baner';
import CarList from '../../components/CarList/CarList';
import Backdrop from '../../components/Backdrop/Backdrop';
import FormModal from '../../components/FormModal/FormModal';
import Spacer from '../../components/Spacer/Spacer';

const Home = () => {
  return (
    <main>
      <Baner />
      <Spacer />
      <Container>
        <CarList />
      </Container>
    </main>
  );
};

export default Home;
