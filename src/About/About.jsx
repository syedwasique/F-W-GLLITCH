import { motion, AnimatePresence } from 'framer-motion';
import './About.css';
import logo from "./Logo.png";

const About = ({ theme, themeIndex }) => {  // Receive theme and themeIndex as props
  return (
    <section className="about-section" id="about">
      {/* Animated Background Elements */}
      <div className="about-particle-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="about-particle"
            initial={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: [0, 0.6, 0],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
          />
        ))}
      </div>

      <div className="about-container">
        {/* Logo Side */}
        <motion.div 
          className="about-logo-side"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            bounce: 0.4
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="logo-crystal">
            <div className="crystal-core">
              <img 
                src={logo} 
                alt="F&W GLLITCH" 
                className="about-logo"
              />
            </div>
            <div className="crystal-facets">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="crystal-facet"
                  style={{ 
                    transform: `rotateY(${i * 60}deg) rotateX(20deg)`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
            <div className="crystal-glows">
              <div className="glow glow-1"></div>
              <div className="glow glow-2"></div>
              <div className="glow glow-3"></div>
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div 
          className="about-content-side"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.2,
            type: "spring",
            bounce: 0.4
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Updated Title Section - Now theme-responsive */}
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="title-line main-title"
              whileHover={{ scale: 1.02 }}
            >
              Crafting Digital
            </motion.span>
            <motion.span 
              className="title-line main-title"
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
                   Excellence
                </motion.span>
              </AnimatePresence>
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="about-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            At <strong>F&W GLLITCH</strong>, we blend cutting-edge technology with 
            stunning design to create digital experiences that captivate and convert.
          </motion.p>
          
          <div className="about-features">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">✨</div>
              <h3>Innovative Solutions</h3>
              <p>Pushing boundaries with creative technical implementations</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">🎨</div>
              <h3>Design First</h3>
              <p>Beautiful interfaces that enhance user experience</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Optimized performance for seamless interactions</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;