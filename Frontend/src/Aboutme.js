import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import untitled from './image/Untitled.png';
import Javascript from './image/javascript.png';
import react from './image/React.png';
import Python from './image/python.png';
import MYSQL from './image/MYSQL.png';
import kotlin from './image/kotlin.png';
import selenium from './image/Selenium.png';
import linkedin from './image/likedin.png';
import github from './image/github.png';
import facebook from './image/Facebook.png';
import instagram from './image/instagram.png';
import email from './image/email.png';

const MainContent = () => {
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

  const mainContentStyle = {
    backgroundColor: '#0C0C0C',
    color: '#aaa',
    textAlign: 'center',
    padding: '2rem',
    overflowY: 'scroll',
    height: '100vh',
    position: 'relative',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      width: '0px',
    },
  };

  const imageContainerStyle = {
    marginTop: '5rem',
    display: 'flex',
    gap: '15%',
    marginLeft: '30%',
  };

  const imageStyle = {
    width: isMobileView ? '40%' : '15%',
    height: '15%',
    borderRadius: '5%',
    maxWidth: '100%', // Ensure image does not exceed its container
  };

  const paragraphStyle = {
    textAlign: 'left',
    marginTop: '1rem',
    width: isMobileView ? '100%' : '50%',
    fontSize: '20px',
  };

  const linksContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
    gap: '30%',
  };

  const linkStyle = {
    fontSize: '120%',
    marginRight: '2rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#aaa',

    borderBottom: '2px solid #aaa',
  };

  const logosContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
    gap: isMobileView ? '5%' : '10%',
  };

  const SnalllogosContainerStyle = {
    display: 'flex',
    maxWidth: '100%',
    marginBottom: '3rem',// Adjust the maximum width as needed
    justifyContent: 'flex-end', // Align items to the right
  };

  const SmallLogoStyle = {
    height: isMobileView ? '30px' : '20px',
    margin: isMobileView ? '25px' : '10px',
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s',
    
  };

  const logoStyle = {
    width: isMobileView ? '50px' : '50px',
    height: 'auto',
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s',
  };

  const handleLogoHover = (event) => {
    event.target.style.filter = 'none';
  };

  const handleLogoLeave = (event) => {
    event.target.style.filter = 'grayscale(100%)';
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
            <Link to="/about" style={{ ...linkStyle }}>About</Link>
            <Link to="/" style={{ ...linkStyle }}>Home</Link>
            <Link to="/contact" style={{ ...linkStyle }}>Contact</Link>
          </div>
          <div style={imageContainerStyle}>
            <img
              src={untitled}
              alt="Untitled"
              style={imageStyle}
            />
            <p style={paragraphStyle}>
              Hey, I'm Mohammed. I've been working as a data analyst and web developer for over 5 years.
              Along the way, I've picked up a bunch of programming languages and tools that help me get the job done. When I'm not at work, you can find me doing LeetCode, watching anime, or playing games.
            </p>
          </div>
          <h3 style={{ textAlign: 'center', marginTop: '4rem', color: '#aaa', fontWeight: 'normal' }}>
            Tech languages
          </h3>
          <div style={logosContainerStyle}>
            <img
              src={Javascript}
              alt="Javascript"
              style={logoStyle}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={react}
              alt="React"
              style={logoStyle}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={Python}
              alt="Python"
              style={logoStyle}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={MYSQL}
              alt="MYSQL"
              style={logoStyle}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={kotlin}
              alt="Kotlin"
              style={logoStyle}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={selenium}
              alt="Selenium"
              style={logoStyle}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
          </div>
          <br />
          <h3 style={{ textAlign: 'center', marginTop: '2rem', color: '#aaa', fontWeight: 'normal' }}>
            Projects in my spare time
          </h3>
          <ul style={{ listStyleType: 'disc', textAlign: 'left', marginLeft: '40%', marginRight: 'auto', maxWidth: '600px' }}>
            <li> Discover Billboard Hot 100 trends with data </li>
            <li> Unlock insights with interactive finance tool </li>
            <li> Explore Charizard stats in web project.</li>
            <li>Explore my fully interactive digital portfolio </li>
          </ul>
          <h3 style={{ textAlign: 'center', marginTop: '4rem', color: '#aaa', fontWeight: 'normal' }}>
            Work History
          </h3>
          <div style={{ marginTop: '2rem', marginLeft: isMobileView ? '-60%' : '-13%', }}>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Data analyst/manager at Mo's games </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Mos bubble tea bar</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>The residents club</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Freelancer web developer</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Freelancer software engineer</TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
          <div style={{ ...SnalllogosContainerStyle, }}>
            <a href="https://www.linkedin.com/in/mohammed-bakhshi/" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedin}
                alt="LinkedIn"
                style={{ ...SmallLogoStyle }}
                onMouseEnter={handleLogoHover}
                onMouseLeave={handleLogoLeave}
            />
              
            </a>
            <a href="https://github.com/Mohammed-Bakhshi" target="_blank" rel="noopener noreferrer">
              <img
                src={github}
                alt="GitHub"
                style={{ ...SmallLogoStyle,  }}
                onMouseEnter={handleLogoHover}
               onMouseLeave={handleLogoLeave}
            />
            </a>
            <a href="https://www.facebook.com/mohammed.bakhshi/" target="_blank" rel="noopener noreferrer">
              <img
                src={facebook}
                alt="Facebook"
                style={{ ...SmallLogoStyle, }}
                onMouseEnter={handleLogoHover}
               onMouseLeave={handleLogoLeave}
            />
            </a>
            <a href="https://instagram.com/mohammedbakhshi/" target="_blank" rel="noopener noreferrer">
              <img
                src={instagram}
                alt="Instagram"
                style={{ ...SmallLogoStyle }}
                onMouseEnter={handleLogoHover}
                onMouseLeave={handleLogoLeave}
            />
              
            </a>
            <a href="mailto:mohammedbakhshi@hotmail.com" target="_blank" rel="noopener noreferrer">
              <img
                src={email}
                alt="Email"
                style={{ ...SmallLogoStyle }}
                onMouseEnter={handleLogoHover}
                onMouseLeave={handleLogoLeave}
            />
              
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainContent;
