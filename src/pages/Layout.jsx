import React from 'react'
import NavbarComp from '../components/Partials/NavbarComp'
import FooterComp from '../components/Partials/FooterComp'

function Layout({children}) {
  return (
    <React.Fragment>
        <NavbarComp/>
        <main className='container mt-5'>
            {children}
        </main>

        <FooterComp/>
      
    </React.Fragment>
  )
}

export default Layout