import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { 
  Box, 
  Palette, 
  Heart, 
  Bell, 
  Settings, 
  Plus, 
  X,
  ExternalLink, 
  LayoutDashboard,
  LogOut,
  ChevronRight,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { logout } from "../lib/authService";
import { useNavigate, Link } from "react-router-dom";
import { getRegisteredArtworks, getInteractions, getArtistProfile, registerArtwork } from "../lib/dbService";
import Navbar from "./Navbar";
import { PROJECTS } from "../data/projects";

export default function ArtHubDashboard() {
  const { user, profile, loading, refreshProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'collection' | 'community'>('overview');
  const [artworks, setArtworks] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [artistProfile, setArtistProfile] = useState<any | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [regArtworkId, setRegArtworkId] = useState("");
  const [regCert, setRegCert] = useState("");
  const [regLoading, setRegLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/arthub/login");
    
    if (user) {
      loadUserData();
    }
  }, [user, loading]);

  const loadUserData = async () => {
    try {
      const art = await getRegisteredArtworks(user!.uid);
      const favs = await getInteractions(user!.uid);
      const artist = await getArtistProfile(user!.uid);
      setArtworks(art || []);
      setFavorites(favs || []);
      setArtistProfile(artist);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !regArtworkId || !regCert) return;
    setRegLoading(true);
    try {
      await registerArtwork(user.uid, regArtworkId, regCert);
      setIsRegistering(false);
      setRegArtworkId("");
      setRegCert("");
      await loadUserData();
    } catch (err) {
      console.error(err);
    } finally {
      setRegLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (loading || !user) {
    return <div className="min-h-screen bg-brand-dark flex items-center justify-center font-display uppercase tracking-widest text-xs opacity-50">Synchronizing...</div>;
  }

  const favoriteProjects = PROJECTS.filter(p => favorites.some(f => f.type === 'follow' && f.targetId === p.id));

  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark flex">
      {/* Sidebar Navigation */}
      <aside className="w-20 md:w-64 border-r border-white/5 flex flex-col pt-32 pb-8 px-4 fixed h-full z-40 bg-brand-dark">
         <div className="flex-1 space-y-2">
            {[
              { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
              { id: 'collection', icon: Box, label: 'My Collection' },
              { id: 'community', icon: Palette, label: 'Community' },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-4 p-4 rounded-sm transition-all group ${activeTab === tab.id ? "bg-brand-blue text-brand-dark font-black" : "opacity-40 hover:opacity-100 hover:bg-white/5"}`}
              >
                <tab.icon size={20} className={activeTab === tab.id ? "" : "group-hover:text-brand-blue"} />
                <span className="hidden md:block text-[10px] uppercase tracking-widest">{tab.label}</span>
              </button>
            ))}
         </div>

         <div className="space-y-4 pt-8 border-t border-white/5">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-4 p-4 rounded-sm opacity-40 hover:opacity-100 hover:bg-red-500/10 hover:text-red-400 transition-all text-left"
            >
              <LogOut size={20} />
              <span className="hidden md:block text-[10px] uppercase tracking-widest">Sign Out</span>
            </button>
         </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-20 md:ml-64 pt-32 px-6 md:px-12 pb-20">
         <div className="max-w-5xl mx-auto space-y-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
               <div>
                  <p className="text-brand-blue text-[10px] uppercase tracking-[0.4em] font-bold mb-2">ArtHub Dashboard</p>
                  <h1 className="text-4xl md:text-6xl font-display font-black leading-none uppercase italic">Greetings, <br />{user.displayName?.split(' ')[0]}</h1>
               </div>
               <div className="flex items-center gap-4 p-2 bg-white/[0.03] border border-white/5 rounded-full pr-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-blue">
                     <img src={user.photoURL || ""} alt={user.displayName || ""} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                     <p className="text-[9px] uppercase tracking-widest font-black text-brand-blue">Account Ready</p>
                     <p className="text-[10px] opacity-40 truncate max-w-[120px]">{user.email}</p>
                  </div>
               </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div 
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {/* Notifications / Feed */}
                  <div className="md:col-span-2 space-y-6">
                     <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-sm">
                        <div className="flex justify-between items-center mb-8">
                           <h3 className="text-xs uppercase font-black tracking-widest flex items-center gap-2">
                             <Bell size={14} className="text-brand-blue" /> Latest Updates
                           </h3>
                        </div>
                        
                        <div className="space-y-6">
                           {favoriteProjects.length > 0 ? (
                             favoriteProjects.slice(0, 3).map(p => (
                               <div key={p.id} className="flex gap-6 items-start p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-brand-blue/30 transition-all">
                                  <div className="w-16 h-16 bg-brand-dark rounded-sm overflow-hidden flex-shrink-0">
                                     <img src={p.image} alt={p.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                  </div>
                                  <div className="flex-1">
                                     <div className="flex justify-between items-start">
                                        <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-blue">{p.title}</h4>
                                        <span className="text-[8px] opacity-30">2 DAYS AGO</span>
                                     </div>
                                     <p className="text-xs opacity-60 font-light mt-1">A new development report has been published for {p.title}.</p>
                                     <Link to={`/project/${p.id}`} className="inline-flex items-center gap-2 mt-3 text-[9px] uppercase font-black tracking-widest hover:text-brand-blue transition-all">
                                        Veiw Update <ChevronRight size={10} />
                                     </Link>
                                  </div>
                               </div>
                             ))
                           ) : (
                             <div className="text-center py-12 space-y-4 border-2 border-dashed border-white/5 rounded-sm">
                                <p className="text-xs opacity-30 font-light">Follow projects to receive progress notifications.</p>
                                <Link to="/projects" className="text-brand-blue text-[10px] uppercase font-black tracking-widest hover:underline">Browse Projects</Link>
                             </div>
                           )}
                        </div>
                     </div>
                  </div>

                  {/* Sidebar Stats */}
                  <div className="space-y-6">
                     <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-sm">
                        <h3 className="text-xs uppercase font-black tracking-widest mb-6">Profile Status</h3>
                        <div className="space-y-4">
                           <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                              <span className="opacity-40">Collection</span>
                              <span className="font-bold">{artworks.length} PECES</span>
                           </div>
                           <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                              <span className="opacity-40">Artist Page</span>
                              <span className={profile?.isArtistActive ? "text-brand-blue font-bold" : "text-yellow-500 font-bold"}>
                                 {profile?.isArtistActive ? "ACTIVE" : "PENDING"}
                              </span>
                           </div>
                           <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                              <span className="opacity-40">Followers</span>
                              <span className="font-bold">0</span>
                           </div>
                        </div>
                        
                        {!profile?.isArtistActive && (
                          <button 
                            onClick={() => setActiveTab('community')}
                            className="w-full mt-8 py-3 bg-white/5 border border-white/10 text-[9px] uppercase font-bold tracking-widest hover:bg-brand-blue hover:text-brand-dark transition-all rounded-sm"
                          >
                            Activate Artist Page
                          </button>
                        )}
                     </div>

                     <div className="bg-brand-blue/[0.03] border border-brand-blue/10 p-8 rounded-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                           <ShieldCheck size={40} />
                        </div>
                        <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-blue mb-2">Collector Registry</h4>
                        <p className="text-xs opacity-50 font-light leading-relaxed mb-6">Register your original Samuel Lind pieces to unlock exclusive digital provenance and content.</p>
                        <button 
                          onClick={() => setActiveTab('collection')}
                          className="text-[9px] uppercase font-black tracking-[0.2em] underline underline-offset-4 hover:text-brand-blue transition-all"
                        >
                          Register Art Now
                        </button>
                     </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'collection' && (
                <motion.div 
                  key="collection"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-12"
                >
                   <div className="flex justify-between items-center">
                      <h2 className="text-2xl font-display font-bold uppercase italic tracking-widest">Private Collection</h2>
                      <button 
                        onClick={() => setIsRegistering(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-brand-blue text-brand-dark font-black text-[10px] uppercase tracking-widest rounded-sm"
                      >
                         <Plus size={16} /> Register Piece
                      </button>
                   </div>

                   {artworks.length > 0 ? (
                     <div className="grid md:grid-cols-2 gap-8">
                        {artworks.map((art, i) => (
                           <div key={i} className="group relative aspect-video bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden p-8 flex flex-col justify-end">
                              <div className="absolute inset-0 z-0 opacity-20 filter grayscale blur-lg group-hover:blur-none transition-all duration-700">
                                 {/* Fallback image if artworkId maps to nothing */}
                                 <img src="https://picsum.photos/seed/art-bg/800/600" alt="Art BG" className="w-full h-full object-cover" />
                              </div>
                              <div className="relative z-10 space-y-2">
                                 <p className="text-brand-blue text-[9px] uppercase font-black tracking-widest">Registered Collector Piece</p>
                                 <h3 className="text-2xl font-display font-bold uppercase italic">{art.artworkId}</h3>
                                 <p className="text-[10px] opacity-40 uppercase tracking-widest">CERT: {art.certificateNumber}</p>
                                 <button className="inline-flex items-center gap-2 pt-4 text-[10px] uppercase font-black tracking-widest hover:text-brand-blue transition-all">
                                    Explenation by the Artist <ArrowRight size={12} />
                                 </button>
                              </div>
                           </div>
                        ))}
                     </div>
                   ) : (
                     <div className="py-32 flex flex-col items-center justify-center space-y-6 border-2 border-dashed border-white/5 rounded-sm text-center">
                        <Box size={60} className="opacity-10" />
                        <div className="max-w-sm">
                           <h3 className="text-sm font-bold uppercase tracking-widest mb-2">No Registered Pieces</h3>
                           <p className="text-xs opacity-40 font-light leading-relaxed">Your digital gallery expansion is empty. Register your original works to add them to your ArtHub profile.</p>
                        </div>
                        <button className="px-8 py-3 bg-white/5 border border-white/10 text-[10px] uppercase font-black tracking-widest hover:bg-brand-blue hover:text-brand-dark transition-all rounded-sm">
                           Start Registration
                        </button>
                     </div>
                   )}
                </motion.div>
              )}

              {activeTab === 'community' && (
                <motion.div 
                  key="community"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-12"
                >
                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div>
                         <h2 className="text-2xl font-display font-bold uppercase italic tracking-widest">Artist Community</h2>
                         <p className="text-xs opacity-40 font-light mt-2">Connect and share your creativity with the LIND Studios network.</p>
                      </div>
                      {!profile?.isArtistActive && (
                        <button className="px-10 py-4 bg-brand-blue text-brand-dark font-black text-[11px] uppercase tracking-widest rounded-sm shadow-xl">
                           Activate My Artist Page
                        </button>
                      )}
                   </div>

                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="p-8 border border-white/5 bg-white/[0.02] rounded-sm flex flex-col justify-between aspect-square">
                         <div className="space-y-4">
                            <Plus className="text-brand-blue" size={32} />
                            <h3 className="text-sm font-bold uppercase tracking-widest">Submit a Work</h3>
                            <p className="text-[11px] opacity-50 font-light leading-relaxed">Send one of your original creations for potential review by Samuel Lind and feature in the community stream.</p>
                         </div>
                         <button className="text-[10px] uppercase font-black tracking-widest border-b border-brand-blue w-fit pb-1">Start Submission</button>
                      </div>

                      {/* Mock community previews */}
                      {[1, 2].map((i) => (
                        <div key={i} className="group relative aspect-square bg-brand-dark rounded-sm overflow-hidden border border-white/5">
                            <img src={`https://picsum.photos/seed/community-${i}/600/600`} alt="Community art" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                               <p className="text-brand-blue text-[9px] uppercase font-black tracking-widest mb-1">Community Artist</p>
                               <h4 className="text-sm font-display font-bold uppercase italic">Abstract Ancestry 0{i}</h4>
                            </div>
                        </div>
                      ))}
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
         </div>
      </main>
      
      <Navbar />

      <AnimatePresence>
         {isRegistering && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-md flex items-center justify-center p-6"
            >
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0, y: 20 }}
                 animate={{ scale: 1, opacity: 1, y: 0 }}
                 className="bg-[#0f0f0f] border border-white/10 p-8 md:p-12 rounded-sm max-w-xl w-full space-y-10"
               >
                  <div className="flex justify-between items-start">
                     <div>
                        <p className="text-brand-blue text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Provenance Registry</p>
                        <h2 className="text-4xl font-display font-black leading-none uppercase italic">Register <br />Your Piece</h2>
                     </div>
                     <button onClick={() => setIsRegistering(false)} className="p-2 opacity-40 hover:opacity-100 transition-opacity">
                        <X size={24} />
                     </button>
                  </div>

                  <form onSubmit={handleRegister} className="space-y-6">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">Select Piece from Inventory</label>
                        <select 
                          value={regArtworkId}
                          onChange={(e) => setRegArtworkId(e.target.value)}
                          required
                          className="w-full bg-white/5 border border-white/10 p-4 font-bold text-xs focus:border-brand-blue outline-none rounded-sm transition-all text-white"
                        >
                           <option value="" className="bg-brand-dark">-- Choose Artwork --</option>
                           {PROJECTS.map(p => (
                             <option key={p.id} value={p.title} className="bg-brand-dark">{p.title}</option>
                           ))}
                           <option value="Custom Piece" className="bg-brand-dark">Original Painting / Other</option>
                        </select>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">Certificate / Serial Number</label>
                        <input 
                          type="text" 
                          required
                          value={regCert}
                          onChange={(e) => setRegCert(e.target.value)}
                          placeholder="e.g. LIND-2024-XXXX"
                          className="w-full bg-white/5 border border-white/10 p-4 font-bold text-xs focus:border-brand-blue outline-none rounded-sm transition-all placeholder:opacity-20"
                        />
                     </div>

                     <div className="pt-4 grid grid-cols-2 gap-4">
                        <button 
                           type="button"
                           onClick={() => setIsRegistering(false)}
                           className="py-4 border border-white/10 text-[10px] uppercase font-bold tracking-widest hover:bg-white/5 transition-all rounded-sm"
                        >
                           Cancel
                        </button>
                        <button 
                           type="submit"
                           disabled={regLoading}
                           className="py-4 bg-brand-blue text-brand-dark font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all rounded-sm shadow-xl"
                        >
                           {regLoading ? "REGISTERING..." : "CONFIRM REGISTRY"}
                        </button>
                     </div>
                  </form>

                  <div className="p-4 border border-brand-blue/10 bg-brand-blue/5 rounded-sm flex items-center gap-4">
                     <ShieldCheck size={24} className="text-brand-blue" />
                     <p className="text-[9px] leading-relaxed opacity-60 uppercase tracking-widest">Registering your piece will unlock the digital archive and exclusive artist commentary for this work.</p>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>

      <Navbar />
    </div>
  );
}
