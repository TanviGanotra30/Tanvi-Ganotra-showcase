import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import imgResqnet from '@/assets/project-resqnet.png';
import imgUnimart from '../assets/Unimart.png';
import imgTrackwise from '../assets/trackwise.png';
import imgTastyFood from '../assets/tastyfood.png';
import imgPairfect from '../assets/pairfect.png';
import imgLetsFocus from '../assets/project-letsfocus.png';

const projects = [
  {
    title: 'ResQnet',
    problem: 'Emergency response systems often fail to provide real-time alerts and rapid assistance during critical situations, leading to delayed help and increased risks.',
    solution: 'Built an AI-powered emergency response system with smart detection and communication to reduce response time and improve safety outcomes.',
    impact: 'Significantly reduced emergency response times and improved safety through intelligent automation and real-time coordination.',
    tags: ['React', 'Node.js', 'MongoDB', 'Vosk STT'],
    github: 'https://github.com/TanviGanotra30/ResQnet-AI-powered-response-platform',
    live: 'https://resqnet-frontend.netlify.app/Landing',
    image: imgResqnet,
  },
  {
    title: 'Unimart',
    problem: 'Traditional grocery shopping lacks real-time tracking and seamless user experience, causing inefficient navigation and slower transactions.',
    solution: 'Developed a modern real-time tracking platform with intuitive UI and optimized performance for smooth shopping experiences.',
    impact: 'Enhanced user satisfaction with faster transactions and seamless navigation, improving overall shopping efficiency.',
    tags: ['React.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/TanviGanotra30/Unimart-Real-Time-ordering-and-Tracking',
    live: 'https://unimart-asap.vercel.app/',
    image: imgUnimart,
  },
  {
    title: 'LetsFocus',
    problem: 'Users struggle with maintaining focus and managing time effectively due to lack of proper task tracking and distraction management tools.',
    solution: 'Created a productivity platform with task tracking, distraction minimization, and workflow habit formation features.',
    impact: 'Helped users improve focus, time management, and maintain consistent productivity through clean, minimal interface design.',
    tags: ['Tailwind CSS','React', 'Express', 'MongoDB'],
    github: 'https://github.com/TanviGanotra30/LetsFocus-Achieve-Deep-Focus-Everyday',
    live: 'https://lets-focus-achieve-deep-focus.vercel.app/',
    image: imgLetsFocus,
  },
  {
    title: 'Trackwise',
    problem: 'Train travelers face difficulties in planning journeys due to lack of real-time scheduling and forecasting information.',
    solution: 'Designed a smart train scheduling system with real-time insights, predictions, and timely alerts for better decision-making.',
    impact: 'Improved travel planning and user experience through accurate predictions and real-time information delivery.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'FastAPI'],
    github: 'https://github.com/TanviGanotra30/TrackWise-Train-Scheduling-Website-',
    live: 'https://track-wise-train-scheduling.vercel.app',
    image: imgTrackwise,
  },
  {
    title: 'TastyFood',
    problem: 'Restaurant customers experience long waiting times during peak hours due to inefficient ordering and pickup processes.',
    solution: 'Built a smart food pre-ordering platform allowing advance menu browsing, order placement, and scheduled pickups.',
    impact: 'Reduced waiting times and streamlined ordering processes, improving customer satisfaction during peak hours.',
    tags: ['React', 'PostgreSQL', 'JWT Auth', 'FastAPI'],
    github: 'https://github.com/TanviGanotra30/Pre-food-order',
    live: 'https://pre-food-order.netlify.app/login',
    image: imgTastyFood,
  },
  {
    title: 'PairFect',
    problem: 'Users need personalized, context-aware chatbot interactions but existing solutions lack accuracy and engaging responses.',
    solution: 'Developed an intelligent chatbot with API integration and smart logic for accurate, personalized, and engaging conversations.',
    impact: 'Delivered context-aware interactions that provide accurate responses and enhance user engagement through intelligent automation.',
    tags: ['Python', 'Javascript', 'Spoonacular api'],
    github: 'https://github.com/TanviGanotra30/AI-Based-Food-Pairing-ChatBot',
    live: 'https://pairfect-food.vercel.app',
    image: imgPairfect,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group [perspective:1000px] h-[500px]"
    >
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front - Problem */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden glass flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          </div>
          
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <h3 className="font-display text-2xl font-bold text-gradient mb-3">{project.title}</h3>
                <div className="w-8 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-primary/80 text-xs uppercase tracking-wider mb-2">Problem</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/60 uppercase tracking-wider font-mono text-center">solution</p>
          </div>
        </div>

        {/* Back - Solution & Impact */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden glass p-8 flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold text-gradient mb-6">{project.title}</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary/80 text-sm uppercase tracking-wider mb-2">Solution</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h4 className="font-semibold text-primary/80 text-sm uppercase tracking-wider mb-2">Impact</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.impact}</p>
              </div>

              <div>
                <h4 className="font-semibold text-primary/80 text-sm uppercase tracking-wider mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-primary/60 tracking-wider uppercase px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a href={project.github} className="interactive flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-muted-foreground hover:text-primary transition-colors">
              <FiGithub size={14} /> Code
            </a>
            <a href={project.live} className="interactive flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-muted-foreground hover:text-primary transition-colors">
              <FiExternalLink size={14} /> Live
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <p className="font-mono text-primary/80 text-sm md:text-base tracking-[0.2em] uppercase mb-6">Projects</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Selected <span className="text-gradient">work.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
