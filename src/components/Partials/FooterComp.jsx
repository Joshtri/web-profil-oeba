import React from 'react';
import './Footer.css';

import logoKotaKupangImg from '../../assets/kota_kupang_logo.webp'
import logoUndanaImg from '../../assets/logo-undana.webp'

function FooterComp() {
  return (
    <footer className="footer" style={{backgroundColor:'#ad8f49'}}>
      <div className="container">
        <div className="row justify-content-between">
          {/* Kolaborasi Bersama - Kiri */}
          <div className="col-md-4 col-sm-12">
            <h4 className="text-md-start text-center">KOLABORASI BERSAMA</h4>
            <div className="mt-4">
              <ul className="d-flex justify-content-md-start justify-content-center list-unstyled">
                <li className="me-3">
                  <a href="https://kupangkota.go.id">
                    <img
                      src={logoKotaKupangImg}
                      className="img-fluid rectangle5"
                      alt="Logo Kota Kupang"
                      style={{ width: '100%', maxWidth: '100px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://undana.ac.id">
                    <img
                      src={logoUndanaImg}
                      className="img-fluid rectangle5"
                      alt="Logo Undana"
                      style={{ width: '100%', maxWidth: '100px' }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Hubungi Kami - Kanan */}
          <div className="col-md-4 col-sm-12">
            <h4 className="text-md-end text-center">HUBUNGI KAMI</h4>
            <div className="mt-3">
              <ul className="text-md-end text-center list-unstyled">
                <li>
                  <i className="fa-solid fa-phone text-light"></i> (0380) 821746
                </li>
                <li>
                  <a href="mailto:kelurahanoebba@gmail.com">
                    <i className="fa-solid fa-envelope text-light"></i> kelurahanoebbao@gmail.com
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    <i className="fa-solid fa-map-pin text-light"></i> Jln. Beringin No.6 - 85226
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h6 className="text-center mt-4" style={{ fontFamily: "'Barlow-Light'" }}>
        © Copyright Kelurahan Oeba
      </h6>
    </footer>
  );
}

export default FooterComp;
