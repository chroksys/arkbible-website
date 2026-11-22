import React from 'react';
import { X, Lock, FileText } from 'lucide-react';

export default function InfoModal({ isOpen, type, onClose }) {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem', paddingTop: '0.5rem' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            background: isPrivacy ? 'var(--primary-subtle)' : 'var(--secondary-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            {isPrivacy ? <Lock color="var(--primary)" size={22} /> : <FileText color="var(--secondary)" size={22} />}
          </div>
          <h3 className="heading-md" style={{ color: 'var(--text-dark)' }}>
            {isPrivacy ? 'Privacy & Data Protection' : 'Terms of Service & Community Covenant'}
          </h3>
        </div>

        <div style={{ fontSize: '0.94rem', color: 'var(--text-dark-soft)', lineHeight: '1.75', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {isPrivacy ? (
            <>
              <p>
                At <strong>ArkBible</strong>, we believe your prayer life and personal time in Scripture are sacred between you and God.
              </p>
              <h4 style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>1. Your Data Is Never Sold</h4>
              <p>We never sell your personal information, reading history, or prayer notes to third parties. Your spiritual journey stays private.</p>
              <h4 style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>2. Secure Cloud Sync & Offline Access</h4>
              <p>Bible reading works completely offline. When you sign in, your highlights, notes, and saved sermons are securely synced so you can access them across your devices, and you can delete your account anytime from Profile settings.</p>
              <h4 style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>3. Thoughtful Reflection & Verse Search</h4>
              <p>When you search by topic or emotion in the Reflect tab, your prompt is used solely to surface comforting, relevant Bible passages and is never used for commercial profiling.</p>
            </>
          ) : (
            <>
              <p>
                By joining the ArkBible community and using our mobile app, you agree to walk in fellowship with kindness, encouragement, and mutual respect.
              </p>
              <h4 style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>1. Safe & Encouraging Community</h4>
              <p>All public testimonies and community posts are moderated to keep ArkBible a welcoming, uplifting space for believers of all ages.</p>
              <h4 style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>2. Open Access to Scripture</h4>
              <p>ArkBible provides bundled Bible translations (KJV, BBE, Louis Segond, and Darby) freely for personal devotion, study, and small groups.</p>
              <h4 style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>3. Ministry Stewardship</h4>
              <p>Voluntary gifts and church partnerships directly support app development, community care, and global Scripture access.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
