import { useEffect, useState, useRef } from "react";
import AboutUs from "../../Component/Homepage/AboutUsSection/AboutUs";
import Hero from "../../Component/Homepage/HeroSection/Hero";
import Payment from "../../Component/Homepage/PaymentSection/Payment";
import { motion, useAnimation } from "framer-motion";
import profile from "../../Component/Homepage/profileSection/profile";
import Membership from "../../Component/Homepage/MembershipSection/Membership";
import Faq from "../../Component/Homepage/Faq/Faq";
import CustomerOpinions from "../../Component/Homepage/CustomerOpinions/CustomerOpinions";

const Homepage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef([]);
  const animationControls = useRef([]); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(scrollTop / documentHeight, 1);
      setScrollProgress(scrollPercentage * 360);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = sectionRefs.current.indexOf(entry.target);
        if (entry.isIntersecting && index !== -1) {
          animationControls.current[index].start("visible"); 
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {[Hero, AboutUs, profile, Membership ,Payment ,Faq ,CustomerOpinions].map((SectionComponent, index) => {
        const controls = useAnimation();
        animationControls.current[index] = controls; // Save controls for each section

        return (
          <motion.div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            transition={{ duration: 0.6 }}
            style={styles.section}
          >
            <SectionComponent />
          </motion.div>
        );
      })}
      <div
        style={{
          ...styles.progress,
          background: `conic-gradient(#D3B9A3 ${scrollProgress}deg, transparent 0deg)`,
        }}
      >
        <span style={styles.arrow}>→</span>
      </div>
    </motion.div>
  );
};

const styles = {
  progress: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: "#333",
  },
  arrow: {
    fontSize: "1.5rem",
  },
  section: {
    padding: "20px",
  },
};

export default Homepage;
