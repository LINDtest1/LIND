import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "The Studio", path: "/studio" },
    { label: "Artists", path: "/artists" },
    { label: "Collections", path: "/collections" },
    { label: "Projects", path: "/projects", anchor: "#manifesto" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-500 ${
          isScrolled || isMenuOpen ? "py-4 bg-brand-dark/90 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex gap-1 items-center group">
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-1 transition-all duration-500 ${isScrolled ? "h-4 bg-brand-blue" : "h-6 bg-brand-off-white"} group-hover:bg-brand-blue group-hover:h-6`} />
              ))}
            </div>
            <span className={`ml-3 text-[11px] uppercase tracking-[0.4em] font-black transition-all duration-500 ${isScrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0"}`}>
              LIND <span className="text-brand-blue">STUDIOS</span>
            </span>
          </Link>
          
          <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.25em] uppercase items-center">
            {navLinks.map((link) => {
              const fullPath = link.anchor ? (location.pathname === "/" ? link.anchor : `/${link.anchor}`) : link.path;
              
              return link.anchor ? (
                <a 
                  key={link.label} 
                  href={fullPath} 
                  className={`transition-all duration-300 relative group/link opacity-50 hover:opacity-100 hover:text-brand-blue`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[1px] bg-brand-blue transition-all duration-300 w-0 group-hover/link:w-full" />
                </a>
              ) : (
                <Link 
                  key={link.label} 
                  to={link.path} 
                  className={`transition-all duration-300 relative group/link ${isActive(link.path) ? "text-brand-blue opacity-100" : "opacity-50 hover:opacity-100 hover:text-brand-blue"}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-brand-blue transition-all duration-300 ${isActive(link.path) ? "w-full" : "w-0 group-hover/link:w-full"}`} />
                </Link>
              );
            })}
            <button 
              onClick={() => navigate("/arthub")}
              className="ml-4 px-5 py-2 border border-brand-blue/30 text-brand-blue rounded-sm hover:bg-brand-blue hover:text-brand-dark transition-all text-[9px] font-black tracking-widest flex items-center gap-2"
            >
              {user && <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />}
              ARTHUB
            </button>
          </div>

          <button 
            className="md:hidden text-brand-off-white p-2 hover:text-brand-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center gap-8 text-4xl md:text-6xl font-display font-black uppercase tracking-tighter italic">
              {navLinks.map((link, i) => {
                const fullPath = link.anchor ? (location.pathname === "/" ? link.anchor : `/${link.anchor}`) : link.path;

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.anchor ? (
                       <a 
                        href={fullPath} 
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-brand-blue text-white/40 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.path} 
                        onClick={() => setIsMenuOpen(false)}
                        className={`transition-colors ${isActive(link.path) ? "text-brand-blue" : "hover:text-brand-blue text-white/40"}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/arthub");
                }}
                className="mt-8 px-12 py-4 bg-brand-blue text-brand-dark font-black text-sm tracking-[0.4em] uppercase rounded-sm"
              >
                ARTHUB
              </motion.button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold"
            >
              <p>© 2026 LIND STUDIOS</p>
              <div className="flex gap-8">
                <a href="#">IG</a>
                <a href="#">FB</a>
                <a href="#">TW</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
