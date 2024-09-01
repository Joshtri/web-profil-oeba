import React from 'react';

function GaleriKegiatan() {
  const activities = [
    {
      imgSrc: 'image1.jpg',
      caption: 'Kegiatan Bersih-Bersih',
      description: 'Warga Kelurahan Oeba melakukan kegiatan bersih-bersih lingkungan bersama untuk menjaga kebersihan dan keindahan lingkungan.',
    },
    {
      imgSrc: 'image2.jpg',
      caption: 'Penyuluhan Kesehatan',
      description: 'Penyuluhan kesehatan mengenai pentingnya menjaga kesehatan di masa pandemi COVID-19.',
    },
    {
      imgSrc: 'image3.jpg',
      caption: 'Lomba Hari Kemerdekaan',
      description: 'Berbagai lomba diadakan dalam rangka memperingati Hari Kemerdekaan Indonesia di Kelurahan Oeba.',
    },
    // Tambahkan lebih banyak kegiatan sesuai kebutuhan
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Galeri Kegiatan Kelurahan Oeba</h2>
      <div className="row">
        {activities.map((activity, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={activity.imgSrc} className="card-img-top" alt={activity.caption} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{activity.caption}</h5>
                <p className="card-text flex-grow-1" style={{ minHeight: '70px' }}>
                  {activity.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GaleriKegiatan;
