export default function StatCard({ title, value, danger }) {
  return (
    <div style={{
      background: "#161a22",
      borderRadius: "12px",
      padding: "20px",
      border: `1px solid ${danger ? "#ff4d4f" : "#222633"}`
    }}>
      <p style={{ color: "#a0a0a0" }}>{title}</p>
      <h2 style={{ color: danger ? "#ff4d4f" : "#4f9cff" }}>
        {value}
      </h2>
    </div>
  );
}
