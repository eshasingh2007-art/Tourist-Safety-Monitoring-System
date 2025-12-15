export default function Landing({ onEnter }) {
  return (
    <div style={styles.container}>
      <h1>Smart Tourist Safety Monitoring</h1>
      <p>
        Unified platform for tourist identification, real-time safety tracking,
        emergency alerts, and incident response.
      </p>

      <button onClick={onEnter} style={styles.button}>
        Enter Dashboard
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px",
  },
  button: {
    marginTop: "30px",
    padding: "14px 30px",
    background: "linear-gradient(135deg, #4f9cff, #2563eb)",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
