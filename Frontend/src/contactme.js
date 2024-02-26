import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import email from './image/email.png';
import linkedin from './image/likedin.png';
import github from './image/github.png';
import facebook from './image/Facebook.png';
import instagram from './image/instagram.png';

const mainContentStyle = {
  backgroundColor: '#171717',
  color: '#aaa',
  textAlign: 'center',
  padding: '2rem',
  minHeight: '100vh',
  overflowY: 'scroll',
  position: 'relative',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
};

const grayscaleLogoStyle = {
  filter: 'grayscale(100%)',
  transition: 'filter 0.3s',
};

const Portfolio = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const textWrapperRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.innerWidth <= 1050;
      setIsMobileView(isMobile);
    };

    checkIsMobile();

    const handleResize = () => {
      const textWrapper = textWrapperRef.current;
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({ loop: true })
          .add({
            targets: '.ml12 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
          }).add({
            targets: '.ml12 .letter',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1100,
            delay: (el, i) => 100 + 30 * i
          });
      }
    };

    handleResize();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const tooltipTextStyle = {
    visibility: isMobileView ? 'hidden' : 'visible',
    width: 'auto',
    color: '#aaa',
    textAlign: 'center',
    borderRadius: '6px',
    position: 'absolute',
    top: isMobileView ? '10%' : '50%',
    left: '120%',
    marginRight: isMobileView ? '100px' : '0px',
    transform: isMobileView ? 'translateX(-50%)' : 'translateY(-50%)',
    opacity: '1',
    fontSize: isMobileView ? '11px' : '16px',
    whiteSpace: 'nowrap',
  };

  const linksContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0rem',
    gap: isMobileView ? '35%' : '40%',
  };

  const linkStyle = {
    fontSize: isMobileView ? '80%' : '120%',
    marginRight: isMobileView ? '-20px' : '-2%',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#aaa',
    borderBottom: '2px solid #aaa',
  };

  const logoStyle = {
    marginBottom: isMobileView ? '40px' : '90px',
    cursor: 'pointer',
    transition: 'filter 0.3s',
    width: isMobileView ? '30px' : '40px',
    height: isMobileView ? '30px' : '40px',
    margin: isMobileView ? '25px' : '20px',
    borderRadius: '30%',
  };

  const logoContainerStyle = {
    display: 'flex',
    flexDirection: isMobileView ? 'row' : 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      <style>
        {`
          ::selection {
            color: #00e6e6;
          }
          .ml12 {
            font-weight: 200;
            font-size: ${isMobileView ? '80%' : '1.5em'};
            text-transform: uppercase;
            letter-spacing: ${isMobileView ? '0.2rem' : '0.5em'};
          }

          .ml12 .letter {
            display: inline-block;
            line-height: ${isMobileView ? '1rem' : '2em'};
            color: #aaa;
          }
        `}
      </style>

      <div style={{ position: 'relative' }}>
        <div style={mainContentStyle}>
          <div style={linksContainerStyle}>
            <Link to="/about" style={{ ...linkStyle }}>About</Link>
            <Link to="/" style={{ ...linkStyle }}>Home</Link>
            <Link to="/contact" style={{ ...linkStyle }}>Contact</Link>
          </div>
          <div ref={textWrapperRef} className="ml12" style={{ position: 'relative', marginTop: '8%', marginLeft: '10%', maxWidth: isMobileView ? '75%' : '80%', textAlign: 'center' }}>
            <h2 className="ml12">
              Available to work <br />
              <span style={{ display: 'block', fontSize: isMobileView ? '11px' : '1px', fontWeight: 'normal', color: '#aaa' }}>Flexible salary</span>
            </h2>
          </div>
          <div style={logoContainerStyle}>
            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <a href="https://www.linkedin.com/in/mohammed-bakhshi/" target="_blank" rel="noopener noreferrer">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                  onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; e.target.nextSibling.style.color = '#0077B5'; }}
                  onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; e.target.nextSibling.style.color = '#aaa'; }}
                />
                <span className="tooltip--text" style={tooltipTextStyle}>Hire me on LinkedIn</span>
              </a>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <a href="https://github.com/Mohammed-Bakhshi" target="_blank" rel="noopener noreferrer">
                <img
                  src={github}
                  alt="GitHub"
                  style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                  onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; e.target.nextSibling.style.color = '#6cc644'; }}
                  onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; e.target.nextSibling.style.color = '#aaa'; }}
                />
                <span className="tooltip--text" style={tooltipTextStyle}>Check out my projects on GitHub</span>
              </a>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <a href="https://www.facebook.com/mohammed.bakhshi/" target="_blank" rel="noopener noreferrer">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                  onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; e.target.nextSibling.style.color = '#1877F2'; }}
                  onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; e.target.nextSibling.style.color = '#aaa'; }}
                />
                <span className="tooltip--text" style={tooltipTextStyle}>Poke me on Facebook</span>
              </a>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <a href="https://instagram.com/mohammedbakhshi/" target="_blank" rel="noopener noreferrer">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                  onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; e.target.nextSibling.style.color = '#C13584'; }}
                  onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; e.target.nextSibling.style.color = '#aaa'; }}
                />
                <span className="tooltip--text" style={tooltipTextStyle}>Follow me on Instagram</span>
              </a>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <a href="mailto:mohammedbakhshi@hotmail.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={email}
                  alt="Email"
                  style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                  onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; e.target.nextSibling.style.color = '#00e6e6'; }}
                  onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; e.target.nextSibling.style.color = '#aaa'; }}
                />
                <span className="tooltip--text" style={tooltipTextStyle}>Email me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
