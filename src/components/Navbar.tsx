import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      {/* Top bar */}
      <div className="bg-topbar text-topbar-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="/" className="font-display text-2xl font-bold tracking-tight">
            <span className="text-primary">HARD</span>WARE
          </a>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-md bg-topbar-foreground/10 px-4 py-2.5 pr-10 text-sm text-topbar-foreground placeholder:text-topbar-foreground/50 outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-topbar-foreground/50" />
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Products</a>
            <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <User className="h-4 w-4" />
              Login
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-topbar-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-topbar-foreground/10 px-4 pb-4">
            <div className="relative mt-3 mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-md bg-topbar-foreground/10 px-4 py-2.5 pr-10 text-sm text-topbar-foreground placeholder:text-topbar-foreground/50 outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-topbar-foreground/50" />
            </div>
            <nav className="flex flex-col gap-3 text-sm font-medium">
              <a href="#" className="hover:text-primary transition-colors">Products</a>
              <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <ShoppingCart className="h-4 w-4" /> Cart
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <User className="h-4 w-4" /> Login
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
