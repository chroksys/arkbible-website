import React from 'react';
import { X, Shield, Lock, FileText } from 'lucide-react';

export default function InfoModal({ isOpen, type, onClose }) {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
          {isPrivacy ? <Lock color="var(--secondary)" size={28} /> : <FileText color="var(--secondary)" size={28} />}
          <h3 className="heading-md" style={{ color: '#ffffff' }}>
            {isPrivacy ? 'Privacy & Data Protection Guarantee' : 'Terms of Service & Community Covenant'}
          </h3>
        </div>

        <div style={{ fontSize: '0.92rem', color: 'var(--text-light-muted)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {isPrivacy ? (
            <>
              <p>
                At <strong>Arkbible</strong>, we believe that your private prayer life and personal scripture study are sacred between you and God.
              </p>
              <h4 style={{ color: '#ffffff' }}>1. Zero Third-Party Advertising</h4>
              <p>We do not run ad networks, tracking pixels, or commercial sponsorships. Your reading habits are never monetized.</p>
              <h4 style={{ color: '#ffffff' }}>2. 100% Local & Offline Data</h4>
              <p>Your bookmarks, prayer journal entries, and reading progress are stored locally on your device. We do not upload your private prayer journals to central servers.</p>
              <h4 style={{ color: '#ffffff' }}>3. Vector RAG Search Processing</h4>
              <p>When using emotion verse search, inputs are converted into mathematical embedding vectors solely to retrieve relevant scriptures with 0% AI hallucination.</p>
            </>
          ) : (
            <>
              <p>
                By joining the Arkbible community and utilizing our companion mobile app, you agree to walk in fellowship according to Christian unity and mutual respect.
              </p>
              <h4 style={{ color: '#ffffff' }}>1. Safe Community Standards</h4>
              <p>All shared testimonies and community prayer posts undergo 4-layer automated and human moderation to preserve an encouraging, godly sanctuary.</p>
              <h4 style={{ color: '#ffffff' }}>2. Free & Open Access</h4>
              <p>Arkbible provides public-domain Bible translations (KJV, WEB, Louis Segond, Reina-Valera) freely without hidden paywalls or subscription traps.</p>
              <h4 style={{ color: '#ffffff' }}>3. Financial Stewardship</h4>
              <p>All voluntary financial gifts and partnerships directly support app infrastructure, multi-language translations, and outreach programs.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
