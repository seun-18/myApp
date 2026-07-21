import React from 'react';
import ChromaGrid from '../component/ChromaGrid';

export default function About() {
  const items = [
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "Alex Morgan",
      subtitle: "Creative Director",
      handle: "@alexmorgan",
      borderColor: "#03b3c3",
      gradient: "linear-gradient(145deg, #03b3c3, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=33",
      title: "David K.",
      subtitle: "Lead Videographer",
      handle: "@davidk_films",
      borderColor: "#d856bf",
      gradient: "linear-gradient(180deg, #d856bf, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=12",
      title: "Sarah Chen",
      subtitle: "Motion Graphics Artist",
      handle: "@sarah_motion",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=60",
      title: "Marcus Vance",
      subtitle: "3D & VFX Specialist",
      handle: "@vance_vfx",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=47",
      title: "Elena Rostova",
      subtitle: "Senior Colorist",
      handle: "@elena_grade",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(145deg, #8B5CF6, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=68",
      title: "James Thorne",
      subtitle: "Sound Engineer",
      handle: "@thorne_audio",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(180deg, #F59E0B, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=53",
      title: "Chloe Bennett",
      subtitle: "Post-Production Lead",
      handle: "@chloe_post",
      borderColor: "#EC4899",
      gradient: "linear-gradient(145deg, #EC4899, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=15",
      title: "Leo Zhang",
      subtitle: "Web & Interactive Dev",
      handle: "@leozhang",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(180deg, #06B6D4, #000)",
      url: "#"
    }
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        position: "relative",
        paddingTop: "60px",
        paddingBottom: "120px",
        paddingLeft: "20px",
        paddingRight: "20px",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div
        className="animate-fade-in-up"
        style={{
          width: '100%',
          maxWidth: '600px',
          margin: "0 auto 60px auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontFamily: '"Dancing Script", cursive',
            fontWeight: 700,
            marginBottom: "16px",
            background: "linear-gradient(135deg, #ffffff 30%, #03b3c3 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          The Creative Minds
        </h1>

        <p
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontFamily: '"Playwrite ID", cursive',
            lineHeight: 1.6,
            maxWidth: "640px",
            margin: "0 auto",
          }}
        >
          Behind Unisoft Art is a collective of videographers, motion designers, and developers crafting high-impact visual stories.
        </p>
      </div>

      <div
        className="animate-fade-in"
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          animationDelay: "0.3s"
        }}
      >
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </div>
  );
}