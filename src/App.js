import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FusionConcept from './components/FusionConcept';
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
      <Navbar />
      <main>
        <Hero />
        <FusionConcept />
        <MenuExplorer />
        <CollectionsSection />
        <BrandStory />
        <NekoNekoSection />
        <ManekiMiniSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}

export default App;
