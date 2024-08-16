import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Resume_Anil_i.pdf";
import { useTheme } from "../../Common/ThemeContext";

const HeroSection = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="HeroImage" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Anil
          <br /> Tiwari
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/home" target="_blank">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/anilkumarti" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
        </span>
        <p className={styles.description}>
          Frontend developer dedicated to building elegant, user-friendly
          websites that blend form and function
        </p>
        <a href={CV} download>
          {" "}
          <button className="hover">Resume</button>{" "}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
