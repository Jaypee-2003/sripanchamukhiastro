import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      style={styles.contact}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div style={styles.container}>
        <motion.div style={styles.leftSection}>
          <h2 style={styles.title}>Get in Touch</h2>
          <p style={styles.subtitle}>We are here to guide you through the celestial paths. Reach out for astrological advice.</p>
          <motion.div style={styles.card} whileHover={{ scale: 1.1 }}>
            <FaMapMarkerAlt style={styles.icon} />
            <p><strong>Pandit Sri Ganesh Maharaj</strong></p>
          </motion.div>
          <motion.div style={styles.card} whileHover={{ scale: 1.1 }}>
            <FaPhoneAlt style={styles.icon} />
            <p>
              <a href="tel:+919538757791" style={styles.link}>+91 9538757791</a>
            </p>
          </motion.div>
          <motion.div style={styles.card} whileHover={{ scale: 1.1 }}>
            <FaEnvelope style={styles.icon} />
            <p>
              <a href="mailto:sripanchamukhiastro@gmail.com" style={styles.link}>
                sripanchamukhiastro@gmail.com
              </a>
            </p>
          </motion.div>
          <div style={styles.socialIcons}>
            <motion.a href="#" style={styles.socialIcon} whileHover={{ scale: 1.3 }}>
              <FaFacebook />
            </motion.a>
            <motion.a href="#" style={styles.socialIcon} whileHover={{ scale: 1.3 }}>
              <FaInstagram />
            </motion.a>
            <motion.a href="#" style={styles.socialIcon} whileHover={{ scale: 1.3 }}>
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        <motion.div style={styles.rightSection}>
          <h3 style={styles.subtitle}>Send Us a Message</h3>
          <motion.form style={styles.form} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.input type="text" placeholder="Your Name" style={styles.input} required whileFocus={{ scale: 1.05 }} />
            <motion.input type="email" placeholder="Your Email" style={styles.input} required whileFocus={{ scale: 1.05 }} />
            <motion.textarea placeholder="Your Message" style={styles.textarea} required whileFocus={{ scale: 1.05 }}></motion.textarea>
            <motion.button type="submit" style={styles.button} whileHover={{ scale: 1.1 }}>Send Message</motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}

const styles = {
  contact: {
    padding: "80px 10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "1200px",
    width: "100%",
    gap: "50px",
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
    flexWrap: "wrap", // Allows wrapping on smaller screens
  },
  leftSection: {
    flex: 1,
    minWidth: "300px", // Ensures it doesn't shrink too much
  },
  rightSection: {
    flex: 1,
    minWidth: "300px", // Ensures it doesn't shrink too much
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    color: "#555",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
  },
  icon: {
    fontSize: "1.8rem",
    color: "#8B0000",
  },
  link: {
    color: "#8B0000",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },
  socialIcon: {
    fontSize: "2rem",
    color: "#8B0000",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    width: "90%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  textarea: {
    width: "90%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    minHeight: "100px",
  },
  button: {
    background: "#8B0000",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: "column",
      gap: "30px",
    },
  },
};

export default Contact;