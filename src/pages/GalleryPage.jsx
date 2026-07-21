import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Component 1: Sticky Progress Navigation
const ProgressBar = ({ scrollYProgress }) => (
  <motion.div 
    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 origin-left z-50"
    style={{ scaleX: scrollYProgress }}
  />
);

// Component 2: Cinematic Text Revealer
const HeroTitle = ({ text }) => {
  const words = text.split(" ");
  return (
    <h1 className="text-6xl font-black uppercase tracking-tighter text-white overflow-hidden flex flex-wrap gap-x-4">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-1">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
};

// Component 3: Dynamic Particles Canvas
const MicroParticles = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

// Component 4: Magnetic Action Button
const MagneticButton = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };
  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="px-8 py-4 bg-white text-black font-bold rounded-full relative overflow-hidden group shadow-lg"
    >
      <span className="relative z-10">{children}</span>
      <motion.div className="absolute inset-0 bg-cyan-400 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-full z-0" />
    </motion.button>
  );
};

// Component 5: Expanding Accordion Cards
const AccordionItem = ({ id, title, description, activeId, setActiveId }) => {
  const isOpen = id === activeId;
  return (
    <motion.div 
      layout 
      onClick={() => setActiveId(isOpen ? null : id)}
      className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-md cursor-pointer overflow-hidden mb-4"
    >
      <motion.h3 layout="position" className="text-xl font-bold text-white flex justify-between items-center">
        {title}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>↓</motion.span>
      </motion.h3>
      <AnimatePresence>
        {isOpen && (
          <motion.p 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-gray-400 mt-4 text-sm leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Component 6: Parallax Showcase Card
const ParallaxCard = ({ title, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="h-80 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 flex flex-col justify-between group relative overflow-hidden shadow-2xl"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/30 transition-all duration-500" />
      <span className="text-xs tracking-widest text-cyan-400 uppercase font-mono">Project 0{index + 1}</span>
      <h4 className="text-3xl font-light text-white group-hover:text-cyan-300 transition-colors">{title}</h4>
    </motion.div>
  );
};

// Component 7: Smooth Draggable Filter Carousel
const FilterCarousel = () => {
  const constraintsRef = useRef(null);
  const categories = ["All Work", "Creative Dev", "3D WebGL", "UI Systems", "Product Strategy", "Research"];
  return (
    <div ref={constraintsRef} className="w-full overflow-hidden cursor-grab active:cursor-grabbing py-4">
      <motion.div drag="x" dragConstraints={constraintsRef} className="flex gap-4 w-max px-4">
        {categories.map((cat, i) => (
          <motion.span 
            key={i} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm backdrop-blur-sm shadow-sm whitespace-nowrap"
          >
            {cat}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

// Component 8: Reveal-on-Scroll Metric Counter
const ScrollMetric = ({ value, label }) => (
  <motion.div 
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100 }}
    className="text-center p-6 border-r border-white/10 last:border-none"
  >
    <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono">{value}</div>
    <div className="text-xs text-gray-500 uppercase mt-2 tracking-widest">{label}</div>
  </motion.div>
);

// Component 9: Follow-Me Custom Cursor Target
const CursorTarget = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  return (
    <motion.div 
      className="w-12 h-12 rounded-full border border-cyan-400/50 fixed pointer-events-none z-40 hidden md:block"
      animate={{ x: mousePos.x - 24, y: mousePos.y - 24 }}
      transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
    />
  );
};

// Component 10: Interactive Contact Form Input
const AnimatedInput = ({ label, placeholder, type = "text" }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative mb-6 w-full">
      <motion.label 
        animate={{ y: focused ? -20 : 0, scale: focused ? 0.85 : 1, color: focused ? '#22d3ee' : '#9ca3af' }}
        className="absolute left-0 top-2 text-gray-400 transition-all origin-left pointer-events-none"
      >
        {label}
      </motion.label>
      <input 
        type={type} 
        placeholder={focused ? placeholder : ""}
        onFocus={() => setFocused(true)}
        onBlur={(e) => !e.target.value && setFocused(false)}
        className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
      />
    </div>
  );
};

export default function GalleryPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [activeAccordion, setActiveAccordion] = useState(0);

  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div ref={containerRef} className="bg-[#0a0a0c] min-h-screen relative text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <ProgressBar scrollYProgress={scrollYProgress} />
      <CursorTarget />
      
      {/* SECTION 1: HERO OUTPOST */}
      <section className="min-h-screen flex flex-col justify-center px-8 relative border-b border-white/5">
        <MicroParticles />
        <motion.div style={{ opacity: opacityTransform, scale: scaleTransform }} className="max-w-4xl z-10">
          <HeroTitle text="Engineered Immersive Digital Experiences" />
          <p className="text-xl text-gray-400 font-light max-w-xl mt-6 mb-8 leading-relaxed">
            Crafting scalable software design architectures paired with bleeding-edge micro-interactions and high-fidelity physics frameworks.
          </p>
          <MagneticButton>Initiate Exploration</MagneticButton>
        </motion.div>
      </section>

      {/* SECTION 2: INTERACTIVE FILTER MATRIX */}
      <section className="py-24 px-8 bg-[#0d0d11]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-4">// Production Index</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h3 className="text-4xl font-light">Curated Frameworks</h3>
            <FilterCarousel />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Quantum Compute UI", "Neural Synthetics", "Vector Fluid Engine"].map((title, i) => (
              <ParallaxCard key={i} title={title} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEM METRICS */}
      <section className="py-16 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <ScrollMetric value="99.9%" label="Render Precision" />
          <ScrollMetric value="120Hz" label="Fluid Refresh" />
          <ScrollMetric value="45M+" label="Pipelines Compiled" />
          <ScrollMetric value="0.0ms" label="Input Delay" />
        </div>
      </section>

      {/* SECTION 4: DEEP CAPABILITIES (ACCORDION) */}
      <section className="py-24 px-8 bg-[#0d0d11]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-mono mb-4">// Capabilities Spectrum</h2>
            <h3 className="text-4xl font-light tracking-tight mb-6 text-white">Architectural Mastery</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Every system is built with optimization structures to guarantee fluid frame rendering regardless of algorithmic logic load.
            </p>
          </div>
          <div>
            <AccordionItem 
              id={0} title="WebGL Native Pipelines" 
              description="Direct shader engineering to control frame computations without bottleneck structures."
              activeId={activeAccordion} setActiveId={setActiveAccordion}
            />
            <AccordionItem 
              id={1} title="Reactive Component Hooks" 
              description="State handling built strictly for asynchronous data updates cleanly decoupled from standard UI trees."
              activeId={activeAccordion} setActiveId={setActiveAccordion}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: INTEL TERMINAL */}
      <section className="py-24 px-8 bg-[#0a0a0c]">
        <div className="max-w-xl mx-auto border border-white/10 rounded-3xl p-8 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-8">Establish Connection</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <AnimatedInput label="Identify Entity Name" placeholder="Jane Doe" />
            <AnimatedInput label="Secure Digital Mail" placeholder="jane@network.xyz" type="email" />
            <div className="mt-8">
              <MagneticButton>Transmit Logs</MagneticButton>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}