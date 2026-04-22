import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { updateUserProfile } from "../lib/dbService";
import { Check, ArrowRight, Camera } from "lucide-react";
import Navbar from "./Navbar";

const PRESET_AVATARS = [
  { id: 'v1', url: 'https://picsum.photos/seed/avatar1/200/200', label: 'Warrior' },
  { id: 'v2', url: 'https://picsum.photos/seed/avatar2/200/200', label: 'Elder' },
  { id: 'v3', url: 'https://picsum.photos/seed/avatar3/200/200', label: 'Spirit' },
  { id: 'v4', url: 'https://picsum.photos/seed/avatar4/200/200', label: 'Earth' },
];

export default function OnboardingPage() {
  const { user, refreshProfile } = useAuth();
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleComplete = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const avatarUrl = PRESET_AVATARS.find(a => a.id === selectedAvatar)?.url || user.photoURL;
      await updateUserProfile(user.uid, {
        avatarId: selectedAvatar,
        photoURL: avatarUrl,
      });
      await refreshProfile();
      navigate("/arthub");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-20">
           <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <p className="text-brand-blue text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Identity</p>
                <h1 className="text-6xl font-display font-black leading-none uppercase italic">Choose Your <br /><span className="text-stroke">Presence</span></h1>
                <p className="text-lg opacity-40 font-light leading-relaxed mt-8">
                  Welcome to ArtHub. To represent yourself in our community, choose an ancestral avatar or continue with your default profile picture.
                </p>
              </motion.div>

              <div className="flex items-center gap-6 p-6 border border-white/5 bg-white/[0.02] rounded-sm">
                 <div className="w-20 h-20 rounded-full overflow-hidden bg-brand-dark border-2 border-brand-blue">
                    <img 
                      src={PRESET_AVATARS.find(a => a.id === selectedAvatar)?.url || user?.photoURL || ""} 
                      alt="Current avatar" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                 </div>
                 <div>
                    <h3 className="text-sm font-black uppercase tracking-widest">{user?.displayName}</h3>
                    <p className="text-[10px] opacity-40 uppercase tracking-widest mt-1">LIND Collector ID: {user?.uid.slice(0, 8)}</p>
                 </div>
              </div>
           </div>

           <div className="space-y-12">
              <div className="grid grid-cols-2 gap-4">
                 {PRESET_AVATARS.map((avatar) => (
                    <button 
                      key={avatar.id}
                      onClick={() => setSelectedAvatar(avatar.id)}
                      className={`relative aspect-square rounded-sm overflow-hidden border-2 transition-all group ${selectedAvatar === avatar.id ? "border-brand-blue" : "border-white/5 opacity-50 hover:opacity-100"}`}
                    >
                       <img src={avatar.url} alt={avatar.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                          <span className="text-[9px] uppercase tracking-widest font-bold">{avatar.label}</span>
                       </div>
                       {selectedAvatar === avatar.id && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-brand-dark">
                             <Check size={14} />
                          </div>
                       )}
                    </button>
                 ))}
              </div>

              <div className="flex flex-col gap-4">
                 <button 
                    onClick={handleComplete}
                    disabled={loading}
                    className="w-full py-4 bg-brand-blue text-brand-dark font-black text-xs tracking-[0.2em] uppercase rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-3"
                 >
                    {loading ? "SAVING..." : "COMPLETE PROFILE"} <ArrowRight size={16} />
                 </button>
                 <button 
                    onClick={() => setSelectedAvatar(null)}
                    className="text-center text-[10px] uppercase font-bold tracking-widest opacity-40 hover:opacity-100 transition-all"
                 >
                    Keep Google Profile Photo
                 </button>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
