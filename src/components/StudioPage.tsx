import { motion } from "motion/react";
import { ArrowUpRight, MapPin, Calendar, Users, Home as HomeIcon, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function StudioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[80vh] min-h-[600px] overflow-hidden flex flex-col justify-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/studio-space/1920/1080" 
            alt="Inside LIND Studios" 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-brand-dark/60" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-blue text-[10px] uppercase tracking-[0.4em] font-bold mb-4 border-l-2 border-brand-blue pl-4">The Ancestral Workshop</p>
            <h1 className="text-7xl md:text-[9vw] font-display font-black leading-[0.8] mb-8">
              THE <br /><span className="text-stroke italic text-brand-off-white/20">STUDIO</span>
            </h1>
            <p className="text-lg md:text-xl opacity-60 font-light leading-relaxed max-w-xl">
              Located in the heart of Loíza, Puerto Rico, our studio is more than a workspace—it is the birthplace of a legacy and the living pulse of our tradition.
            </p>
          </motion.div>
        </div>
      </header>

      {/* The Story / The Home Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-blue font-bold mb-4">A Sacred Space</p>
              <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-8">WHERE EVERY <br /> CANVAS IS HOME.</h2>
              <p className="text-lg opacity-70 leading-relaxed font-light mb-6">
                This space has served as the home of Samuel Lind for his entire life. It is the very ground where he was born, and where his artistic journey began. Every corner of the studio is saturated with the history of Loíza, with tropical greenery pressing against the windows and the sound of the ocean ever-present.
              </p>
              <p className="text-lg opacity-70 leading-relaxed font-light">
                Today, the studio is entering a new era. While Samuel continues to produce his world-renowned masterpieces within these walls, the space is now managed and directed by his son, **Lemuel Lind**. Under Lemuel's guidance, the studio is evolving into a modern cultural hub, bridging the gap between ancestral heritage and the digital future.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                 <HomeIcon className="text-brand-blue mb-4" size={24} />
                 <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Ancestral Birthplace</h4>
                 <p className="text-xs opacity-50 font-light">The studio is built on the exact site of Samuel's birth.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                 <ShieldCheck className="text-brand-blue mb-4" size={24} />
                 <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Modern Legacy</h4>
                 <p className="text-xs opacity-50 font-light">Directed and archived by the next generation of LIND.</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative group"
          >
            <img 
              src="https://picsum.photos/seed/artist-home/800/1000" 
              alt="Samuel and Lemuel at the Studio" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent" />
          </motion.div>
        </div>
      </section>

      {/* The Gallery of the Space */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4">Gallery</p>
            <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">INSIDE THE WORKSHOP</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-square bg-brand-dark overflow-hidden rounded-sm group relative">
              <img src="https://picsum.photos/seed/int-1/600/600" alt="Studio detail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />
            </div>
            <div className="aspect-square bg-brand-dark overflow-hidden rounded-sm group relative md:translate-y-12">
              <img src="https://picsum.photos/seed/int-2/600/600" alt="Studio detail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />
            </div>
            <div className="aspect-square bg-brand-dark overflow-hidden rounded-sm group relative">
              <img src="https://picsum.photos/seed/int-3/600/600" alt="Studio detail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Booking Section */}
      <section id="book-visit" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-[#0f0f0f] border border-white/5 rounded-sm p-8 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none hidden lg:block">
               <Calendar size={400} />
            </div>

            <div className="max-w-2xl space-y-10">
               <div>
                  <p className="text-brand-blue text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Experiences</p>
                  <h2 className="text-5xl md:text-7xl font-display font-black leading-none uppercase">Book a <br /><span className="text-stroke italic text-white/40">Studio Visit</span></h2>
               </div>

               <p className="text-lg opacity-60 font-light leading-relaxed">
                 Immersion starts here. Witness the creative cycle of Samuel Lind first-hand and explore our archives with Lemuel Lind. Studio visits are by appointment only to ensure an intimate and respectful experience of the workspace.
               </p>

               <div className="flex flex-wrap gap-12 py-6 border-y border-white/5">
                  <div className="flex items-center gap-4">
                     <Users size={20} className="text-brand-blue" />
                     <p className="text-xs uppercase tracking-widest font-bold">Small Groups Only</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <Calendar size={20} className="text-brand-blue" />
                     <p className="text-xs uppercase tracking-widest font-bold">Tues - Sat</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <MapPin size={20} className="text-brand-blue" />
                     <p className="text-xs uppercase tracking-widest font-bold">Loíza, PR</p>
                  </div>
               </div>

               <div className="pt-6">
                  <button className="px-12 py-5 bg-brand-blue text-brand-dark font-black text-sm tracking-[0.3em] uppercase rounded-sm hover:brightness-110 transition-all shadow-xl group">
                    Request Appointment <ArrowUpRight className="inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
