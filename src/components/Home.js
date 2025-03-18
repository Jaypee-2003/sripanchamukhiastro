import React from "react";
import { motion } from "framer-motion";
import { FaStarOfDavid, FaHandsHelping } from "react-icons/fa";
import homeImage from "../assets/home.jpg";

function Home() {
  return (
    <section style={styles.hero}>
      {/* Floating Particles for Effect */}
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

      {/* Left Content - Heading & CTA */}
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

      {/* Right Side - Image */}
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
    justifyContent: "space-between",
    padding: "40px 10%",
    position: "relative",
    background: "linear-gradient(to right, #8B0000, #ffcc00)",
    borderRadius: "0 0 50px 50px",
    color: "white",
    minHeight: "90vh",
    overflow: "hidden",
  },
  textContainer: {
    maxWidth: "500px",
    zIndex: 2,
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "10px",
    textShadow: "2px 2px 8px rgba(255, 204, 0, 0.7)",
    display: "flex",
    alignItems: "center",
  },
  subtitle: {
    fontSize: "1.3rem",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  buttonContainer: {
    display: "flex",
    gap: "15px",
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
  },
  heroImage: {
    width: "400px",
    height: "auto",
    borderRadius: "20px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
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
};

export default Home;
