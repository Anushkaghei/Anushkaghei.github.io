import { personalInfo } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t border-border/30 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      <p className="text-xs">Built with passion & precision</p>
    </div>
  </footer>
);

export default Footer;
