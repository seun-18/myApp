import { useMemo } from "react";
import Hyperspeed from "../component/Hyperspeed";
import TextType from '../component/TextType';
import ShinyText from '../component/ShinyText';

// 1. Import your local video asset here (use forward slashes '/')
import subwayVideo from '../assets/coverr-moving-subway-3744-1080p.mp4';

export default function Home() {
  return (
    <div style={{ width: "100%", backgroundColor: "#000000", }}>
      
      {/* ────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION
      ──────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "600px",
         
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          {/* 2. Use the imported variable inside JSX curly braces */}
          <source src={subwayVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            zIndex: 2,
          }}
        />

        {/* Centered Hero Text Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0, 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            pointerEvents: "none", 
          }}
        >
          <div className="hero-text" style={{ maxWidth: '800px', padding: '20px', textAlign: 'center' }}>
            
            <div className="shine-text" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', margin: '5px', lineHeight: 1.1 }}>
              <ShinyText
                text="Unisoft Art"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#333"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </div>

            <div className="type-text" style={{ color: 'white', fontSize: 'clamp(1.2rem, 3vw, 2rem)', marginTop: '15px' }}>
              <TextType 
                text={[
                  "Where Things Move", 
                  "Build amazing experiences!", 
                  "Happy coding!"
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                variableSpeedEnabled={false}
                cursorBlinkDuration={0.5}
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CONTENT SECTION */}
      <section
        style={{
          position: "relative",
          zIndex: 20,
          width: "100%",
          padding: "120px 20px",
          background: "linear-gradient(180deg, #000000 0%, #0a0a12 100%)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)",
              fontFamily: "'Orbitron', sans-serif",
              marginBottom: "18px",
              background: "linear-gradient(135deg, #ffffff 0%, #03b3c3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Crafting Digital Experiences
          </h2>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "680px",
              margin: "0 auto 40px auto",
            }}
          >
            Combining interactive 3D elements, smooth animations, and high-performance WebGL
            to create memorable web platforms.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {["High Performance", "Interactive 3D", "Modern Design"].map((title, i) => (
              <div
                key={i}
                style={{
                  padding: "30px",
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  textAlign: "left",
                }}
              >
                <h3 style={{ fontSize: "1.2rem", color: "#03b3c3", marginBottom: "10px" }}>
                  {title}
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.92rem", lineHeight: 1.5 }}>
                  Engineered with React and Three.js for seamless frame rates and intuitive user feedback.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}