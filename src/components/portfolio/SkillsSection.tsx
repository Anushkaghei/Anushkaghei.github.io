import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/data/portfolio";

const allCategories = Object.keys(skills) as (keyof typeof skills)[];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<keyof typeof skills>(allCategories[0]);

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">Expertise</p>
          <h2 className="section-title text-foreground">Skills & Technologies</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === cat
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="max-w-2xl flex flex-wrap gap-2">
          {skills[activeTab].map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              className="px-4 py-2 rounded-lg text-sm bg-secondary text-secondary-foreground hover:bg-primary/15 hover:text-primary transition-all duration-300"
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
