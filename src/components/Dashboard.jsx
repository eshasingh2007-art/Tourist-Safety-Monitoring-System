import StatCard from "./StatCard";
import TouristMap from "./TouristMap";

export default function Dashboard() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        Tourist Safety Command Center
      </header>

      <section style={styles.stats}>
        <StatCard title="Active Tourists" value="1,248" />
        <StatCard title="Alert Zones" value="5" danger />
        <StatCard title="Ongoing Incidents" value="2" danger />
        <StatCard title="Safe Zones" value="18" />
      </section>

      <section style={styles.main}>
        <div className="map-container">
          <TouristMap />
        </div>

        <div style={styles.alerts}>
          <h3>🚨 Recent Alerts</h3>
          <ul>
            <li>Suspicious activity near Zone A</li>
            <li>Medical emergency reported</li>
            <li>Weather warning issued</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: { padding: "30px" },
  header: { fontSize: "1.8rem", marginBottom: "30px" },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
  },
  alerts: {
    background: "#161a22",
    borderRadius: "12px",
    padding: "20px",
    border: "1px solid #222633",
  },
};
