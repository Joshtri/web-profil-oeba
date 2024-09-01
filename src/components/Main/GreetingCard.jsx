import React from 'react';

import bagianDalamImg from '../../assets/depan bagian dalam.webp';
import bagianDepanImg from '../../assets/depan kantor lurah.webp';
import boardImg from '../../assets/boardoebalandscape.webp';

import mapsBlueImg from '../../assets/maps_blue.webp'

function GreetingCard() {
  return (
    <div className="row m-0 mt-3">
      <div className="col-md-6 col-lg-5">
        <div
          id="carouselExampleCaptions"
          className="carousel slide animate__animated animate__fadeInBottomLeft animate__delay-2s"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={boardImg}
                className="d-block w-100 rounded-3 img-fluid"
                alt="..."
                style={{ width: '100%' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Papan Kelurahan Oeba</h5>
                <p>Berisikan informasi terkait Kelurahan Oeba</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={bagianDepanImg}
                className="d-block w-100 rounded-3 img-fluid"
                alt="..."
                style={{ width: '100%' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Tampilan depan Kantor Kelurahan Oeba</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={bagianDalamImg}
                className="d-block w-100 rounded-3 img-fluid"
                alt="..."
                style={{ width: '100%' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Tampilan dalam Kantor Kelurahan Oeba</h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="col-md-6 col-lg-7 py-3">
        <h1 className="display-4" style={{ fontFamily: 'Barlow', fontWeight: 'bold' }}>
          <span className="animate__animated animate__fadeInDownBig">Selamat Datang</span>
        </h1>
        <p className="lead animate__animated animate__fadeInRight" style={{ fontFamily: 'Arial' }}>
          di website Kelurahan Oeba
        </p>
        <p className="py-3 animate__animated animate__fadeInRight" style={{ fontFamily: 'Arial' }}>
          Website ini dibuat dengan tujuan memperkenalkan
          pendatang mengenai Kelurahan Oeba dan mempermudah pengguna untuk mencari informasi terkait
          Sarana Prasarana di wilayah Oeba dalam website ini.
        </p>

        <div className="d-flex align-items-center">
          <img
            src={mapsBlueImg}
            alt=""
            style={{ width: '50px', height: 'auto' }}
            className="img-fluid px-md-0 pt-2 maps cursor-pointer"
          />
          <span className="ms-3" style={{ fontFamily: 'Arial', fontSize: '18px' }}>
            <a href="maps.html" style={{ fontFamily: 'Candara' }} className="hover-maps fade-in-17s">
              <b>LOKASI KELURAHAN OEBA</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GreetingCard;
