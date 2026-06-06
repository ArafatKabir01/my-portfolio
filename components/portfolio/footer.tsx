export function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="logo">Arafat<span className="dot">.</span></div>
      <div className="center">© {new Date().getFullYear()} Arafat Ibne Kabir. All rights reserved.</div>
      <div className="right">
        Made with <span className="heart">♥</span> using Next.js &amp; Tailwind CSS
      </div>
    </footer>
  );
}
