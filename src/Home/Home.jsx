import { useEffect, useState, useRef } from 'react';
import { FiArrowRight, FiMenu, FiX, FiCode, FiSmartphone, FiLayers, FiGlobe , FiMail, FiUser, FiAward,} from 'react-icons/fi';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { HiOutlineChatAlt2, HiOutlineUserGroup } from 'react-icons/hi';
import { RiContactsLine, RiTeamLine } from 'react-icons/ri';
import { RiCustomerService2Line, RiTeamFill } from 'react-icons/ri';
import { BsRocketTakeoff, BsPeople } from 'react-icons/bs';
import { TbHandClick } from 'react-icons/tb';
import {  FiBriefcase, FiUsers  } from 'react-icons/fi'
import './Home.css';
// import logo from "./Logo.png";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Work from '../Work/Work';
import Footer from '../Footer/Footer';
import { Contact2Icon } from "lucide-react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [themeIndex, setThemeIndex] = useState(0);
   const [activeMessage, setActiveMessage] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const themes = [
    { 
      primary: '#6e45e2', 
      secondary: '#00d4ff', 
      accent: '#00ff9d', 
      text: 'Redefined',
      bgOpacity: 0.25  // Increased opacity for better visibility
    },
    { 
      primary: '#2563eb', 
      secondary: '#8b5cf6', 
      accent: '#10b981', 
      text: 'Reimagined',
      bgOpacity: 0.25
    },
    { 
      primary: '#d946ef', 
      secondary: '#f43f5e', 
      accent: '#f59e0b', 
      text: 'Reengineered',
      bgOpacity: 0.25
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Graphic Design",
    "Digital Marketing"
  ];

const messages = [
    {
      text: "Need development? You're in the right place",
      icon: <FiCode />
    },
    {
      text: "Want stunning design? We've got you covered",
      icon: <FiLayers />
    },
    {
      text: "Looking for digital transformation? Let's talk",
      icon: <FiGlobe />
    },
    {
      text: "Seeking innovation? That's our specialty",
      icon: <FiSmartphone />
    }
  ];

  // Auto-rotate themes every 8 seconds
   useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % themes.length);
    }, 5000); // Changed from 8000 to 5000
    return () => clearInterval(interval);
  }, []);

  // Enhanced theme application with faster transition
  useEffect(() => {
    const currentTheme = themes[themeIndex];
    document.documentElement.style.setProperty('--primary', currentTheme.primary);
    document.documentElement.style.setProperty('--secondary', currentTheme.secondary);
    document.documentElement.style.setProperty('--accent', currentTheme.accent);
    
    // Add faster transition
    document.documentElement.style.setProperty('--theme-transition', 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)');
    
    // Add pulse effect to background layers
    const glacierLayers = document.querySelectorAll('.glacier-layer');
    glacierLayers.forEach(layer => {
      layer.style.animation = 'themePulse 0.8s ease-out';
      setTimeout(() => {
        layer.style.animation = '';
      }, 800);
    });
  }, [themeIndex]);

    // Auto-rotate messages every 3 seconds
 useEffect(() => {
    const messageInterval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(messageInterval);
  }, []);

  // Auto-rotate services every 3 seconds
useEffect(() => {
  const serviceInterval = setInterval(() => {
    setActiveService((prev) => (prev + 1) % services.length);
  }, 3000);
  return () => clearInterval(serviceInterval);
}, []);


  return (
    <div id="home" className="home-container" ref={containerRef}>
      {/* Animated Glacier Background */}
      <motion.div 
        className="glacier-bg"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="glacier-layer glacier-1"></div>
        <div className="glacier-layer glacier-2"></div>
        <div className="glacier-layer glacier-3"></div>
      </motion.div>

      
      {/* Navigation */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="nav-container">
          <div className="nav-left">
            <span className="nav-brand">F&W GLLITCH</span>
          </div>
          
          <div className={`nav-right ${menuOpen ? 'active' : ''}`}>
             <motion.a 
        href="#service" 
        className="nav-link"
        whileHover={{ y: -2 }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }}
      >
        Services
      </motion.a>

      {/* Work Link */}
      <motion.a 
        href="#work" 
        className="nav-link"
        whileHover={{ y: -2 }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }}
      >
        Work
      </motion.a>

      {/* About Link */}
      <motion.a 
        href="#about" 
        className="nav-link"
        whileHover={{ y: -2 }}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }}
      >
        About
      </motion.a>

  
      {/* CTA Button (now Contact Us) */}
      <motion.button 
        className="nav-cta"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 4px 15px rgba(110, 69, 226, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="cta-text">Contact us</span>
        <FiMail className="cta-icon" fontSize={15} />
        <span className="cta-hover-effect"></span>
        <motion.span 
          className="cta-pulse" 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.3 }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
          }}
        />
      </motion.button>
          </div>

          <motion.button 
            className="mobile-menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.span 
              className="title-line"
              whileHover={{ scale: 1.02 }}
            >
              Digital Innovation
            </motion.span>
            <motion.span 
              className="title-line"
              whileHover={{ scale: 1.02 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={themeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="dynamic-word"
                >
                  {themes[themeIndex].text}
                </motion.span>
              </AnimatePresence>
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            We create boundary-pushing digital experiences that captivate audiences
            and deliver measurable results.
          </motion.p>

        

          

          <motion.div 
            className="service-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="service-rotator">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`service-item ${index === activeService ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: index === activeService ? 1 : 0,
                    y: index === activeService ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

             {/* /Screen  */}
         <div className="message-phone">
          <div className="phone-frame">
            <div className="phone-screen">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMessage}
                  className="phone-message-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="message-icon"
                    initial={{ scale: 0.8, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }}
                  >
                    {messages[activeMessage].icon}
                  </motion.div>
                  <div className="phone-message">
                    {messages[activeMessage].text}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="phone-notch"></div>
            <div className="phone-home-indicator"></div>
          </div>
          <div className="phone-glow" style={{ background: themes[themeIndex].primary }}></div>
        </div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
                <motion.button
    className="primary-btn"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(110, 69, 226, 0.5)"
    }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <span className="btn-text">Launch Project</span>
    <BsRocketTakeoff className="btn-icon" fontSize={18}/>
    <motion.span
      className="sparkle"
      initial={{ scale: 0 }}
      animate={{ scale: 1.2, opacity: 0 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <span className="btn-hover-effect"></span>
  </motion.button>

  {/* About Button - Now with team huddle icon */}
  <motion.button
    className="secondary-btn"
    whileHover={{ 
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 20px rgba(0, 212, 255, 0.3)"
    }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <span className="btn-text">Our team</span>
    <RiTeamFill className="btn-icon" fontSize={19}/>
    <motion.span
      className="connection-dots"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    />
    <span className="btn-hover-effect"></span>
  </motion.button>
          </motion.div>
        </div>

       
      </section>

      {/* Theme Indicator */}
      <motion.div 
        className="theme-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {themes.map((_, index) => (
          <motion.button
            key={index}
            className={`theme-dot ${index === themeIndex ? 'active' : ''}`}
            onClick={() => setThemeIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
      <About theme={themes} themeIndex={themeIndex} />
      
      <Services theme={themes} themeIndex={themeIndex}/>
      <Work theme={themes} themeIndex={themeIndex} />
      <Contact theme={themes} themeIndex={themeIndex}/>
      <Footer theme={themes} themeIndex={themeIndex}/>
      
    </div>
  );
};

export default Home;