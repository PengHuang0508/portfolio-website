import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
// Layouts
import FullViewHeightSection from './layouts/FullViewHeightSection';
// Components
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Vinyl from './components/Vinyl/Vinyl';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <FullViewHeightSection component={<Hero />} />
      <FullViewHeightSection component={<About />} />
      <FullViewHeightSection component={<Vinyl />} />
    </div>
  );
};

export default App;
