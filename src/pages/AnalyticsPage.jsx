import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

// Component 1: Matrix Digital Stream Canvas
const MatrixRain = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    
    let frameId;
    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 12, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(34, 211, 238, 0.15)';
      ctx.font = '12px monospace';
      
      for(let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "0" : "1";
        ctx.fillText(text, i * 20, drops[i] * 12);
        if(drops[i] * 12 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      frameId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frameId);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />;
};

// Component 2: Interactive Realtime Graph Node
const AnalyticalGraph = () => {
  const [nodes, setNodes] = useState(Array.from({ length: 6 }, (_, i) => ({ id: i, val: 50 + Math.random() * 100 })));
  useEffect(() => {
    const timer = setInterval(() => {
      setNodes(prev => prev.map(n => ({ ...n, val: 30 + Math.random() * 140 })));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-48 w-full flex items-end gap-2 border-b border-l border-white/10 p-2 bg-black/30 rounded-lg relative overflow-hidden">
      {nodes.map((node) => (
        <div key={node.id} className="flex-1 flex flex-col items-center justify-end h-full">
          <div 
            className="w-full bg-gradient-to-t from-cyan-500 to-indigo-500 rounded-t transition-all duration-1000 ease-out"
            style={{ height: `${(node.val / 200) * 100}%` }}
          />
          <span className="text-[10px] font-mono text-gray-500 mt-2">{Math.round(node.val)}</span>
        </div>
      ))}
    </div>
  );
};

// Component 3: GSAP Animate-in Stat Box
const StatBox = ({ title, count }) => {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(boxRef.current, { opacity: 0, scale: 0.9, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power3.out" });
  }, { scope: boxRef });

  return (
    <div ref={boxRef} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md relative group hover:border-cyan-500/50 transition-colors">
      <div className="text-gray-400 text-xs uppercase tracking-widest">{title}</div>
      <div className="text-4xl font-mono font-bold mt-2 text-white">{count}</div>
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
    </div>
  );
};

// Component 4: Algorithmic Status Badge
const StatusBadge = ({ label, active }) => (
  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
    <span className={`w-2.5 h-2.5 rounded-full ${active ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'bg-rose-400'} animate-pulse`} />
    <span className="text-xs font-mono tracking-wider text-gray-300">{label}</span>
  </div>
);

// Component 5: Linear Action Processing Bar
const ProcessingTimeline = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 0.5));
    }, 40);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full bg-white/5 rounded-full h-2 relative overflow-hidden border border-white/10">
      <div className="bg-cyan-400 h-full transition-all duration-75 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
};

// Component 6: Interactive Terminal Feed
const TerminalLogs = () => {
  const [logs, setLogs] = useState(["[SYSTEM]: Kernel initialization successful.", "[NET]: Secure encryption layers mapped."]);
  useEffect(() => {
    const events = ["Pipeline compiled successfully.", "Buffer cache optimized.", "Telemetry dispatch complete.", "Asynchronous frame matrix stabilized."];
    const timer = setInterval(() => {
      setLogs(prev => [...prev.slice(-4), `[LOG]: ${events[Math.floor(Math.random() * events.length)]}`]);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black/80 rounded-2xl p-6 border border-white/10 font-mono text-xs text-cyan-400/90 space-y-2 h-40 overflow-y-hidden shadow-inner">
      {logs.map((log, i) => (
        <div key={i} className="whitespace-nowrap transition-all duration-300">{log}</div>
      ))}
    </div>
  );
};

// Component 7: Radial Radial Dial Visualization
const RadialRing = ({ percentage = 78 }) => {
  const circ = 2 * Math.PI * 40;
  const strokePct = ((100 - percentage) * circ) / 100;
  return (
    <div className="relative w-24 h-24 flex items-center justify-center bg-white/5 rounded-full border border-white/10">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
        <circle cx="48" cy="48" r="40" stroke="#22d3ee" strokeWidth="6" fill="transparent"
                strokeDasharray={circ} strokeDashoffset={strokePct} className="transition-all duration-1000 ease-out" />
      </svg>
      <span className="absolute text-sm font-mono font-bold">{percentage}%</span>
    </div>
  );
};

// Component 8: GSAP Triggered Stagger List
const StackGrid = () => {
  const listRef = useRef(null);
  useGSAP(() => {
    gsap.from(listRef.current.children, { opacity: 0, x: -30, stagger: 0.15, ease: "back.out(1.7)", duration: 0.8 });
  }, { scope: listRef });

  return (
    <div ref={listRef} className="space-y-3">
      {["Compute Allocation Layer", "Global Network Core", "Memory Leak Prevention"].map((txt, i) => (
        <div key={i} className="p-4 bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors">
          <span className="text-sm font-light">{txt}</span>
          <span className="text-xs font-mono text-indigo-400">Node-0{i+1}</span>
        </div>
      ))}
    </div>
  );
};

// Component 9: Magnet Dial Container
const InteractiveDial = () => {
  const [rotation, setRotation] = useState(0);
  return (
    <div 
      className="w-32 h-32 rounded-full border-4 border-dashed border-white/20 flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
      onClick={() => setRotation(r => r + 45)}
    >
      <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-500"
           style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="w-2 h-8 bg-cyan-400 rounded-full transform -translate-y-4" />
      </div>
    </div>
  );
};

// Component 10: Copy-to-Clipboard Key Panel
const SecureKeyPanel = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("0xKEY_FMT_ASYNCHRONOUS_9921_PIPELINE");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="p-4 bg-indigo-950/20 border border-indigo-500/20 rounded-2xl flex items-center justify-between">
      <div className="font-mono text-xs text-indigo-300">0xKEY_FMT_ASYNCHRONOUS...</div>
      <button onClick={handleCopy} className="text-xs font-mono bg-indigo-500/20 px-3 py-1 rounded border border-indigo-500/30 text-indigo-200 active:scale-95 transition-transform">
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default function AnalyticsPage() {
  const mainRef = useRef(null);

  useGSAP(() => {
    gsap.from(".gsap-header", { opacity: 0, y: -50, duration: 1, ease: "power4.out" });
    gsap.from(".gsap-card", { opacity: 0, scale: 0.95, y: 30, stagger: 0.2, duration: 0.8, ease: "power2.out" });
  }, { scope: mainRef });

  return (
    <div ref={mainRef} className="bg-[#0a0a0c] min-h-screen text-white p-8 selection:bg-indigo-500/30 font-sans relative overflow-hidden">
      <MatrixRain />

      {/* SECTION 1: SYSTEM MONITOR CONTROL HEADER */}
      <header className="gsap-header max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-8 mb-12 gap-6 relative z-10">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">// Telemetry System Engine</div>
          <h1 className="text-4xl font-black mt-2 tracking-tight">Core Node Operation</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <StatusBadge label="Mainframe Active" active={true} />
          <StatusBadge label="Cluster Synced" active={true} />
        </div>
      </header>

      {/* SECTION 2: HIGH-DIMENSIONAL COUNTERS MATRIX */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 relative z-10">
        <StatBox title="System Compute Thread Load" count="24.8 TFLOPS" />
        <StatBox title="Active Context Buffers" count="1,024" />
        <StatBox title="Network Processing Layer" count="9,482 p/s" />
        <StatBox title="Algorithmic Fail Rate" count="0.000%" />
      </section>

      {/* SECTION 3: CORE QUANTUM VISUAL ANALYTICS */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
        <div className="gsap-card bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md md:col-span-2">
          <h3 className="text-lg font-bold mb-4">Live Matrix Bandwidth Throughput</h3>
          <AnalyticalGraph />
          <div className="mt-4">
            <ProcessingTimeline />
          </div>
        </div>
        <div className="gsap-card bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Memory Allocation Efficiency</h3>
            <p className="text-xs text-gray-400 mb-6">Realtime garbage collection layer validation cycles.</p>
          </div>
          <div className="flex justify-around items-center">
            <RadialRing percentage={89} />
            <RadialRing percentage={42} />
          </div>
        </div>
      </section>

      {/* SECTION 4: LAYER ARCHITECTURE & COMPUTE OPTIMIZATION */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
        <div className="gsap-card bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
          <h3 className="text-lg font-bold mb-4">Pipeline Thread Hierarchy</h3>
          <StackGrid />
        </div>
        <div className="gsap-card bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between gap-6">
          <h3 className="text-lg font-bold">Data Security Interface</h3>
          <SecureKeyPanel />
          <div className="flex justify-center py-4">
            <InteractiveDial />
          </div>
        </div>
      </section>

      {/* SECTION 5: LOWER DATA STREAM OUTPUT */}
      <section className="max-w-7xl mx-auto relative z-10">
        <div className="gsap-card bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
          <h3 className="text-lg font-bold mb-4">Live Diagnostic Subsystem Stream Output</h3>
          <TerminalLogs />
        </div>
      </section>
    </div>
  );
}