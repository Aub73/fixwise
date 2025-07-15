export default function JobCard({ title, description }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
