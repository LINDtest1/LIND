import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, MapPin, ExternalLink, Box, Palette, Share2, Heart } from "lucide-react";
import { ARTISTS } from "../data/artists";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ArtistDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artist = ARTISTS.find(a => a.id === id);
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsBioExpanded(false); // Reset expansion if artist changes
  }, [id]);

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark text-brand-off-white font-display">
        <div className="text-center">
          <h2 className="text-3xl font-black mb-4">Artist not found</h2>
          <Link to="/" className="text-brand-blue hover:opacity-80 transition-opacity tracking-widest uppercase text-xs">Return to Studio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark overflow-x-hidden">
      <Navbar />

      {/* Hero Banner (90vh) */}
      <section className="relative h-[90vh] flex flex-col justify-end items-start px-6 pb-24 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={artist.heroImage} 
            alt={artist.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-brand-blue mb-4 font-bold border-b border-brand-blue/30 w-fit pb-2">
              {artist.role}
            </p>
            <h1 className="text-7xl md:text-[10vw] font-display font-black leading-[0.85] mb-6">
              {artist.name.split(' ')[0]} <br />
              <span className="text-stroke">{artist.name.split(' ')[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl font-display font-light opacity-60 tracking-wider">
              {artist.fullRole}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="aspect-[4/5] rounded-sm overflow-hidden"
          >
            <img src={artist.profileImage} alt={artist.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">THE STORY</p>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">ARTISTIC LEGACY</h2>
              <motion.div layout>
                <p className={`text-lg md:text-xl leading-relaxed opacity-70 font-light italic transition-all duration-500 overflow-hidden ${isBioExpanded ? "" : "line-clamp-4 md:line-clamp-5"}`}>
                  "{artist.bio}"
                </p>
                {artist.bio.length > 250 && (
                  <button 
                    onClick={() => setIsBioExpanded(!isBioExpanded)}
                    className="mt-6 text-[10px] uppercase font-bold tracking-widest text-brand-blue hover:text-brand-off-white transition-colors hover:underline underline-offset-4"
                  >
                    {isBioExpanded ? "- Show Less" : "+ Read Full Bio"}
                  </button>
                )}
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
              <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-brand-blue">Loíza</p>
                <p className="text-[9px] uppercase tracking-widest opacity-40">Creative Origin</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-brand-blue">LIND</p>
                <p className="text-[9px] uppercase tracking-widest opacity-40">Ancestral Soul</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-32 px-6 bg-black-90">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Gallery</p>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">MAJOR COLLECTIONS</h2>
              <p className="opacity-50 text-sm md:text-base leading-relaxed">
                Exploring thematic series that define {artist.name}'s contribution to Puerto Rican art history and modern design.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-all border-b border-white/20 pb-2">
              View All Works <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {artist.collections.map((col, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-crosshair"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-8 border border-white/5 relative">
                  <img src={col.image} alt={col.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{col.title}</h3>
                <p className="text-xs opacity-60 leading-relaxed font-light">{col.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit the Studio Section */}
      <section id="studio" className="py-32 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1">
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6">Experiences</p>
                <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">VISIT THE STUDIO</h2>
                <div className="space-y-8 mb-12">
                   <p className="text-base md:text-lg opacity-70 leading-relaxed font-light">
                     {artist.studioDescription}
                   </p>
                   <div className="flex items-center gap-4 text-brand-blue">
                      <MapPin size={20} />
                      <p className="text-sm font-display tracking-wide uppercase font-medium">{artist.studioLocation}</p>
                   </div>
                </div>
                <div className="flex flex-wrap gap-6">
                   <button className="px-10 py-4 bg-brand-blue text-brand-dark font-black text-xs tracking-[0.2em] uppercase rounded-sm hover:brightness-110 transition-all shadow-xl">
                      Book a Visit
                   </button>
                   <button className="px-10 py-4 border border-white/20 text-brand-off-white font-bold text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-white/5 transition-all">
                      Location Info
                   </button>
                </div>
             </div>
             <motion.div 
               initial={{ opacity: 0, scale: 1.05 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2 aspect-video lg:aspect-square overflow-hidden rounded-sm relative shadow-2xl"
             >
                <img src={artist.studioImage} alt="The Studio" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 border-[20px] border-brand-dark/20" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {artist.projects && artist.projects.length > 0 && (
        <section id="projects" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Directorship</p>
              <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">ACTIVE PROJECTS</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {artist.projects.map((proj, i) => (
                <Link to={`/project/${proj.id}`} key={i}>
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="group relative h-[600px] overflow-hidden rounded-sm bg-black-90"
                  >
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-12 w-full">
                       <p className="text-[9px] uppercase tracking-[0.3em] text-brand-blue font-bold mb-4">LIND Initiative</p>
                       <h4 className="text-4xl font-display font-black italic mb-4">{proj.title}</h4>
                       <p className="max-w-sm text-sm opacity-60 leading-relaxed font-light mb-8 line-clamp-2">
                          {proj.description}
                       </p>
                       <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-brand-blue bg-white/5 w-fit px-6 py-2 border border-white/10 group-hover:bg-brand-blue group-hover:text-brand-dark transition-all">
                          View Project <ArrowUpRight size={14} />
                       </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
