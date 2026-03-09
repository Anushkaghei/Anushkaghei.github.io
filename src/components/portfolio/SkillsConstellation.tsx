import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/data/portfolio";

const categoryMeta: Record<string, { emoji: string }> = {
  "AI/ML": { emoji: "🧠" },
  "Languages": { emoji: "💻" },
  "Data & Analytics": { emoji: "📊" },
  "Cloud & DevOps": { emoji: "☁️" },
  "Databases": { emoji: "🗄️" },
  "Web & Software": { emoji: "🌐" },
};

const allCategories = Object.keys(skills) as (keyof typeof skills)[];

const SkillsConstellation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = ["All", ...allCategories];
  const visibleCategories = activeFilter === "All" ? allCategories : [activeFilter as keyof typeof skills];

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <h2 className="section-title text-foreground">Technical Skills</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleCategories.map((cat, catIndex) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: catIndex * 0.08 }}
                className="glass-card-hover p-6 group"
              >
                <div className="text-3xl mb-3">{categoryMeta[cat]?.emoji ?? "⚡"}</div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-4">
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[cat].map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: catIndex * 0.08 + i * 0.03 }}
                      className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-secondary-foreground hover:bg-primary/15 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsConstellation;
