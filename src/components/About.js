import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      style={styles.about}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title Section */}
      <motion.h2
        style={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        About Us
      </motion.h2>

      {/* Mission Statement */}
      <motion.p
        style={styles.description}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <strong>Our Mission:</strong> Bringing clarity and positive transformation through time-tested
        astrological wisdom. Our expert <strong>Pandit Sri Ganesh Maharaj</strong> provides insights and
        remedies tailored to your life's path.
      </motion.p>

      {/* Astrology Philosophy */}
      <motion.div
        style={styles.philosophyContainer}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <motion.h3 style={styles.philosophyTitle} whileHover={{ scale: 1.05 }}>
          ✨ Our Astrology Philosophy ✨
        </motion.h3>
        <motion.p style={styles.philosophyText} whileHover={{ scale: 1.02 }}>
          We believe the universe holds deep secrets that guide our destiny. Astrology helps
          in unlocking hidden energies, aligning you with your best potential.
        </motion.p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        style={styles.servicesContainer}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3, ease: "easeOut", duration: 0.8 },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            style={styles.serviceCard}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            {service.icon} <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        style={styles.statsContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} style={styles.statItem} whileHover={{ scale: 1.05 }}>
            <span style={styles.statValue}>
              <AnimatedStat value={stat.value} />
            </span>
            <span style={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials Section
      <motion.div
        style={styles.testimonialContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <motion.h3 style={styles.testimonialTitle} whileHover={{ scale: 1.05 }}>
          💬 What Our Clients Say 💬
        </motion.h3>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            style={styles.testimonialCard}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <p>{testimonial.quote}</p>
            <strong>- {testimonial.author}</strong>
          </motion.div>
        ))}
      </motion.div> */}
    </motion.section>
  );
}

function AnimatedStat({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, ""));
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = totalDuration / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}+</>;
}

const services = [
  { icon: "🔮", title: "Personal Problem Solutions", description: "Find clarity and guidance for life's challenges." },
  { icon: "🌟", title: "Career & Financial Growth", description: "Discover the right path for success and financial stability." },
  { icon: "💖", title: "Love & Marriage", description: "Get expert astrological advice for love, marriage, and relationships." },
];

const stats = [
  { value: "9999", label: "Happy Clients" },
  { value: "20", label: "Years of Experience" },
  { value: "99", label: "Success Rate" },
];

// const testimonials = [
//   { quote: "Life-changing guidance! I feel more aligned with my path.", author: "Ramesh K." },
//   { quote: "Incredible accuracy! Helped me overcome career obstacles.", author: "Priya S." },
//   { quote: "Truly a divine experience. Highly recommended!", author: "Vikram M." },
// ];

const styles = {
  about: {
    padding: "60px 10%",
    color: "#333",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#8B0000",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  philosophyContainer: {
    margin: "40px 0",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    border: "2px solid #8B0000",
  },
  philosophyTitle: { fontSize: "1.8rem", fontWeight: "bold", color: "#8B0000" },
  philosophyText: { fontSize: "1.2rem", lineHeight: "1.5" },
  testimonialContainer: { marginTop: "50px" },
  testimonialTitle: { fontSize: "2rem", fontWeight: "bold", color: "#8B0000" },
  testimonialCard: {
    background: "#fff",
    padding: "15px",
    margin: "15px auto",
    width: "70%",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    fontSize: "1.2rem",
    color: "#444",
  },
  servicesContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  serviceCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    width: "300px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    border: "2px solid #8B0000",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    marginTop: "40px",
    flexWrap: "wrap",
  },
  statItem: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#8B0000",
    display: "flex",
    flexDirection: "column",
  },
  statValue: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: "1.2rem",
    marginTop: "5px",
  },
};

export default About;
