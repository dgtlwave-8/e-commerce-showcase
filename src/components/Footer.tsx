const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground mt-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-display text-sm font-bold text-footer-heading mb-4 uppercase tracking-wider">Pagalba</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Pagalbos centras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Grąžinimai</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pristatymo informacija</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Užsakymo sekimas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-footer-heading mb-4 uppercase tracking-wider">Apie mus</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Mūsų istorija</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Karjera</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Naujienos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tvarumas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-footer-heading mb-4 uppercase tracking-wider">Teisinė informacija</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privatumo politika</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Naudojimo sąlygos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Slapukų politika</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-footer-heading mb-4 uppercase tracking-wider">Kontaktai</h4>
            <ul className="space-y-2 text-sm">
              <li>info@myshop.lt</li>
              <li>+370 600 12345</li>
              <li>Pr–Š: 8:00–20:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-footer-foreground/20 pt-6 text-center text-xs text-footer-foreground/60">
          © 2026 MyShop. Visos teisės saugomos.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
