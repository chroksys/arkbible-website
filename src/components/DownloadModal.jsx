import React from 'react';
import { X, ShieldCheck, WifiOff, Star, QrCode } from 'lucide-react';

export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px', padding: '2.5rem' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <div className="gold-badge" style={{ marginBottom: '0.8rem', display: 'inline-flex' }}>
            <ShieldCheck size={16} /> 100% Free & Ad-Free Sanctuary
          </div>
          <h2 className="heading-md" style={{ color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
            Get the Arkbible Mobile App
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Available on iOS and Android. Pre-bundled multi-translation Bibles, 100% offline text-to-speech audio, and daily vector encouragement.
          </p>
        </div>

        {/* Official Store Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.2rem',
          marginBottom: '2rem'
        }}>
          {/* iOS Apple Store Badge */}
          <a
            href="https://apple.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.85rem',
              background: '#000000',
              color: '#FFFFFF',
              padding: '0.85rem 1.4rem',
              borderRadius: '14px',
              textDecoration: 'none',
              boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease',
              textAlign: 'left'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <svg width="24" height="28" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-92.1zm-57.8-154.2c21-25.4 34.6-60.6 30.7-95.6-29.6 1.7-64.8 20.5-85.2 44.9-18.3 21.4-34.1 56.7-29.3 90.9 33.1 2.5 66.2-16 88.8-40.2z" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
              <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8, fontWeight: '500' }}>Download on the</span>
              <span style={{ fontSize: '1.1rem', fontWeight: '700', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>App Store</span>
            </div>
          </a>

          {/* Android Google Play Badge */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.85rem',
              background: '#000000',
              color: '#FFFFFF',
              padding: '0.85rem 1.4rem',
              borderRadius: '14px',
              textDecoration: 'none',
              boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease',
              textAlign: 'left'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <svg width="24" height="26" viewBox="0 0 512 512" fill="none">
              <path d="M325.8 244.5L78.6 3.6c-4.9-2.8-10.4-3.6-15.6-2.5l262.8 243.4z" fill="#EA4335" />
              <path d="M410.6 226.7l-84.8 17.8L63 1.1c4.8 1 9.4 3.7 12.8 7.5l334.8 218.1z" fill="#FFBA00" />
              <path d="M63 510.9c-5.2 1.1-10.7.3-15.6-2.5l247.2-240.9 31.2 17.8-262.8 225.6z" fill="#34A853" />
              <path d="M410.6 285.3l-84.8-17.8-262.8 243.4c3.4 3.8 8 6.5 12.8 7.5l334.8-233.1z" fill="#4285F4" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
              <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8, fontWeight: '500' }}>GET IT ON</span>
              <span style={{ fontSize: '1.1rem', fontWeight: '700', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Google Play</span>
            </div>
          </a>
        </div>

        {/* QR Code Section */}
        <div style={{
          background: 'var(--bg-teal-light)',
          border: '1px dashed var(--secondary)',
          borderRadius: '16px',
          padding: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.2rem'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '0.6rem',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <QrCode size={64} color="var(--primary-dark)" />
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '0.2rem' }}>
              Scan to Download Directly
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Point your phone camera to download Arkbible instantly to your mobile device.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <WifiOff size={15} color="var(--primary)" /> 100% Offline Capable
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Star size={15} color="var(--secondary)" /> 4.9 Community Rating
          </span>
        </div>
      </div>
    </div>
  );
}
