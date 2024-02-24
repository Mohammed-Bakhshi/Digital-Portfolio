import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import Typography from '@mui/material/Typography';
import untitled from './image/Untitled.png';
import MosGamesicon from "./image/Mo's Games logo.ico";
import mohammedicon from './image/mohammed-github.ico';
import theresidentsclub from './image/theresidentsclub.ico';
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
  const [isMobileView, setIsMobileView] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState({
    javascript: false,
    react: false,
    python: false,
    mysql: false,
    kotlin: false,
    selenium: false,
  });

  React.useEffect(() => {
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

  const handleLogoHover = (language) => {
    setTooltipVisible({ ...tooltipVisible, [language]: true });
    document.getElementById(language).style.filter = 'grayscale(0%)'; // Remove grayscale filter
  };

  const handleLogoLeave = (language) => {
    setTooltipVisible({ ...tooltipVisible, [language]: false });
    document.getElementById(language).style.filter = 'grayscale(100%)'; // Apply grayscale filter
  };

  const mainContentStyle = {
    backgroundColor: '#171717',
    color: '#aaa',
    textAlign: 'center',
    padding: '2rem',
    overflowY: 'auto',
    height: '100vh',
    position: 'relative',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      width: '0px',
    },
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

  const imageContainerStyle = {
    marginTop: '4rem',
    display: 'flex',
    gap: '5%',
    marginLeft: '35%',
  };

  const imageStyle = {
    width: isMobileView ? '50%' : '15%',
    height: '15%',
    borderRadius: '5%',
    maxWidth: '100%',
  };

  const pcParagraphStyle = {
    textAlign: 'left',
    marginTop: '0rem',
    width: '50%',
    fontSize: '20px',
    display: isMobileView ? 'none' : 'block',
  };

  const logosContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
    gap: isMobileView ? '8%' : '10%',
  };

  const SmallLogoStyle = {
    height: isMobileView ? '20px' : '30px',
    margin: isMobileView ? '5px' : '5px',
    marginLeft: isMobileView ? '0' : '35px',
    borderRadius: '10px',
    transition: 'filter 0.3s',
    filter: 'grayscale(100%)', // Start with grayscale
  };


  const logoStyle = {
    width: isMobileView ? '25px' : '50px',
    height: 'auto',
    transition: 'filter 0.3s',
    filter: 'grayscale(100%)', // Start with grayscale
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

  const getTooltipStyle = (language) => ({
    ...tooltipTextStyle,
    visibility: tooltipVisible[language] ? 'visible' : 'hidden',
    opacity: tooltipVisible[language] ? '1' : '0',
  });

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
            <a href="/about" style={{ ...linkStyle }}>About</a>
            <a href="/" style={{ ...linkStyle }}>Home</a>
            <a href="/contact" style={{ ...linkStyle }}>Contact</a>
          </div>
          <div style={imageContainerStyle}>
            <img
              src={untitled}
              alt="Untitled"
              style={imageStyle}
            />
            <p style={pcParagraphStyle}>
              Hey, I'm Mohammed. I've been working as a data analyst and web developer for over 5 years.
              Along the way, I've picked up a bunch of programming languages and tools that help me get the job done. When I'm not at work, you can find me doing LeetCode, watching anime, or playing games.
            </p>
          </div>
          {isMobileView && (
            <p style={{ ...pcParagraphStyle, display: 'block', textAlign: 'left', marginTop: '2rem', width: '90%', fontSize: '18px' }}>
              Hey, I'm Mohammed. I've been working as a data analyst and web developer for over 5 years.
              Along the way, I've picked up a bunch of programming languages and tools that help me get the job done. When I'm not at work, you can find me doing LeetCode, watching anime, or playing games.
            </p>
          )}
          <h3 style={{ textAlign: 'center', marginTop: '4rem', color: '#aaa', fontWeight: 'normal' }}>
            Tech languages
          </h3>
          <div style={logosContainerStyle}>
            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                id="javascript"
                src={Javascript}
                alt="Javascript"
                style={logoStyle}
                onMouseEnter={() => handleLogoHover('javascript')}
                onMouseLeave={() => handleLogoLeave('javascript')}
              />
              <span className="tooltip--text" style={getTooltipStyle('javascript')}>Javascript</span>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                id="react"
                src={react}
                alt="React"
                style={logoStyle}
                onMouseEnter={() => handleLogoHover('react')}
                onMouseLeave={() => handleLogoLeave('react')}
              />
              <span className="tooltip--text" style={getTooltipStyle('react')}>React.js</span>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                id="python"
                src={Python}
                alt="Python"
                style={logoStyle}
                onMouseEnter={() => handleLogoHover('python')}
                onMouseLeave={() => handleLogoLeave('python')}
              />
              <span className="tooltip--text" style={getTooltipStyle('python')}>Python</span>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                id="mysql"
                src={MYSQL}
                alt="MYSQL"
                style={logoStyle}
                onMouseEnter={() => handleLogoHover('mysql')}
                onMouseLeave={() => handleLogoLeave('mysql')}
              />
              <span className="tooltip--text" style={getTooltipStyle('mysql')}>MYSQL</span>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                id="kotlin"
                src={kotlin}
                alt="Kotlin"
                style={logoStyle}
                onMouseEnter={() => handleLogoHover('kotlin')}
                onMouseLeave={() => handleLogoLeave('kotlin')}
              />
              <span className="tooltip--text" style={getTooltipStyle('kotlin')}>Kotlin</span>
            </div>

            <div className="tooltip" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                id="selenium"
                src={selenium}
                alt="Selenium"
                style={logoStyle}
                onMouseEnter={() => handleLogoHover('selenium')}
                onMouseLeave={() => handleLogoLeave('selenium')}
              />
              <span className="tooltip--text" style={getTooltipStyle('selenium')}>Selenium</span>
            </div>
          </div>
          <br />
          <div className="panel">
            <h3 style={{ textAlign: 'center', marginTop: '2rem', color: '#aaa', fontWeight: 'normal', fontSize:isMobileView? '1.2rem':'1.5rem' }}>
              How I made this Portfolio
            </h3>
            
            <div style={{ textAlign: 'center', fontSize: isMobileView?'90%':'unset', marginTop: '1rem', marginLeft: isMobileView ? '-5%' : 'auto', marginRight: 'auto', maxWidth: '600px' }}>
              <p>
                 <strong>Getting started:</strong> I set up a local development environment to work on the website efficiently.
              </p>
              <p>
                 <strong>Frontend Development:</strong> Using JavaScript, HTML, CSS, and React.js, I designed and developed the frontend of the website to ensure a dynamic and responsive user experience.
              </p>
              <p>
                 <strong>Deployment to AWS EC2:</strong> I deployed the website to an AWS EC2 Ubuntu Linux server to make it accessible over the internet.
              </p>
              <p>
                 <strong>Server Configuration:</strong> I configured Nginx and Node.js on the server to handle web traffic and execute server-side code efficiently.
              </p>
            </div>
          </div>
          <h3 style={{ textAlign: 'center', marginTop: '4rem', color: '#aaa', fontWeight: 'normal',marginLeft: isMobileView ? '0%' : '1%' }}>
            Work History
          </h3>
          <div style={{ marginTop: '2rem', marginLeft: isMobileView ? '-40%' : '1%',position:isMobileView? 'relative':'static' }}>
          <Timeline position={isMobileView ? 'right' : 'alternate'}>
  <TimelineItem>
    <TimelineOppositeContent
      sx={{ m: 'auto 0' }}
      align="right"
      variant="body2"
      color="#808080"
      
    >
       2022-2024
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <img src={mohammedicon} alt="Mohammed freelancer icon" style={{ width: '30px', height: '30px',borderRadius:'80%' }} />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ py: '12px', px: 2 }}>
      <Typography variant="h6" component="span">
        Clear ear
      </Typography>
      <Typography>Crated a App to manage  appoitments</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent
      sx={{ m: 'auto 0' }}
      align="right"
      variant="body2"
      color="#808080"
    >
       2022-2023
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <img src={mohammedicon} alt="Mohammed freelancer icon" style={{ width: '30px', height: '30px',borderRadius:'80%',}} />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ py: '12px', px: 2 }}>
      <Typography variant="h6" component="span">
        App developer
      </Typography>
      <Typography>Developed a app for clients</Typography>
    </TimelineContent>
  </TimelineItem>

  <TimelineItem>
    <TimelineOppositeContent
      sx={{ m: 'auto 0' }}
      align="right"
      variant="body2"
      color="#808080"
    >
       2022-2023
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <img src={mohammedicon} alt="Mohammed freelancer icon" style={{ width: '30px', height: '30px',borderRadius:'80%' }} />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ py: '12px', px: 2 }}>
      <Typography variant="h6" component="span">
        Software engineer 
      </Typography>
      <Typography> SEO website and cleaned technical debt  </Typography>
    </TimelineContent>
  </TimelineItem>

  <TimelineItem>
    <TimelineOppositeContent
      sx={{ m: 'auto 0' }}
      align="right"
      variant="body2"
      color="#808080"
    >
       2021-2023
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <img src={theresidentsclub} alt="theresidentsclublogo" style={{ width: '30px', height: '30px',borderRadius:'80%' }} />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ py: '12px', px: 2 }}>
      <Typography variant="h6" component="span">
        theresidentsclub
      </Typography>
      <Typography>Hired and managed a IT Team </Typography>
    </TimelineContent>
  </TimelineItem>

  <TimelineItem>
    <TimelineOppositeContent
      sx={{ m: 'auto 0' }}
      align="right"
      variant="body2"
      color="#808080"
    >
       2020-2023
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <img src={MosGamesicon} alt="Mo's Games" style={{ width: '30px', height: '30px',borderRadius:'80%'}} />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ py: '12px', px: 2 }}>
      <Typography variant="h6" component="span">
        Mo's Games
      </Typography>
      <Typography>Founded and managed a gaming lounge  </Typography>
    </TimelineContent>
  </TimelineItem>
</Timeline>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
            <a href="https://www.linkedin.com/in/mohammed-bakhshi/">
              <img
                src={linkedin}
                alt="linkedin"
                style={{ ...SmallLogoStyle }}
                onMouseEnter={(e) => e.target.style.filter = "grayscale(0%)"}
                onMouseLeave={(e) => e.target.style.filter = "grayscale(100%)"}
              />
            </a>
            <a href="https://github.com/Mohammed-Bakhshi">
              <img
                src={github}
                alt="github"
                style={{ ...SmallLogoStyle }}
                onMouseEnter={(e) => e.target.style.filter = "grayscale(0%)"}
                onMouseLeave={(e) => e.target.style.filter = "grayscale(100%)"}
              />
            </a>
            <a href="https://www.facebook.com/mohammed.bakhshi/">
              <img
                src={facebook}
                alt="facebook"
                style={{ ...SmallLogoStyle }}
                onMouseEnter={(e) => e.target.style.filter = "grayscale(0%)"}
                onMouseLeave={(e) => e.target.style.filter = "grayscale(100%)"}
              />
            </a>
            <a href="https://www.instagram.com/mohammedbakhshi/">
              <img
                src={instagram}
                alt="instagram"
                style={{ ...SmallLogoStyle }}
                onMouseEnter={(e) => e.target.style.filter = "grayscale(0%)"}
                onMouseLeave={(e) => e.target.style.filter = "grayscale(100%)"}
              />
            </a>
            <a href="mailto:mohammedbakhshi@hotmail.com">
              <img
                src={email}
                alt="email"
                style={{ ...SmallLogoStyle }}
                onMouseEnter={(e) => e.target.style.filter = "grayscale(0%)"}
                onMouseLeave={(e) => e.target.style.filter = "grayscale(100%)"}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
