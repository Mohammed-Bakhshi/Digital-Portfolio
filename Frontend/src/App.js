import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import linkedin from './image/likedin.png';
import ContactMePage from './contactme.js';
import AboutMePage from './Aboutme.js';
import github from './image/github.png';
import email from './image/email.png';
import facebook from './image/Facebook.png';
import instagram from './image/instagram.png';

const mainContentStyle = {
  backgroundColor: '#171717',
  color: '#aaa',
  textAlign: 'center',
  padding: '2rem',
  minHeight: '100vh',
  overflow: 'hidden',
  position: 'relative',
};

const Portfolio = () => {
  const [isMobileView, setIsMobileView] = useState(false);

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
    const handleResize = () => {
      const minHeight = window.innerHeight;
      document.documentElement.style.setProperty('--min-height', `${minHeight}px`);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buttonStyle = {
    fontSize: isMobileView ? '13px' : '20px',
    border: '2px solid #C4DCFF',
    backgroundColor: 'transparent',
    color: '#aaa',
    padding: isMobileView ? '8px 1px' : '8px 15px',
    borderRadius: '10%',
    cursor: 'pointer',
    maxWidth: '180px',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const additionalButtonsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: isMobileView ? '80%' : 'unset',
    gap: '10%',
    position: 'fixed',
    bottom: isMobileView ? '25%' : '35%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  };

  const footerStyle = {
    backgroundColor: '#171717',
    color: '#aaa',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: isMobileView ? '10px' : '-15px',
    width: isMobileView ? '105%' : '100%',
    display: 'flex',
    justifyContent: isMobileView ? 'center' : 'flex-end',
    gap: isMobileView ? '30px' : '10px',
    right: isMobileView ? '-40px' : '10px',
  };

  const logoStyle = {
    marginRight: '0px',
    cursor: 'pointer',
    transition: 'filter 0.3s',
    width: isMobileView ? '20px' : '30px',
    height: isMobileView ? '20px' : '30px',
    borderRadius: '60%',
  };

  const grayscaleLogoStyle = {
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s',
  };

  const linksContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0rem',
    gap:isMobileView? '35%': '40%',
  };

  const linkStyle = {
    fontSize: isMobileView?'80%':'120%',
    marginRight:isMobileView?'-20px': '-2%',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#aaa',

    borderBottom: '2px solid #aaa',
  };

  

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
            <Link to="/about" style={{ ...linkStyle }}>About</Link>
            <Link to="/" style={{ ...linkStyle }}>Home</Link>
            <Link to="/contact" style={{ ...linkStyle }}>Contact</Link>
          </div>

                  <div
                    style={{
                      textAlign: 'left',
                      top: '40%',
                      position: 'fixed',
                      width: isMobileView ? '75%' : '50%',
                      transform: 'translateY(-50%)',
                      marginLeft: isMobileView?'10%':'27%',
                    }}
                  >
                    <h2>
                      <span style={{ fontSize: isMobileView ? '20px' : '30px', fontWeight: 'normal', top: isMobileView ? '10%' : 'unset' }}>Hi, my name is Mohammed 👋</span>
                      <br />
                      <span style={{ fontSize: isMobileView ? '25px' : '40px', fontWeight: 'bold', top: isMobileView ? '10%' : 'unset' }}>I have been coding and analyzing data for 5+ years🤖</span>
                    </h2>
                  </div>

                  

                  <div style={additionalButtonsContainerStyle}>
                    {isMobileView ? null : (
                      <Link
                        to="/about"
                        style={Object.assign({}, buttonStyle, {
                          minWidth: '150px',
                          textDecoration: 'none',
                        })}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#001f33';
                          e.target.style.color = '#bfbfbf';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#aaa';
                        }}
                      >
                        About Me
                      </Link>
                    )}
                      <a
                        href="https://react--portfolio.s3.eu-west-2.amazonaws.com/Mohammed+Bakhshi+CV+.pdf"
                        download="Mohammed_Bakhshi_CV.pdf"
                        style={Object.assign({}, buttonStyle, {
                          minWidth: '150px',
                          textDecoration: 'none',
                        })}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#001f33';
                          e.target.style.color = '#bfbfbf';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = '#aaa';
                        }}
                      >
                        View my CV
                      </a>
                    
                    
                      {!isMobileView && (
  <Link
    to="/contact"
    style={Object.assign({}, buttonStyle, {
      minWidth: '150px',
      textDecoration: 'none',
    })}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = '#001f33';
      e.target.style.color = '#bfbfbf';
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.color = '#aaa';
    }}
  >
    Contact Me
  </Link>
)}
                    
                  </div>
                </div>
              </div>

             
                
              <div style={footerStyle}>
                <a href="https://www.linkedin.com/in/mohammed-bakhshi/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'grayscale(0%)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'grayscale(100%)';
                    }}
                  />
                </a>

                <a href="https://github.com/Mohammed-Bakhshi" target="_blank" rel="noopener noreferrer">
                  <img
                    src={github}
                    alt="GitHub"
                    style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'grayscale(0%)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'grayscale(100%)';
                    }}
                  />
                </a>

                <a href="https://www.facebook.com/mohammed.bakhshi/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'grayscale(0%)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'grayscale(100%)';
                    }}
                  />
                </a>

                <a href="https://instagram.com/mohammedbakhshi/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'grayscale(0%)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'grayscale(100%)';
                    }}
                  />
                </a>

                <a href="mailto:mohammedbakhshi@hotmail.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={email}
                    alt="Email"
                    style={Object.assign({}, logoStyle, grayscaleLogoStyle)}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'grayscale(0%)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'grayscale(100%)';
                    }}
                  />
                </a>
              </div>

              <div
  style={
    isMobileView
      ? null
      : {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#aaa',
          position: 'fixed',
          bottom: '50px',
          width: '100%',
          fontSize: '80%',
          gap: '10%',
        }
  }
>
  {!isMobileView && <p style={{ marginRight: '10px' }}>Built using React.js</p>}
  {!isMobileView && <p style={{ marginRight: '10px' }}>Hosted by me using AWS</p>}
  {!isMobileView && <p style={{ marginRight: '10px' }}>Powered by Node.js</p>}
</div>
            </>
          }
        />

        <Route path="/contact" element={<ContactMePage />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
    </Router>
  );
};

export default Portfolio;
                                            