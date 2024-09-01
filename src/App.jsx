
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import NavbarComp from './components/Partials/NavbarComp'
import MainPage from './pages/MainPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
