import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBanner}
        alt="Savaitės akcijos — įrankiai ir medžiagos"
        className="w-full h-[280px] sm:h-[380px] md:h-[450px] object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg">
            <span className="inline-block rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground mb-3">
              Akcija
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-card mb-3 leading-tight">
              Savaitės pasiūlymai
            </h1>
            <p className="text-card/80 text-sm sm:text-base mb-5 max-w-md">
              Profesionalūs įrankiai ir medžiagos už geriausias kainas. Ribotą laiką!
            </p>
            <a
              href="#"
              className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition"
            >
              Peržiūrėti prekes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
