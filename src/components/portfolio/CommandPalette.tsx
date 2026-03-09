import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Code, FlaskConical, Wrench, Briefcase, Mail,
  Home, Search, FileText, Command
} from "lucide-react";

const commands = [
  { icon: Home, label: "Home", section: "#", shortcut: "H" },
  { icon: User, label: "About", section: "#about", shortcut: "A" },
  { icon: Code, label: "Projects", section: "#projects", shortcut: "P" },
  { icon: FlaskConical, label: "Research", section: "#research", shortcut: "R" },
  { icon: Wrench, label: "Skills", section: "#skills", shortcut: "S" },
  { icon: Briefcase, label: "Experience", section: "#experience", shortcut: "E" },
  { icon: Mail, label: "Contact", section: "#contact", shortcut: "C" },
  { icon: FileText, label: "Download Resume", section: "resume", shortcut: "D" },
];

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = useCallback((section: string) => {
    setIsOpen(false);
    setSearch("");
    if (section === "resume") {
      // Could link to resume download
      return;
    }
    const el = document.querySelector(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearch("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Floating trigger hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 glass-card-hover px-3 py-2 flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <Command size={12} />
        <span className="hidden sm:inline">⌘K</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[100]"
              onClick={() => { setIsOpen(false); setSearch(""); }}
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-[101] glass-card border border-primary/20 shadow-glow overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
                <Search size={16} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search or jump to..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  autoFocus
                />
                <kbd className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">ESC</kbd>
              </div>

              <div className="max-h-[300px] overflow-y-auto py-2">
                {filteredCommands.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-8">No results found</p>
                ) : (
                  filteredCommands.map((cmd) => (
                    <button
                      key={cmd.label}
                      onClick={() => handleSelect(cmd.section)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                    >
                      <cmd.icon size={16} className="text-primary/60" />
                      <span className="flex-1 text-left">{cmd.label}</span>
                      <kbd className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                        {cmd.shortcut}
                      </kbd>
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
