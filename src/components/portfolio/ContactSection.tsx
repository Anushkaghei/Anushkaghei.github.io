// Contact section - social links only
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import { ExternalLink, Github, Linkedin, BookOpen } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: BookOpen, href: personalInfo.social.scholar, label: "Scholar" },
  ];

  return (
    <section id="contact" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-2">Get In Touch</p>
          <h2 className="section-title text-foreground mx-auto">Let's Connect</h2>
          <p className="section-subtitle mx-auto mt-4">
            Feel free to reach out through any of these platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-6 max-w-md mx-auto"
        >
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover w-14 h-14 flex items-center justify-center group"
              >
                <s.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-glow inline-flex items-center justify-center gap-2">
            <ExternalLink size={16} /> Preview Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
