import { useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  return (
    <section style={{ minHeight: '100vh', padding: '120px 24px 24px', color: '#fff' }}>
      <h1>Canvas</h1>
      <p>Canvas content placeholder.</p>
      <div ref={canvasRef} />
    </section>
  );
}
