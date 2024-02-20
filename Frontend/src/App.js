//imports 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import linkedin from './image/likedin.png';
import ContactMePage from './contactme.js';
import AboutMePage from './Aboutme.js';
import github from './image/github.png';
import email from './image/email.png';
import facebook from './image/Facebook.png';
import instagram from './image/instagram.png';

// defining css 
const mainContentStyle = {
  backgroundColor: '#0C0C0C',
  color: '#aaa',
  textAlign: 'center',
  padding: '2rem',
  minHeight: '100vh',
  overflow: 'hidden',
  position: 'relative',
};
// when to go to phone view 
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
//hide the scroll bar 
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'visible';
    };
  }, []);

  const buttonStyle = {
    fontSize: isMobileView? '13px':'20px',
    border: '2px solid #C4DCFF',
    backgroundColor: 'transparent',
    color: '#aaa',
    padding: isMobileView? '8px 1px' :'8px 15px',
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

  const footerStylePC = {
    backgroundColor: '#0C0C0C',
    color: '#aaa',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    right: '-10px',
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const footerStyleMobile = {
    backgroundColor: '#0C0C0C',
    color: '#aaa',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: '10px',
    width: '105%',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  };

  const logoStyle = {
    marginRight: '10px',
    right: '5%',
    cursor: 'pointer',
    transition: 'filter 0.3s',
    width:isMobileView? '20px': '30px',
    height: isMobileView? '20px':'30px',
    borderRadius: '60%',
    
  };

  const grayscaleLogoStyle = {
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s',
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div style={mainContentStyle} id="about-me">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '300px', maxWidth: '100%', marginBottom: '20px', textAlign: 'left' }}>

                  </div>

                  <style>
    {`
      ::selection {
        color: #00e6e6;
      }
    `}
  </style>

  <Link 
  to="/about" 
  style={{ 
    fontSize: isMobileView ? '2rem' : '120%', 
    position: 'fixed', 
    top: '5%', 
    left: isMobileView? '95%':'90%', 
    cursor: 'pointer', 
    textDecoration: 'none', 
    color: '#aaa' 
  }}
>
  {isMobileView ? "ℹ️" : <u>About</u>} {/* Changed the text to "About Me" on PC view */}
</Link>

                  <div style={{
                    textAlign: 'left',
                    top: '40%',
                    position: 'fixed',
                    width: isMobileView ? '90%' : '50%',
                    transform: 'translateY(-50%)',
                    marginLeft: '14%',
                  }}>

                    <h2>
                      <span style={{ fontSize: isMobileView ? '20px' : '30px', fontWeight: 'normal', top: isMobileView ? '10%' : 'unset' }}>
                        Hi, my name is Mohammed 👋<br />
                      </span>
                      <span style={{ fontSize: isMobileView ? '25px' : '40px', fontWeight: 'bold', top: isMobileView ? '10%' : 'unset' }}>
                        I have been coding and analyzing data for 5+ years🤖
                      </span>
                    </h2>
                  </div>

                  <div style={additionalButtonsContainerStyle}>
                    {isMobileView ? null : (
                      <Link
                        to="/about" // Change the path accordingly
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
                    <Link
                      to="/contact" // Change the path accordingly
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
                    {!isMobileView && (
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
                    )}
                  </div>
                </div>
              </div>

              <Link 
  to="/contact" 
  style={{ 
    fontSize: isMobileView ? '2rem' : '120%', 
    position: 'fixed', 
    top: '5%', 
    left: isMobileView? '5%':'5%', 
    cursor: 'pointer', 
    textDecoration: 'none', 
    color: '#aaa' 
  }}
>
  {isMobileView ? "📨" : <u>Contact</u>} {/* Changed the text to "Contact Me" on PC view */}
</Link>

<Link to="/" style={{ fontSize: isMobileView ? '2rem' : '120%', position: 'fixed', top: '5%', left: isMobileView? '47%':'49%', cursor: 'pointer', textDecoration: 'none',color:'#aaa' }}>
  {isMobileView ? "🏚️" : <u>Home</u>} {/* Changed the text to "Contact Me" on PC view */}
</Link>
              <div style={isMobileView ? footerStyleMobile : footerStylePC}>
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

              <div style={isMobileView ? null : { display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#aaa', position: 'fixed', bottom: '50px', width: '100%', fontSize: '80%', gap: '10%' }}>
                <p style={{ marginRight: '10px' }}>Built using React.js</p>
                <p style={{ marginRight: '10px' }}>Hosted by me using AWS</p>
                <p style={{ marginRight: '10px' }}>Powered by Node.js</p>
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
