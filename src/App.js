import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FusionConcept from './components/FusionConcept';
import FeaturedProducts from './components/FeaturedProducts';
import MenuExplorer from './components/MenuExplorer';
import CollectionsSection from './components/CollectionsSection';
import BrandStory from './components/BrandStory';
import NekoNekoSection from './components/NekoNekoSection';
import ManekiMiniSection from './components/ManekiMiniSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id="app-shell" data-testid="app-shell">
        <a className="phase3-skip-link" href="#main-content">Saltar al contenido principal</a>
        <Navbar />
        <main id="main-content" tabIndex="-1">
          <Hero />
          <FusionConcept />
          <FeaturedProducts />
          <MenuExplorer />
          <CollectionsSection />
          <BrandStory />
          <NekoNekoSection />
          <ManekiMiniSection />
          <CommunitySection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
