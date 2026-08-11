import React, { useState, useRef } from 'react';
import { Menu, X, Download, ChevronDown, Church, Heart, Compass } from 'lucide-react';

export default function Navbar({ activeRoute, navigateTo, onOpenDownload }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const communityTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 180);
  };

  const handleMouseEnterCommunity = () => {
    if (communityTimeoutRef.current) clearTimeout(communityTimeoutRef.current);
    setCommunityDropdownOpen(true);
  };

  const handleMouseLeaveCommunity = () => {
    communityTimeoutRef.current = setTimeout(() => {
      setCommunityDropdownOpen(false);
    }, 180);
  };

  const handleNavClick = (path) => {
    navigateTo(path);
    setMobileOpen(false);
    setProductsDropdownOpen(false);
    setCommunityDropdownOpen(false);
  };

  const isProductActive = activeRoute === '/product';
  const isCommunityActive = activeRoute === '/partner' || activeRoute === '/donate' || activeRoute === '/volunteer';

  return (
    <header className="navbar" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}
          className="brand-logo"
        >
          <img
            src="/logo.png"
            alt="Arkbible Logo"
            style={{
              height: '250px',
              maxHeight: '250px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </a>

        {/* Desktop & Mobile Nav Links */}
        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <li>
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}
              className={`nav-link ${activeRoute === '/' ? 'active' : ''}`}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              onClick={(e) => { e.preventDefault(); handleNavClick('/about'); }}
              className={`nav-link ${activeRoute === '/about' ? 'active' : ''}`}
            >
              Mission
            </a>
          </li>

          {/* PRODUCTS DROPDOWN LINK (HOVER & MOBILE CLICK) */}
          <li
            style={{ position: 'relative' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span
              onClick={() => setProductsDropdownOpen(prev => !prev)}
              className={`nav-link ${isProductActive ? 'active' : ''}`}
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.5rem 0',
                userSelect: 'none'
              }}
            >
              Products
              <ChevronDown
                size={16}
                style={{
                  transition: 'transform 0.25s ease',
                  transform: productsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </span>

            {/* PRODUCTS DROPDOWN MENU WITH dpp.png ON LEFT SIDE & TEXT ON RIGHT SIDE */}
            {productsDropdownOpen && (
              <div
                className="nav-dropdown-menu"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-40px',
                  width: '525px',
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(24px)',
                  borderRadius: '24px',
                  padding: '1.4rem',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.22), 0 6px 16px rgba(0, 0, 0, 0.08)',
                  border: '1.5px solid rgba(58, 107, 104, 0.25)',
                  zIndex: 1100,
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
                {/* Card Item: dpp.png Image on Left, Text & Button on Right */}
                <div
                  className="nav-dropdown-card"
                  onClick={() => handleNavClick('/product')}
                  style={{
                    background: 'var(--bg-teal-light)',
                    border: '1px solid rgba(58, 107, 104, 0.2)',
                    borderRadius: '20px',
                    padding: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.3rem',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#3A6B68';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(58, 107, 104, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* LEFT SIDE: dpp.png Image (Fills container perfectly & larger) */}
                  <div style={{
                    flexShrink: 0,
                    width: '160px',
                    height: '180px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: '#0a1211',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.2)'
                  }}>
                    <img
                      src="/images/dpp.png"
                      alt="Arkbible App Preview"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center'
                      }}
                    />
                  </div>

                  {/* RIGHT SIDE: Text & Get App Button */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '180px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#3A6B68', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Mobile Sanctuary
                        </span>
                        <span style={{ fontSize: '0.68rem', fontWeight: '700', background: 'var(--primary-subtle)', color: '#3A6B68', padding: '0.15rem 0.55rem', borderRadius: '9999px' }}>
                          100% Free
                        </span>
                      </div>

                      <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: 'var(--primary-dark)', lineHeight: '1.3', marginBottom: '0.4rem' }}>
                        Arkbible Mobile App
                      </h4>

                      <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.45', marginBottom: '0.8rem' }}>
                        Ad-free scripture sanctuary with pre-bundled multi-translation Bibles & 0% AI hallucination verse search.
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setProductsDropdownOpen(false);
                        onOpenDownload();
                      }}
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.9rem',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        borderRadius: '10px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        boxShadow: '0 4px 12px rgba(58, 107, 104, 0.3)'
                      }}
                    >
                      <Download size={15} /> Get the App Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* COMMUNITY DROPDOWN LINK (HOVER & MOBILE CLICK) */}
          <li
            style={{ position: 'relative' }}
            onMouseEnter={handleMouseEnterCommunity}
            onMouseLeave={handleMouseLeaveCommunity}
          >
            <span
              onClick={() => setCommunityDropdownOpen(prev => !prev)}
              className={`nav-link ${isCommunityActive ? 'active' : ''}`}
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.5rem 0',
                userSelect: 'none'
              }}
            >
              Community
              <ChevronDown
                size={16}
                style={{
                  transition: 'transform 0.25s ease',
                  transform: communityDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </span>

            {/* COMMUNITY DROPDOWN MENU WITH PREVIEW IMAGE ON LEFT & SUBPAGES ON RIGHT */}
            {communityDropdownOpen && (
              <div
                className="nav-dropdown-menu nav-dropdown-community"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-90px',
                  width: '560px',
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(24px)',
                  borderRadius: '24px',
                  padding: '1.2rem',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.22), 0 6px 16px rgba(0, 0, 0, 0.08)',
                  border: '1.5px solid rgba(58, 107, 104, 0.25)',
                  animation: 'modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: 1100,
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: '1.2rem'
                }}
              >
                {/* LEFT SIDE: Preview Image Card */}
                <div
                  className="nav-dropdown-preview-card"
                  style={{
                  flexShrink: 0,
                  width: '185px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: `linear-gradient(to bottom, rgba(14, 23, 22, 0.2) 0%, rgba(14, 23, 22, 0.85) 100%), url('/images/believers.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.1rem 1rem',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.18)'
                }}>
                  <span style={{
                    fontSize: '0.66rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    background: '#3A6B68',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    display: 'inline-block',
                    width: 'fit-content',
                    whiteSpace: 'nowrap',
                    marginBottom: '0.4rem'
                  }}>
                    Kingdom Movement
                  </span>
                  <div style={{ fontSize: '0.86rem', fontWeight: '800', lineHeight: '1.35', color: '#FFFFFF' }}>
                    Global Believers & Field Service
                  </div>
                </div>

                {/* RIGHT SIDE: 3 Subpages List */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {/* Subpage 1: Partners */}
                  <a
                    href="/partner"
                    onClick={(e) => { e.preventDefault(); handleNavClick('/partner'); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.65rem 0.8rem',
                      borderRadius: '14px',
                      textDecoration: 'none',
                      background: activeRoute === '/partner' ? 'var(--primary-subtle)' : 'transparent',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary-subtle)'; }}
                    onMouseLeave={(e) => { if (activeRoute !== '/partner') e.currentTarget.style.background = 'transparent'; }}
                  >
                    <img
                      src="/images/good2.webp"
                      alt="Partners Thumbnail"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.8)'
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary-dark)', lineHeight: '1.2' }}>
                        Partners
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                        Church & Pastor Alliances
                      </div>
                    </div>
                  </a>

                  {/* Subpage 2: Donation */}
                  <a
                    href="/donate"
                    onClick={(e) => { e.preventDefault(); handleNavClick('/donate'); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.65rem 0.8rem',
                      borderRadius: '14px',
                      textDecoration: 'none',
                      background: activeRoute === '/donate' ? 'var(--primary-subtle)' : 'transparent',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary-subtle)'; }}
                    onMouseLeave={(e) => { if (activeRoute !== '/donate') e.currentTarget.style.background = 'transparent'; }}
                  >
                    <img
                      src="/images/donate.webp"
                      alt="Donation Thumbnail"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.8)'
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary-dark)', lineHeight: '1.2' }}>
                        Donation
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                        Kingdom Financial Giving
                      </div>
                    </div>
                  </a>

                  {/* Subpage 3: Volunteering */}
                  <a
                    href="/volunteer"
                    onClick={(e) => { e.preventDefault(); handleNavClick('/volunteer'); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.65rem 0.8rem',
                      borderRadius: '14px',
                      textDecoration: 'none',
                      background: activeRoute === '/volunteer' ? 'var(--primary-subtle)' : 'transparent',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary-subtle)'; }}
                    onMouseLeave={(e) => { if (activeRoute !== '/volunteer') e.currentTarget.style.background = 'transparent'; }}
                  >
                    <img
                      src="/images/believers.jpg"
                      alt="Volunteering Thumbnail"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.8)'
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary-dark)', lineHeight: '1.2' }}>
                        Volunteering
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                        Field Missionary Service
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </li>

          <li>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('/contact'); }}
              className={`nav-link ${activeRoute === '/contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </li>

          {/* Mobile CTA */}
          {mobileOpen && (
            <li style={{ marginTop: '1rem' }}>
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => { setMobileOpen(false); onOpenDownload(); }}
              >
                <Download size={18} /> Get the App
              </button>
            </li>
          )}
        </ul>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            className="btn btn-primary"
            style={{ display: mobileOpen ? 'none' : 'inline-flex' }}
            onClick={onOpenDownload}
          >
            <Download size={18} /> Get the App
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
