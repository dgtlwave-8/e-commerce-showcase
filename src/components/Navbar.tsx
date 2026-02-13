import { Search, ShoppingCart, User, UserPlus, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <div className="bg-topbar text-topbar-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="/" className="font-display text-2xl font-bold tracking-tight">
            <span className="text-primary">My</span>Shop
          </a>

          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full flex">
              <input
                type="text"
                placeholder="Ieškoti prekių..."
                className="w-full rounded-l-md bg-topbar-foreground/10 px-4 py-2.5 text-sm text-topbar-foreground placeholder:text-topbar-foreground/50 outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="rounded-r-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:brightness-110 transition">
                Ieškoti
              </button>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Prekės</a>
            <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <ShoppingCart className="h-4 w-4" />
              Krepšelis
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <User className="h-4 w-4" />
              Prisijungti
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <UserPlus className="h-4 w-4" />
              Registracija
            </a>
          </nav>

          <button
            className="md:hidden text-topbar-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Atidaryti meniu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-topbar-foreground/10 px-4 pb-4">
            <div className="relative mt-3 mb-4 flex">
              <input
                type="text"
                placeholder="Ieškoti prekių..."
                className="w-full rounded-l-md bg-topbar-foreground/10 px-4 py-2.5 text-sm text-topbar-foreground placeholder:text-topbar-foreground/50 outline-none"
              />
              <button className="rounded-r-md bg-primary px-4 text-sm font-semibold text-primary-foreground">
                Ieškoti
              </button>
            </div>
            <nav className="flex flex-col gap-3 text-sm font-medium">
              <a href="#" className="hover:text-primary transition-colors">Prekės</a>
              <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <ShoppingCart className="h-4 w-4" /> Krepšelis
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <User className="h-4 w-4" /> Prisijungti
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <UserPlus className="h-4 w-4" /> Registracija
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
