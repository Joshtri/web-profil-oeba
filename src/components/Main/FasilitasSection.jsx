import React from 'react';
import FasilitasCard from './FasilitasCard'


/* import assets image for fasilitas pendidikan*/
import inpresOebaImg from '../../assets/fasilitas_pendidikan/sd_oeba_1.webp'
import paudImpianImg from '../../assets/fasilitas_pendidikan/paudimpian.webp'
import paudGrowImg from '../../assets/fasilitas_pendidikan/paudgrowkids.webp'
import paudHyagonImg from '../../assets/fasilitas_pendidikan/paud_hyagon.webp'
import lp3iImg from '../../assets/fasilitas_pendidikan/lp3i.webp'


/* import asset image for fasilitas lainnya*/
import CamatLamaImg from '../../assets/fasilitas_lainnya/camatkotalama.webp'
import RJayaImg from '../../assets/fasilitas_lainnya/Rukun Jaya.webp'
/* import asset image for fasilitas ibadah*/
import GbiKhairosImg from '../../assets/fasilitas_ibadah/GBI KHAIROS KUPANG.webp'



function FasilitasSection() {
  return (
    <div className="card mt-0">
      <div className="card-body bg-light" id="sectionFasilitas">
        <div className="card">
          <h1 className="font-title-costum text-center text-uppercase">Fasilitas & potensi</h1>
          <div className="col-md-9 mx-auto">
            <p style={{ textAlign: 'justify' }}>
              Kelurahan Oeba merupakan salah satu pusat keramaian di Kota Kupang, dengan berbagai fasilitas umum seperti
              Stadion Merdeka yang meskipun cukup tua, tetap menyediakan sarana olahraga untuk atletik dan sepak bola.
              Selain itu, terdapat juga pusat perbelanjaan seperti Rukun Jaya Swalayan dan berbagai kios kecil di
              sekitar stadion. Banyak juga rumah makan di wilayah Oeba. Untuk fasilitas umum, terdapat sekolah,
              posyandu, serta tempat ibadah seperti Gereja GBI Khairos Kupang.
            </p>
            <p>Berikut beberapa fasilitas yang tersedia:</p>

            <div className="accordion mb-3" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="false" aria-controls="collapseOne">
                    <span className="fw-bolder fs-3">
                      Fasilitas Pendidikan
                    </span>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="row justify-content-center">
                      <FasilitasCard
                        title="SD INPRES OEBA 1 KUPANG"
                        imageSrc={inpresOebaImg}
                        altText="SD INPRES OEBA 1 KUPANG"
                        mapLink="https://maps.app.goo.gl/8oMKgwVqUYo6HTFD8"
                      />
                      <FasilitasCard
                        title="PAUD IMPIAN"
                        imageSrc={paudImpianImg}
                        altText="PAUD IMPIAN"
                        mapLink="https://maps.app.goo.gl/HRRwfSKya8WtkSej8"
                      />
                      <FasilitasCard
                        title="PAUD HYGAYON"
                        imageSrc={paudHyagonImg}
                        altText="PAUD HYGAYON"
                        mapLink="https://maps.app.goo.gl/GHndhxzKb8YUikxp9"
                      />
                      <FasilitasCard
                        title="PAUD GROW KIDS"
                        imageSrc={paudGrowImg}
                        altText="PAUD GROW KIDS"
                        mapLink="https://maps.app.goo.gl/1rRcx723b5MWW38X6"
                      />
                      <FasilitasCard
                        title="LP3I"
                        imageSrc={lp3iImg}
                        altText="LP3I"
                        mapLink="https://maps.app.goo.gl/DMk7U6Kd9AcY6VKHA"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo">
                    <span className="fw-bolder fs-3">
                      Fasilitas Ibadah
                    </span>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="row justify-content-center">
                      <FasilitasCard
                        title="GBI KHAIROS KUPANG"
                        imageSrc={GbiKhairosImg}
                        altText="GBI KHAIROS KUPANG"
                        mapLink="https://maps.app.goo.gl/QW9wA2FF5Cx1v2D87"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded="false" aria-controls="collapseThree">
                    <span className="fw-bolder fs-3">
                      Fasilitas Lainnya
                    </span>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="row justify-content-center">
                      <FasilitasCard
                        title="Rukun Jaya Swalayan"
                        imageSrc={RJayaImg}
                        altText="Rukun Jaya Swalayan"
                        mapLink="https://maps.app.goo.gl/ib8AhpqGPSsqjFDE7"
                      />
                      <FasilitasCard
                        title="Camat Kota Lama"
                        imageSrc={CamatLamaImg}
                        altText="Camat Kota Lama"
                        mapLink="https://maps.app.goo.gl/iFAwcaWbe9Xvzp3T9"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FasilitasSection;
