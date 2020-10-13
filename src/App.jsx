import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
// Layouts
import FullViewportHeightSection from './layouts/FullViewportHeightSection';
// Components
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Vinyl from './components/Vinyl/Vinyl';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <FullViewportHeightSection component={<Hero />} />
      <FullViewportHeightSection component={<About />} />
      <FullViewportHeightSection component={<Vinyl />} />
      <Work />
      <Footer />
    </React.Fragment>
  );
};

export default App;
