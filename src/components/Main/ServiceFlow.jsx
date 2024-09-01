import React from 'react';

import flowServiceImg from '../../assets/alur_pelayanan.webp'

function ServiceFlow() {
  return (
    <div className="card mt-5">
      <div className="card-body bg-light" id="Sectionalurpelayanan">
        <div className="card">
          <h1 className="font-title-costum text-center text-uppercase timeline">Alur Pelayanan</h1>
          {/* foto */}
          {/* Tempatkan bingkai foto di bawah ini */}
          <div className="col-md-9 mx-auto mb-3">
            <div className="border border-secondary rounded p-2">
              {/* Isi dengan elemen gambar atau foto sesuai kebutuhan */}
              <img src={flowServiceImg} className="img-fluid" alt="Foto Komentar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceFlow;
