import { Link } from 'react-router-dom';

function Card({ country }) {

  const nomePortugues = country.translations?.por?.common || country.name.common;

  return (
    <Link to={`/country/${country.cca3}`} className="card">
      <img src={country.flags.svg} alt={`Bandeira de ${nomePortugues}`} />
      <div className="card-info">
        <h3>{nomePortugues}</h3>
        <h4>Região: {country.region}</h4>
        <h4>Capital: {country.capital?.[0] || 'N/A'}</h4>
      </div>
    </Link>
  );
}

export default Card;