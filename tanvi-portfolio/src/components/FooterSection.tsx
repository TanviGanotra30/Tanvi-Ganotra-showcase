import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-6 lg:px-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-xs text-muted-foreground">
          ©2026 Tanvi Ganotra. Crafted with intention.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/TanviGanotra30" target="_blank" rel="noopener noreferrer" className="interactive text-muted-foreground hover:text-primary transition-colors">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/tanvi-ganotra" target="_blank" rel="noopener noreferrer" className="interactive text-muted-foreground hover:text-primary transition-colors">
            <FiLinkedin size={18} />
          </a>
          <button onClick={scrollToTop} className="interactive text-muted-foreground hover:text-primary transition-colors ml-3">
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
