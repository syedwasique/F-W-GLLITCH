import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiUser, FiMail, FiFileText, FiPhone, FiMapPin } from 'react-icons/fi';
import "./Contact.css"

const Contact = ({ theme, themeIndex }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    emailjs
      .sendForm(
        'service_gqnlnei', 
        'template_56m4uuc', 
        form.current, 
        { publicKey: '8zUnTp7KfKeEQns-b' }
      )
      .then(
        () => {
          setSubmitStatus({ 
            success: true, 
            message: 'Message sent successfully! We will get back to you soon.' 
          });
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          setSubmitStatus({ 
            success: false, 
            message: 'Failed to send message. Please try again later.' 
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to <AnimatePresence mode="wait">
              <motion.span
                key={themeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="dynamic-word"
              >
                initiate Gllitches!
              </motion.span>
            </AnimatePresence>
          </motion.h2>
          <motion.p 
            className="contact-para"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            Get in touch with our team to discuss your next digital breakthrough
          </motion.p>
        </div>

        <div className="contact-content">
          <motion.form 
            className="contact-form" 
            ref={form} 
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="input-icon">
                <FiUser />
              </div>
              <input 
                type="text" 
                name="from_name"
                id="name" 
                placeholder=" "
                required 
              />
              <label htmlFor="name">Your Name</label>
              <div className="focus-line"></div>
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className="input-icon">
                <FiMail />
              </div>
              <input 
                type="email" 
                name="from_email"
                id="email" 
                placeholder=" "
                required 
              />
              <label htmlFor="email">Email Address</label>
              <div className="focus-line"></div>
            </motion.div>

            <motion.div 
              className="form-group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <div className="input-icon">
                <FiFileText />
              </div>
              <textarea 
                id="message" 
                name="message"
                rows="4" 
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="message">Your Project Details</label>
              <div className="focus-line"></div>
            </motion.div>

            <AnimatePresence>
              {submitStatus.message && (
                <motion.div
                  className={`status-message ${submitStatus.success ? 'success' : 'error'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button 
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <span className="btn-text">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <motion.div
                animate={{ 
                  x: isSubmitting ? [0, 5, 0] : 0,
                  transition: isSubmitting ? { 
                    repeat: Infinity, 
                    duration: 1.5 
                  } : {}
                }}
              >
                <FiSend className="send-icon" />
              </motion.div>
              <span className="btn-hover-effect"></span>
            </motion.button>
          </motion.form>

          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="info-title">Contact Information</h3>
            <motion.div 
              className="info-item"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="info-icon">
                <FiMail />
              </div>
              <div>
                <h4>Email</h4>
                <p>hello@digitalinnovation.com</p>
              </div>
            </motion.div>
            <motion.div 
              className="info-item"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className="info-icon">
                <FiPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </motion.div>
            <motion.div 
              className="info-item"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <div className="info-icon">
                <FiMapPin />
              </div>
              <div>
                <h4>Address</h4>
                <p>123 Innovation Blvd, Tech City</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;