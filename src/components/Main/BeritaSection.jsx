import React, { useEffect } from 'react';

function BeritaSection() {
  
  // Function to fetch and display content from an RSS feed
  const tampilkanBerita = (url, containerId) => {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
      .then(response => response.json())
      .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

        items.forEach(item => {
          const title = item.querySelector('title').textContent;
          const link = item.querySelector('link').textContent;
          const thumbnail = item.querySelector('enclosure');
          const thumbnailUrl = thumbnail ? thumbnail.getAttribute('url') : 'placeholder.jpg';

          const beritaHtml = `
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="${thumbnailUrl}" class="card-img-top" alt="Thumbnail">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                </div>
                <div class="card-footer">
                  <div class="text-center">
                    <a href="${link}" class="card-link" target="_blank">Baca lebih lanjut</a>
                  </div>
                </div>
              </div>
            </div>
          `;
          
          document.getElementById(containerId).innerHTML += beritaHtml;
        });
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    tampilkanBerita('https://www.antaranews.com/rss/top-news.xml', 'berita-container');
    tampilkanBerita('https://www.antaranews.com/rss/hiburan.xml', 'berita-hiburan-container');
    tampilkanBerita('https://www.antaranews.com/rss/hukum.xml', 'berita-hukum-container');
  }, []);

  return (
    <div id="berita-section" className="card mt-5">
      <div className="card-body bg-light" id="sectionBerita">
        <div className="card">
          <h1 className="font-title-costum text-center text-uppercase">berita terkini</h1>
          <div className="col-md-9 mx-auto">
            <p style={{ textAlign: 'justify' }}>
              Kami menyediakan fitur <span className="fw-bold">"berita terkini"</span> bagi pengunjung website yang mengakses website profil Oeba. Dengan tujuan dapat meningkatkan literasi pengunjung website dan menambah wawasan mengenai informasi/berita yang dibaca.
            </p>
            <p>Berikut ini berita yang kami sediakan dengan berbagai jenis berita:</p>

            {/* TOP NEWS */}
            <div className="accordion mb-3" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <span className="fw-bolder fs-3">
                      <i className="me-2 fa-solid fa-newspaper fa-beat-fade"></i>TOP NEWS
                    </span>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                  <div className="accordion-body">
                    <div className="row justify-content-center" id="berita-container">
                      {/* Content for TOP NEWS */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HIBURAN */}
            <div className="accordion mb-3" id="accordionExample2">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    <span className="fw-bolder fs-3">
                      <i className="me-2 fa-solid fa-film fa-beat-fade"></i>HIBURAN
                    </span>
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                  <div className="accordion-body">
                    <div className="row justify-content-center" id="berita-hiburan-container">
                      {/* Content for HIBURAN */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HUKUM */}
            <div className="accordion mb-3" id="accordionExample3">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    <span className="fw-bolder fs-3">
                      <i className="me-2 fa-solid fa-scale-balanced fa-beat-fade" style={{ color: '#36455e' }}></i>HUKUM
                    </span>
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                  <div className="accordion-body">
                    <div className="row justify-content-center" id="berita-hukum-container">
                      {/* Content for HUKUM */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeritaSection;
