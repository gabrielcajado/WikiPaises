import React from 'react';

function Nav({ currentPage, totalPages, onNext, onPrev }) {
  return (
    <div className="nav-container">
      <button onClick={onPrev} disabled={currentPage === 1}>
        Retornar
      </button>

      <span>Página {currentPage} de {totalPages}</span>

      <button onClick={onNext} disabled={currentPage === totalPages}>
        Avançar
      </button>
    </div>
  );
}

export default Nav;