import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import GreetingCard from '../components/Main/GreetingCard';
import Layout from './Layout';
import MapCard from '../components/Main/MapCard';
import ServiceFlow from '../components/Main/ServiceFlow';
import FasilitasSection from '../components/Main/FasilitasSection';
import BeritaSection from '../components/Main/BeritaSection';

function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
      });
    }
  }, [location]);

  return (
    <Layout>
      <GreetingCard />
      <ServiceFlow />
      <FasilitasSection id="sectionFasilitas" />
      <MapCard id="mapCard" />
      <BeritaSection id="sectionBerita" />
    </Layout>
  );
}

export default MainPage;
