import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

function Detail() {
     const { code } = useParams();
     const [country, setCountry] = useState(null);

     useEffect(() => {
          api.get(`/alpha/${code}`).then(response => {
               setCountry(response.data[0]);
          });
     }, [code]);

     if (!country) return <div className="loading">Carregando detalhes...</div>;

     const nomeComumPt = country.translations?.por?.common || country.name.common;
     const nomeOficialPt = country.translations?.por?.official || country.name.official;

     return (
          <div className="detail-page-wrapper">
               <Link to="/" className="back-button">
                    <span>←</span> Voltar para a lista
               </Link>

               <div className="detail-content">
                    <div className="detail-left">
                         <img src={country.flags.svg} alt={nomeComumPt} className="detail-flag-large" />
                    </div>

                    <div className="detail-right">
                         <h1>{nomeComumPt}</h1>
                         <p className="official-name" style={{ color: '#666', marginBottom: '20px' }}>{nomeOficialPt}</p>

                         <div className="info-grid">
                              <div className="info-item">
                                   <p className="info-label">POPULAÇÃO</p>
                                   <p className="info-value">{country.population.toLocaleString('pt-BR')}</p>
                              </div>
                              <div className="info-item">
                                   <p className="info-label">REGIÃO</p>
                                   <p className="info-value">{country.region}</p>
                              </div>
                              <div className="info-item">
                                   <p className="info-label">CAPITAL</p>
                                   <p className="info-value">{country.capital?.[0] || 'N/A'}</p>
                              </div>
                              <div className="info-item">
                                   <p className="info-label">MOEDA</p>
                                   <p className="info-value">
                                        {Object.values(country.currencies || {}).map(c => c.name).join(', ')}
                                   </p>
                              </div>
                              <div className="info-item">
                                   <p className="info-label">IDIOMAS</p>
                                   <p className="info-value">
                                        {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Detail;
