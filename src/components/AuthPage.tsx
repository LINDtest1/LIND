import { motion } from "motion/react";
import { LogIn, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../lib/authService";
import { getUserProfile, createUserProfile } from "../lib/dbService";
import Navbar from "./Navbar";

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const user = await signInWithGoogle();
      const profile = await getUserProfile(user.uid);
      
      if (!profile) {
        // New user - redirect to onboarding
        await createUserProfile(user.uid, {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
        navigate("/arthub/onboarding");
      } else {
        // Existing user - go to dashboard
        navigate("/arthub");
      }
    } catch (err: any) {
      setError("Failed to sign in. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="max-w-md w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex p-4 bg-brand-blue/10 rounded-2xl mb-4">
              <Sparkles className="text-brand-blue" size={40} />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl font-display font-black tracking-tight leading-none italic uppercase">
                ARTHUB <br /><span className="text-brand-blue">COMMUNITY</span>
              </h1>
              <p className="text-lg opacity-40 font-light leading-relaxed">
                Connect your collections, activate your profile, and engage with the LIND legacy.
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <button 
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full py-4 bg-brand-off-white text-brand-dark rounded-sm font-black text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-brand-blue transition-all disabled:opacity-50"
              >
                {loading ? "AUTHENTICATING..." : (
                  <>
                    Continue with Google <ArrowRight size={16} />
                  </>
                )}
              </button>
              
              {error && (
                <p className="text-red-400 text-[10px] uppercase tracking-widest font-bold">
                  {error}
                </p>
              )}
            </div>

            <div className="pt-12 grid grid-cols-2 gap-4">
               <div className="p-4 border border-white/5 rounded-sm bg-white/[0.02] text-left">
                  <ShieldCheck size={20} className="text-brand-blue mb-2" />
                  <h4 className="text-[10px] uppercase font-bold tracking-widest mb-1">Secure Auth</h4>
                  <p className="text-[10px] opacity-30 leading-normal">Your data is secured with Firebase Enterprise security.</p>
               </div>
               <div className="p-4 border border-white/5 rounded-sm bg-white/[0.02] text-left">
                  <sparkles size={20} className="text-brand-blue mb-2" />
                  <h4 className="text-[10px] uppercase font-bold tracking-widest mb-1">Verified Art</h4>
                  <p className="text-[10px] opacity-30 leading-normal">Exclusive access for Samuel Lind collectors.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-8 text-center opacity-20 text-[10px] uppercase tracking-[0.4em] font-bold">
        LIND STUDIOS © 2026
      </footer>
    </div>
  );
}
