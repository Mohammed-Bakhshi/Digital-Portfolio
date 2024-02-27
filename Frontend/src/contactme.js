import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
        // You can remove the anime.js animation here if you don't need it
      }
    };

    handleResize();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const openCV = () => {
    window.open("https://react--portfolio.s3.eu-west-2.amazonaws.com/Mohammed+Bakhshi+CV+.pdf", "_blank");
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
    bottom: '130%',
    right: '50%',
    transform: 'translateX(50%)',
    opacity: '0',
    transition: 'opacity .2s ease-in',
    fontSize: '14px',
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
    width: isMobileView ? '30px' : '50px',
    height: isMobileView ? '30px' : '50px',
    borderRadius: '30%',
  };

  const logoContainerStyle = {
    display: 'flex',
    flexDirection: isMobileView ? 'row' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:isMobileView? '0%':'0%',
    gap:'5%',
    marginTop:isMobileView?'80%':'30%'
  };

  return (
    <>
      <style>
        {`
          ::selection {
            color: #00e6e6;
          }
        `}
      </style>
      
      <div style={{ position: 'relative' }}>
        <div style={mainContentStyle}>
          <div style={linksContainerStyle}>

          <a href="https://react--portfolio.s3.eu-west-2.amazonaws.com/Mohammed+Bakhshi+CV+.pdf" style={{ ...linkStyle }} target="_blank">View CV</a> 
           
            <Link to="/" style={{ ...linkStyle }}>Home</Link>
            <Link to="/about" style={{ ...linkStyle }}>About</Link>
          </div>

          <div style={{ fontSize: '20px',position:'relative',top:isMobileView?'100px':'200px',left:'0%' }}> {/* Add a div here with fontSize set to 20px */}
    <h1>Contact me</h1> {/* Move this line inside the div */}
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
