import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-off-white selection:bg-brand-blue selection:text-brand-dark">
      <Navbar />

      <article className="pt-40 pb-32 px-6 max-w-4xl mx-auto">
        <header className="mb-20">
          <p className="text-brand-blue text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Legal</p>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-none mb-8 uppercase italic">Privacy Policy</h1>
          <p className="opacity-40 text-xs tracking-widest uppercase">Last Updated: April 21, 2026</p>
        </header>

        <div className="space-y-16 font-light leading-relaxed opacity-80">
          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-brand-blue uppercase tracking-wider">1. Overview</h2>
            <p>
              At LIND Studios, we are committed to protecting the privacy and security of our visitors and community members. 
              This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our website, 
              studio, or services.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-brand-blue uppercase tracking-wider">2. Information Collection</h2>
            <p>
              We collect information that you provide directly to us, such as when you sign up for our Art Drop notifications, 
              send an inquiry via our contact form, or book a studio visit. This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-brand-blue">
              <li>Name and contact details (email address, phone number).</li>
              <li>Professional or artistic interests communicated through inquiries.</li>
              <li>Transaction data related to artwork acquisitions.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-brand-blue uppercase tracking-wider">3. How We Use Your Data</h2>
            <p>
              Your data is used strictly for cultural engagement and service fulfillment:
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-brand-blue">
              <li>To provide updates on project developments and artist news.</li>
              <li>To manage studio visit appointments and artist interactions.</li>
              <li>To process and authenticate artwork provenance and ownership.</li>
              <li>To improve our digital and physical experiences based on community feedback.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-brand-blue uppercase tracking-wider">4. Third Parties</h2>
            <p>
              We do not sell your personal data. We only share information with trusted service providers necessary for our operations 
              (e.g., email infrastructure, payment processors) and only to the extent required to perform their tasks.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-brand-blue uppercase tracking-wider">5. Your Rights</h2>
            <p>
              You have the right to access, update, or request the deletion of your personal information at any time. 
              To exercise these rights, please contact us at <span className="text-brand-blue">privacy@lindstudios.com</span>.
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
