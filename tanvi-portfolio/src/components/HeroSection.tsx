import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import me from '../assets/MyPhoto.png';
import Resume from '../assets/General CV.pdf';

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.035,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const roles = [
  'Full Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
  'Creative Thinker',
  'Tech Explorer',
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 lg:px-24 overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-[-120px] w-[350px] h-[350px] bg-cyan-400/10 blur-[140px] rounded-full" />
      <div className="absolute top-1/3 right-[-140px] w-[500px] h-[500px] bg-violet-500/10 blur-[190px] rounded-full" />
      <div className="absolute bottom-[-100px] left-1/3 w-[420px] h-[420px] bg-blue-500/10 blur-[160px] rounded-full" />

      {/* Decorative floating circles */}
      <div className="absolute top-12 left-6 w-32 h-32 rounded-full border border-cyan-300/20 blur-sm opacity-40" />
      <div className="absolute top-20 left-14 w-24 h-24 rounded-full border border-pink-300/20 blur-sm opacity-30" />
      <div className="absolute bottom-32 right-12 w-8 h-8 rounded-full border border-orange-300/30 opacity-40" />
      <div className="absolute left-4 top-[40%] w-16 h-16 rounded-full border border-cyan-300/20 blur-sm opacity-30" />
      <div className="absolute left-10 top-[55%] w-20 h-20 rounded-full border border-pink-300/20 blur-sm opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Text */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-cyan-600 dark:text-cyan-300/80 text-sm md:text-base mb-8 tracking-[0.2em] uppercase"
          >
            Available for opportunities
          </motion.p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-[-0.03em] text-slate-900 dark:text-white">
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
            className="font-display text-lg md:text-xl lg:text-2xl font-medium text-slate-700 dark:text-cyan-300/80 mb-6 tracking-wide"
          >
            Building with purpose, one line at a time
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-10 md:h-12 text-xl md:text-2xl lg:text-3xl font-light text-slate-700 dark:text-white/80 mb-8"
          >
            <span>{text}</span>
            <span className="text-cyan-300 animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-slate-700 dark:text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-md"
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
              className="group relative px-8 py-4 bg-cyan-400 text-slate-900 font-semibold text-base rounded-full overflow-hidden transition-all duration-300 active:scale-[0.97] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:scale-[1.02]"
            >
              View Resume
            </button>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 border border-white/15 hover:border-cyan-300/40 rounded-full text-base font-medium text-white/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[640px] h-auto sm:w-[760px] md:w-[900px] flex items-center justify-center">
            {/* Glowy halo around avatar body (not tight box) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] sm:w-[680px] md:w-[820px] h-[660px] sm:h-[760px] md:h-[900px] rounded-[36px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.4),_rgba(56,189,248,0.15)_40%,_transparent_70%)] filter blur-[30px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] sm:w-[660px] md:w-[800px] h-[640px] sm:h-[740px] md:h-[880px] rounded-[34px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.25),_transparent_60%)]" />

            {/* Main avatar: even larger now */}
            <img
              src={me}
              alt="Tanvi Avatar"
              className="relative z-20 w-[560px] sm:w-[680px] md:w-[820px] h-auto object-contain bg-transparent select-none pointer-events-none"
            />
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
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-10 bg-gradient-to-b from-cyan-300/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;