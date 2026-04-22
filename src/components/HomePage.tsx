import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HERO_SLIDES = [
  {
    id: "ngro",
    title: "NGRO",
    subtitle: "ART+COFFEE+MVMNT",
    description: "NGRO is a coffee, art, and culture project in Loíza created to bring people together through creativity, community, and Puerto Rican identity. It is designed as a modern cultural space where visitors can enjoy coffee, experience art, and connect with the legacy of Samuel Lind and LIND Studios.",
    image: "https://picsum.photos/seed/arch-hero/1920/1080",
    stats: [
      { value: "10+", label: "Backers" },
      { value: "15%", label: "Project Completion" },
      { value: "20/JULY/26", label: "Day of soft Opening" }
    ]
  },
  {
    id: "vejigantes",
    title: "VEJIGANTES",
    subtitle: "THE ROAD TO LOÍZA",
    description: "Vejigantes: The Road to Loíza’s Festival follows Samuel Lind and Lemuel Lind as they prepare new silkscreen and digital art inspired by Las Fiestas de Loíza, sharing the creative process behind the work and the cultural energy that brings it to life.",
    image: "https://picsum.photos/seed/arch-vejigantes/1920/1080",
    stats: [
      { value: "ep.001", label: "vBlog" },
      { value: "5%", label: "Project Completion" },
      { value: "JULY 1", label: "Launch" }
    ]
  },
  {
    id: "ancestros",
    title: "ANCESTROS",
    subtitle: "CULTURAL TAROT DECK",
    description: "Ancestros: Cultural Tarot Deck is a project by Samuel Lind and Lemuel Lind that reimagines tarot through Puerto Rican and Afro-Caribbean culture, blending ancestral symbolism, original artwork, and storytelling into a unique collector’s deck.",
    image: "https://picsum.photos/seed/arch-ancestros/1920/1080",
    stats: [
      { value: "20+", label: "Backers" },
      { value: "10%", label: "Project Completion" },
      { value: "2027", label: "Launch" }
    ]
  }
];

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 sm:gap-8 mt-12 border-t border-brand-off-white/10 pt-8">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ].map((time, idx) => (
        <div key={idx} className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
          <div className="text-4xl sm:text-5xl font-display font-light text-brand-off-white mb-2">{time.value.toString().padStart(2, '0')}</div>
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] opacity-40">{time.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-blue selection:text-brand-dark overflow-x-hidden">
      <Navbar />

      {/* Hero Section (Carousel) */}
      <header className="relative h-[90vh] min-h-[600px] flex flex-col pt-32 pb-24 px-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 
                className="text-[12vw] sm:text-[14vw] font-display font-black leading-none -ml-2 select-none pointer-events-none"
              >
                {slide.title}
              </h1>
            </motion.div>
          </AnimatePresence>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-8">
                  {slide.subtitle}
                </h2>
                <div className="flex gap-4">
                  <Link to={`/project/${slide.id}`} className="px-8 py-3 bg-brand-blue text-brand-dark font-medium text-sm tracking-wide rounded-sm hover:brightness-110 transition-all uppercase">
                    LEARN MORE
                  </Link>
                  <button className="px-8 py-3 border border-brand-off-white/30 text-brand-off-white font-medium text-sm tracking-wide rounded-sm hover:bg-brand-off-white/10 transition-all uppercase">
                    JOIN US
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div 
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12"
              >
                <p className="text-sm md:text-base leading-relaxed opacity-80 max-w-lg">
                  {slide.description}
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                  {slide.stats.map((stat, idx) => (
                    <div key={idx} className={`space-y-1 ${idx === 2 ? 'lg:col-span-1 hidden lg:block' : ''}`}>
                      <p className="text-3xl font-display font-bold text-nowrap">{stat.value}</p>
                      <p className="text-[10px] uppercase tracking-widest opacity-50">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-12 right-6 z-20 flex gap-4">
          <button 
            onClick={prevSlide}
            className="p-3 border border-brand-off-white/20 rounded-full hover:bg-brand-off-white/10 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 border border-brand-off-white/20 rounded-full hover:bg-brand-off-white/10 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </header>

      {/* The Artists Section */}
      <section className="relative border-b border-brand-off-white/10 bg-brand-dark">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Samuel */}
          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative min-h-[60vh] md:min-h-[75vh] p-8 md:p-16 flex flex-col justify-end border-b md:border-b-0 md:border-r border-brand-off-white/10 overflow-hidden group"
          >
            <motion.div
              variants={{
                initial: { scale: 1, opacity: 0.15, filter: "grayscale(100%)" },
                hover: { scale: 1.05, opacity: 0.4, filter: "grayscale(0%)" }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-0 origin-center"
            >
              <img 
                src="https://picsum.photos/seed/artist-samuel/800/1000" 
                alt="Samuel Lind Background" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30" />
            </motion.div>
            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-3 text-brand-blue drop-shadow-md">Main Artist</p>
                <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-medium leading-[0.9]">SAMUEL <br /> LIND</h2>
              </div>
              <div className="w-12 h-[1px] bg-brand-off-white/30" />
              <p className="text-sm md:text-base text-brand-off-white/70 max-w-sm font-light leading-relaxed">
                Capturing the rhythmic soul, ancestral heritage, and vibrant culture of Loíza through masterful paintings, prints, and timeless sculptures.
              </p>
              <Link 
                to="/artist/samuel-lind"
                className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-brand-dark font-black text-[10px] tracking-[0.2em] uppercase rounded-sm hover:brightness-110 transition-all w-fit"
              >
                Learn More <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Lemuel */}
          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative min-h-[60vh] md:min-h-[75vh] p-8 md:p-16 flex flex-col justify-end overflow-hidden group"
          >
            <motion.div
              variants={{
                initial: { scale: 1, opacity: 0.15, filter: "grayscale(100%)" },
                hover: { scale: 1.05, opacity: 0.4, filter: "grayscale(0%)" }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-0 origin-center"
            >
              <img 
                src="https://picsum.photos/seed/artist-lemuel/800/1000" 
                alt="Lemuel Lind Background" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30" />
            </motion.div>
            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-3 text-brand-blue drop-shadow-md">Graphic Arts & Interactive Media Director</p>
                <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-medium leading-[0.9]">LEMUEL <br /> LIND</h2>
              </div>
              <div className="w-12 h-[1px] bg-brand-off-white/30" />
              <p className="text-sm md:text-base text-brand-off-white/70 max-w-sm font-light leading-relaxed">
                Bridging traditional legacy with digital innovation, shaping the interactive experiences, branding, web presence, and future vision of the studio.
              </p>
              <Link 
                to="/artist/lemuel-lind"
                className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-brand-dark font-black text-[10px] tracking-[0.2em] uppercase rounded-sm hover:brightness-110 transition-all w-fit"
              >
                Learn More <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIND Art Drop Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-black-90">
        <div className="absolute inset-0 z-0 bg-black/40">
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">Limited Edition</p>
            <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-6">
              LIND ART DROP
            </h2>
            <div className="space-y-4 max-w-lg">
              <p className="text-sm md:text-base leading-relaxed opacity-80">
                Limited edition drops every 3 months. Each Mystery Collection remains a closely guarded secret until launch day, featuring unreleased prints, unique artisan crafts, or original artwork by LIND Studio.
              </p>
              <div className="pt-2">
                <Link 
                  to="/projects"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-blue font-bold hover:gap-3 transition-all"
                >
                  Browse our projects <ArrowUpRight size={14} />
                </Link>
              </div>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                Secure your exclusive piece of Puerto Rican cultural legacy. Sign up below to unlock <span className="text-brand-blue font-medium tracking-wide">24-hour early access</span> and exclusive previews before the drop goes public.
              </p>
            </div>
            <div className="pt-2">
              <CountdownTimer targetDate="2026-05-22T00:00:00" />
            </div>
            <p className="text-[11px] font-medium tracking-widest uppercase opacity-60 mt-4">
              First drop: May 22
            </p>
            <div className="mt-8 pt-4 flex gap-4">
              <button className="px-8 py-3 bg-brand-blue text-brand-dark font-medium text-sm tracking-wide rounded-sm hover:brightness-110 transition-all uppercase">
                NOTIFY ME
              </button>
              <button className="px-8 py-3 border border-brand-off-white/30 text-brand-off-white font-medium text-sm tracking-wide rounded-sm hover:bg-brand-off-white/10 transition-all uppercase">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center items-center w-full min-h-[400px]">
            {/* Mystery Box Visual */}
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="relative w-full max-w-sm aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-dark rounded-xl border border-brand-off-white/10 shadow-[0_0_50px_rgba(165,202,210,0.15)] backdrop-blur-md flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent opacity-60" />
                <div className="text-[120px] font-display font-black text-brand-off-white/50 select-none pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">?</div>
                <div className="absolute bottom-10 left-0 right-0 text-center text-[10px] uppercase tracking-[0.3em] opacity-60 mt-4 font-medium">
                  Mystery Box
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="manifesto" className="py-32 px-6 bg-brand-dark/50 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/culture-forward/1920/1080?grayscale" 
            alt="Culture Forward Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">Manifesto</p>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-32">PUSH THE CULTURE FORWARD</h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { id: "01", title: "BROWSE PROJECTS", desc: "Discover the initiatives currently shaping the future of LIND Studios and Loíza. Exploration is the first step of engagement." },
              { id: "02", title: "SUBSCRIBE & VOTE", desc: "Follow the projects you approve of. Your subscription serves as a vote of confidence in our cultural mission." },
              { id: "03", title: "SHARE THE LEGACY", desc: "Help us reach a global audience. Sharing our stories with others amplifies the impact of the Puerto Rican creative spirit." },
            ].map((step, idx) => (
              <div key={idx} className="relative group border-t border-brand-off-white/10 pt-12">
                <div className="absolute -top-24 left-0 text-[80px] font-display font-black text-stroke uppercase select-none opacity-20 group-hover:opacity-40 transition-opacity">
                  {step.id}
                </div>
                <h3 className="text-lg font-display font-semibold mb-4 tracking-wider">{step.title}</h3>
                <p className="text-sm leading-relaxed opacity-60 font-light mb-6">{step.desc}</p>
                {idx === 0 && (
                  <Link 
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 py-2 border border-brand-blue/30 text-brand-blue text-[10px] font-bold uppercase tracking-widest hover:bg-brand-blue/10 transition-all rounded-sm"
                  >
                    Explore Projects <ArrowUpRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-display font-medium">OUR PROJECTS</h2>
            </div>
            <Link 
              to="/projects"
              className="px-6 py-2 bg-brand-blue/20 border border-brand-blue/30 text-brand-blue text-[11px] font-medium tracking-widest uppercase hover:bg-brand-blue/30 transition-all rounded-sm flex items-center gap-2"
            >
              See all projects <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                id: "vejigantes",
                title: "VEJIGANTES", 
                loc: 'Road to "Las fiestas tradicionales de Loiza"',
                seed: "vejigantes-art"
              },
              { 
                id: "ngro",
                title: "NGRO", 
                loc: "Coffee + Art",
                seed: "ngro-coffee"
              },
              { 
                id: "ancestros",
                title: "ANCESTROS", 
                loc: "Tarot Cards",
                seed: "ancestros-tarot"
              },
              { 
                id: "artisthub",
                title: "ARTIST HUB", 
                loc: "by LIND",
                seed: "artisthub-lind"
              },
            ].map((project, idx) => (
              <Link
                to={`/project/${project.id}`}
                key={idx}
              >
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="relative group aspect-[3/4] overflow-hidden rounded-sm"
                >
                  <img 
                    src={`https://picsum.photos/seed/${project.seed}/800/1200`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-6 space-y-2">
                    <h4 className="text-lg font-display font-bold">{project.title}</h4>
                    <p className="text-[11px] opacity-70 leading-relaxed font-sans normal-case">{project.loc}</p>
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
