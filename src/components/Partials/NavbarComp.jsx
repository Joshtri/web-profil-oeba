import React from 'react';
import './Navbar.css';

import kotaKupangLogo from '../../assets/kota_kupang_logo.webp'

function NavbarComp() {
  return (
    <>
      {/* First Navbar */}
      <nav className="navbar navbar-expand-lg px-md-5" style={{ backgroundColor: '#061952' }}>
        <div className="container-fluid mt-2 mb-2 d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img
              src={kotaKupangLogo}
              alt="Logo"
              className="rounded float-start"
              style={{ maxHeight: '100px' }}
            />
          </a>
          <span className="text-white fs-5">Kelurahan Oeba</span>
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
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
                <a className="nav-link active" href="index.html">
                  Beranda
                </a>
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
                    <a className="dropdown-item" href="sejarah_kel.html">
                      <img
                        src="https://img.icons8.com/ios/16/000000/history-book.png"
                        alt="History"
                      />
                      Sejarah Kelurahan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index.html#sectionFasilitas">
                      <img
                        src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/16/000000/external-potential-business-strategy-kmg-design-detailed-outline-kmg-design.png"
                        alt="Facilities"
                      />
                      Potensi & Fasilitas
                    </a>
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
                    <a className="dropdown-item" href="struktur_org.html">
                      <img
                        src="https://img.icons8.com/pastel-glyph/16/000000/parallel-tasks.png"
                        alt="Structure"
                      />
                      Struktur Pemerintahan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index.html#Sectionalurpelayanan">
                      <img
                        src="https://img.icons8.com/pastel-glyph/16/000000/parallel-tasks.png"
                        alt="Services"
                      />
                      Alur Pelayanan
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="maps.html">
                  Peta
                </a>
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
                    <a className="dropdown-item" href="pengumuman.html">
                      <img
                        src="https://img.icons8.com/pastel-glyph/16/000000/parallel-tasks.png"
                        alt="Announcements"
                      />
                      Pengumuman & Artikel
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Marquee Section */}
      <div className="card mb-1 shadow-sm">
        <div className="card-body">
          <marquee
            onMouseOver={(e) => e.target.stop()}
            onMouseOut={(e) => e.target.start()}
          >
            <span className="small text-muted">
              Sekilas Info | Kantor Kelurahan Oeba membuka pelayanan publik pada
              hari Senin - Kamis pukul 07.30 - 16:00 WITA & Jumat pukul 07.30 -
              16.30 WITA
              <a href="#" className="text-primary" title="Baca Selengkapnya">
                {' '}
                -- selengkapnya...
              </a>
            </span>
          </marquee>
        </div>
      </div>

      {/* Modal Section */}
      <div
        className="modal fade"
        id="modalKonfirmasiPortalHukum"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComp;
