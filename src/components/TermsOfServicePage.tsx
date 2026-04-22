import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark">
      <Navbar />

      <article className="pt-40 pb-32 px-6 max-w-4xl mx-auto">
        <header className="mb-20">
          <p className="text-brand-blue text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Agreement</p>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-none mb-8 uppercase italic">Terms of Service</h1>
          <p className="opacity-40 text-xs tracking-widest uppercase">Last Updated: April 21, 2026</p>
        </header>

        <div className="space-y-16 font-light leading-relaxed opacity-80">
          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-brand-blue uppercase tracking-wider">1. Acceptance of Terms</h2>
            <p>
              By accessing LIND Studios' digital platforms or engaging with our physical studio experiences, 
              you agree to be bound by these Terms of Service. These terms govern the relationship between 
              LIND Studios and our community of collectors and cultural enthusiasts.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-brand-blue uppercase tracking-wider">2. Intellectual Property</h2>
            <p>
              All artistic content, images, designs, and text featured on this platform are the exclusive intellectual property of Samuel Lind, 
              Lemuel Lind, or LIND Studios, unless otherwise attributed. Unauthorized reproduction, modification, 
              or commercial distribution of these works without explicit written consent is strictly prohibited.
            </p>
          </section>

          <section className="section-y-6">
            <h2 className="text-2xl font-display font-bold text-brand-blue uppercase tracking-wider">3. Artwork Acquisition</h2>
            <p>
              Prices, availability, and specific conditions for artwork acquisition are subject to change. 
              Authenticity and provenance documentation are provided with every official LIND Studios acquisition. 
              Sales are typically considered final, given the unique nature of fine artwork.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-brand-blue uppercase tracking-wider">4. Studio Visits</h2>
            <p>
              Studio visits are by appointment only. Visitors agree to respect the working environment and the safety protocols of the artists. 
              LIND Studios reserves the right to cancel or reschedule appointments due to artistic cycles or project shifts.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-brand-blue uppercase tracking-wider">5. Limitation of Liability</h2>
            <p>
              LIND Studios provides its services and platform on an "as is" basis. While we strive for absolute accuracy in our cultural 
              documentation and digital presentation, we make no warranties regarding technical absolute perfection or uninterrupted availability.
            </p>
          </section>
        </div>

        <footer className="mt-32 pt-16 border-t border-white/5">
           <Link to="/" className="text-brand-blue text-[10px] uppercase tracking-widest font-bold hover:underline">Return to Gallery</Link>
        </footer>
      </article>
      <Footer />
    </div>
  );
}
