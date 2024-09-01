import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Layout from './Layout';
import strukturPDF from '../assets/Struktur-Oetete.pdf';

// Explicitly specify the worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function StrukturOrganisasi() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Layout>
      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4">Struktur Organisasi</h2>
        <div className="d-flex justify-content-center">
          <Document
            file={strukturPDF}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </Layout>
  );
}

export default StrukturOrganisasi;
