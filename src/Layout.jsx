import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{}}>
      <nav style={{ display:'flex', gap:'25px',
  fontFamily: '"Dancing Script", cursive',
  fontWeight: 600,
  fontStyle: 'normal', padding:'1px', background: 'transparent', position:'absolute', margin:'auto', bottom:'20%', justifySelf:'center', borderBottom:'2px solid #ccc', zIndex:'100'}}>
        {/* Logo Branding */}
        <h1>
          Unisoft
        </h1>

        <span style={{borderBottom: '2px solid #000', width: '100px'}}></span>

        {/* Links Container */}
        <div style={{gap:'20px', padding:'20px',display:'flex'}}>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/canvas">Canvas</Link>
          <Link to="/contact" >Contact</Link>
        </div>
      </nav>

      {/* Main Content (Swapped components like Home render here) */}
      <main style={{ width: '100%', zIndex:'100'}}>
        <Outlet />
      </main>
    </div>
  );
}

 