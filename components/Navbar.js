import Link from 'next/link';
export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f5f5f5" }}>
      <Link href="/">Home</Link> | <Link href="/dashboard">Dashboard</Link> | <Link href="/jobs">Jobs</Link>
    </nav>
  );
}
