import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';

// Placeholder components for pages we haven't built yet so routing doesn't break
import About from './pages/About';
import Programs from './pages/Programs';
import SchoolsEdition from './pages/SchoolsEdition';
import CollegeEdition from './pages/CollegeEdition';
import FilmLab from './pages/FilmLab';

import Submit from './pages/Submit';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/schools" element={<SchoolsEdition />} />
          <Route path="programs/colleges" element={<CollegeEdition />} />
          <Route path="film-lab" element={<FilmLab />} />
          <Route path="submit" element={<Submit />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
