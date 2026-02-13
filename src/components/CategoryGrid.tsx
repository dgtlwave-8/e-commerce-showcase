import { Hammer, Droplets, Paintbrush, Wrench, TreePine, Nut, Lightbulb, Home } from "lucide-react";

const categories = [
  { name: "Statybinės medžiagos", icon: Hammer },
  { name: "Santechnika", icon: Droplets },
  { name: "Dažai", icon: Paintbrush },
  { name: "Elektriniai įrankiai", icon: Wrench },
  { name: "Sodo prekės", icon: TreePine },
  { name: "Tvirtinimo detalės", icon: Nut },
  { name: "Apšvietimas", icon: Lightbulb },
  { name: "Buitis", icon: Home },
];

const CategoryGrid = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="font-display text-2xl font-bold mb-6">Kategorijos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="group flex flex-col items-center gap-3 rounded-lg bg-card p-5 shadow-sm border border-border hover:border-primary hover:shadow-md transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <cat.icon className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold text-center">{cat.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
