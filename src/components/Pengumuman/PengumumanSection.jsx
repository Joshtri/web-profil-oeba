import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PengumumanSection() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPengumuman = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/pengumuman`);
        setAnnouncements(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPengumuman();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading announcements: {error}</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Pengumuman Terbaru</h2>
      <div className="row">
        {announcements.map((announcement, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{announcement.judul_pengumuman}</h5>
                <p className="card-subtitle text-muted mb-2">{new Date(announcement.tanggal_pengumuman).toLocaleDateString()}</p>
                <p className="card-text flex-grow-1">{announcement.deskripsi_pengumuman}</p>
                {announcement.berkas_pengumuman_pdf && (
                  <a
                    href={announcement.berkas_pengumuman_pdf}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Baca / Unduh PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PengumumanSection;
