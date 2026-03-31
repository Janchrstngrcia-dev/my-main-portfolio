"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/providers/ThemeProvider";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Certificates", href: "/certificates" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const getBreadcrumbs = () => {
    if (pathname === "/") return [];
    const paths = pathname.split("/").filter(Boolean);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      href: "/" + paths.slice(0, index + 1).join("/"),
    }));
  };

  const breadcrumbs = getBreadcrumbs();
  const pageTitle = breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1].label : "Home";

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={`fixed w-full z-50 transition-all duration-300 ${
          isMobileMenuOpen ? "bg-background/95 backdrop-blur-md py-4" : "bg-background/50 backdrop-blur-sm py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent"
            >
              <Link href="/">JC</Link>
            </motion.div>

            <div className="hidden md:flex gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <motion.div key={item.href} whileHover={{ scale: 1.05 }}>
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        active
                          ? "bg-accent text-accent-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light mode"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="text-accent" />
                ) : (
                  <Moon size={20} className="text-accent" />
                )}
              </button>

              <button
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                aria-label="Toggle mobile menu"
                className="md:hidden text-accent p-2 hover:bg-secondary/50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 bg-secondary/80 backdrop-blur-md rounded-lg p-4 space-y-2"
            >
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      active
                        ? "bg-accent text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </div>
      </nav>

      {breadcrumbs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:block fixed top-20 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-secondary"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-muted-foreground" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-accent font-semibold">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="text-muted-foreground hover:text-accent transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
