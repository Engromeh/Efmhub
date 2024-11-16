import { motion } from "framer-motion";

const DirectReferrals = () => {
  const data = {
    parent: { name: "Alexa Rawles", email: "alexarawles@gmail.com", type: "Parent" },
    intermediate: { name: "Intermediate Box", type: "Middle" },
    children: [
      { name: "Child 1", email: "child1@gmail.com", premium: true },
      { name: "Child 2", email: "child2@gmail.com", premium: false },
      { name: "Child 3", email: "child3@gmail.com", premium: false },
      { name: "Child 4", email: "child4@gmail.com", premium: false },
      { name: "Child 5", email: "child5@gmail.com", premium: true },
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Direct Referrals</h1>

      {/* Parent Box */}
      <div style={styles.parentBox}>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/60"
            alt="parent"
            style={styles.image}
          />
        </div>
        <h3 style={styles.name}>{data.parent.name}</h3>
        <p style={styles.email}>{data.parent.email}</p>
        <motion.div
          style={styles.lineFromParent}
          initial={{ height: 0 }}
          animate={{ height: "50px" }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>

      {/* Intermediate Box */}
      <div style={styles.intermediateBox}>
        <div style={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/60"
            alt="intermediate"
            style={styles.image}
          />
        </div>
        <h3 style={styles.name}>{data.intermediate.name}</h3>
        <motion.div
          style={styles.lineToChildren}
          initial={{ height: 0 }}
          animate={{ height: "60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>
      </div>

      {/* Children Boxes */}
      <div style={styles.childrenContainer}>
        <motion.div
          style={styles.horizontalLine}
          initial={{ width: 0 }}
          animate={{ width: "90%" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        ></motion.div>
        {data.children.map((child, index) => (
          <div key={index} style={styles.childWrapper}>
            <div style={styles.arrow}></div>
            <motion.div
              style={{
                ...styles.childBox,
                border: child.premium ? "3px solid #FFD700" : "1px solid #ddd",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.2 }}
            >
              <div style={styles.imageContainer}>
                <img
                  src="https://via.placeholder.com/60"
                  alt={child.name}
                  style={styles.image}
                />
              </div>
              <h3 style={styles.name}>{child.name}</h3>
              <p style={styles.email}>{child.email}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "50px auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "25px",
  },
  parentBox: {
    position: "relative",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
    width: "200px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "3px solid #d4af37",
  },
  intermediateBox: {
    position: "relative",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    padding: "15px",
    width: "150px",
    margin: "55px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "3px solid #808892",
  },
  childrenContainer: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    marginTop: "40px",
    gap: "20px",
    flexWrap: "nowrap",
  },
  childWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  childBox: {
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "10px",
    width: "150px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  imageContainer: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    position: "relative",
    top: "-45px",
  },
  image: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    position: "absolute",
    top: "10px",
    left: "10px",
  },
  lineFromParent: {
    position: "absolute",
    width: "2px",
    backgroundColor: "#ddd",
    bottom: "-50px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  lineToChildren: {
    position: "absolute",
    width: "2px",
    backgroundColor: "#ddd",
    bottom: "-60px",
    left: "50%",
    transform: "translateX(-50%)",
    top: "-77px",
  },
  horizontalLine: {
    position: "absolute",
    height: "2px",
    backgroundColor: "#ddd",
    top: "-75px",
    left: "%",
    zIndex: 1,
  },
  arrow: {
    position: "absolute",
    width: "2px",
    height: "30px",
    backgroundColor: "#ddd",
    top: "-70px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
    clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
  },
  name: {
    fontSize: "16px",
    color: "#333",
  },
  email: {
    fontSize: "14px",
    color: "#777",
  },
  "@media (max-width: 768px)": {
    container: {
      padding: "10px",
    },
    parentBox: {
      width: "90%",
    },
    intermediateBox: {
      width: "80%",
    },
    childrenContainer: {
      flexWrap: "wrap",
    },
    childBox: {
      width: "100px",
      padding: "5px",
    },
    imageContainer: {
      width: "60px",
      height: "60px",
    },
    image: {
      width: "40px",
      height: "40px",
    },
  },
};

export default DirectReferrals;
