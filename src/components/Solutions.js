import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
//   FaUserTie,
  FaBalanceScale,
  FaBusinessTime,
  FaUserCheck,
  FaHandshake,
//   FaComments,
  FaUsers,
} from "react-icons/fa";
import love from "../assets/love.jpeg";
import business from "../assets/business.jpeg";
import family from "../assets/family.jpeg";
import partner from "../assets/partner.jpeg";
import caste from "../assets/caste.jpeg";
import dispute from "../assets/dispute.jpeg";
// import solution from "../assets/solution.jpeg";
// import parrent from "../assets/parrent.jpeg";



const personalProblems = [
  {
    icon: <FaHeart />,
    title: "Love Marriage Specialist",
    description: "Want to marry your dream girl? Get expert guidance.",
    image: love,
  },
  {
    icon: <FaBalanceScale />,
    title: "Family Dispute Resolution",
    description: "Family is precious. Save it from any problem.",
    image: family,
  },
  {
    icon: <FaBusinessTime />,
    title: "Business Problem Solution",
    description:
      "Strengthen growth of your business with astrological solutions.",
    image: business,
  },
  {
    icon: <FaUserCheck />,
    title: "Get Desired Partner",
    description: "Astrology can help you get your perfect match.",
    image: partner,
  },
  {
    icon: <FaHandshake />,
    title: "Inter-caste Marriage",
    description: "Struggling with family approval? Get a quick solution.",
    image: caste,
  },
  {
    icon: <FaUsers />,
    title: "Husband Wife Dispute",
    description: "Resolve common marriage issues with ease.",
    image: dispute,
  },
//   {
//     icon: <FaComments />,
//     title: "Love Problem Solution",
//     description: "Fix your love life troubles in one call!",
//     image: solution,
//   },
//   {
//     icon: <FaUserTie />,
//     title: "Parents Marriage Approval",
//     description: "Get your parents' approval for your love marriage.",
//     image: parrent,
//   },
];

const PersonalProblemsSolutions = () => {
  return (
    <motion.section
      style={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 style={styles.title} whileHover={{ scale: 1.05 }}>
        Personal Problems Solutions
      </motion.h2>

      <motion.div style={styles.grid}>
        {personalProblems.map((problem, index) => (
          <motion.div
            key={index}
            style={{
              ...styles.card,
              background: `linear-gradient(135deg, rgba(139, 0, 0, 0.8), rgba(255, 204, 0, 0.8))`,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={problem.image} alt={problem.title} style={styles.image} />
            <div style={styles.icon}>{problem.icon}</div>
            <h3 style={styles.cardTitle}>{problem.title}</h3>
            <p style={styles.cardDescription}>{problem.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

const styles = {
  container: {
    padding: "40px 10%",
    textAlign: "center",
    background: "#fff",
    color: "#333",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#8B0000",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    justifyContent: "center",
  },
  card: {
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    color: "white",
    transition: "transform 0.3s ease-in-out",
    backdropFilter: "blur(10px)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  icon: {
    fontSize: "2rem",
    margin: "10px 0",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
};

export default PersonalProblemsSolutions;
