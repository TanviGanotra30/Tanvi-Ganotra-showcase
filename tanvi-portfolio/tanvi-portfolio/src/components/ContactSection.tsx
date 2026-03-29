import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mpqoqkle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-28 px-6 lg:px-20 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-fuchsia-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="text-center mb-16 md:mb-20"
      >
        <p className="font-mono text-primary/70 text-sm md:text-base tracking-[0.28em] uppercase mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white">
          Let’s turn an idea into{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            something real
          </span>
        </h2>

        <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-8">
          Open to internships, collaborations, freelance work, and exciting
          opportunities. If you have something in mind, I’d love to hear from you.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-stretch">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="space-y-5"
        >
          {/* Intro Card */}
          <div className="rounded-[32px] border border-black/10 dark:border-white/10 bg-black/[0.05] dark:bg-white/[0.05] backdrop-blur-xl p-7 md:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.12)]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 text-sm text-violet-600 dark:text-violet-300 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white leading-snug">
              Have a project, opportunity, or idea worth building?
            </h3>

            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-8 text-[15px]">
              Whether it’s a product idea, internship, collaboration, or a cool
              technical concept — I’m always open to meaningful work and
              conversations that create impact.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:tanviganota.10.b.3258@gmail.com"
              className="group rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.05] dark:bg-white/[0.05] backdrop-blur-xl p-6 hover:bg-black/[0.07] dark:hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-violet-500/15 border border-violet-400/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <FiMail className="text-violet-600 dark:text-violet-300 text-xl" />
              </div>
              <p className="text-sm text-black/50 dark:text-white/50 mb-1">Email</p>
              <p className="text-black dark:text-white break-all leading-7">
                tanviganota.10.b.3258@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/tanvi-ganotra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.05] dark:bg-white/[0.05] backdrop-blur-xl p-6 hover:bg-black/[0.07] dark:hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <FiLinkedin className="text-sky-600 dark:text-sky-300 text-xl" />
              </div>
              <p className="text-sm text-black/50 dark:text-white/50 mb-1">LinkedIn</p>
              <p className="text-black dark:text-white leading-7">linkedin.com/in/tanvi-ganotra</p>
            </a>

            <a
              href="https://github.com/TanviGanotra30"
              target="_blank"
              rel="noopener noreferrer"
              className="group sm:col-span-2 rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.05] dark:bg-white/[0.05] backdrop-blur-xl p-6 hover:bg-black/[0.07] dark:hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <FiGithub className="text-black dark:text-white text-xl" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-black/50 dark:text-white/50 mb-1">GitHub</p>
                    <p className="text-black dark:text-white leading-7 truncate sm:truncate-none">
                      github.com/TanviGanotra30
                    </p>
                  </div>
                </div>

                <span className="text-black/30 dark:text-white/30 group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors text-lg">
                  ↗
                </span>
              </div>
            </a>
          </div>

          {/* Quick Reply Note */}
          <div className="rounded-[28px] p-6 bg-gradient-to-br from-violet-500/80 via-fuchsia-500/70 to-pink-500/70 text-white shadow-[0_0_30px_rgba(168,85,247,0.22)]">
            <p className="font-semibold text-lg">Quick Response :)</p>
            <p className="text-sm mt-2 opacity-95 leading-7">
              I usually respond within 24 hours. Whether it’s a project,
              opportunity, or collaboration — feel free to reach out.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          onSubmit={handleSubmit}
          className="relative rounded-[36px] border border-black/10 dark:border-white/10 bg-black/[0.05] dark:bg-white/[0.05] backdrop-blur-2xl p-7 md:p-9 shadow-[0_10px_60px_rgba(0,0,0,0.16)]"
        >
          {/* top accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">
              Send me a message
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mt-3 leading-7">
              Drop your details below and I’ll get back to you directly via email.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm text-black/65 dark:text-white/65 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-5 py-4 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none focus:border-violet-400/40 focus:bg-black/[0.06] dark:focus:bg-white/[0.06] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-black/65 dark:text-white/65 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-5 py-4 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none focus:border-violet-400/40 focus:bg-black/[0.06] dark:focus:bg-white/[0.06] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-black/65 dark:text-white/65 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about your idea, project, collaboration, or opportunity..."
                required
                className="w-full px-5 py-4 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 outline-none focus:border-violet-400/40 focus:bg-black/[0.06] dark:focus:bg-white/[0.06] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className={`group w-full py-4 rounded-2xl text-white text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                status === "loading"
                  ? "bg-black/10 dark:bg-white/10 text-black dark:text-white cursor-not-allowed"
                  : "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:scale-[1.01]"
              }`}
            >
              {status === "idle" && "Send Message"}
              {status === "loading" && "Sending..."}
              {status === "success" && "Sent Successfully"}
              {status === "error" && "Try Again"}

              <FiSend className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Status Message */}
          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-emerald-600 dark:text-emerald-300"
              >
                <FiCheckCircle className="text-lg" />
                <p className="text-sm">
                  Message sent successfully! I’ll receive it on my email.
                </p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="mt-5 flex items-center gap-3 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-red-600 dark:text-red-300"
              >
                <FiAlertCircle className="text-lg" />
                <p className="text-sm">
                  Something went wrong. You can also email me directly at{" "}
                  <a
                    href="mailto:tanviganota.10b.3258@gmail.com"
                    className="underline"
                  >
                    tanviganota.10b.3258@gmail.com
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-xs text-black/35 dark:text-white/35 mt-5 text-center tracking-wide">
            Your message will be delivered securely to my inbox.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;