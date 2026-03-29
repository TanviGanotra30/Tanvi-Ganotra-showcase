import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Trophy, Zap, Star, Medal, Award, Sparkles } from "lucide-react";

const achievements = [
  {
    title: "LeetCode",
    platform: "Competitive Coding",
    icon: Trophy,
    rank: "Top 8.52%",
    rating: "1700+",
    solved: "372",
    link: "https://leetcode.com/u/tanvi_30/",
    description:
      "Consistent DSA practice with strong contest performance and problem-solving depth.",
    gradient: "from-orange-500/15 to-red-500/15",
    borderColor: "border-orange-400/20 dark:border-orange-400/20",
    accentColor: "text-orange-600 dark:text-orange-300",
  },
  {
    title: "GeeksforGeeks",
    platform: "Problem Solving",
    icon: Star,
    rank: "Rank #892",
    rating: "Badges",
    solved: "352",
    link: "https://www.geeksforgeeks.org/profile/ganotratanvi12325663",
    description:
      "Structured interview prep and coding consistency through verified practice milestones.",
    gradient: "from-green-500/15 to-emerald-500/15",
    borderColor: "border-green-400/20 dark:border-green-400/20",
    accentColor: "text-green-600 dark:text-green-300",
  },
  {
    title: "Code360",
    platform: "Competitive Coding",
    icon: Zap,
    rank: "Grand Master",
    rating: "Contests",
    solved: "475",
    link: "https://www.naukri.com/code360/profile/d2d9a286-8297-4573-8f99-083477d529e6",
    description:
      "Competitive coding growth backed by regular challenges and ranking-based progress.",
    gradient: "from-purple-500/15 to-pink-500/15",
    borderColor: "border-purple-400/20 dark:border-purple-400/20",
    accentColor: "text-purple-600 dark:text-purple-300",
  },
  {
    title: "Myntra WeForShe",
    platform: "Hackathon",
    icon: Medal,
    rank: "Participant",
    rating: "Team Event",
    solved: "Innovation",
    link: "https://www.myntra.com/",
    description:
      "Worked on impactful product ideas with a focus on creativity and collaboration.",
    gradient: "from-pink-500/15 to-rose-500/15",
    borderColor: "border-pink-400/20 dark:border-pink-400/20",
    accentColor: "text-pink-600 dark:text-pink-300",
  },
  {
    title: "Adobe India Hackathon",
    platform: "Hackathon",
    icon: Award,
    rank: "Participant",
    rating: "Rapid Build",
    solved: "MVP Ready",
    link: "https://www.adobe.com/",
    description:
      "Built design-driven solutions with fast execution and strong ideation under pressure.",
    gradient: "from-red-500/15 to-orange-500/15",
    borderColor: "border-red-400/20 dark:border-red-400/20",
    accentColor: "text-red-600 dark:text-red-300",
  },
  {
    title: "Google Big Code 2026",
    platform: "Competition",
    icon: Sparkles,
    rank: "Qualified",
    rating: "AI + Code",
    solved: "Selected",
    link: "https://ai.google/",
    description:
      "Recognized through coding and code-intelligence focused technical evaluation.",
    gradient: "from-blue-500/15 to-cyan-500/15",
    borderColor: "border-blue-400/20 dark:border-blue-400/20",
    accentColor: "text-blue-600 dark:text-blue-300",
  },
  {
    title: "Smart India Hackathon",
    platform: "Hackathon",
    icon: Trophy,
    rank: "Internal Winner",
    rating: "Innovation",
    solved: "Qualified",
    link: "https://www.sih.gov.in/",
    description:
      "Advanced through internal rounds with a practical and problem-focused solution.",
    gradient: "from-cyan-500/15 to-sky-500/15",
    borderColor: "border-cyan-400/20 dark:border-cyan-400/20",
    accentColor: "text-cyan-600 dark:text-cyan-300",
  },
  {
    title: "Code Off Duty",
    platform: "Hackathon",
    icon: Zap,
    rank: "4th Place",
    rating: "Fast Build",
    solved: "Top Finish",
    link: "#",
    description:
      "Delivered a strong solution under time pressure with solid execution and teamwork.",
    gradient: "from-yellow-500/15 to-orange-500/15",
    borderColor: "border-yellow-400/20 dark:border-yellow-400/20",
    accentColor: "text-yellow-600 dark:text-yellow-300",
  },
];

const AchievementCard = ({
  achievement,
  isVisible,
}: {
  achievement: (typeof achievements)[0];
  isVisible: boolean;
}) => {
  const Icon = achievement.icon;

  return (
    <motion.div
      layout
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="h-full"
    >
      <div
        className={`relative h-full rounded-[28px] overflow-hidden border backdrop-blur-xl bg-black/[0.045] dark:bg-white/[0.045]
        ${achievement.borderColor}
        shadow-[0_10px_40px_rgba(0,0,0,0.18)]
        transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-85"}`}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-80`}
        />

        {/* Active soft glow */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.18 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className={`absolute -inset-2 bg-gradient-to-r ${achievement.gradient} blur-2xl`}
            />
          )}
        </AnimatePresence>

        <div className="relative z-10 h-full p-6 md:p-7 flex flex-col justify-between">
          {/* Top */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 ${achievement.accentColor}`}
              >
                <Icon size={14} />
                {achievement.platform}
              </div>

              <span className="text-[11px] uppercase tracking-[0.18em] text-black/45 dark:text-white/45">
                Achievement
              </span>
            </div>

            <div>
              <h3 className="text-2xl md:text-[28px] font-bold text-black dark:text-white tracking-tight">
                {achievement.title}
              </h3>
              <p className={`mt-2 text-sm font-semibold ${achievement.accentColor}`}>
                {achievement.rank}
              </p>
            </div>

            <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
              {achievement.description}
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-6 space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] p-4">
                <p className="text-lg font-bold text-black dark:text-white">
                  {achievement.rating}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-black/45 dark:text-white/45">
                  Highlight
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] p-4">
                <p className="text-lg font-bold text-black dark:text-white">
                  {achievement.solved}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-black/45 dark:text-white/45">
                  Metric
                </p>
              </div>
            </div>

            {achievement.link !== "#" ? (
              <a
                href={achievement.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.07] dark:bg-white/[0.07] px-4 py-3 text-sm font-medium text-black dark:text-white transition-all duration-300 hover:bg-black/[0.12] dark:hover:bg-white/[0.12]"
              >
                View Profile
                <FiExternalLink size={16} />
              </a>
            ) : (
              <div className="inline-flex w-full items-center justify-center rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.05] dark:bg-white/[0.05] px-4 py-3 text-sm font-medium text-black/60 dark:text-white/60">
                Showcase Only
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, achievements.length - cardsPerView),
    [cardsPerView]
  );

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section
      id="achievements"
      className="relative py-20 md:py-24 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14 md:mb-16"
      >
        <p className="font-mono text-primary/80 text-sm tracking-[0.22em] uppercase mb-5">
          Achievements
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-black dark:text-white">
          Milestones That Define{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            My Journey
          </span>
        </h2>

        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-8">
          A curated highlight reel of coding consistency, platform growth,
          hackathon participation, and technical milestones.
        </p>
      </motion.div>

      {/* Slider */}
      <div className="relative">
        {/* Arrows */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border backdrop-blur-md transition-all duration-300
          ${
            activeIndex === 0
              ? "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/25 dark:text-white/25 cursor-not-allowed"
              : "border-black/15 dark:border-white/15 bg-black/10 dark:bg-white/10 text-black dark:text-white hover:bg-black/15 dark:hover:bg-white/15"
          }`}
        >
          <FiArrowLeft className="mx-auto" size={20} />
        </button>

        <button
          onClick={handleNext}
          disabled={activeIndex === maxIndex}
          className={`absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border backdrop-blur-md transition-all duration-300
          ${
            activeIndex === maxIndex
              ? "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/25 dark:text-white/25 cursor-not-allowed"
              : "border-black/15 dark:border-white/15 bg-black/10 dark:bg-white/10 text-black dark:text-white hover:bg-black/15 dark:hover:bg-white/15"
          }`}
        >
          <FiArrowRight className="mx-auto" size={20} />
        </button>

        {/* Track */}
        <div className="overflow-hidden px-12 md:px-10">
          <motion.div
            className="flex gap-5"
            animate={{
              x: `calc(-${activeIndex * (100 / cardsPerView)}% - ${activeIndex * 20}px)`,
            }}
            transition={{
              duration: 1.0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="min-w-full md:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333%-13.5px)] h-[390px]"
              >
                <AchievementCard
                  achievement={achievement}
                  isVisible={
                    index >= activeIndex && index < activeIndex + cardsPerView
                  }
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              index === activeIndex
                ? "w-8 h-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_18px_rgba(168,85,247,0.45)]"
                : "w-2.5 h-2.5 bg-black/20 dark:bg-white/20 hover:bg-black/35 dark:hover:bg-white/35"
            }`}
          />
        ))}
      </div>

      {/* Footer */}
      <p className="text-center mt-6 text-[11px] uppercase tracking-[0.24em] text-black/35 dark:text-white/35">
        Smooth auto-rotation • use arrows to navigate
      </p>
    </section>
  );
};

export default AchievementsSection;