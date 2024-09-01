import React from 'react';

function PengumumanSection() {
  const announcements = [
    {
      title: 'Pengumuman Rapat Warga',
      date: '01 September 2024',
      description: 'Rapat warga akan diadakan pada tanggal 5 September 2024 untuk membahas program kerja kelurahan.',
      pdfLink: '/files/rapat-warga-sep2024.pdf',
    },
    {
      title: 'Pengumuman Lomba Kebersihan',
      date: '15 Agustus 2024',
      description: 'Lomba kebersihan antar RT akan diadakan pada tanggal 17 Agustus 2024. Berikut adalah ketentuannya.',
      pdfLink: '/files/lomba-kebersihan-agustus2024.pdf',
    },
    // Tambahkan lebih banyak pengumuman sesuai kebutuhan
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Pengumuman Terbaru</h2>
      <div className="row">
        {announcements.map((announcement, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{announcement.title}</h5>
                <p className="card-subtitle text-muted mb-2">{announcement.date}</p>
                <p className="card-text flex-grow-1">{announcement.description}</p>
                <a href={announcement.pdfLink} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
                  Baca / Unduh PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PengumumanSection;
