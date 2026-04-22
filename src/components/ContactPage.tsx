import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from "lucide-react";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left side: Content */}
            <div className="space-y-12">
              <div>
                <p className="text-brand-blue text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Contact</p>
                <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-8">
                  GET IN <br /><span className="text-stroke">TOUCH</span>
                </h1>
                <p className="text-lg opacity-60 font-light leading-relaxed max-w-md">
                  Whether you're interested in a collaboration, a studio visit, 
                  or purchasing an original work, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-brand-blue">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Email</p>
                    <p className="text-lg font-medium">contact@lindstudios.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-brand-blue">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Phone</p>
                    <p className="text-lg font-medium">+1 (787) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-brand-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Studio</p>
                    <p className="text-lg font-medium line-clamp-2">Paseo del Artista, Medianía Alta,<br />Loíza, Puerto Rico</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 grayscale opacity-40 hover:opacity-100 transition-all">
                <Instagram size={20} />
                <Twitter size={20} />
                <Facebook size={20} />
              </div>
            </div>

            {/* Right side: Form */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden">
               {formStatus === 'sent' ? (
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4"
                 >
                    <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-brand-dark mb-4">
                      <Send size={24} />
                    </div>
                    <h3 className="text-2xl font-display font-bold">Message Sent</h3>
                    <p className="opacity-60 text-sm">We'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="text-brand-blue text-[10px] uppercase tracking-widest font-bold pt-4 underline underline-offset-4"
                    >
                      Send another message
                    </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold ml-1">Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-brand-dark border-b border-white/10 px-0 py-3 focus:border-brand-blue transition-colors outline-none font-light"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold ml-1">Email</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-brand-dark border-b border-white/10 px-0 py-3 focus:border-brand-blue transition-colors outline-none font-light"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold ml-1">Subject</label>
                      <select className="w-full bg-brand-dark border-b border-white/10 px-0 py-3 focus:border-brand-blue transition-colors outline-none font-light appearance-none text-brand-off-white/40 focus:text-brand-off-white">
                        <option value="visit">Studio Visit Inquiry</option>
                        <option value="quote">Artwork Acquisition</option>
                        <option value="collab">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold ml-1">Message</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-brand-dark border-b border-white/10 px-0 py-3 focus:border-brand-blue transition-colors outline-none font-light resize-none"
                        placeholder="Tell us about your interest..."
                      />
                    </div>
                    <button 
                      disabled={formStatus === 'sending'}
                      type="submit"
                      className="w-full py-4 bg-brand-blue text-brand-dark font-black text-xs tracking-[0.2em] uppercase rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {formStatus === 'sending' ? 'Sending...' : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
