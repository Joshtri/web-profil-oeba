import React from "react";
import Layout from "./Layout";
import './StyleCostum.css';


const SejarahKelurahan = () => {
  return (
    <Layout>
        <div className="transition-page-1 mb-5">


        {/* Title Section */}
        <div className="d-flex justify-content-center">
            <h2 className="mt-3 typings mx-auto font-title-costum" id="type">
            Sejarah Kelurahan OEBA
            </h2>
        </div>
        <br />

        {/* Main Content */}
        <div className="container mt-4">
            <div>
            <h3 className="mb-3 underline-hover-arc font-title-costum">
                Titik Mula Tercipta Nama <u>'Oeba'</u>
            </h3>
            </div>
            <div className="card">
            <div className="card-body mx-auto col-lg-12 shadow-sm rounded-3 rectangle3">
                <article>
                <p className="justify-content-center fs-6 paragraph-page-test">
                    Sebelum Indonesia merdeka, wilayah Desa Oeba dipimpin oleh sejumlah Temukung dan tokoh
                    masyarakat yang berpengaruh, sebagian dari mereka diangkat oleh Pemerintah Belanda yang saat itu berkuasa di Kupang. Pusat pemerintahan Desa Oeba kala itu tidak tetap, berpindah-pindah mengikuti tempat tinggal kepala desanya.
                    <br />
                    <br />
                    Pada masa itu, Desa Oeba terbagi menjadi empat dusun, yaitu:
                    <br />
                    1. Dusun I: Oeba
                    <br />
                    2. Dusun II: Boak Satu
                    <br />
                    3. Dusun III: Batu Besi
                    <br />
                    4. Dusun IV: Tode Kisar
                    <br />
                    <br />
                    Setiap dusun dipimpin oleh seorang Kepala Dusun. Sekitar tahun 1944, pimpinan Kantor Pemerintahan Militer Jepang di Airnona mengangkat Bapak Welem Ayub Taulo sebagai Kepala Desa Oeba. Kantor Kepala Desa Oeba kemudian ditempatkan di Boak Satu, yang sekarang menjadi wilayah Kelurahan Pasir Panjang. Setelah enam bulan, kantor tersebut dipindahkan ke Straat A di Oeba.
                    <br />
                    <br />
                    Pada tahun 1962, Letkol Paikun, yang saat itu menjabat sebagai Danrem di Kupang, dalam sebuah pertemuan dengan warga menunjuk sebuah lokasi untuk pembangunan Balai Desa Oeba. Balai tersebut dibangun di lokasi yang dipilih dan hingga kini menjadi Kantor Kelurahan Oeba. Pada tahun 1966, Letkol Paikun memerintahkan pembagian wilayah Desa Oeba untuk lebih mempermudah administrasi dan pemerintahan. Wilayah Lapangan Merdeka (sekarang Stadion Merdeka) dan area bagian barat yang dulu merupakan wilayah Desa Merdeka dimasukkan ke dalam wilayah Desa Oeba. Sementara itu, wilayah Tode Kisar dipisahkan dan ditetapkan sebagai Desa Tode Kisar yang berdiri sendiri. Wilayah Boak Satu (sekarang menjadi Markas Brimob Polda NTT dan sekitarnya) digabungkan ke Desa Pasir Panjang, sedangkan wilayah Batu Besi tetap menjadi bagian dari Desa Oeba.
                    <br />
                    <br />
                    Seiring dengan perkembangan zaman, pertambahan jumlah penduduk, serta kompleksitas masalah pemerintahan, pembangunan, dan kemasyarakatan, Desa Oeba kemudian berubah status menjadi Kelurahan Oeba. Pada tahun 1989, Pemerintah Kota Kupang memekarkan wilayah Kelurahan Oeba. Bagian selatan tetap dinamakan Kelurahan Oeba, sementara bagian utara dijadikan Kelurahan Fatubesi. Kedua wilayah ini dipisahkan oleh Jalan A. Yani. Untuk mempermudah pemerintahan, wilayah Kelurahan Oeba dibagi menjadi empat RW yang mengawasi 14 RT.
                </p>
                </article>
            </div>
            </div>
        </div>

        {/* Masa Kelurahan Section */}
        <div className="card text-center mt-5 container col-7 rounded-3">
            <div className="card-header"></div>
            <div className="card-body bg-bluemoon text-white rounded-3">
            <h5 className="card-title underline-hover-arc">MASA KELURAHAN</h5>
            <a className="nav-link">
                <img
                src="https://img.icons8.com/ios-filled/50/fff6bf/low-priority.png"
                alt="icon"
                style={{ cursor: "pointer" }}
                />
            </a>
            </div>
            <div className="card-footer rounded-3"></div>
        </div>

        {/* Table Section */}
        <div className="container mt-4">
            <div className="card-body mx-auto col-lg-12 shadow-lg rounded-3 rectangle3">
            <p>Daftar Pemimpin pada Masa Kelurahan :</p>
            <div className="table-responsive">

            
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama Pejabat</th>
                        <th>Jabatan</th>
                        <th>Tahun</th>
                    </tr>
                </thead>
                <tbody>
            {/* <!-- * data ke-1 --> */}
                <tr>
                    <td>1</td>
                    <td>JUNUS DETHAN</td>
                    <td>Tamukung/Kepala Desa</td>
                    <td>1881-1910</td>
                </tr>
            {/* <!-- * data ke-2 --> */}
                <tr>
                    <td>2</td>
                    <td>HENDRIK JESUA</td>
                    <td>Tamukung/Kepala Desa</td>
                    <td>1910-1929</td>
                </tr>
            {/* <!-- * data ke-3 --> */}
                <tr>
                    <td>3</td>
                    <td>SIMON NDOEN</td>
                    <td>Tamukung/Kepala Desa</td>
                    <td>1929-1942</td>
                </tr>
            {/* <!-- * data ke-4 --> */}
                <tr>
                    <td>4</td>
                    <td>THOMAS DETHAN</td>
                    <td>Tamukung/Kepala Desa</td>
                    <td>1942-1944</td>
                </tr>
            {/* <!-- * data ke-5 --> */}
                <tr>
                    <td>5</td>
                    <td>WILEM A. TAULO</td>
                    <td>Tamukung/Kepala Desa</td>
                    <td>1944-1967</td>
                </tr>
            {/* <!-- * data ke-6 --> */}
            <tr>
                <td>6</td>
                <td>E. PELLO</td>
                <td>Kepala Desa</td>
                <td>1967-1972</td>
            </tr>
            {/* <!-- * data ke-7 --> */}
            <tr>
                <td>7</td>
                <td>JAP H. TAULO</td>
                <td>Kepala Desa</td>
                <td>1972-1987</td>
            </tr>
            {/* <!-- * data ke-8 --> */}
            <tr>
                <td>8</td>
                <td>R. IZAACH</td>
                <td>Caretaker</td>
                <td>1987-1988</td>
            </tr>
            {/* <!-- * data ke-9 --> */}
            <tr>
                <td>9</td>
                <td>Z. MIRAMANGI</td>
                <td>Caretaker</td>
                <td>1988-Juli 1988</td>
            </tr>
            {/* <!-- * data ke-10 --> */}
            <tr>
                <td>10</td>
                <td>H. BAOEN</td>
                <td>LURAH</td>
                <td>1988-20 Maret 1995</td>
            </tr>
            {/* <!-- * data ke-11 --> */}
            <tr>
                <td>11</td>
                <td>BENYAMIN NDUN, SH</td>
                <td>LURAH</td>
                <td>20 Maret 1995 – 06 Februari 1999</td>
            </tr>
            {/* <!-- * data ke-12 --> */}
            <tr>
                <td>12</td>
                <td>AGUS RIRIMASE, Ap.</td>
                <td>LURAH</td>
                <td>06 Februari 1999 – 31 Juli 2000</td>
            </tr>
            {/* <!-- * data ke-13 --> */}
            <tr>
                <td>13</td>
                <td>ORSON G. NAWA, SH</td>
                <td>LURAH</td>
                <td>15 Desember 2000 – Oktober 2004</td>
            </tr>
            {/* <!-- * data ke-14 --> */}
            <tr>
                <td>14</td>
                <td>JULIANUS D. BENU, S.Sos</td>
                <td>LURAH</td>
                <td>Oktober 2004 – Januari 2008</td>
            </tr>
            {/* <!-- * data ke-15 --> */}
            <tr>
                <td>15</td>
                <td>ARIANTJE TAULO</td>
                <td>Plt. Lurah</td>
                <td>Januari 2008 – April 2008</td>
            </tr>
            {/* <!-- * data ke-16 --> */}
            <tr>
                <td>16</td>
                <td>REGINA D. CARVALHO</td>
                <td>LURAH</td>
                <td>April 2008 – November 2008</td>
            </tr>
            {/* <!-- * data ke-17 --> */}
            <tr>
                <td>17</td>
                <td>MARIA A. SALENSI, SE</td>
                <td>LURAH</td>
                <td>Desember 2008 – Desember 2018</td>
            </tr>
            {/* <!-- * data ke-18 --> */}
            <tr>
                <td>18</td>
                <td>GEREGORIUS E. ROHI, S.STP</td>
                <td>LURAH</td>
                <td>Desember 2018 – Juni 2021</td>
            </tr>
            {/* <!-- * data ke-19 --> */}
            <tr>
                <td>19</td>
                <td>WILLIAM M. DIMA, S.A.P</td>
                <td>LURAH</td>
                <td>Juni 2021 - Januari 2024</td>
            </tr>
            {/* <!-- * data ke-20 --> */}
            <tr>
                <td>20</td>
                <td>IBRAHIM HERMANTO PASSOE, S.SOS</td>
                <td>Plt.Lurah</td>
                <td>Januari 2024 – sekarang</td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default SejarahKelurahan;
