import React, { useRef } from "react";
import DomeGallery from '../component/DomeGallery';

export default function Canvas() {
  const canvasRef = useRef(null);

  return (
    <section style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', paddingTop: '40px' }}>
      
      <div className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '20px', padding: '0 20px' }}>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontFamily: '"Dancing Script", cursive',
            fontWeight: 700,
            background: "linear-gradient(135deg, #ffffff 30%, #03b3c3 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: '0 0 10px 0'
          }}
        >
          3D Canvas Dome
        </h1>
        <p style={{ fontFamily: '"Playwrite ID", cursive', color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)' }}>
          Drag and explore our interactive visual archive in a 3D spherical environment.
        </p>
      </div>

      <div 
        style={{ 
          width: '100%', 
          height: 'calc(100vh - 160px)', 
          position: 'relative',
          animation: 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        <DomeGallery
          fit={0.8}
          minRadius={500}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale
        />
      </div>
      <div ref={canvasRef} />
    </section>
  );
}