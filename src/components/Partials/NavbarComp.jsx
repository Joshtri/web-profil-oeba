import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import './Navbar.css';

// import kotaKupangLogo from '../../assets/kota_kupang_logo.webp';
import logoOeba from '../../assets/KEL_OEBA.webp'

function NavbarComp() {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const handleScrollOrNavigate = (sectionId) => {
    if (location.pathname === '/') {
      // If already on MainPage, scroll to section
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
      });
    } else {
      // If on another page, navigate to MainPage and scroll after render
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <>
      {/* First Navbar */}
      <nav className="navbar navbar-expand-lg px-md-5" style={{ backgroundColor: '#061952' }}>
        <div className="container-fluid mt-2 mb-2 d-flex justify-content-between align-items-center">
          <RouterLink to="/" className="navbar-brand">
            <img
              src={logoOeba}
              alt="Logo"
              className="rounded float-start"
              style={{ maxHeight: '200px', maxWidth: '200px', width: 'auto', height: 'auto' }}
            />
          </RouterLink>
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: '#607EAA' }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <RouterLink to="/" className="nav-link active">
                  Beranda
                </RouterLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownProfile"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profil
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownProfile">
                  <li>
                    <RouterLink to="/sejarah_kelurahan" className="dropdown-item">
                      <img src="https://img.icons8.com/ios/16/000000/history-book.png" />
                        &nbsp;Sejarah Kelurahan
                    </RouterLink>
                  </li>
                  <li>
                    <span onClick={() => handleScrollOrNavigate('sectionFasilitas')} className="dropdown-item" style={{ cursor: 'pointer' }}>
                      <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/16/000000/external-potential-business-strategy-kmg-design-detailed-outline-kmg-design.png" />
                        &nbsp;Potensi & Fasilitas
                    </span>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownGov"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pemerintahan
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownGov">
                  <li>
                    <RouterLink to="/struktur_organisasi" className="dropdown-item">
                     <img src="https://img.icons8.com/pastel-glyph/16/000000/parallel-tasks.png" />
                     <span>
                        &nbsp;Struktur Pemerintahan
                     </span>
                    </RouterLink>
                  </li>
                  <li>
                    <span onClick={() => handleScrollOrNavigate('Sectionalurpelayanan')} className="dropdown-item" style={{ cursor: 'pointer' }}>
                      <img src="https://img.icons8.com/pastel-glyph/16/000000/parallel-tasks.png" />
                      
                      
                        &nbsp;Alur Pelayanan
                    </span>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <span onClick={() => handleScrollOrNavigate('mapCard')} className="nav-link" style={{ cursor: 'pointer' }}>
                  Peta
                </span>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownOther"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lainnya
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownOther">
                  <li>
                    <RouterLink to="/pengumuman" className="dropdown-item">
                      <img src="https://img.icons8.com/?size=16&id=z0XTU45LTqNE&format=png&color=000000" />
                      Pengumuman
                    </RouterLink>
                    <RouterLink to="/galeri_kegiatan" className="dropdown-item">
                      <img src="https://img.icons8.com/?size=16&id=z0XTU45LTqNE&format=png&color=000000" />
                      Galeri Kelurahan
                    </RouterLink>

                    <li>
                      <span onClick={() => handleScrollOrNavigate('sectionBerita')} className="dropdown-item" style={{ cursor: 'pointer' }}>
                        <img src="https://img.icons8.com/?size=16&id=z0XTU45LTqNE&format=png&color=000000" />
                        Berita Terkini
                      </span>
                    </li>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="card mb-1 z-index-1">
        <marquee onmouseover="this.stop()" onmouseout="this.start()" class="shadow shadow-sm">
          <div class="teks_berjalan">
            <span class="teks small">Sekilas Info | Kantor Kelurahan Oeba membuka pelayanan publik pada hari Senin -
              Kamis pukul 07.30 - 16:00 WITA & Jumat pukul 07.30 - 16.30 WITA <a href="#" rel="noopener noreferrer"
                title="Baca Selengkapnya">-- selengkapnya...</a>
            </span>
          </div>
        </marquee>
      </div>
    </>
  );
}

export default NavbarComp;
