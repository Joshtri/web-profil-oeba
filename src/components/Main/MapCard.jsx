import React from 'react';

import './maps-api.css'

function MapCard() {
  return (
    <div className="card mb-5 mt-5 pb-5 wow animate__animated animate__backInUp" data-wow-delay="1s">
      <div className="card-header">
        <h1 className="text-center text-uppercase font-title-costum animate__animated animate__backInUp animate__delay-1s">
          Peta Wilayah
        </h1>
      </div>
      <div className="card-body">
        <div className="maps-api-responsive">
          <div className="mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.7202809840032!2d123.59252155!3d-10.15920605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c569c952acfee69%3A0x47f6ef84ead1c75c!2sOeba%2C%20Kec.%20Kota%20Lama%2C%20Kota%20Kupang%2C%20Nusa%20Tenggara%20Tim.!5e1!3m2!1sid!2sid!4v1723689936503!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="col-12">
          <div className="mt-3 card">
            <div className="card-body">
              <h3 className="text-uppercase font-title-costum">Mengenal Wilayah Oeba</h3>
              <p>
                Kelurahan Oeba adalah sebuah kelurahan yang terletak di Kecamatan Kota Lama, Kota Kupang, Nusa Tenggara
                Timur, Indonesia dengan kode pos 85226. Kelurahan ini memiliki 4 RW (Rukun Warga) yang terbagi atas 14 RT
                (Rukun Tetangga).
              </p>
              <a href="index.html" className="btn btn-secondary">Kembali ke beranda</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapCard;
