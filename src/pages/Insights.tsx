import { motion } from 'motion/react';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/blog';

export default function Insights() {
  const insights = getAllPosts();

  return (
    <div className="flex flex-col gap-24 pb-32 pt-12 lg:pt-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-bp-highlight/10 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <section className="px-6 max-w-4xl mx-auto w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bp-cta/10 border border-bp-cta/20 text-bp-cta text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <BookOpen className="w-4 h-4" /> Intelligence & Insights
          </div>
          <h1 className="text-4xl lg:text-7xl font-bold leading-[1.05] text-bp-white mb-8 tracking-tight">
            Roofing Demand <span className="text-bp-cta text-glow">Intelligence</span>
          </h1>
          <p className="text-xl text-bp-support mb-10 max-w-2xl mx-auto leading-relaxed opacity-80">
            Strategic insights, profile teardowns, and revenue logic for storm-damage roofing companies focused on Google Maps dominance.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/insights/${article.slug}`}
                className="glass-card p-8 flex flex-col group hover:border-bp-cta/40 hover:bg-bp-cta/[0.02] transition-all duration-500 cursor-pointer h-full relative overflow-hidden hover:-translate-y-1.5"
              >
                <div className="absolute -inset-24 bg-bp-cta/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="flex items-center justify-between mb-6 relative z-10 gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-bp-cta group-hover:tracking-[0.35em] transition-all duration-500">
                    {article.category}
                  </span>
                  <span className="text-[10px] text-bp-support flex items-center gap-1.5 opacity-60 whitespace-nowrap">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-bp-white mb-4 group-hover:text-bp-cta transition-colors duration-500 leading-tight relative z-10">
                  {article.title}
                </h3>

                <p className="text-bp-support text-sm leading-relaxed opacity-75 mb-8 relative z-10">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-8 border-t border-white/5 flex items-center text-xs font-bold text-bp-support group-hover:text-bp-white transition-all duration-500 uppercase tracking-widest relative z-10">
                  Read Insight
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 max-w-4xl mx-auto w-full text-center py-20 relative z-10">
        <div className="flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-bp-white">
            BluePeak Demand Intelligence
          </span>
          <p className="text-[10px] text-bp-support uppercase tracking-[0.2em] leading-relaxed max-w-md">
            Strategic insight for storm-damage roofing companies focused on Google Maps visibility, trust, and demand capture.
          </p>
        </div>
      </section>
    </div>
  );
}