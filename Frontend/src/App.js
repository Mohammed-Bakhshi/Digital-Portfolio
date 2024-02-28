import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import linkedin from './image/likedin.png';
import ContactMePage from './contactme.js';
import anime from 'animejs/lib/anime.es.js';
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
  const textWrapperRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.innerWidth <= 1050;
      setIsMobileView(isMobile);
    };

    const handleResize = () => {
      const textWrapper = textWrapperRef.current;
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({ loop: true })
          .add({
            targets: '.ml13 .letter',
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 300 + 30 * i
          }).add({
            targets: '.ml13 .letter',
            translateY: [0, -100],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1200,
            delay: (el, i) => 100 + 30 * i
          });
      }
    };

    const handleWindowResize = () => {
      checkIsMobile();
      handleResize();
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
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
    
    gap: '10%',
    position: 'fixed',
    flexDirection: isMobileView ? 'column' : 'row', // Change flex direction based on view
    bottom: isMobileView ? '30%' : '35%',
    left:isMobileView?'47%':'48.5%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  };

  const footerStyle = {
    backgroundColor: '#171717',
    color: '#aaa',
    textAlign: 'center',
    position: 'fixed',
    bottom: isMobileView ? '20px' : '5px',
    width: isMobileView ? '105%' : '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  const logoStyle = {
    cursor: 'pointer',
    transition: 'filter 0.3s',
    width: isMobileView ? '25px' : '35px',
    height: isMobileView ? '25px' : '35px',
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
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling on the entire page
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when component unmounts
    };
  }, []);

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
                  .ml13 {
                    font-weight:400px;
                    font-size: ${isMobileView ? '75%' : '1.5em'};
                    text-transform: uppercase;
                    letter-spacing: ${isMobileView ?'0px':'5px'}; 
                  }
                  .ml13 .letter {
                    display: inline-block;
                    color: #aaa;
                  }
                `}
              </style>

              <div style={{ position: 'relative' }}>
                <div style={mainContentStyle}>
                  <div style={linksContainerStyle}></div>

                  <div style={{
                    textAlign: 'left',
                    top:isMobileView?'32%': '35%',
                    position: 'fixed',
                    width: isMobileView ? '75%' : '50%',
                    transform: 'translateY(-50%)',
                    marginLeft: isMobileView ? '5%' : '27%',
                  }}>
                    <h2>
                      <span style={{ fontSize: isMobileView ? '20px' : '30px', fontWeight: 'normal', top: isMobileView ? '5%' : 'unset' }}>Hi, my name is Mohammed 👋</span>
                      <br />
                      <span style={{ fontSize: isMobileView ? '25px' : '40px', fontWeight: 'bold', top: isMobileView ? '10%' : 'unset' }}>I have been coding and analyzing data for 5+ years🤖</span>
                    </h2>
                  </div>

                  <div ref={textWrapperRef} className="ml13" style={{ marginTop: isMobileView ? '10%' : '3%', marginLeft: isMobileView ? '-10%' : '15%', maxWidth: isMobileView ? '95%' : '80%', textAlign: 'center',position:'relative' }}>
                    <h2 className="ml13">
                      Available to work <br />
                      <span style={{ display: 'block', fontSize: isMobileView ? '11px' : '1px', fontWeight: 'normal', color: '#aaa' }}>Flexible salary</span>
                    </h2>
                  </div>

                  <div style={additionalButtonsContainerStyle}>
                    <Link
                      to="/about"
                      style={{ ...buttonStyle, minWidth: '150px', textDecoration: 'none', marginBottom: isMobileView ? '25px' : '0' }}
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

                   

                    <a
                      href="https://react--portfolio.s3.eu-west-2.amazonaws.com/Mohammed+Bakhshi+CV+.pdf"
                      download="Mohammed_Bakhshi_CV.pdf"
                      style={{ ...buttonStyle, minWidth: '150px', textDecoration: 'none', marginBottom: isMobileView ? '10px' : '0' }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#001f33';
                        e.target.style.color = '#bfbfbf';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#aaa';
                      }}
                      target="_blank" // Add this line to open the link in a new tab
                    >
                      View CV
                    </a>
                  </div>
                </div>
              </div>

              <div style={footerStyle}>
                <a href="https://www.linkedin.com/in/mohammed-bakhshi/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ ...logoStyle, ...grayscaleLogoStyle }}
                    onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; }}
                  />
                </a>
                <a href="https://github.com/Mohammed-Bakhshi" target="_blank" rel="noopener noreferrer">
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ ...logoStyle, ...grayscaleLogoStyle }}
                    onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; }}
                  />
                </a>
                <a href="https://www.facebook.com/mohammed.bakhshi/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ ...logoStyle, ...grayscaleLogoStyle }}
                    onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; }}
                  />
                </a>
                <a href="https://instagram.com/mohammedbakhshi/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ ...logoStyle, ...grayscaleLogoStyle }}
                    onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; }}
                  />
                </a>
                <a href="mailto:mohammedbakhshi@hotmail.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={email}
                    alt="Email"
                    style={{ ...logoStyle, ...grayscaleLogoStyle }}
                    onMouseEnter={(e) => { e.target.style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={(e) => { e.target.style.filter = 'grayscale(100%)'; }}
                  />
                </a>
              </div>

              
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#aaa',
                  position: 'fixed',
                  bottom: '100px',
                  width: '100%',
                  fontSize:isMobileView? '30%': '80%',
                  gap: '10%',
                }}>
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