import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-brand-off-white/5 opacity-40 hover:opacity-100 transition-opacity">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
        <p>© 2026 LIND STUDIOS. ALL RIGHTS RESERVED.</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <Link to="/studio" className="hover:text-brand-blue transition-colors">The Studio</Link>
          <Link to="/artists" className="hover:text-brand-blue transition-colors">Artists</Link>
          <Link to="/collections" className="hover:text-brand-blue transition-colors">Collections</Link>
          <Link to="/projects" className="hover:text-brand-blue transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-brand-blue transition-colors opacity-60">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-blue transition-colors opacity-60">Terms</Link>
          </div>
          <a href="#" className="hover:text-brand-blue transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
