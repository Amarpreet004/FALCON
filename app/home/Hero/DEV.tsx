import React from 'react'
import IphoneUI from './crousel/iphoneui'

// Styles object for component-specific styles
const styles = {
  container: {
    width: '98%',
    minHeight: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    background: '#5C0632',
    color: 'white',
    borderRadius: '2vw',
    boxShadow: '0 2vw 6vw rgba(0,0,0,0.18)',
    margin: '2vw auto',
    position: 'relative' as const,
  },
  content: {
    textAlign: 'center' as const,
    width: '100%',
    padding: '0 4%',
  },
  title: {
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '2vw',
    letterSpacing: '0.2vw',
    textShadow: '0.3vw 0.3vw 0.6vw rgba(0,0,0,0.4)',
    background: 'linear-gradient(45deg, #ffffff, #e2e8f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    opacity: 0.9,
    fontWeight: '300',
    lineHeight: '1.6',
    marginTop: '2vw',
  },
  badge: {
    display: 'inline-block',
    padding: '0.5vw 1.5vw',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '2vw',
    fontSize: 'clamp(0.7rem, 1vw, 1rem)',
    fontWeight: '500',
    marginBottom: '2vw',
    backdropFilter: 'blur(1vw)',
    border: '0.1vw solid rgba(255,255,255,0.3)',
  }
}


function DEV() {
  return (
    <div style={{ ...styles.container, flexDirection: 'row', paddingLeft: 'clamp(1rem, 8vw, 7rem)', paddingRight: 'clamp(1rem, 8vw, 7rem)' }}>
      <div style={{
        ...styles.content,
        textAlign: 'left',
        width: '60%',
        maxWidth: 'clamp(320px, 60vw, 700px)'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: '2.2rem',
          letterSpacing: '-1px',
          color: 'white',
        }}>
      Your ideas.<br />Our execution.<br />Zero stress.<br /> Full impact
        </h1>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e5e5e5', fontSize: '1.15rem', fontWeight: 400 }}>
            <span style={{ fontSize: '1.3em', marginRight: 12 }}>⚙️</span>
            End-to-End Expertise
          </li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e5e5e5', fontSize: '1.15rem', fontWeight: 400 }}>
            <span style={{ fontSize: '1.3em', marginRight: 12 }}>💲</span>
            Performance-Driven Design
          </li>
          <li style={{ display: 'flex', alignItems: 'center', color: '#e5e5e5', fontSize: '1.15rem', fontWeight: 400 }}>
            <span style={{ fontSize: '1.3em', marginRight: 12 }}>💬</span>
            Brand Amplification
          </li>
        </ul>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{
            background: 'white',
            color: '#181818',
            border: 'none',
            borderRadius: 9999,
            fontWeight: 600,
            fontSize: '1.1rem',
            padding: '0.85rem 2.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'background 0.2s',
          }}>Explore Services</button>
          <button style={{
            background: '#232323',
            color: 'white',
            border: 'none',
            borderRadius: 9999,
            fontWeight: 500,
            fontSize: '1.1rem',
            padding: '0.85rem 2.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'background 0.2s',
          }}>Get In Touch</button>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', minWidth: 0, marginLeft: '2.5rem',  left: 'clamp(1rem, 8vw, 7rem)' }}>
        <IphoneUI />
      </div>
    </div>
  );
}

export default DEV