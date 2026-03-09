import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GitCommit, FolderGit2, Quote, Calendar } from "lucide-react";

const statsData = [
  { icon: GitCommit, label: "GitHub Commits", value: 280, suffix: "+", color: "185, 80%, 55%" },
  { icon: FolderGit2, label: "Repositories", value: 20, suffix: "+", color: "270, 60%, 60%" },
  { icon: Quote, label: "Research Citations", value: 4, suffix: "", color: "145, 60%, 50%" },
  { icon: Calendar, label: "Years Experience", value: 2, suffix: "+", color: "35, 90%, 55%" },
];

const AnimatedCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span>{count}{suffix}</span>;
};

const AnimatedStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statsData.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
          className="glass-card-hover p-5 text-center group relative overflow-hidden"
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at center, hsla(${stat.color}, 0.08) 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            <stat.icon
              size={22}
              className="mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
              style={{ color: `hsl(${stat.color})` }}
            />
            <div className="font-display text-3xl font-bold mb-1" style={{ color: `hsl(${stat.color})` }}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedStats;
