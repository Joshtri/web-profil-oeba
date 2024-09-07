import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GaleriKegiatan() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/kegiatan`);
        setActivities(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchKegiatan();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading activities: {error}</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Galeri Kegiatan Kelurahan Oeba</h2>
      <div className="row">
        {activities.map((activity, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={activity.foto_kegiatan} className="card-img-top" alt={activity.nama_kegiatan} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{activity.nama_kegiatan}</h5>
                <p className="card-text flex-grow-1" style={{ minHeight: '70px' }}>
                  {activity.deskripsi_kegiatan}
                </p>
                <p className="card-text"><small className="text-muted">{new Date(activity.tanggal_kegiatan).toLocaleDateString()}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GaleriKegiatan;
