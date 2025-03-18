import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCheckCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      style={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        style={styles.curve}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      <motion.div
        style={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.div style={styles.section} whileHover={{ scale: 1.05 }}>
          <h2>About Us</h2>
          <p>
            Pandit Sri Ganesh Maharaj is a renowned astrologer offering expert
            guidance in astrology, numerology, and Vastu consultation.
          </p>
        </motion.div>

        <motion.div style={styles.section} whileHover={{ scale: 1.05 }}>
          <h2>Our Services</h2>
          <ul style={styles.list}>
            {[
              "Kundali Matching",
              "Palm Reading",
              "Vastu Consultation",
              "Horoscope Analysis",
              "Numerology",
            ].map((service, index) => (
              <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                <FaCheckCircle style={styles.icon} /> {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div style={styles.section} whileHover={{ scale: 1.05 }}>
          <h2>Contact Us</h2>
          <p>
            <FaPhoneAlt /> <a href="tel:+919538757791" style={styles.link}>+91 9538757791</a>
          </p>
          <p>
            <FaEnvelope /> <a href="mailto:sripanchamukhiastro@gmail.com" style={styles.link}>sripanchamukhiastro@gmail.com</a>
          </p>
          <p>
            <FaMapMarkerAlt /> Imperial Tower, Hyderabad 500016
          </p>
        </motion.div>

        <motion.div style={styles.section} whileHover={{ scale: 1.05 }}>
          <h2>Follow Us</h2>
          <motion.div style={styles.socialIcons}>
            {[
              { icon: FaFacebook, link: "https://facebook.com" },
              { icon: FaInstagram, link: "https://instagram.com" },
              { icon: FaTwitter, link: "https://twitter.com" },
              { icon: FaYoutube, link: "https://youtube.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {React.createElement(social.icon)}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.p
        style={styles.copyright}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        © 2024 Sri Panchamukhi Astro | All Rights Reserved
      </motion.p>
    </motion.footer>
  );
};

const styles = {
  footer: {
    position: "relative",
    background: "linear-gradient(to right, #8B0000, #ffcc00)",
    color: "white",
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "10px",
    overflow: "hidden",
  },
  curve: {
    position: "absolute",
    top: "-60px",
    left: "0",
    width: "100%",
    height: "120px",
    background: "linear-gradient(to right, #8B0000, #ffcc00)",
    clipPath: "ellipse(60% 50% at 50% 0%)",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "0 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  section: {
    flex: "1",
    minWidth: "250px",
    margin: "20px",
    textAlign: "left",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  icon: {
    color: "#ffcc00",
    marginRight: "10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    marginTop: "10px",
  },
  socialLink: {
    color: "white",
    fontSize: "24px",
    transition: "color 0.3s ease",
  },
  copyright: {
    marginTop: "40px",
    fontSize: "14px",
    opacity: 0.8,
  },
};

export default Footer;