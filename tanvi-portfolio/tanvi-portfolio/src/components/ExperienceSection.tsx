import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'FullStack Intern',
    company: '1Stop.ai',
    period: 'Jan 2025 — May 2025',
    description: [
      'Led development of intelligent AI-driven solutions at a cutting-edge startup, focusing on full-stack web applications that integrate machine learning models',
      'Built scalable automation pipelines using modern web technologies and implemented RESTful APIs for seamless data flow',
      'Collaborated on machine learning model deployment and real-time data processing systems',
      'Optimized application performance by 40% and contributed to AI-powered automation tools serving thousands of users',
      'Worked closely with cross-functional teams to deliver production-ready features while maintaining clean, maintainable code'
    ],
    tags: ['React', 'Node.js','Laravel','MongoDB','Tailwind CSS','Bootstrap', 'Express.js', 'REST APIs'],
  },
  
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <p className="font-mono text-primary/80 text-sm md:text-base tracking-[0.2em] uppercase mb-6">Experience</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Where I've <span className="text-gradient">worked.</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 md:pl-20"
            >
              <div className="absolute left-0 md:left-8 top-2 w-2.5 h-2.5 rounded-full bg-primary/60 -translate-x-[4px]" />

              <div className="glass rounded-2xl p-8 md:p-10 hover:shadow-glow transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold">{exp.role}</h3>
                    <p className="text-primary/80 font-medium text-base">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">{exp.period}</span>
                </div>
                <div className="text-muted-foreground text-base leading-relaxed mb-6">
                  {Array.isArray(exp.description) ? (
                    <ul className="space-y-2">
                      {exp.description.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-3 mt-1.5 text-xs">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-primary/50 tracking-wider uppercase px-3 py-1.5 rounded-full border border-primary/8">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
