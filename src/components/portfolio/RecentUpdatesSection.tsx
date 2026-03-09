import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useMemo, useState } from "react";
import { recentUpdates } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

const RecentUpdatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTag, setActiveTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    recentUpdates.forEach((u) => u.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filtered = activeTag === "All"
    ? recentUpdates
    : recentUpdates.filter((u) => u.tags.includes(activeTag));

  return (
    <section id="updates" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">
            <Sparkles size={14} className="inline mr-1.5 -mt-0.5" />
            What I've Been Up To
          </p>
          <h2 className="section-title text-foreground">Recent Updates</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {filtered.map((update, i) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card-hover p-6 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{update.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full">
                        {update.date}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {update.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {update.tags.map((tag) => (
                        <span
                          key={tag}
                          onClick={() => setActiveTag(tag)}
                          className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 cursor-pointer hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <p className="text-muted-foreground text-sm col-span-2 text-center py-8">
                No updates for this tag yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RecentUpdatesSection;
