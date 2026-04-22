import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, ChevronRight, Share2, Heart, Award, Globe, Box } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useAuth } from "../context/AuthContext";
import { toggleInteraction, getInteractions } from "../lib/dbService";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const project = PROJECTS.find(p => p.id === id);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user && id) {
      checkInteraction();
    }
  }, [id, user]);

  const checkInteraction = async () => {
    try {
      const interactions = await getInteractions(user!.uid, 'follow');
      setIsFollowing(interactions!.some(i => i.targetId === id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleFollow = async () => {
    if (!user) {
      navigate("/arthub/login");
      return;
    }
    setFollowLoading(true);
    try {
      const added = await toggleInteraction(user.uid, id!, 'follow');
      setIsFollowing(added || false);
    } catch (err) {
      console.error(err);
    } finally {
      setFollowLoading(false);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark text-brand-off-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <Link to="/" className="text-brand-blue hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-all group font-bold"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Inventory
          </button>
        </div>
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover blur-2xl" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-1.5 mb-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="w-1.5 h-6 bg-brand-blue" />
                  ))}
                  <span className="text-[10px] uppercase tracking-[0.4em] text-brand-blue ml-2">Project Showcase</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-6">
                  {project.title}
                </h1>
                <p className="text-lg opacity-60 max-w-xl leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/10">
                {project.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl font-display font-bold text-brand-blue">{stat.value}</p>
                    <p className="text-[9px] uppercase tracking-widest opacity-40">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Backing Section */}
      <section className="py-24 px-6 bg-black-90 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">Support the Vision</p>
            <h2 className="text-3xl md:text-5xl font-display font-medium">BACK THE PROJECT</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="bg-brand-dark p-8 border border-white/5 hover:border-brand-blue/30 transition-all space-y-6 flex flex-col group">
              <div className="p-3 bg-white/5 w-fit rounded-sm group-hover:bg-brand-blue/10 transition-all">
                <Globe size={24} className="text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-1">FREE ACCESS</h3>
                <p className="text-brand-blue text-sm font-medium">Become a Follower</p>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="text-[11px] uppercase tracking-wider opacity-60 flex items-start gap-2">
                  <ChevronRight size={12} className="mt-0.5 text-brand-blue" />
                  Weekly project updates
                </li>
                <li className="text-[11px] uppercase tracking-wider opacity-60 flex items-start gap-2">
                  <ChevronRight size={12} className="mt-0.5 text-brand-blue" />
                  Behind the scenes vlogs
                </li>
              </ul>
              <button 
                onClick={handleToggleFollow}
                disabled={followLoading}
                className={`w-full py-3 border text-[10px] uppercase tracking-widest font-bold transition-all transition-all ${isFollowing ? "bg-brand-blue border-brand-blue text-brand-dark" : "border-white/20 hover:bg-white/5"}`}
              >
                {followLoading ? "Processing..." : isFollowing ? "Following" : "Follow Project"}
              </button>
            </div>

            {/* $150 Tier */}
            <div className="bg-brand-dark p-8 border border-brand-blue/40 relative space-y-6 flex flex-col group overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-brand-blue/10 text-brand-blue text-[9px] uppercase tracking-widest font-bold border-b border-l border-brand-blue/20">
                Popular
              </div>
              <div className="p-3 bg-brand-blue/10 w-fit rounded-sm">
                <Box size={24} className="text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-1">$150 TIER</h3>
                <p className="text-brand-blue text-sm font-medium">Project Box + Collectors</p>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="text-[11px] uppercase tracking-wider opacity-80 flex items-start gap-2">
                  <ChevronRight size={12} className="mt-0.5 text-brand-blue" />
                  Exclusive Project Box
                </li>
                <li className="text-[11px] uppercase tracking-wider opacity-80 flex items-start gap-2">
                  <ChevronRight size={12} className="mt-0.5 text-brand-blue" />
                  Collectors Art Product
                </li>
                <li className="text-[11px] uppercase tracking-wider opacity-80 flex items-start gap-2 text-brand-blue">
                  <ChevronRight size={12} className="mt-0.5" />
                  Mention on website
                </li>
              </ul>
              <button className="w-full py-3 bg-brand-blue text-brand-dark text-[10px] uppercase tracking-widest font-bold hover:brightness-110 transition-all">
                Back with $150
              </button>
            </div>

            {/* $300 Tier */}
            <div className="bg-brand-dark p-8 border border-white/5 hover:border-brand-blue/30 transition-all space-y-6 flex flex-col group">
              <div className="p-3 bg-white/5 w-fit rounded-sm group-hover:bg-brand-blue/10 transition-all">
                <Award size={24} className="text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-1">$300 TIER</h3>
                <p className="text-brand-blue text-sm font-medium">The Gallery VIP</p>
              </div>
              <ul className="space-y-3 flex-1">
                <li className="text-[11px] uppercase tracking-wider opacity-60 flex items-start gap-2">
                  <ChevronRight size={12} className="mt-0.5 text-brand-blue" />
                  Everything in First Tier
                </li>
                <li className="text-[11px] uppercase tracking-wider opacity-60 flex items-start gap-2">
                  <ChevronRight size={12} className="mt-0.5 text-brand-blue" />
                  Invitation to Opening
                </li>
                <li className="text-[11px] uppercase tracking-wider opacity-60 flex items-start gap-2 text-brand-blue">
                  <ChevronRight size={12} className="mt-0.5" />
                  Wall of Backers Mention
                </li>
              </ul>
              <button className="w-full py-3 border border-brand-blue/30 text-brand-blue text-[10px] uppercase tracking-widest font-bold hover:bg-brand-blue/10 transition-all">
                Back with $300
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6">Overview</p>
              <h2 className="text-4xl font-display font-medium mb-8">THE VISION</h2>
              <p className="text-base opacity-70 leading-relaxed font-light">
                {project.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-blue mb-6">The Challenges</h3>
                <ul className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="text-xs opacity-60 leading-relaxed flex gap-3">
                      <span className="text-brand-blue shrink-0">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-blue mb-6">The Outcomes</h3>
                <ul className="space-y-4">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="text-xs opacity-60 leading-relaxed flex gap-3">
                      <CheckCircle2 size={14} className="text-brand-blue shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
             <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6">Process</p>
             <h2 className="text-4xl font-display font-medium mb-8">TIMELINE</h2>
             <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
               {project.timeline.map((item, i) => (
                 <div key={i} className="relative pl-12 group">
                   <div className={`absolute left-0 top-1 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center transition-all ${item.completed ? 'bg-brand-blue border-brand-blue' : 'bg-brand-dark group-hover:border-brand-blue/50'}`}>
                      {item.completed ? (
                        <CheckCircle2 size={16} className="text-brand-dark" />
                      ) : (
                        <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                      )}
                   </div>
                   <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${item.completed ? 'text-brand-blue' : 'opacity-40'}`}>
                    {item.date}
                   </p>
                   <h4 className={`text-lg font-display font-medium ${item.completed ? 'opacity-100' : 'opacity-50'}`}>
                    {item.event}
                   </h4>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">Visuals</p>
              <h2 className="text-3xl md:text-5xl font-display font-medium">PROJECT GALLERY</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.gallery.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02, y: -5 }}
                className="aspect-square rounded-sm overflow-hidden border border-white/5"
              >
                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
