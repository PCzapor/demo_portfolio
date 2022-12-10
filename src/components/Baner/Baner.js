import React, { useEffect } from 'react';
import promo from '../../pictures/promo.png';
import styles from '../Baner/Baner.module.scss';
import kid from '../../pictures/kid.png';
import { useState } from 'react';

const Baner = () => {
  const [baner1IsOpen, setBaner1IsOpen] = useState(false);

  // useEffect(() => {
  //   const timeout = setInterval(() => {
  //     setBaner1IsOpen(!baner1IsOpen);
  //   }, 5500);
  //   return () => clearInterval(timeout);
  // }, [baner1IsOpen]);

  return (
    <div className={styles.baner}>
      {baner1IsOpen ? (
        <div className={styles.fadeIn}>
          <img
            className={styles.baner1}
            src={kid}
            title="Kid safety"
            alt="Bezpieczeństwo darmowe foteliki wyporzyczalni samochodów bestcar podkarpacie"
          />
          <div className={styles.banerPromo}>
            <span className={styles.banerPromoText}>
              Bezpieczeństwo Twojej rodziny to dla nas priorytet - fotelik dla
              dziecka gratis!
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.fadeIn}>
          <img
            className={styles.baner2}
            src={promo}
            title="Promocja"
            alt="Promocja wyporzyczalni samochodów bestcar
      podkarpacie"
          />
          <div className={styles.banerPromo2}>
            <span className={styles.banerPromoText2}>
              Promocje na najem długoterminowy +30 dni!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Baner;
