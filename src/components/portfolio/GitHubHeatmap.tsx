import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

const GitHubHeatmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Generate realistic-looking contribution data for 52 weeks
  const weeks = useMemo(() => {
    const data: number[][] = [];
    for (let w = 0; w < 52; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        // Create realistic patterns - more active on weekdays
        const isWeekday = d >= 1 && d <= 5;
        const baseChance = isWeekday ? 0.6 : 0.3;
        const hasContribution = Math.random() < baseChance;
        week.push(hasContribution ? Math.floor(Math.random() * 4) + 1 : 0);
      }
      data.push(week);
    }
    return data;
  }, []);

  const getColor = (level: number) => {
    const colors = [
      "hsl(var(--secondary))",
      "hsla(185, 80%, 55%, 0.2)",
      "hsla(185, 80%, 55%, 0.4)",
      "hsla(185, 80%, 55%, 0.65)",
      "hsla(185, 80%, 55%, 0.9)",
    ];
    return colors[level] || colors[0];
  };

  const totalContributions = weeks.flat().reduce((sum, v) => sum + v, 0);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="glass-card p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-sm font-semibold text-foreground">
            Contribution Activity
          </h3>
          <span className="text-xs text-muted-foreground">
            {totalContributions} contributions in the last year
          </span>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-[3px] min-w-[700px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <motion.div
                    key={`${wi}-${di}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.15,
                      delay: (wi * 7 + di) * 0.002,
                    }}
                    className="w-[11px] h-[11px] rounded-[2px] transition-all duration-200 hover:scale-150 hover:ring-1 hover:ring-primary/50 cursor-pointer"
                    style={{ backgroundColor: getColor(day) }}
                    title={`${day} contribution${day !== 1 ? 's' : ''}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-1.5 mt-3">
          <span className="text-xs text-muted-foreground mr-1">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="w-[11px] h-[11px] rounded-[2px]"
              style={{ backgroundColor: getColor(level) }}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">More</span>
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubHeatmap;
