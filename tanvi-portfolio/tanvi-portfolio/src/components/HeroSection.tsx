import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import me from '../assets/Me.png';
import Resume from '../assets/Final Resume.pdf';

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.035, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const roles = [
  'Full Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
  'Creative Thinker',
  'Tech Explorer'
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const typingSpeed = isDeleting ? 50 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        setText(current.substring(0, text.length + 1));

        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500); 
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const name = 'Tanvi Ganotra';

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 lg:px-24 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/3 -left-32 w-[400px] h-[400px] bg-secondary/4 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Text */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-primary/80 text-sm md:text-base mb-8 tracking-[0.2em] uppercase"
          >
            Available for opportunities
          </motion.p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-[-0.03em]">
            <span className="block">
              {'Tanvi'.split('').map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {'Ganotra'.split('').map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  custom={i + 6}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-display text-lg md:text-xl lg:text-2xl font-medium text-primary/70 mb-6 tracking-wide"
          >
            Building with purpose, one line at a time
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-10 md:h-12 text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-8"
          >
            <span>{text}</span>
            <span className="text-primary/70 animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 max-w-md"
          >
            Building intelligent, scalable digital experiences
            with a focus on performance and design.
            I blend creativity with code
            to turn ideas into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => window.open(Resume, '_blank')}
              className="interactive group relative px-8 py-4 bg-primary text-primary-foreground font-semibold text-base rounded-full overflow-hidden transition-all active:scale-[0.97] hover:shadow-glow"
            >
              View Resume
            </button>
            <button
              onClick={scrollToContact}
              className="interactive px-8 py-4 border border-border hover:border-primary/30 rounded-full text-base font-medium transition-all hover:shadow-glow"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Glow behind photo */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/10 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[420px] rounded-3xl overflow-hidden border border-border bg-card">
              <img src={me} alt="" />
              <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                <span className="font-display text-6xl font-bold text-primary/20">TG</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-10 bg-gradient-to-b from-primary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
