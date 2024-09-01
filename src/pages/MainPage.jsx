import React from 'react'
import GreetingCard from '../components/Main/GreetingCard'
import Layout from './Layout'
import MapCard from '../components/Main/MapCard'
import ServiceFlow from '../components/Main/ServiceFlow'
import FasilitasSection from '../components/Main/FasilitasSection'
import BeritaSection from '../components/Main/BeritaSection'
function MainPage() {
  return (
    <Layout>
        <GreetingCard/>

        <ServiceFlow/>
        <FasilitasSection/>
        <MapCard/>

        <BeritaSection/>
    </Layout>
  )
}

export default MainPage