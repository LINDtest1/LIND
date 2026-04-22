import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ARTISTS } from "../data/artists";
import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function CollectionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <header className="pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-blue mb-4">Archive</p>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-8">
            COLLECTIONS
          </h1>
          <p className="max-w-2xl text-lg opacity-60 leading-relaxed font-light">
            Explore the thematic bodies of work from LIND Studios. These collections represent lifetimes of dedication to capturing the soul of Loíza and its deep cultural roots.
          </p>
        </div>
      </header>

      {/* Collections Grid */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto space-y-32">
          {ARTISTS.map((artist) => (
            <div key={artist.id}>
              <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-4xl font-display font-medium text-brand-blue">{artist.name}</h2>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mt-2">{artist.fullRole}</p>
                </div>
                <Link to={`/artist/${artist.id}`} className="text-xs uppercase tracking-widest font-bold opacity-60 hover:opacity-100 hover:text-brand-blue transition-colors flex items-center gap-2">
                  View Artist Profile <ArrowUpRight size={14} />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {artist.collections.map((col, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 border border-white/5 relative">
                      <img src={col.image} alt={col.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-blue transition-colors">{col.title}</h3>
                    <p className="text-xs opacity-60 leading-relaxed font-light">{col.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
