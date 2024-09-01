import React from 'react';

function FasilitasCard({ title, imageSrc, altText, mapLink }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card mx-auto animate-on-hover">
        <img src={imageSrc} className="card-img-top" alt={altText} />
        <div className="card-body">
          <h5 className="card-title mb-4">{title}</h5>
          <div className="text-center">
            <a type="button" className="btn btn-warning" href={mapLink}>
              <i className="fa-solid fa-map-location-dot mx-1 fs-5" style={{ color: '#35504b' }}></i>
              Titik Lokasi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FasilitasCard;
