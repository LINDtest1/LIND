import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Palette, User, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ARTISTS } from "../data/artists";
import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ArtistsPage() {
  const samuel = ARTISTS.find(a => a.id === "samuel-lind");
  const otherArtists = ARTISTS.filter(a => a.id !== "samuel-lind");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!samuel) return null;

  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark">
      <Navbar />

      {/* Main Banner (Samuel Lind) */}
      <header className="relative h-[80vh] min-h-[600px] overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={samuel.heroImage} 
            alt={samuel.name} 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-brand-blue text-[10px] uppercase tracking-[0.4em] font-bold mb-4 border-l-2 border-brand-blue pl-4">Legacy Head</p>
            <h1 className="text-7xl md:text-[8vw] font-display font-black leading-none mb-8">
              SAMUEL <br /> <span className="text-stroke">LIND</span>
            </h1>
            <p className="text-lg md:text-xl opacity-70 font-light leading-relaxed mb-10 max-w-xl">
              The foundational visionary of LIND Studios, dedicated to preserving 
              the ancestral soul and rhythmic traditions of Loíza for over 50 years.
            </p>
            <Link 
              to={`/artist/${samuel.id}`}
              className="inline-flex items-center gap-3 px-10 py-4 bg-brand-blue text-brand-dark font-black text-xs tracking-[0.2em] uppercase rounded-sm hover:brightness-110 transition-all shadow-2xl"
            >
              Explore Legacy <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Other Artists Section */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">The Next Generation</p>
              <h2 className="text-4xl md:text-6xl font-display font-medium">BEYOND THE <br /> FOUNDATION</h2>
            </div>
            <div className="hidden md:flex gap-4 opacity-20">
               <Palette size={40} />
               <User size={40} />
               <Globe size={40} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {otherArtists.map((artist, i) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group bg-brand-dark border border-white/5 overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={artist.profileImage} 
                    alt={artist.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 space-y-6 flex-1 flex flex-col">
                  <div>
                    <p className="text-brand-blue text-[9px] uppercase tracking-[0.3em] font-bold mb-2">{artist.role}</p>
                    <h3 className="text-3xl font-display font-black leading-none">{artist.name}</h3>
                  </div>
                  <p className="text-sm opacity-50 font-light leading-relaxed flex-1 line-clamp-3">
                    {artist.bio}
                  </p>
                  <Link 
                    to={`/artist/${artist.id}`}
                    className="flex items-center justify-between group/link pt-6 border-t border-white/5"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-black group-hover/link:text-brand-blue transition-colors">View Artist Profile</span>
                    <div className="p-2 bg-white/5 rounded-full group-hover/link:bg-brand-blue group-hover/link:text-brand-dark transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
