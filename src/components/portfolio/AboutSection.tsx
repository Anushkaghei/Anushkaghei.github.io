import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import { FolderGit2, FileText, Cpu, Briefcase } from "lucide-react";

const interests = ["Computer Vision", "Machine Learning", "Full-Stack Development", "Research"];

const quickStats = [
  { icon: FolderGit2, label: "GitHub Repos", value: "25+", color: "hsl(var(--primary))" },
  { icon: FileText, label: "Publications", value: "5", color: "hsl(var(--accent))" },
  { icon: Cpu, label: "Technologies", value: "15+", color: "hsl(145, 60%, 50%)" },
  { icon: Briefcase, label: "Experience", value: "2+ yrs", color: "hsl(35, 90%, 55%)" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="section-title text-foreground">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio + Interest Tags */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-secondary-foreground leading-relaxed text-lg">
              I'm a passionate AI researcher and full-stack developer with expertise in computer vision, 
              machine learning, and deep learning technologies. My work focuses on creating innovative 
              solutions that bridge the gap between academic research and real-world applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With experience across companies like Siemens Healthineers, Deloitte, and PwC, I specialize 
              in building scalable data pipelines, fine-tuning LLMs, and developing production-grade ML 
              systems. I believe in the power of AI to solve complex problems and improve lives.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {interests.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-6">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass-card-hover p-5 text-center group"
                >
                  <stat.icon
                    size={24}
                    className="mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: stat.color }}
                  />
                  <div className="font-display font-bold text-foreground text-lg mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
