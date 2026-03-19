import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  ArrowRight, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  Quote, 
  Lightbulb, 
  Zap, 
  Activity,
  Target,
  ShieldCheck,
  AlertCircle,
  TrendingUp,
  BarChart3,
  MapPin
} from 'lucide-react';
import { insights, InsightArticle, ArticleSection } from '../data/insights';
import Button from '../components/Button';

export default function InsightArticleTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const article = insights.find(a => a.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = article.relatedSlugs
    .map(s => insights.find(a => a.slug === s))
    .filter((a): a is InsightArticle => !!a)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-bp-bg relative overflow-hidden">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-bp-cta z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-bp-cta/5 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            x: [20, -20, 20]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-bp-highlight/5 rounded-full blur-[180px]"
        />
      </div>

      <div className="relative z-10 pt-12 lg:pt-20 pb-32">
        {/* Editorial Hero */}
        <section className="px-6 max-w-4xl mx-auto w-full text-center mb-16 lg:mb-24">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-bp-cta">{article.category}</span>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <span className="text-xs text-bp-support flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-bp-white mb-8 tracking-tight"
            >
              {article.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-bp-support mb-10 max-w-2xl leading-relaxed italic opacity-80"
            >
              {article.subheadline}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-bp-white/40">BluePeak Demand Intelligence</span>
              <span className="text-[10px] text-bp-support/40 uppercase tracking-[0.2em]">Strategic insight for storm-damage roofing companies</span>
            </motion.div>
          </div>
        </section>

        {/* Featured Visual / Intelligence Panel */}
        <section className="px-6 max-w-5xl mx-auto w-full mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card p-1 lg:p-1.5 border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-bp-cta/5 group-hover:bg-bp-cta/10 transition-colors duration-700"></div>
            <div className="relative bg-bp-bg/40 rounded-[20px] overflow-hidden aspect-[21/9] flex items-center justify-center border border-white/5">
              {/* Abstract System Visual based on type */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              {article.featuredVisualType === 'intelligence' && (
                <div className="relative flex items-center justify-center w-full h-full">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[400px] h-[400px] border border-bp-cta/20 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[300px] h-[300px] border border-bp-cta/10 rounded-full border-dashed"
                  />
                  <Activity className="w-16 h-16 text-bp-cta shadow-[0_0_30px_rgba(30,167,255,0.5)]" />
                </div>
              )}

              {article.featuredVisualType === 'editorial' && (
                <div className="relative flex items-center justify-center w-full h-full">
                  <div className="grid grid-cols-3 gap-8 w-full max-w-2xl px-12">
                    {[0, 1, 2].map(i => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: [40, 120, 80][i] }}
                        transition={{ duration: 1.5, delay: 0.8 + (i * 0.2) }}
                        className="bg-bp-cta/20 border border-bp-cta/40 rounded-t-lg relative"
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-bp-cta font-mono text-xs">{(i + 1) * 32}%</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {article.featuredVisualType === 'diagram' && (
                <div className="relative flex items-center justify-center w-full h-full">
                  <div className="relative w-64 h-64">
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-bp-cta/10 rounded-full blur-3xl"
                    />
                    <div className="absolute inset-0 border-2 border-bp-cta/30 rounded-full flex items-center justify-center">
                      <Target className="w-12 h-12 text-bp-cta" />
                    </div>
                    {[0, 90, 180, 270].map(deg => (
                      <div 
                        key={deg}
                        className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-bp-cta/40 origin-left"
                        style={{ transform: `rotate(${deg}deg)` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        {/* Article Content */}
        <article className="px-6 max-w-3xl mx-auto w-full">
          {/* Intro Section */}
          <div className="space-y-6 mb-12">
            {article.intro.map((p, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-lg lg:text-xl text-bp-support leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Key Takeaway Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10 border-bp-cta/20 bg-bp-cta/5 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-bp-cta"></div>
            <h3 className="text-xl font-bold text-bp-white mb-6 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-bp-cta" /> What Matters Most
            </h3>
            <ul className="space-y-4">
              {article.takeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-bp-support">
                  <CheckCircle2 className="w-5 h-5 text-bp-cta shrink-0 mt-0.5" />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Main Body Content */}
          <div className="space-y-12">
            {article.content.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {section.type === 'h2' && (
                  <h2 className="text-3xl lg:text-4xl font-bold text-bp-white mt-16 mb-8 leading-tight">
                    {section.title}
                  </h2>
                )}
                
                {section.type === 'h3' && (
                  <h3 className="text-2xl font-bold text-bp-white mt-12 mb-6">
                    {section.title}
                  </h3>
                )}

                {section.type === 'text' && (
                  <p className="text-lg text-bp-support leading-relaxed mb-6">
                    {section.content}
                  </p>
                )}

                {section.type === 'pullquote' && (
                  <div className="py-12 border-y border-white/10 my-12 relative">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-bp-cta/10" />
                    <p className="text-2xl lg:text-3xl font-bold text-bp-white italic leading-tight text-center">
                      "{section.quote}"
                    </p>
                  </div>
                )}

                {section.type === 'key-insight' && (
                  <div className="p-6 rounded-2xl bg-bp-cta/10 border border-bp-cta/20 my-8">
                    <div className="flex items-center gap-2 text-bp-cta font-bold text-[10px] uppercase tracking-widest mb-3">
                      <Zap className="w-3.5 h-3.5" /> {section.label || 'Key Insight'}
                    </div>
                    <p className="text-bp-white font-medium leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                )}

                {section.type === 'operator-takeaway' && (
                  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 my-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Activity className="w-12 h-12 text-bp-cta" />
                    </div>
                    <div className="text-bp-support font-bold text-[10px] uppercase tracking-widest mb-4 opacity-50">
                      Operator Logic
                    </div>
                    <p className="text-bp-white text-lg font-medium leading-relaxed italic">
                      {section.content}
                    </p>
                  </div>
                )}

                {section.type === 'breakdown' && (
                  <div className="glass-card p-8 border-white/10 my-12">
                    <h4 className="text-xl font-bold text-bp-white mb-8 border-b border-white/5 pb-4">{section.title}</h4>
                    <div className="space-y-6">
                      {section.items?.map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <span className="text-bp-white font-bold text-sm">{item.label}</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${
                              item.status === 'high' ? 'text-red-400' : 
                              item.status === 'medium' ? 'text-bp-cta' : 'text-emerald-400'
                            }`}>
                              {item.status === 'high' ? 'Critical' : item.status === 'medium' ? 'Moderate' : 'Optimized'}
                            </span>
                          </div>
                          <p className="text-bp-support text-xs opacity-60">{item.value}</p>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full ${
                              item.status === 'high' ? 'w-full bg-red-500/50' : 
                              item.status === 'medium' ? 'w-1/2 bg-bp-cta/50' : 'w-1/4 bg-emerald-500/50'
                            }`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.type === 'mini-cta' && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-bp-cta/5 border border-bp-cta/20 my-16">
                    <p className="text-bp-white font-bold text-lg">{section.ctaText}</p>
                    <Button to={section.ctaLink || '/free-audit'} variant="primary" size="sm" icon>
                      Get Free Audit
                    </Button>
                  </div>
                )}

                {section.type === 'comparison' && (
                  <div className="grid sm:grid-cols-2 gap-6 my-12">
                    {section.items?.map((item, idx) => (
                      <div key={idx} className={`p-6 rounded-2xl border ${idx === 0 ? 'border-red-500/20 bg-red-500/5' : 'border-emerald-500/20 bg-emerald-500/5'}`}>
                        <div className="flex items-center gap-2 mb-4">
                          {idx === 0 ? <AlertCircle className="w-4 h-4 text-red-400" /> : <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                          <span className={`text-xs font-bold uppercase tracking-widest ${idx === 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                            {item.label}
                          </span>
                        </div>
                        <p className="text-bp-white font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'mini-audit' && (
                  <div className="glass-card p-8 border-bp-cta/20 my-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <BarChart3 className="w-24 h-24 text-bp-cta" />
                    </div>
                    <h4 className="text-xl font-bold text-bp-white mb-6 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-bp-cta" /> {section.title || 'Quick Audit Teardown'}
                    </h4>
                    <div className="space-y-4">
                      {section.items?.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                          <span className="text-bp-support text-sm">{item.label}</span>
                          <span className={`text-sm font-bold ${
                            item.status === 'high' ? 'text-red-400' : 
                            item.status === 'medium' ? 'text-bp-cta' : 'text-emerald-400'
                          }`}>
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.type === 'diagram' && (
                  <div className="my-16 flex flex-col items-center gap-8">
                    <div className="relative w-full max-w-md aspect-square rounded-full border border-white/10 flex items-center justify-center p-12">
                      <div className="absolute inset-0 bg-bp-cta/5 rounded-full blur-3xl" />
                      <div className="relative z-10 text-center">
                        <TrendingUp className="w-12 h-12 text-bp-cta mx-auto mb-4" />
                        <p className="text-bp-white font-bold text-lg leading-tight">{section.title}</p>
                        <p className="text-bp-support text-sm mt-2">{section.content}</p>
                      </div>
                      {/* Decorative circles */}
                      <div className="absolute inset-4 border border-white/5 rounded-full" />
                      <div className="absolute inset-8 border border-white/5 rounded-full border-dashed" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-white/5"
          >
            <h2 className="text-2xl font-bold text-bp-white mb-6">Conclusion</h2>
            <p className="text-lg text-bp-support leading-relaxed mb-12">
              {article.conclusion}
            </p>
          </motion.div>
        </article>

        {/* Final CTA Section */}
        <section className="px-6 max-w-7xl mx-auto w-full py-24 lg:py-32">
          <div className="glass-card p-12 lg:p-20 border-bp-cta/20 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bp-cta/40 to-transparent"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-bp-cta/10 rounded-full blur-[100px]"></div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-bp-white mb-8 leading-tight">
              Want to See Where Your Profile May Be Losing Calls?
            </h2>
            <p className="text-bp-support text-xl mb-12 max-w-2xl mx-auto">
              We review roofing Google Maps profiles to identify visibility gaps, trust weaknesses, and missed demand opportunities.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="primary" 
                size="lg" 
                to={article.ctaType === 'storm' ? '/request-storm-activation' : '/free-audit'} 
                icon
              >
                {article.ctaType === 'storm' ? 'Request Storm Activation' : 'Get My Free Audit'}
              </Button>
            </div>
          </div>
        </section>

        {/* Related Insights */}
        <section className="px-6 max-w-7xl mx-auto w-full pb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-bp-white">Related Intelligence</h2>
            <Link to="/insights" className="text-bp-cta text-sm font-bold flex items-center gap-2 group">
              View All Insights <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((rel, i) => (
              <Link 
                key={rel.slug}
                to={`/insights/${rel.slug}`}
                className="glass-card p-8 flex flex-col group hover:border-bp-cta/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-bp-cta">{rel.category}</span>
                  <span className="text-[10px] text-bp-support opacity-40">{rel.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-bp-white mb-6 group-hover:text-bp-cta transition-colors line-clamp-2">
                  {rel.title}
                </h3>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center text-xs font-bold text-bp-support group-hover:text-bp-white transition-colors uppercase tracking-widest">
                  Read Insight <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Editorial Signature */}
        <section className="px-6 max-w-4xl mx-auto w-full text-center py-12 border-t border-white/5">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-bp-white/40">BluePeak Demand Intelligence</span>
            <p className="text-[10px] text-bp-support/40 uppercase tracking-[0.2em] leading-relaxed max-w-md">
              Strategic insight for storm-damage roofing companies focused on Google Maps visibility, trust, and demand capture.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
