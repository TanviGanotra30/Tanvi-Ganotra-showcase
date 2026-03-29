import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiGrid } from 'react-icons/fi';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import adobe from '@/assets/certificates/Adobe.png';
import agents from '@/assets/certificates/Agents.png';
import aiu from '@/assets/certificates/AIU.png';
import automata from '@/assets/certificates/automata.png';
import cod from '@/assets/certificates/COD.jpg';
import data from '@/assets/certificates/Data.png';
import design from '@/assets/certificates/Design.png';
import dsa from '@/assets/certificates/DSA.png';
import Free from '@/assets/certificates/FreedCode.png';
import genAi from '@/assets/certificates/GenAI.png';
import gfg from '@/assets/certificates/GFG.png';
import gpt from '@/assets/certificates/gpt.png';
import ibm from '@/assets/certificates/Ibm.png';
import intern from '@/assets/certificates/intern.png';
import myntra from '@/assets/certificates/Myntra.png';
import webdev from '@/assets/certificates/webdev.png';

const certificates = [
  {
    title: 'FullStack Internship Certificate',
    issuer: '1Stop.ai',
    date: '2025',
    description: 'Internship certificate demonstrating practical skills and professional development through SAT program participation.',
    link: '#',
    image: intern,
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Coding Platform',
    date: '2025',
    description: 'Comprehensive certification in Data Structures and Algorithms, covering fundamental and advanced concepts with practical implementation.',
    link: '#',
    image: dsa,
  },
  {
    title: 'Adobe Certified Professional',
    issuer: 'Adobe',
    date: '2025',
    description: 'Professional certification in Adobe creative tools and design principles, demonstrating expertise in digital media creation.',
    link: '#',
    image: adobe,
  },
  {
    title: 'AI Agents Development',
    issuer: 'AI Platform',
    date: '2025',
    description: 'Advanced certification in AI agent development, covering machine learning models and autonomous system design.',
    link: '#',
    image: agents,
  },
  {
    title: 'AIU ANVESHAN 2025-26',
    issuer: 'AIU',
    date: '2025',
    description: 'University-level certification in Artificial Intelligence fundamentals, algorithms, and applications.',
    link: '#',
    image: aiu,
  },
  {
    title: 'Automata Theory',
    issuer: 'Computer Science Institute',
    date: '2025',
    description: 'Certification in Automata Theory and Formal Languages, covering computational theory and state machines.',
    link: '#',
    image: automata,
  },
  {
    title: 'Call of Duty Hackathon',
    issuer: 'LPU',
    date: '2024',
    description: 'Achievement certificate for competitive gaming performance in Call of Duty tournaments.',
    link: '#',
    image: cod,
  },
  {
    title: 'Data Fundamentals',
    issuer: 'MongoDb',
    date: '2025',
    description: 'Foundational certification in data science, covering statistics, data analysis, and visualization techniques.',
    link: '#',
    image: data,
  },
  {
    title: 'Schema Design Optimization',
    issuer: 'MongoDb',
    date: '2025',
    description: 'Professional certification in User Interface and User Experience design, covering design thinking and prototyping.',
    link: '#',
    image: design,
  },
  {
    title: 'FreeCodeCamp Web Development',
    issuer: 'FreeCodeCamp',
    date: '2023',
    description: 'Full-stack web development certification covering HTML, CSS, JavaScript, and modern web technologies.',
    link: '#',
    image: Free,
  },
  {
    title: 'Generative AI Nasscom',
    issuer: 'Indian Govt',
    date: '2026',
    description: 'Specialized certification in Generative AI technologies, including GANs, diffusion models, and AI content creation.',
    link: '#',
    image: genAi,
  },
  {
    title: 'Java SkillUp',
    issuer: 'GeeksforGeeks',
    date: '2025',
    description: 'Certification for competitive programming and problem-solving skills on GeeksforGeeks platform.',
    link: '#',
    image: gfg,
  },
  {
    title: 'GPT & Large Language Models',
    issuer: 'AI Research Institute',
    date: '2025',
    description: 'Advanced certification in GPT models and large language model architectures and applications.',
    link: '#',
    image: gpt,
  },
  {
    title: 'Hardware and Operating Systems',
    issuer: 'IBM / Coursera',
    date: '2024',
    description: 'Professional certification in data science covering Python, machine learning, and data visualization with IBM tools.',
    link: '#',
    image: ibm,
  },
  {
    title: 'Myntra Design Challenge',
    issuer: 'Myntra',
    date: '2025',
    description: 'Certificate for participation and achievement in Myntra design and development challenges.',
    link: '#',
    image: myntra,
  },
  {
    title: 'Full-Stack Web Development',
    issuer: 'Infosys Springboard',
    date: '2024',
    description: 'Complete certification in full-stack web development covering frontend, backend, and deployment technologies.',
    link: '#',
    image: webdev,
  },
];

const CertificateCard = ({ cert, index }: { cert: typeof certificates[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="group [perspective:1200px]"
    >
      <div className="relative w-full min-h-[280px] transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden glass">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/0 to-transparent group-hover:from-primary/10 transition-all duration-700" />
          <div className="relative h-40 overflow-hidden">
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          </div>
          <div className="p-5 flex items-start gap-3">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0"
            >
              <FiAward className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors duration-300" />
            </motion.div>
            <div className="flex-1">
              <motion.h3 
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                className="font-display text-sm font-bold leading-snug text-foreground dark:text-white"
              >
                {cert.title}
              </motion.h3>
              <p className="text-muted-foreground text-xs mt-1 group-hover:text-primary/70 transition-colors duration-300">{cert.issuer}</p>
              <span className="font-mono text-[10px] text-muted-foreground/60 tracking-wider mt-1 block">{cert.date}</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden glass flex flex-col justify-between p-6 bg-gradient-to-br from-primary/8 to-background/50">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display text-sm font-bold mb-3 text-foreground dark:text-white">{cert.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
          </motion.div>
          <motion.a
            href={cert.link}
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-primary hover:text-primary/80 transition-colors mt-4"
          >
            <FiExternalLink size={14} /> View Certificate
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredCertificates = certificates.slice(0, 6);

  return (
    <section id="certificates" className="py-24 md:py-32 px-6 lg:px-24 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-16 relative z-10"
      >
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-primary/70 text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Certificates
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
        >
          Credentials & <span className="text-gradient animate-pulse">certifications.</span>
        </motion.h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-10">
        {featuredCertificates.map((cert, i) => (
          <CertificateCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center relative z-10"
      >
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-primary hover:text-primary-foreground transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 border-primary/30 hover:border-primary"
              >
                <motion.span
                  whileHover={{ rotate: 12 }}
                  className="inline-block"
                >
                  <FiGrid className="w-4 h-4 mr-2" />
                </motion.span>
                View All Certificates ({certificates.length})
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-background to-primary/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-6">
                  All Certificates & <span className="text-gradient">Credentials</span>
                </DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, i) => (
                  <CertificateCard key={cert.title} cert={cert} index={i} />
                ))}
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
};

export default CertificatesSection;
