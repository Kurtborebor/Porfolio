import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-medium text-lg">Kurt Christian Borebor</div>
            <p className="text-sm text-muted-foreground">
              Creating meaningful visual experiences that connect brands with their audiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <nav className="flex flex-wrap gap-6 justify-center">
              <button 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Back to Top */}
          <div className="md:text-right">
            <button
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} Kurt Christian Borebor. All rights reserved.
            </div>
            <div className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> in Laguna
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}