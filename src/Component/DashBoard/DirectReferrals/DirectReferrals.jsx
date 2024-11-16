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
          <div style={styles.lineFromParent}></div>
        </div>
  
        <div style={styles.intermediateBox}>
          <div style={styles.imageContainer}>
            <img
              src="https://via.placeholder.com/60"
              alt="intermediate"
              style={styles.image}
            />
          </div>
          <h3 style={styles.name}>{data.intermediate.name}</h3>
          <div style={styles.lineToChildren}></div>
        </div>
  
        <div style={styles.childrenContainer}>
          <div style={styles.horizontalLine}></div> 
          {data.children.map((child, index) => (
            <div key={index} style={styles.childWrapper}>
              <div style={styles.verticalLine}></div> 
              <div
                style={{
                  ...styles.childBox,
                  border: child.premium ? "3px solid #FFD700" : "1px solid #ddd",
                }}
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
              </div>
            </div>
          ))}
        </div>
  
        <footer style={styles.footer}>Copyright @EFM 2024</footer>
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
      border: "3px solid  #808892",
    },
    childrenContainer: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      marginTop: "40px",
      gap: "20px",
      flexWrap: "wrap", 
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
      height: "50px",
      backgroundColor: "#ddd",
      bottom: "-50px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    lineToChildren: {
      position: "absolute",
      width: "2px",
      height: "60px",
      backgroundColor: "#ddd",
      bottom: "-60px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    horizontalLine: {
      position: "absolute",
      width: "90%",
      height: "2px",
      backgroundColor: "#ddd",
      top: "0",
      left: "5%",
      zIndex: -1,
    },
    verticalLine: {
      position: "absolute",
      width: "2px",
      height: "20px",
      backgroundColor: "#ddd",
      top: "-20px",
    },
    name: {
      fontSize: "16px",
      color: "#333",
    },
    email: {
      fontSize: "14px",
      color: "#777",
    },
    footer: {
      marginTop: "20px",
      fontSize: "14px",
      color: "#aaa",
    },
  };
  
  export default DirectReferrals;
  