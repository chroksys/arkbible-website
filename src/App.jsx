import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import SubmitStoryModal from './components/SubmitStoryModal';
import InfoModal from './components/InfoModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import PartnerPage from './pages/PartnerPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import VolunteerPage from './pages/VolunteerPage';

export default function App() {
  const [activeRoute, setActiveRoute] = useState(window.location.pathname || '/');
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isSubmitStoryOpen, setIsSubmitStoryOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState(null); // 'privacy' | 'terms' | null

  const [toastMessage, setToastMessage] = useState(null);
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    const handlePopState = () => {
      setActiveRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    setActiveRoute(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleStorySubmitSuccess = (newStory) => {
    setUserStories([newStory, ...userStories]);
    showToast("Hallelujah! Your faith story has been shared with the global community.");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 3000,
          background: '#152220',
          border: '1.5px solid var(--secondary)',
          borderRadius: '16px',
          padding: '1rem 1.5rem',
          color: '#ffffff',
          boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
          maxWidth: '400px',
          animation: 'modalSlideUp 0.3s ease-out',
          fontSize: '0.92rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem'
        }}>
          <span style={{ fontSize: '1.2rem' }}>✨</span>
          <div>{toastMessage}</div>
        </div>
      )}

      {/* Sticky Header Navbar */}
      <Navbar
        activeRoute={activeRoute}
        navigateTo={navigateTo}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Dynamic Page Router */}
      <main style={{ flex: 1 }}>
        {activeRoute === '/' && (
          <HomePage
            navigateTo={navigateTo}
            onOpenDownload={() => setIsDownloadOpen(true)}
            onOpenSubmitStory={() => setIsSubmitStoryOpen(true)}
            customStories={userStories}
          />
        )}

        {activeRoute === '/about' && (
          <AboutPage
            navigateTo={navigateTo}
            onOpenDownload={() => setIsDownloadOpen(true)}
          />
        )}

        {activeRoute === '/product' && (
          <ProductPage
            onOpenDownload={() => setIsDownloadOpen(true)}
          />
        )}

        {activeRoute === '/partner' && (
          <PartnerPage
            navigateTo={navigateTo}
            onSubmitToast={showToast}
          />
        )}

        {activeRoute === '/donate' && (
          <DonatePage
            navigateTo={navigateTo}
            onSubmitToast={showToast}
          />
        )}

        {activeRoute === '/volunteer' && (
          <VolunteerPage
            navigateTo={navigateTo}
            onSubmitToast={showToast}
          />
        )}

        {activeRoute === '/contact' && (
          <ContactPage
            onSubmitToast={showToast}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        navigateTo={navigateTo}
        onOpenDownload={() => setIsDownloadOpen(true)}
        onOpenPrivacy={() => setInfoModalType('privacy')}
        onOpenTerms={() => setInfoModalType('terms')}
      />

      {/* Global Modals */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />

      <SubmitStoryModal
        isOpen={isSubmitStoryOpen}
        onClose={() => setIsSubmitStoryOpen(false)}
        onSubmitSuccess={handleStorySubmitSuccess}
      />

      <InfoModal
        isOpen={!!infoModalType}
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />
    </div>
  );
}
