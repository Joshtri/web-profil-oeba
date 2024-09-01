import React from 'react'
import NavbarComp from '../components/Partials/NavbarComp'

function Layout({children}) {
  return (
    <React.Fragment>
        <NavbarComp/>
        <main className='container mt-5'>
            {children}
        </main>
    </React.Fragment>
  )
}

export default Layout