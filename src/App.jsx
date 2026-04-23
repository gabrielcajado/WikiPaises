import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import api from './services/api'
import Nav from './components/Nav'
import Search from './components/Search'
import Header from './components/Header'

const ITEMS_PER_PAGE = 12

function App() {
  const [countriesList, setCountriesList] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)

  const filteredData = countriesList
    .filter(item => {
      if (selectedRegion === 'all') return true;
      return item.region?.toLowerCase() === selectedRegion.toLowerCase();
    })
    .filter(item => {
      if (!searchTerm) return true;
      const nomePt = item.translations?.por?.common?.toLowerCase() || "";
      const nomeEn = item.name?.common?.toLowerCase() || "";
      return nomePt.includes(searchTerm.toLowerCase()) || nomeEn.includes(searchTerm.toLowerCase());
    })

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE) || 1
  const currentCountries = filteredData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  useEffect(() => {
    fetchCountriesData()
  }, [])

  const fetchCountriesData = async () => {
    try {
      const response = await api.get('all?fields=name,flags,capital,region,cca3,translations')
      setCountriesList(response.data)
    } catch (err) {
      console.error('Falha ao carregar os dados:', err)
    }
  }

  const handleNextPage = () => { if (page < totalPages) setPage(page + 1) }
  const handlePrevPage = () => { if (page > 1) setPage(page - 1) }

  return (
    <div className="app-container">
      <div className="hero-section">
        <Header setRegion={setSelectedRegion} setCurrentPage={setPage} />
        <h1 className="main-title">WIKIPAISES</h1>
        <Search
          setSearch={setSearchTerm}
          setRegion={setSelectedRegion}
          setCurrentPage={setPage}
        />
      </div>

      <div className='cards'>
        {currentCountries.length > 0 ? (
          currentCountries.map((countryData, idx) => (
            <Card key={idx} country={countryData} />
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%', marginTop: '20px' }}>
            Nenhum país encontrado.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="nav-container">
          <Nav
            currentPage={page}
            totalPages={totalPages}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
        </div>
      )}
    </div>
  )
}

export default App
