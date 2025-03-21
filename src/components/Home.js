import React from "react";
import { motion } from "framer-motion";
import { FaStarOfDavid, FaHandsHelping } from "react-icons/fa";
import homeImage from "../assets/home2.png";

function Home() {
  return (
    <section style={styles.hero}>
      <motion.div
        style={styles.particle}
        animate={{ opacity: [0.3, 0.7, 0.3], y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ ...styles.particle, right: "15%" }}
        animate={{ opacity: [0.5, 1, 0.5], y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={styles.textContainer}
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 style={styles.title}>
          <FaStarOfDavid style={styles.icon} />
          Discover Your Spiritual Path
        </h1>
        <p style={styles.subtitle}>
          Get divine guidance from <strong>Pandit Sri Ganesh Maharaj</strong> to unlock your true destiny.
        </p>

        <div style={styles.buttonContainer}>
          <motion.a
            href="#contact"
            style={styles.ctaButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Consult Now
          </motion.a>
          <motion.a
            href="#services"
            style={styles.secondaryButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More <FaHandsHelping style={{ marginLeft: "8px" }} />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        style={styles.imageContainer}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src={homeImage}
          alt="Spiritual Guidance"
          style={styles.heroImage}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
}

const styles = {
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "40px 10%",
    gap:"40px",
    position: "relative",
    background: "linear-gradient(to right, #8B0000, #ffcc00)",
    borderRadius: "0 0 50px 50px",
    color: "white",
    minHeight: "90vh",
    overflow: "hidden",
    textAlign: "center",
  },
  textContainer: {
    maxWidth: "500px",
    zIndex: 2,
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    textShadow: "2px 2px 8px rgba(255, 204, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    padding: "12px 25px",
    backgroundColor: "#ffcc00",
    color: "#8B0000",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
    boxShadow: "0px 4px 15px rgba(255, 204, 0, 0.5)",
    transition: "all 0.3s ease",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    padding: "12px 25px",
    backgroundColor: "transparent",
    color: "#ffcc00",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
    border: "2px solid #ffcc00",
    transition: "all 0.3s ease",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    marginTop: "30px",
  },
  heroImage: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "20px",
    // boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  },
  icon: {
    marginRight: "10px",
  },
  particle: {
    position: "absolute",
    top: "20%",
    left: "10%",
    width: "50px",
    height: "50px",
    backgroundColor: "rgba(255, 204, 0, 0.6)",
    borderRadius: "50%",
    filter: "blur(15px)",
    zIndex: 1,
  },
  '@media (max-width: 768px)': {
    hero: {
      flexDirection: "column",
      textAlign: "center",
    },
    textContainer: {
      maxWidth: "100%",
    },
    buttonContainer: {
      flexDirection: "column",
    },
  },
};

export default Home;