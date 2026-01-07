import React from 'react';

const App = () => {
  // Inline Styles Objects
  const styles = {
    container: {
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      padding: '0',
      margin: '0',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 50px',
      borderBottom: '1px solid #1e293b',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      position: 'sticky',
      top: 0,
    },
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 20px',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '800',
      margin: '0 0 20px 0',
      background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    button: {
      padding: '12px 30px',
      backgroundColor: '#22d3ee',
      color: '#0f172a',
      border: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '1rem',
      marginTop: '20px',
    },
    section: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '50px 20px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginTop: '30px',
    },
    card: {
      backgroundColor: '#1e293b',
      padding: '25px',
      borderRadius: '12px',
      border: '1px solid #334155',
    },
    tag: {
      display: 'inline-block',
      backgroundColor: 'rgba(34, 211, 238, 0.1)',
      color: '#22d3ee',
      padding: '4px 10px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      marginRight: '8px',
      marginTop: '10px',
      fontWeight: '600',
    }
  };

  const projects = [
    { title: "LearnPath", tech: ["React", "Node.js"], desc: "Dynamic Learning Path Recommendation System." },
    { title: "The Crafted Gentleman", tech: ["Wix", "UI/UX"], desc: "Premium E-commerce platform project." },
    { title: "C++ Logic Engine", tech: ["C++", "DSA"], desc: "High-performance logic and puzzle solver." }
  ];

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22d3ee' }}>MY_DEV_SPACE</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>About</span>
          <span>Projects</span>
        </div>
      </nav>

      {/* Hero */}
      <header style={styles.hero}>
        <h1 style={styles.title}>Hello, I'm a Developer</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px' }}>
          Specializing in <b>React, Node.js, and C++</b>. Currently building 
          intelligent web solutions from Siwan, Bihar.
        </p>
        <button style={styles.button}>Get In Touch</button>
      </header>

      {/* Projects */}
      <section style={styles.section}>
        <h2 style={{ borderLeft: '4px solid #22d3ee', paddingLeft: '15px' }}>Featured Projects</h2>
        <div style={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} style={styles.card}>
              <h3 style={{ margin: '0 0 10px 0', color: '#f1f5f9' }}>{p.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5' }}>{p.desc}</p>
              <div>
                {p.tech.map((t, idx) => (
                  <span key={idx} style={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '50px', borderTop: '1px solid #1e293b', color: '#475569' }}>
        <p>© 2026 Developer Portfolio | Built with React</p>
      </footer>
    </div>
  );
};

export default App;