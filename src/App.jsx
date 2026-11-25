import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
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
import AuthHandoffPage from './pages/AuthHandoffPage';

export default function App() {
  const normalizePath = (p) => {
    if (!p || p === '/') return '/';
    return p.replace(/\/+$/, '') || '/';
  };

  const [activeRoute, setActiveRoute] = useState(normalizePath(window.location.pathname));
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isSubmitStoryOpen, setIsSubmitStoryOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState(null); // 'privacy' | 'terms' | null

  const [toastMessage, setToastMessage] = useState(null);
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    const handlePopState = () => {
      setActiveRoute(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    const clean = normalizePath(path);
    setActiveRoute(clean);
    window.history.pushState({}, '', clean);
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
    <LanguageProvider>
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

          {activeRoute === '/auth/callback' && (
            <AuthHandoffPage mode="callback" navigateTo={navigateTo} />
          )}

          {activeRoute === '/auth/reset-password' && (
            <AuthHandoffPage mode="reset-password" navigateTo={navigateTo} />
          )}

          {activeRoute === '/delete-account' && (
            <section style={{ padding: '5rem 0', background: 'var(--bg-light-soft)' }}>
              <div className="container" style={{ maxWidth: '720px' }}>
                <div className="light-card" style={{ padding: '2.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--secondary)' }}>
                    Account & Data Deletion
                  </span>
                  <h1 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.2rem' }}>
                    Delete Your ArkBible Account
                  </h1>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: 'var(--text-dark-soft)', lineHeight: 1.75 }}>
                    <p>You have full control over your ArkBible account and personal data at all times.</p>
                    <h3 style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Option 1 — Instant Deletion Inside the App</h3>
                    <p>Open <strong>ArkBible</strong> → tap the <strong>Profile / Settings</strong> tab → scroll to the bottom → tap <strong>Delete Account</strong>. Your account, highlights, notes, saved sermons, and testimonies are permanently removed immediately.</p>
                    <h3 style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Option 2 — Request Deletion by Email</h3>
                    <p>If you no longer have access to the app, email <a href="mailto:info@arkbible.app?subject=ArkBible%20Account%20Deletion%20Request" style={{ color: 'var(--primary)', fontWeight: 700 }}>info@arkbible.app</a> from the email address linked to your account. We will permanently delete your account and all associated data within 48 hours.</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeRoute === '/privacy' && (
            <section style={{ padding: '5rem 0', background: 'var(--bg-light-soft)' }}>
              <div className="container" style={{ maxWidth: '760px' }}>
                <div className="light-card" style={{ padding: '2.5rem' }}>
                  <span className="teal-badge" style={{ marginBottom: '1rem' }}>Privacy Policy</span>
                  <h1 className="heading-lg" style={{ marginBottom: '1.2rem' }}>Your Privacy & Trust</h1>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: 'var(--text-dark-soft)', lineHeight: 1.75 }}>
                    <p>At <strong>ArkBible</strong>, your prayer life and personal Scripture study are sacred between you and God.</p>
                    <h3 style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>1. We Never Sell Your Data</h3>
                    <p>We do not sell personal information, reading history, or prayer journal notes to third parties.</p>
                    <h3 style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>2. Offline Reading & Secure Sync</h3>
                    <p>All bundled Bibles work completely offline. If you create an account, your highlights, notes, and prayers sync securely, and you may permanently delete your account anytime inside the app's Profile settings.</p>
                    <h3 style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>3. Contact Us</h3>
                    <p>Questions about privacy? Reach out anytime at <a href="mailto:info@arkbible.app" style={{ color: 'var(--primary)', fontWeight: 700 }}>info@arkbible.app</a>.</p>
                  </div>
                </div>
              </div>
            </section>
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
    </LanguageProvider>
  );
}

