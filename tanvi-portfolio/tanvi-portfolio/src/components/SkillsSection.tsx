import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress, SiPython, SiFlask, SiMongodb, SiPostgresql, SiFirebase, SiMysql, SiGit, SiDocker, SiFigma, SiPostman, SiJavascript, SiBoots, SiBootstrap, SiSupabase, SiGithub, SiVscodium, SiXampp, SiAxios, SiPhp } from 'react-icons/si';
import { FaJava,FaLaravel } from "react-icons/fa6";
import { VscVscodeInsiders } from "react-icons/vsc";
const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Axios', icon: SiAxios },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Java', icon: FaJava },
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: FaLaravel },
      { name: 'Python', icon: SiPython },
      { name: 'Flask', icon: SiFlask },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'MySQL', icon: SiMysql },
      { name: 'supabase' , icon: SiSupabase},
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: VscVscodeInsiders },
      { name: 'Figma', icon: SiFigma },
      { name: 'Postman', icon: SiPostman },
      { name: 'XAMPP', icon: SiXampp },
      { name: 'MongoDb Compass', icon: SiMongodb },

    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <p className="font-mono text-primary/80 text-sm md:text-base tracking-[0.2em] uppercase mb-6">Skills</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          My <span className="text-gradient">toolkit.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
          >
            <h3 className="font-mono text-primary/70 text-xs md:text-sm tracking-[0.2em] uppercase mb-7 font-semibold">{cat.title}</h3>
            <div className="space-y-5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                >
                  <skill.icon className="w-5 h-5 text-primary/60" />
                  <span className="text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
