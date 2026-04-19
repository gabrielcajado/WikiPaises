import React from 'react';

function Search({ setSearch, setRegion, setCurrentPage }) {
  return (
    <div className="search-bar">
      <div className="input-wrapper">

        <input
          type="text"
          placeholder="Pesquisar por nome do país..."
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <select onChange={(e) => {
        setRegion(e.target.value);
        setCurrentPage(1);
      }}>
        <option value="all">Filtrar por Região</option>
        <option value="Africa">África</option>
        <option value="Americas">Américas</option>
        <option value="Asia">Ásia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Search;