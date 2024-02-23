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
  '&::-webkit-scrollbar': {
    width: '0px',
  },
};

const grayscaleLogoStyle = {
  filter: 'grayscale(100%)',
  transition: 'filter 0.3s',
};

const tooltipTextStyle = {
  visibility: 'hidden',
  width: 'auto',
  background: '#555',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '6px',
  padding: '5px 10px',
  position: 'absolute',
  zIndex: '1',
  bottom: '125%',
  left: '50%',
  transform: 'translateX(-50%)',
  opacity: '0',
  transition: 'opacity .2s ease-in',
  fontSize: '14px',
  whiteSpace: 'nowrap',
};

const phoneNumberTooltipStyle = {
  visibility: 'hidden',
  width: 'auto',
  background: '#555',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '6px',
  padding: '5px 10px',
  position: 'fixed',
  zIndex: '9999',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: '0',
  transition: 'opacity .2s ease-in',
  fontSize: '14px',
  whiteSpace: 'nowrap',
};

const Portfolio = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const textWrapperRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.innerWidth <= 1050;
      setIsMobileView(isMobile);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
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
  }, []);

  const handleMouseEnter = (e) => {
    e.target.style.filter = 'none'; 
    e.target.nextSibling.style.visibility = 'visible';
    e.target.nextSibling.style.opacity = '1';
    document.getElementById('phoneNumber').style.visibility = 'visible';
  };

  const handleMouseLeave = (e) => {
    e.target.style.filter = 'grayscale(100%)'; 
    e.target.nextSibling.style.visibility = 'hidden';
    e.target.nextSibling.style.opacity = '0';
    document.getElementById('phoneNumber').style.visibility = 'hidden';
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText('07387618788');
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 1500);
  };

  const handleNumberClick = () => {
    handleCopyClick(); 
  };

  const linksContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0rem',
    gap: isMobileView ? '35%' : '40%',
  };

  const linkStyle = {
    fontSize: isMobileView ? '80%' : '120%',
    marginRight: isMobileView ? '-20px' : '-4%',
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
    flexDirection: isMobileView ? 'row' : 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: isMobileView ? '90%' : '35%', 
    marginLeft: '0%', 
    position: 'relative',
    gap: '5%'
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

          .tooltip:hover .tooltip--text {
            visibility: visible;
            opacity: 1;
          }

          .tooltip .tooltip--text {
            visibility: hidden;
            width: auto;
            background-color: #555;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 10px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity .2s ease-in;
            font-size: 14px;
            white-space: nowrap;
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
          <div ref={textWrapperRef} className="ml12" style={{ position: 'absolute', top: isMobileView ? '20%' : '17%', left: isMobileView ? '15%' : '25%', maxWidth: isMobileView ? '75%' : '80%', textAlign: 'center' }}>
            <h2 className="ml12">
              Available to work <br />
              <span style={{ display: 'block', fontSize: isMobileView ? '11px' : '1px', fontWeight: 'normal', color: '#aaa' }}>Flexible salary</span>
            </h2>
          </div>
          <div style={{ ...phoneNumberTooltipStyle, top: isMobileView ? '50%' : '60%', color: '#fff' }}>
            <p
              id="phoneNumber"
              style={{ fontSize: '60px', cursor: 'pointer', margin: '0', visibility: 'hidden' }}
              onMouseEnter={() => setTooltipVisible(true)}
              onMouseLeave={() => setTooltipVisible(false)}
              onClick={handleNumberClick}
            >
              07387618788
            </p>
            {tooltipVisible && <span style={{ ...tooltipTextStyle, top: '100%', transform: 'translate(-50%, 0)', visibility: 'visible', opacity: '1' }}>{tooltipVisible === 'copied' ? 'Copied!' : 'Click to copy'}</span>}
          </div>
          <div style={logoContainerStyle}>
            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src={linkedin}
                alt="LinkedIn"
                style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <span className="tooltip--text" style={tooltipTextStyle}>Hire me on LinkedIn</span>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src={github}
                alt="GitHub"
                style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <span className="tooltip--text" style={tooltipTextStyle}>Check out my projects on GitHub</span>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src={facebook}
                alt="Facebook"
                style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <span className="tooltip--text" style={tooltipTextStyle}>Poke me on Facebook</span>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src={instagram}
                alt="Instagram"
                style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <span className="tooltip--text" style={tooltipTextStyle}>Follow me on Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
