import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown, FileText, FlaskConical, Mail } from "lucide-react";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = personalInfo.roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting ? role.slice(0, displayText.length - 1) : role.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,210,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-move" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-foreground">I'm </span>
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-10 mb-8"
        >
          <span className="font-display text-xl md:text-2xl text-muted-foreground">
            {displayText}
            <span className="animate-pulse-glow text-primary">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-glow inline-flex items-center gap-2">
            <FileText size={18} />
            View Work
          </a>
          <a href="#research" className="btn-outline-glow inline-flex items-center gap-2">
            <FlaskConical size={18} />
            Research
          </a>
          <a href="#contact" className="btn-outline-glow inline-flex items-center gap-2">
            <Mail size={18} />
            Contact
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} className="animate-float" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
