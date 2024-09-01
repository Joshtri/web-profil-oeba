import React from 'react'
import GreetingCard from '../components/Main/GreetingCard'
import Layout from './Layout'
import MapCard from '../components/Main/MapCard'
function MainPage() {
  return (
    <Layout>
        <GreetingCard/>

        <MapCard/>
    </Layout>
  )
}

export default MainPage