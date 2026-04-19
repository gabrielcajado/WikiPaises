import React from 'react';

function Header({ setRegion, setCurrentPage }) {
     const handleRegionClick = (regionName) => {
          setRegion(regionName);
          setCurrentPage(1);
     };

     return (
          <header className="main-header">
               <nav className="header-nav">
                    <button className="nav-btn" onClick={() => handleRegionClick('Europe')}>Europa</button>
                    <button className="nav-btn" onClick={() => handleRegionClick('Americas')}>Américas</button>
                    <button className="nav-btn" onClick={() => handleRegionClick('Asia')}>Ásia</button>
                    <button className="nav-btn" onClick={() => handleRegionClick('Africa')}>África</button>
                    <button className="nav-btn" onClick={() => handleRegionClick('Oceania')}>Oceania</button>
                    <button className="nav-btn" onClick={() => handleRegionClick('all')}>Todos</button>
               </nav>
          </header>
     );
}

export default Header;