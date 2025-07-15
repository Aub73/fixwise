export default function Waitlist() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Join Our Early Access Waitlist</h1>
      <form>
        <input placeholder="Your email" style={{ padding: "0.5rem", width: "250px" }} />
        <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}>Join</button>
      </form>
    </div>
  );
}
