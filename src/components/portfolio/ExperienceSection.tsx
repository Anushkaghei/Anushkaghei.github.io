import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { experience, education } from "@/data/portfolio";
import { Briefcase, GraduationCap, ChevronDown } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedWork, setExpandedWork] = useState<number | null>(0);
  const [expandedEdu, setExpandedEdu] = useState<number | null>(0);

  return (
    <section id="experience" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">My Journey</p>
          <h2 className="section-title text-foreground">Experience & Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Briefcase size={18} className="text-primary" />
              <h3 className="font-display text-xl font-semibold text-foreground">Work Experience</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

              <div className="space-y-5">
                {experience.map((exp, i) => {
                  const isExpanded = expandedWork === i;
                  return (
                    <motion.div
                      key={exp.title + exp.company}
                      initial={{ opacity: 0, y: 25 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="relative pl-8"
                    >
                      <motion.div
                        className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-background"
                        animate={{
                          backgroundColor: "hsl(var(--primary))",
                          boxShadow: isExpanded ? "0 0 12px hsl(var(--primary) / 0.5)" : "none",
                          scale: isExpanded ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <div
                        className="glass-card-hover p-5 cursor-pointer group"
                        onClick={() => setExpandedWork(isExpanded ? null : i)}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                              {exp.title}
                            </h4>
                            <p className="text-primary text-sm mt-0.5">{exp.company}</p>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0 mt-1"
                          >
                            <ChevronDown size={14} className="text-muted-foreground" />
                          </motion.div>
                        </div>
                        <span className="text-xs text-muted-foreground">{exp.period}</span>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-3">
                                {exp.description}
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 mb-6"
            >
              <GraduationCap size={18} className="text-accent" />
              <h3 className="font-display text-xl font-semibold text-foreground">Education</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

              <div className="space-y-5">
                {education.map((edu, i) => {
                  const isExpanded = expandedEdu === i;
                  return (
                    <motion.div
                      key={edu.degree + edu.school}
                      initial={{ opacity: 0, y: 25 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="relative pl-8"
                    >
                      <motion.div
                        className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-background"
                        animate={{
                          backgroundColor: "hsl(var(--accent))",
                          boxShadow: isExpanded ? "0 0 12px hsl(var(--accent) / 0.5)" : "none",
                          scale: isExpanded ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <div
                        className="glass-card-hover p-5 cursor-pointer group"
                        onClick={() => setExpandedEdu(isExpanded ? null : i)}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-display text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                              {edu.degree}
                            </h4>
                            <p className="text-accent text-sm mt-0.5">{edu.school}</p>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0 mt-1"
                          >
                            <ChevronDown size={14} className="text-muted-foreground" />
                          </motion.div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">{edu.period}</span>
                          <span className="text-xs font-medium text-accent">GPA: {edu.gpa}</span>
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                {edu.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
