import React from 'react';
import styles from './HeroStyle.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';

import githublight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';

import linkedinlight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

import CV from '../../assets/cv.pdf'
import { useTheme } from '../../comman/ThemeContext';



function Hero() {
  const { theme,toggleTheme}=useTheme();

  const themeIcon=theme==='light'? sun : moon;
  const twitterIcon=theme==='light'? twitterLight : twitterDark;
  const githubIcon=theme==='light'? githublight : githubDark;
  const linkedinIcon=theme==='light'? linkedinlight : linkedinDark;



  return (
  <section id="hero" className={styles.container}>
    <div className={styles.colourModeContainer}>
      <img 
      className={styles.hero} 
      src={heroImg} 
      alt="Profile Picture of Aniket Khwanekar" 
      />
      <img 
      className={styles.colorMode} 
      src={themeIcon} 
      alt="Color mode icon" 
      onClick={toggleTheme}
      />
    </div>
    <div className={styles.info}>
      <h1>
        Aniket
        <br />
        Khawanekar
      </h1>
      <h2>Full-Stack Developer</h2>
      <span>
        <a href="https://twitter.com/" target='_blank'>
        <img src={twitterIcon} alt="Twitter Icon" />
        </a>
        <a href="https://github.com/" target='_blank'>
        <img src={githubIcon} alt="Github Icon" />
        </a>
        <a href="https://Linkedin.com/" target='_blank'>
        <img src={linkedinIcon} alt="Linkedin Icon" />
        </a>
      </span>
      <p className={styles.decription}>
      As a passionate full stack developer. Eager to apply my skills in real-world projects and continuously learn and grow in the tech industry. </p>
      <a href={CV} download>
        <button className="hover" >
          Resume
        </button>
      </a>
    </div>
  </section>
  )
}

export default Hero
