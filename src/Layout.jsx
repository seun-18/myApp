import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkGradientStyle = {
    background: 'linear-gradient(135deg, #ffffff, #03b3c3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
    fontFamily: '"Dancing Script", cursive',
    fontSize: '1.25rem',
    fontWeight: 600,
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    display: 'inline-block'
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#000000', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      
      {/* ── Global CSS Keyframe Animations & Responsive Rules ── */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 25px rgba(3, 179, 195, 0.15); }
          50% { box-shadow: 0 0 45px rgba(3, 179, 195, 0.35); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-float {
          animation: floatSlow 5s ease-in-out infinite;
        }

        .nav-link:hover {
          transform: translateY(-2px) scale(1.05);
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-family: "Playwrite ID", cursive;
          font-size: 0.95rem;
          transition: color 0.3s ease, transform 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #03b3c3;
          transform: translateX(4px);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 12px 30px;
          background: rgba(10, 10, 18, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50px;
          z-index: 1000;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transition: border-color 0.3s ease;
        }

        .desktop-nav:hover {
          border-color: rgba(3, 179, 195, 0.4);
        }

        .mobile-hamburger {
          display: none;
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1001;
          background: rgba(10, 10, 18, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 10px;
          cursor: pointer;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: rgba(5, 5, 10, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid rgba(3, 179, 195, 0.3);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 100px 30px 40px 30px;
          transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        .mobile-sidebar.open {
          right: 0;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
        }
      `}</style>

      {/* ── Desktop Floating Nav ── */}
      <nav className="desktop-nav">
        <h1 style={{ 
          margin: 0, 
          fontFamily: '"Dancing Script", cursive', 
          fontSize: '1.8rem',
          background: 'linear-gradient(135deg, #ccc, #000, #fff)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent' 
        }}>
          Unisoft
        </h1>

        <span style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></span>

        <div style={{ gap: '20px', display: 'flex' }}>
          <Link to="/" className="nav-link" style={linkGradientStyle}>Home</Link>
          <Link to="/about" className="nav-link" style={linkGradientStyle}>About</Link>
          <Link to="/canvas" className="nav-link" style={linkGradientStyle}>Canvas</Link>
          <Link to="/contact" className="nav-link" style={linkGradientStyle}>Contact</Link>
        </div>
      </nav>

      {/* ── Mobile Hamburger Button ── */}
      <button 
        className="mobile-hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Navigation"
      >
        <div style={{ width: '24px', height: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ width: '100%', height: '2px', backgroundColor: '#03b3c3', borderRadius: '2px', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
          <span style={{ width: '100%', height: '2px', backgroundColor: '#ffffff', borderRadius: '2px', opacity: isMobileMenuOpen ? 0 : 1, transition: '0.3s' }}></span>
          <span style={{ width: '100%', height: '2px', backgroundColor: '#03b3c3', borderRadius: '2px', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
        </div>
      </button>

      {/* ── Mobile Sidebar Drawer ── */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <h2 style={{ 
          fontFamily: '"Dancing Script", cursive', 
          fontSize: '2.2rem', 
          color: '#ffffff', 
          marginBottom: '40px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '15px'
        }}>
          Unisoft Art
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <Link to="/" className="nav-link" style={linkGradientStyle} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" style={linkGradientStyle} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/canvas" className="nav-link" style={linkGradientStyle} onClick={() => setIsMobileMenuOpen(false)}>Canvas</Link>
          <Link to="/contact" className="nav-link" style={linkGradientStyle} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* ── Main Outlet Render ── */}
      <main style={{ width: '100%', zIndex: 10, flexGrow: 1 }}>
        <Outlet />
      </main>

      {/* ────────────────────────────────────────────────────────
          GLOBAL FOOTER
      ──────────────────────────────────────────────────────── */}
      <footer
        style={{
          width: "100%",
          backgroundColor: "#05050a",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "60px 20px 120px 20px", // Bottom padding clears room for floating nav
          boxSizing: "border-box",
          position: "relative",
          zIndex: 20,
          color: "#ffffff"
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "50px"
          }}
        >
          {/* Brand Info */}
          <div>
            <h2
              style={{
                fontSize: "2.4rem",
                fontFamily: '"Dancing Script", cursive',
                margin: "0 0 12px 0",
                background: "linear-gradient(135deg, #ffffff 30%, #03b3c3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Unisoft Art
            </h2>
            <p
              style={{
                fontFamily: '"Playwrite ID", cursive',
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                margin: 0,
                maxWidth: "300px"
              }}
            >
              Cinematic videography, motion graphics, and high-impact visual direction.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 style={{ fontSize: "1.2rem", fontFamily: '"Dancing Script", cursive', color: "#03b3c3", marginBottom: "18px" }}>
              Navigation
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/canvas" className="footer-link">Canvas</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Connect / Socials */}
          <div>
            <h3 style={{ fontSize: "1.2rem", fontFamily: '"Dancing Script", cursive', color: "#03b3c3", marginBottom: "18px" }}>
              Connect
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-link">YouTube</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingTop: "25px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            fontSize: "0.85rem",
            color: "rgba(255, 255, 255, 0.4)",
            fontFamily: "'Orbitron', sans-serif"
          }}
        >
          <div>
            © {new Date().getFullYear()} Unisoft Art. All rights reserved.
          </div>
          <div>
            Crafted for Cinematic Experiences
          </div>
        </div>
      </footer>

    </div>
  );
}