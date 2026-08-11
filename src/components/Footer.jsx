import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';

export default function Footer({ navigateTo, onOpenDownload, onOpenPrivacy, onOpenTerms }) {
  return (
    <footer style={{
      position: 'relative',
      overflow: 'hidden',
      color: 'rgba(255, 255, 255, 0.88)',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      background: '#0B1413'
    }}>
      {/* Background Loop Video: glob.mp4 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/images/glob.mp4"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.7)'
        }}
      />

      {/* Dark Vignette Overlay for High-Contrast Text Legibility */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(10, 18, 17, 0.82), rgba(14, 25, 23, 0.92))',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Col 1: Brand Logo (Only Logo, No Title Text Next To It) */}
          <div>
            <div style={{ marginTop: '-110px', marginBottom: '-70px' }}>
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
                style={{ display: 'inline-block', textDecoration: 'none' }}
              >
                <img
                  src="/logo.png"
                  alt="Arkbible Logo"
                  style={{
                    height: '250px',
                    maxHeight: '300px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)';
                    e.currentTarget.style.filter = 'drop-shadow(0 10px 24px rgba(168, 224, 221, 0.45))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.filter = 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))';
                  }}
                />
              </a>
            </div>
            <p style={{
              fontSize: '0.92rem',
              lineHeight: '1.7',
              marginTop: '0px',
              marginBottom: '1.4rem',
              color: 'rgba(255, 255, 255, 0.88)'
            }}>
              Bringing believers together globally to grow deeper in faith, support one another through life's seasons, and stay anchored in God’s Word.
            </p>
            <div className="hero-badge" style={{ display: 'inline-flex', fontSize: '0.8rem', padding: '0.4rem 0.9rem' }}>
              <ShieldCheck size={14} color="#528986" /> 100% Ad-Free Sanctuary
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{
              color: '#FFFFFF',
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-serif)'
            }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li>
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); navigateTo('/'); }}
                  style={{ color: 'rgba(255, 255, 255, 0.88)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)'}
                >
                  Home (Community & Movement)
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => { e.preventDefault(); navigateTo('/about'); }}
                  style={{ color: 'rgba(255, 255, 255, 0.88)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)'}
                >
                  About / Mission
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  onClick={(e) => { e.preventDefault(); navigateTo('/product'); }}
                  style={{ color: 'rgba(255, 255, 255, 0.88)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)'}
                >
                  Arkbible App Features
                </a>
              </li>
              <li>
                <a
                  href="/partner"
                  onClick={(e) => { e.preventDefault(); navigateTo('/partner'); }}
                  style={{ color: 'rgba(255, 255, 255, 0.88)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)'}
                >
                  Partners (Church & Pastoral)
                </a>
              </li>
              <li>
                <a
                  href="/donate"
                  onClick={(e) => { e.preventDefault(); navigateTo('/donate'); }}
                  style={{ color: 'rgba(255, 255, 255, 0.88)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)'}
                >
                  Donation (Kingdom Giving)
                </a>
              </li>
              <li>
                <a
                  href="/volunteer"
                  onClick={(e) => { e.preventDefault(); navigateTo('/volunteer'); }}
                  style={{ color: 'rgba(255, 255, 255, 0.88)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)'}
                >
                  Volunteering (Missionary Field)
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }}
                  style={{ color: 'rgba(255, 255, 255, 0.88)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)'}
                >
                  Contact & Prayer Support
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Download Badges (Official Apple App Store & Google Play Store) */}
          <div>
            <h4 style={{
              color: '#FFFFFF',
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-serif)'
            }}>
              Download Arkbible
            </h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.4rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: '1.6' }}>
              Experience an ad-free, intelligent mobile sanctuary for quiet reflection and daily study.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Pixel-Perfect Apple App Store Badge */}
              <button
                onClick={onOpenDownload}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  background: '#000000',
                  color: '#FFFFFF',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                  transition: 'all 0.2s ease',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#3A6B68';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                }}
              >
                <svg width="22" height="26" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-92.1zm-57.8-154.2c21-25.4 34.6-60.6 30.7-95.6-29.6 1.7-64.8 20.5-85.2 44.9-18.3 21.4-34.1 56.7-29.3 90.9 33.1 2.5 66.2-16 88.8-40.2z" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8, fontWeight: '500' }}>Download on the</span>
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>App Store</span>
                </div>
              </button>

              {/* Google Play Store Badge */}
              <button
                onClick={onOpenDownload}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  background: '#000000',
                  color: '#FFFFFF',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                  transition: 'all 0.2s ease',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#3A6B68';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                }}
              >
                <svg width="22" height="24" viewBox="0 0 512 512" fill="none">
                  <path d="M325.8 244.5L78.6 3.6c-4.9-2.8-10.4-3.6-15.6-2.5l262.8 243.4z" fill="#EA4335" />
                  <path d="M410.6 226.7l-84.8 17.8L63 1.1c4.8 1 9.4 3.7 12.8 7.5l334.8 218.1z" fill="#FFBA00" />
                  <path d="M63 510.9c-5.2 1.1-10.7.3-15.6-2.5l247.2-240.9 31.2 17.8-262.8 225.6z" fill="#34A853" />
                  <path d="M410.6 285.3l-84.8-17.8-262.8 243.4c3.4 3.8 8 6.5 12.8 7.5l334.8-233.1z" fill="#4285F4" />
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8, fontWeight: '500' }}>GET IT ON</span>
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Col 4: Community Support */}
          <div>
            <h4 style={{
              color: '#FFFFFF',
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-serif)'
            }}>
              Direct Support & Outreach
            </h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: '1.6' }}>
              Have questions, feedback, or a prayer request? Our team is always here for you.
            </p>
            <a
              href="mailto:info@arkbible.app"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#528986',
                fontWeight: '700',
                fontSize: '0.95rem',
                textDecoration: 'none'
              }}
            >
              <Mail size={16} /> info@arkbible.app
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.88rem',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          <div>
            © {new Date().getFullYear()} Arkbible Community & Ministry. Built with faith and love for believers worldwide.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button
              onClick={onOpenPrivacy}
              style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer' }}
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer' }}
            >
              Terms of Service
            </button>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }}
              style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}
            >
              Support Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
