const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground mt-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-display text-sm font-bold text-footer-heading mb-4 uppercase tracking-wider">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Order Tracking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-footer-heading mb-4 uppercase tracking-wider">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-footer-heading mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-footer-heading mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>support@hardware.store</li>
              <li>+370 600 12345</li>
              <li>Mon–Sat: 8:00–20:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-footer-foreground/20 pt-6 text-center text-xs text-footer-foreground/60">
          © 2026 Hardware Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
