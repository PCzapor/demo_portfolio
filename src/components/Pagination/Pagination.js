import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ activePage, pagesCount, setActivePage }) => {
  const changeActivePage = event => {
    setActivePage(prev => {
      return event.target.name === 'next' ? prev + 1 : prev - 1;
    });
  };

  return (
    <div className={styles.pageContainer}>
      {activePage === 1 ? null : (
        <button
          className={styles.changePage}
          name="prev"
          onClick={changeActivePage}
        >
          Poprzednia
        </button>
      )}
      <span className={styles.pageNr}>
        Strona: {activePage} z {pagesCount}
      </span>
      {activePage !== pagesCount ? (
        <button
          className={styles.changePage}
          name="next"
          onClick={changeActivePage}
        >
          Następna
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
