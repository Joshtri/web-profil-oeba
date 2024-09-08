import React from 'react';
import Layout from './Layout';
import strukturGambar from '../assets/Struktur Organisasi OEBA.png';

function StrukturOrganisasi() {
  return (
    <Layout>
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">Struktur Organisasi</h2>
        <div className="d-flex justify-content-center">
          <img 
            src={strukturGambar} 
            alt="Struktur Organisasi" 
            style={{ width: '100%', maxWidth: '800px', height: 'auto' , border: '5px solid #000', borderRadius: '10px'}} 
          />
        </div>
      </div>
    </Layout>
  );
}

export default StrukturOrganisasi;
