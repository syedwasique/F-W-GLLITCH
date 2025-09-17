import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiLayers, FiTrendingUp } from 'react-icons/fi';
import './Services.css';
import { AnimatePresence } from 'framer-motion';

const Services = ({ theme, themeIndex }) => {
  const services = [
    {
      icon: <FiCode className="service-icon" />,
      title: "Web Development",
      description: "We engineer high-performance websites with modern stacks like Next.js and Jamstack architectures.",
      highlights: ["React/Next.js", "Node.js", "WebGL", "Micro Animations"]
    },
    {
      icon: <FiSmartphone className="service-icon" />,
      title: "Mobile App Development",
      description: "Premium native apps with buttery-smooth animations and flawless UX.",
      highlights: ["React Native", "SwiftUI", "Flutter", "Motion Design"]
    },
    {
      icon: <FiLayers className="service-icon" />,
      title: "UI/UX Design",
      description: "Immersive interfaces with cutting-edge interaction patterns and visual storytelling.",
      highlights: ["Figma", "3D Design", "Micro-interactions", "Design Systems"]
    },
    {
      icon: <FiTrendingUp className="service-icon" />,
      title: "Growth Marketing",
      description: "Data-fueled strategies to amplify your digital presence and conversions.",
      highlights: ["Performance SEO", "Paid Social", "CRO", "Web Analytics"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -15,
      background: "linear-gradient(145deg, #1a1a2e, #16213e)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
    }
  };

  const iconHover = {
    hover: {
      scale: 1.2,
      rotate: [0, 15, -15, 0],
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="service" className="services-section">
      <div className="services-gradient-bg"></div>
      
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Digital   <AnimatePresence mode="wait">
                <motion.span
                  key={themeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="dynamic-word"
                >
                   Services
                </motion.span>
                </AnimatePresence>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Where innovation meets execution
          </motion.p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              variants={item}
              whileHover="hover"
            >
              <motion.div 
                className="service-icon-container"
                variants={iconHover}
                whileHover="hover"
              >
                {service.icon}
              </motion.div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-highlights">
                {service.highlights.map((highlight, i) => (
                  <motion.div 
                    key={i} 
                    className="highlight-item"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="highlight-bullet"></div>
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
              
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;