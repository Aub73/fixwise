import Navbar from "../components/Navbar";
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>Dashboard Page</h1>
        <p>This is the dashboard page of Fixwise.</p>
      </main>
    </div>
  );
}
