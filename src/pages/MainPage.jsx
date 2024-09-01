import React from 'react'
import GreetingCard from '../components/Main/GreetingCard'
import Layout from './Layout'
import MapCard from '../components/Main/MapCard'
import ServiceFlow from '../components/Main/ServiceFlow'
import FasilitasSection from '../components/Main/FasilitasSection'
function MainPage() {
  return (
    <Layout>
        <GreetingCard/>

        <ServiceFlow/>
        <FasilitasSection/>
        <MapCard/>
    </Layout>
  )
}

export default MainPage