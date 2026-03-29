import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Zap,
  Target,
  GraduationCap,
  Briefcase,
  Heart,
  Sparkles,
} from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: GraduationCap, label: 'CGPA', value: '8.71', color: 'from-blue-500 to-cyan-500' },
    { icon: Briefcase, label: 'Projects', value: '10+', color: 'from-purple-500 to-pink-500' },
    { icon: Code2, label: 'University', value: 'LPU', color: 'from-green-500 to-emerald-500' },
    { icon: Target, label: 'Focus', value: 'Full Stack', color: 'from-orange-500 to-red-500' },
  ];

  const focusAreas = [
    { icon: Code2, title: 'Full-Stack Development', desc: 'Building end-to-end web applications' },
    { icon: Brain, title: 'AI-Powered Solutions', desc: 'Integrating machine learning into products' },
    { icon: Zap, title: 'Problem Solving', desc: 'Tackling complex challenges with elegant code' },
    { icon: Sparkles, title: 'Scalable Products', desc: 'Creating solutions that grow with users' },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 lg:px-24 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <span className="inline-block px-4 py-2 bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full text-sm font-mono text-purple-600 dark:text-purple-300 tracking-wider uppercase">
          About Me
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-black dark:text-white">
          Crafting Digital
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            Experiences
          </span>
          <br />
          That Matter
        </h2>
      </motion.div>

      {/* Intro Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          I'm <span className="text-black dark:text-white font-semibold">Tanvi Ganotra</span>, a
          full-stack developer and Computer Science student at Lovely Professional University,
          crafting digital solutions that blend technical excellence with creative problem-solving.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-12"
        >
          {/* What I Build */}
          <div className="bg-black/5 dark:bg-white/5 backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white">What I Build</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              I create <span className="text-purple-500 dark:text-purple-400 font-medium">full-stack web applications</span> and
              <span className="text-pink-500 dark:text-pink-400 font-medium"> AI-powered tools</span> that solve real problems.
              From intelligent scheduling systems to developer-focused applications, I focus on building
              products that are not just functional, but{' '}
              <span className="text-blue-500 dark:text-blue-400 font-medium">
                scalable, intuitive, and impactful
              </span>.
            </p>
          </div>

          {/* Current Focus */}
          <div className="bg-black/5 dark:bg-white/5 backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white">Current Focus</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {focusAreas.map((focus, index) => (
                <motion.div
                  key={focus.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-black/5 dark:bg-white/5 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <focus.icon className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-1">{focus.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{focus.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          {/* Quick Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8 text-center">
              Quick Highlights
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-black/5 dark:bg-white/5 backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-2xl p-6 text-center hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${highlight.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-black dark:text-white mb-2">
                    {highlight.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-mono uppercase tracking-wider">
                    {highlight.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Beyond Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              Beyond code, I'm passionate about{' '}
              <span className="text-purple-500 dark:text-purple-400 font-medium">
                mentoring fellow developers
              </span>{' '}
              and exploring how technology can create{' '}
              <span className="text-pink-500 dark:text-pink-400 font-medium">
                meaningful human connections
              </span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;