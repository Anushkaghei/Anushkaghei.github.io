import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { publications } from "@/data/portfolio";
import { ExternalLink, Quote } from "lucide-react";

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">Publications</p>
          <h2 className="section-title text-foreground">Research Work</h2>
        </motion.div>

        <div className="space-y-5">
          {publications.map((pub, i) => (
            <motion.a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card-hover group p-6 block hover:translate-x-1 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                  <p className="text-sm text-primary/70 italic">{pub.venue}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex items-center gap-1.5 text-muted-foreground group-hover:text-primary/80 transition-colors">
                    <Quote size={14} className="text-accent" />
                    <span className="text-sm font-medium">{pub.citations} citations</span>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
