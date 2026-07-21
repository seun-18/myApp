import React from "react";
import TextType from '../component/TextType';
import ShinyText from '../component/ShinyText';
import Folder from '../component/Folder';
import BounceCards from '../component/BounceCards';

import subwayVideo from '../assets/coverr-moving-subway-3744-1080p.mp4';

export default function Home() {
  const sampleImages = [
    "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop"
  ];

  return (
    <div style={{ width: "100%", backgroundColor: "#000000", overflowX: "hidden" }}>
      
      {/* ────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION
      ──────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "600px",
          zIndex: 10,
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0px 30px 100px 0px rgba(255, 255, 255, 0.3)",
        }}
      >
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
            animation: "fadeIn 1.2s ease-out"
          }}
        >
          <source src={subwayVideo} type="video/mp4" />
        </video>

        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.55)", zIndex: 2 }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, pointerEvents: "none" }}>
          <div className="hero-text animate-fade-in-up" style={{ maxWidth: '850px', padding: '20px', textAlign: 'center' }}>
            
            <div 
              style={{ 
                fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
                margin: '5px', 
                lineHeight: 1.1, 
                fontFamily: '"Dancing Script", cursive',
                fontWeight: 700,
              }}
            >
              <ShinyText
                text="Unisoft Art"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#333"
                spread={120}
                direction="left"
              />
            </div>

            <div 
              style={{ 
                fontSize: 'clamp(1.1rem, 2.8vw, 1.8rem)', 
                marginTop: '15px',
                fontFamily: '"Playwrite ID", cursive',
                background: "linear-gradient(135deg, #ffffff 70%, #333333 20%, #cccccc 10%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
            >
              <TextType 
                text={[
                  "Cinematic Videography & Motion Art",
                  "Capturing Visual Stories That Move",
                  "Commercial & Creative Video Production",
                  "Bringing Concepts to Life Frame by Frame",
                  "High-End Visual Editing & Color Grading"
                ]}
                typingSpeed={65}
                pauseDuration={1800}
                showCursor
                cursorCharacter="_"
                deletingSpeed={40}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 2: BOUNCE CARDS GALLERY
      ──────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          zIndex: 20,
          width: "100%",
          padding: "100px 20px",
          background: "linear-gradient(180deg, #000000 0%, #0a0a12 100%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0px 30px 100px 0px rgba(255, 255, 255, 0.3)",
          minHeight: '100vh',
          color: "#ffffff",
          boxSizing: "border-box"
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontFamily: '"Dancing Script", cursive',
              marginBottom: "18px",
              background: "linear-gradient(135deg, #ffffff 30%, #03b3c3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Crafting Digital Experiences
          </h2>
          <p
            className="animate-fade-in-up"
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontFamily: '"Playwrite ID", cursive',
              lineHeight: 1.7,
              maxWidth: "680px",
              margin: "0 auto 50px auto",
              animationDelay: "0.2s"
            }}
          >
            Combining high-definition video production, smooth motion graphics, and creative direction.
          </p>

          <div className="animate-fade-in-up" style={{ width: "100%", display: "flex", justifyContent: "center", padding: "20px 0", animationDelay: "0.4s" }}>
            <BounceCards
              className="custom-bounce-cards"
              images={sampleImages}
              containerWidth={600}
              containerHeight={350}
              animationDelay={0.5}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.8)"
              transformStyles={[
                "rotate(-12deg) translate(-170px, 0px)",
                "rotate(-6deg) translate(-85px, 10px)",
                "rotate(0deg) translate(0px, 0px)",
                "rotate(6deg) translate(85px, 10px)",
                "rotate(12deg) translate(170px, 0px)"
              ]}
            />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 3: PORTFOLIO FOLDER VAULT
      ──────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          zIndex: 30,
          width: "100%",
          padding: "100px 20px",
          background: "linear-gradient(180deg, #0a0a12 0%, #000000 100%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0px 15px 50px 0px rgba(255, 255, 255, 0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          boxSizing: "border-box"
        }}
      >
        <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontFamily: '"Dancing Script", cursive',
              marginBottom: "16px",
              background: "linear-gradient(135deg, #ffffff 0%, #03b3c3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Project Vault & Assets
          </h2>

          <p
            className="animate-fade-in-up"
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontFamily: '"Playwrite ID", cursive',
              lineHeight: 1.7,
              maxWidth: "620px",
              margin: "0 auto 30px auto",
              animationDelay: "0.2s"
            }}
          >
            Explore our interactive media archive containing raw video cuts, motion graphic presets, and full campaign breakdowns.
          </p>

          <div className="animate-float" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "400px" }}>
            <Folder size={3.0} color="#03b3c3" className="custom-folder" />
          </div>
        </div>
      </section>

    </div>
  );
}