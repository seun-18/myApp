import React from 'react';

export default function Contact() {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      backgroundColor: '#000000', 
      color: '#ffffff', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '100px 20px 140px 20px',
      boxSizing: 'border-box'
    }}>
      <h1 className="animate-fade-in-up" style={{ 
        fontSize: "clamp(2.5rem, 6vw, 4.2rem)", 
        fontFamily: '"Dancing Script", cursive',
        background: "linear-gradient(135deg, #ffffff 30%, #03b3c3 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: '15px',
        textAlign: 'center'
      }}>
        Let's Create Together
      </h1>

      <p className="animate-fade-in-up" style={{ 
        fontFamily: '"Playwrite ID", cursive', 
        color: 'rgba(255, 255, 255, 0.7)', 
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        maxWidth: '550px',
        textAlign: 'center',
        marginBottom: '40px',
        animationDelay: '0.2s'
      }}>
        Have a videography project, motion graphics concept, or collaboration in mind? Reach out to Unisoft Art.
      </p>

      <div 
        className="animate-fade-in-up" 
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: '35px',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '24px',
          border: '1px solid rgba(3, 179, 195, 0.25)',
          animation: 'fadeInUp 0.8s ease-out forwards, pulseGlow 4s infinite ease-in-out',
          animationDelay: '0.3s',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxSizing: 'border-box'
        }}
      >
        <input 
          type="text" 
          placeholder="Your Name" 
          style={{
            width: '100%',
            padding: '14px 18px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease'
          }}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          style={{
            width: '100%',
            padding: '14px 18px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease'
          }}
        />
        <textarea 
          rows="4" 
          placeholder="Tell us about your project..." 
          style={{
            width: '100%',
            padding: '14px 18px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
            resize: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease'
          }}
        />
        <button 
          style={{
            padding: '16px',
            background: 'linear-gradient(135deg, #03b3c3, #0a0a12)',
            border: '1px solid rgba(3, 179, 195, 0.5)',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: '"Dancing Script", cursive',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(3, 179, 195, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0px) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}