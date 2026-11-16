import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "sobre" },
  { href: "#experience", label: "experiência" },
  { href: "#projects", label: "projetos" },
  { href: "#skills", label: "stack" },
  { href: "#education", label: "formação" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-background/85 backdrop-blur-md border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm sm:text-base font-medium">
          <span className="text-primary">~/</span>
          <span className="text-foreground">thomas</span>
          <span className="text-muted-foreground">.falcao</span>
          <span className="ml-0.5 inline-block w-2 h-4 align-[-2px] bg-primary animate-blink motion-reduce:animate-none" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-primary/70">0{i + 1}.</span> {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-4 py-2 rounded-lg border border-primary/40 font-mono text-sm text-primary hover:bg-primary/10 transition-colors"
          >
            contato
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-5 pt-1 space-y-1">
          {[...links, { href: "#contact", label: "contato" }].map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-primary/70">0{i + 1}.</span> {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
