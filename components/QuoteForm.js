export default function QuoteForm() {
  return (
    <form style={{ marginTop: "1rem" }}>
      <input placeholder="Your quote (£)" style={{ padding: "0.5rem", marginRight: "1rem" }} />
      <button type="submit" style={{ padding: "0.5rem 1rem" }}>Send Quote</button>
    </form>
  );
}
