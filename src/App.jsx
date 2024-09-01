
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import NavbarComp from './components/Partials/NavbarComp'
import MainPage from './pages/MainPage'
import SejarahKelurahan from './pages/SejarahKelurahan'
import Galeri from './pages/Galeri'
import Pengumuman from './pages/Pengumuman'
import StrukturOrganisasi from './pages/StrukturOrganisasi'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/sejarah_kelurahan' element={<SejarahKelurahan/>}/>
        <Route path='/galeri_kegiatan' element={<Galeri/>}/>
        <Route path='/pengumuman' element={<Pengumuman/>}/>
        <Route path='/struktur_organisasi' element={<StrukturOrganisasi/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
