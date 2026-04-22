import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AllProjectsPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark">
      <Navbar />

      {/* Hero Header */}
      <header className="pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-blue mb-4">Portfolio</p>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-8">
            ALL PROJECTS
          </h1>
          <p className="max-w-2xl text-lg opacity-60 leading-relaxed font-light">
            A comprehensive archive of LIND Studios initiatives. From traditional silkscreen legacies to speculative digital ecosystems, explore how we are pushing the culture forward.
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group aspect-[4/5] overflow-hidden rounded-sm border border-white/5 bg-[#0a0a0a]"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex justify-between items-end">
                      <div className="space-y-2">
                         <p className="text-[9px] uppercase tracking-[0.3em] text-brand-blue font-bold">{project.subtitle}</p>
                         <h4 className="text-2xl font-display font-black tracking-tight">{project.title}</h4>
                         <p className="text-xs opacity-60 leading-relaxed font-light line-clamp-2 pr-4">{project.tagline}</p>
                      </div>
                      <div className="bg-brand-blue/20 p-2 rounded-full border border-brand-blue/20 transition-all group-hover:bg-brand-blue group-hover:text-brand-dark">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
