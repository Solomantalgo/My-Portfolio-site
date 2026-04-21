import { motion } from 'framer-motion';

const tech = [
  { name: "React", level: 90, icon: "⚛️" },
  { name: "Tailwind CSS", level: 95, icon: "🎨" },
  { name: "JavaScript", level: 85, icon: "⚡" },
  { name: "Spring Boot", level: 70, icon: "🍃" },
  { name: "Supabase", level: 80, icon: "⚡" },
  { name: "Java", level: 75, icon: "☕" },
  { name: "Vercel / Git", level: 90, icon: "▲" },
  { name: "SEO / Maps", level: 85, icon: "🔍" },
];

const TechStack = () => {
  return (
    <section className="py-24 bg-card/20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-head text-[11px] text-lime font-bold tracking-[0.2em] uppercase mb-4 block">Powering Results</span>
          <h2 className="font-head text-4xl font-black text-white tracking-tight">The Modern <span className="text-lime">Stack.</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tech.map((item, i) => (
            <div key={i} className="p-8 rounded-[32px] bg-card border border-white/5 hover:border-lime/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-head text-sm font-bold text-white">{item.name}</h3>
              </div>
              
              <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: `${item.level}%` }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.1 * i }}
                   className="h-full bg-lime"
                />
              </div>
              <div className="mt-3 flex justify-between">
                <span className="text-[10px] font-head font-bold text-muted uppercase tracking-wider">Skill Level</span>
                <span className="text-[10px] font-head font-black text-white">{item.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
