import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github, Star } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";

// Get all unique technologies across all projects
const allTechnologies = ["All", ...Array.from(new Set(projects.flatMap((p) => p.languages)))];
const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(12);

  return (
    <motion.div
      key={project.name}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card-hover group p-6 flex flex-col h-full will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-start justify-between mb-4" style={{ transform: "translateZ(20px)" }}>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Star size={14} className="text-primary/60 group-hover:text-primary group-hover:scale-125 transition-all" />
            {project.stars}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-5 flex-1 leading-relaxed" style={{ transform: "translateZ(10px)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5" style={{ transform: "translateZ(15px)" }}>
          {project.languages.map((lang) => (
            <span
              key={lang}
              className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-200 hover:bg-primary/20 hover:scale-105"
            >
              {lang}
            </span>
          ))}
        </div>

        <div className="flex gap-3" style={{ transform: "translateZ(20px)" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-0.5"
          >
            <Github size={15} /> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-0.5"
            >
              <ExternalLink size={15} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const catMatch = activeCategory === "All" || p.category === activeCategory;
      const techMatch = activeTech === "All" || p.languages.includes(activeTech);
      return catMatch && techMatch;
    });
  }, [activeCategory, activeTech]);

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">My Work</p>
          <h2 className="section-title text-foreground">Featured Projects</h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          <span className="text-xs text-muted-foreground self-center mr-1">Category:</span>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Technology filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <span className="text-xs text-muted-foreground self-center mr-1">Tech:</span>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveTech(tech)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                activeTech === tech
                  ? "bg-accent text-accent-foreground shadow-glow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-12"
          >
            No projects match the current filters.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
