import styles from "./Herostyle.module.css";
import heroImg from "../../assets/kenneth-pixar.jpeg";
import sun from "../../assets/sun.svg"; 
import moon from '../../assets/moon.svg'
import fbDark from "../../assets/icons8-facebook (3).svg";
import fbIcon from "../../assets/icons8-facebook (2).svg";
import linkedLight from "../../assets/linkedin-light.svg";
import linkedDark from '../../assets/linkedin-dark.svg';
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/Resume.pdf";
import { useTheme } from '../../common/ThemeContext'; 

function Hero() {
  const { theme, toggleTheme } = useTheme(); 

  const themeIcon = theme === 'light' ? sun : moon
  const facebookIcon = theme === 'light' ? fbIcon : fbDark
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedInIcon = theme === 'light' ? linkedLight : linkedDark

  return (
    <section id="hero">
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Kenneth"
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
          Kenneth John <br /> Zabate
        </h1>
        <h2>Frontend Developer</h2>

        <p>
        Frontend development is like weaving a story with code, where every line written brings a digital experience to life. It's <br></br>about crafting interfaces that feel intuitive, engaging, and truly human.
        </p>
        <span>
          <a
            href="https://www.facebook.com/kennethjohnzabate02/"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <img src={theme === "light" ? fbIcon : fbDark} alt="facebook icon" /> {}
          </a>
          <a
            href="https://github.com/kenneth1878"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <img src={theme === "light" ? githubLight : githubDark} alt="github icon" /> {}
          </a>
          <a
            href="https://www.linkedin.com/in/zabate-kenneth-john-s-633b3a270/"
            target="_blank"
            rel="noopener noreferrer" 
          >
            <img src={theme === "light" ? linkedLight : linkedDark} alt="linkedIn icon" /> {}
          </a>
        </span>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
