import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaCompass, FaHandHoldingHeart, FaChartLine, FaUserShield, FaLeaf } from "react-icons/fa";

const servicesData = [
  { icon: <FaStar />, title: "Horoscope Reading", description: "Discover your life's path with personalized horoscope insights." },
  { icon: <FaCompass />, title: "Vastu Consultation", description: "Align your home and workplace with Vastu principles for prosperity." },
  { icon: <FaHandHoldingHeart />, title: "Palmistry", description: "Decode the lines on your palm to unveil your destiny." },
  { icon: <FaChartLine />, title: "Career & Relationship Guidance", description: "Navigate your career and relationships with expert astrological advice." },
  { icon: <FaUserShield />, title: "Spiritual Protection", description: "Receive divine protection through spiritual remedies and rituals." },
  { icon: <FaLeaf />, title: "Healing & Meditation", description: "Experience peace with guided meditation and spiritual healing." }
];

function Services() {
  return (
    <motion.section
      style={styles.services}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 style={styles.title}>Our Services</h2>
      <div style={styles.grid}>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div style={styles.icon} whileHover={{ scale: 1.3, y: -8 }}>
              {service.icon}
              <motion.div style={styles.underline} whileHover={{ width: "70%" }} />
            </motion.div>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardDesc}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

const styles = {
  services: {
    padding: "80px 10%",
    textAlign: "center",
    background: "linear-gradient(to right, #8B0000, #ffcc00)",
    borderRadius: "50px 50 50px 50px",

  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.2)",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    border: "2px solid #fff",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#fff",
    position: "relative",
    display: "inline-block",
    marginBottom: "12px",
  },
  underline: {
    position: "absolute",
    bottom: "-5px",
    left: "50%",
    width: "30%",
    height: "4px",
    background: "#ffcc00",
    transform: "translateX(-50%)",
    transition: "width 0.4s ease-in-out",
  },
  cardTitle: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#fff",
  },
  cardDesc: {
    fontSize: "1rem",
    color: "#fff",
  },
};

export default Services;