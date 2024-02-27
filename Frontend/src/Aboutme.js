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
import SQL from './image/sql-logo.png';
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
    sql: false,
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
    position:'relative',
  };

  const SmallLogoStyle = {
    height: isMobileView ? '20px' : '30px',
    margin: isMobileView ? '5px' : '5px',
    marginLeft: isMobileView ? '20px' : '35px',
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
          <a href="https://react--portfolio.s3.eu-west-2.amazonaws.com/Mohammed+Bakhshi+CV+.pdf" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle }}>View CV</a>
            <a href="/" style={{ ...linkStyle }}>Home</a>
            <a href="/contact" style={{ ...linkStyle }}>contact</a>
            
          </div>
          <div style={imageContainerStyle}>
            <img
              src={untitled}
              alt="Untitled"
              style={imageStyle}
            />
            <p style={pcParagraphStyle}>
              Hey, my name is  Mohammed. I've been working as a data analyst and web developer for over 5 years.
              Along the way, I've picked up a bunch of programming languages and tools that help me get the job done. When I'm not at work, you can find me doing LeetCode, watching anime, or playing games.
            </p>
          </div>
          {isMobileView && (
            <p style={{ ...pcParagraphStyle, display: 'block', textAlign: 'left', marginTop: '2rem', width: '90%', fontSize: '18px' }}>
              Hey, my name is  Mohammed. I've been working as a data analyst and web developer for over 5 years.
              Along the way, I've picked up a bunch of programming languages and tools that help me get the job done. When I'm not at work, you can find me doing LeetCode, watching anime, or playing games.
            </p>
          )}
          <h3 style={{ textAlign: 'center', marginTop: '4rem', color: '#aaa', fontWeight: 'normal' }}>
            Tech languages
          </h3>
          <div style={logosContainerStyle}>
            {[
              { id: 'javascript', src: Javascript, alt: 'Javascript', name: 'Javascript' },
              { id: 'react', src: react, alt: 'React', name: 'React.js' },
              { id: 'python', src: Python, alt: 'Python', name: 'Python' },
              { id: 'SQL', src: SQL, alt: 'SQL', name: 'SQL' },
              { id: 'kotlin', src: kotlin, alt: 'Kotlin', name: 'Kotlin' },
              { id: 'selenium', src: selenium, alt: 'Selenium', name: 'Selenium' },
            ].map(({ id, src, alt, name }) => (
              <div className="tooltip" key={id} style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  id={id}
                  src={src}
                  alt={alt}
                  style={logoStyle}
                  onMouseEnter={() => handleLogoHover(id)}
                  onMouseLeave={() => handleLogoLeave(id)}
                />
                <span className="tooltip--text" style={getTooltipStyle(id)}>{name}</span>
              </div>
            ))}
          </div>
          <br />
          <div className="panel">
            <h3 style={{ textAlign: 'center', marginTop: '2rem', color: '#aaa', fontWeight: 'normal', fontSize: isMobileView ? '1.2rem' : '1.5rem' }}>
              How I made this Portfolio
            </h3>

            <div style={{ textAlign: 'center', fontSize: isMobileView ? '80%' : 'unset', marginTop: '1rem', marginLeft: isMobileView ? '10%' : 'auto', marginRight: 'auto', maxWidth:isMobileView? '80%': '80%' }}>
            <p>
    <strong>Getting started:</strong> I made the basic layout of the website and then set up a local development environment to work on it.
</p>
<p>
    <strong>frontend:</strong> I used JavaScript, HTML, CSS, and React.js to build the frontend of the website, making it dynamic and user-friendly.
</p>
<p>
    <strong>AWS Deployment</strong> I rented an AWS EC2 Ubuntu Linux server, logged in via SSH, and installed Node.js and Nginx onto it.
</p>

<p>
    <strong>Domain:</strong> I bought my domain Name and pointed that to my AWS ip adress I also got a SLL certficate so my website would be secured and trusted .
</p>
            </div>
          </div>
          <h3 style={{ textAlign: 'center', marginTop: '4rem', color: '#aaa', fontWeight: 'normal', marginLeft: isMobileView ? '0%' : '1%' }}>
            Work History
          </h3>
          <div style={{ marginTop: '2rem', marginLeft: isMobileView ? '-40%' : '1%', position: isMobileView ? 'relative' : 'static' }}>
            <Timeline position={isMobileView ? 'right' : 'alternate'}>
              {[
                { id: '2023-2024', icon: mohammedicon, title: 'Clear ear', description: 'Crated a App to manage  appoitments' },
                { id: '2022-2023', icon: mohammedicon, title: 'App developer', description: 'Crated a App to manage  appoitments' },
                { id: '2022-2023', icon: mohammedicon, title: 'Software engineer', description: 'SEO website and cleaned technical debt' },
                { id: '2021-2023', icon: theresidentsclub, title: 'theresidentsclub', description: 'Hired and managed a IT Team' },
                { id: '2020-2023', icon: MosGamesicon, title: 'Mo\'s Games', description: 'Founded and managed a gaming lounge' },
              ].map(({ id, icon, title, description }) => (
                <TimelineItem key={id}>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="#808080"
                  >
                    {id}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <img src={icon} alt={title} style={{ width: '30px', height: '30px', borderRadius: '80%' }} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" style={{ fontSize: isMobileView ? '90%' : '120%' }}>
                      {title}
                    </Typography>
                    <Typography style={{ fontSize: isMobileView ? '60%' : 'inherit' }}>{description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
            {[
              { href: 'https://www.linkedin.com/in/mohammed-bakhshi/', src: linkedin, alt: 'linkedin' },
              { href: 'https://github.com/Mohammed-Bakhshi', src: github, alt: 'github' },
              { href: 'https://www.facebook.com/mohammed.bakhshi/', src: facebook, alt: 'facebook' },
              { href: 'https://www.instagram.com/mohammedbakhshi/', src: instagram, alt: 'instagram' },
              { href: 'mailto:mohammedbakhshi@hotmail.com', src: email, alt: 'email' },
            ].map(({ href, src, alt }) => (
              <a key={href} href={href}>
                <img
                  src={src}
                  alt={alt}
                  style={{ ...SmallLogoStyle }}
                  onMouseEnter={(e) => e.target.style.filter = "grayscale(0%)"}
                  onMouseLeave={(e) => e.target.style.filter = "grayscale(100%)"}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
