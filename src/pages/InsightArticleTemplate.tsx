import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';
import { getPostBySlug } from '../lib/blog';
import Button from '../components/Button';

export default function InsightArticleTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = (article.relatedSlugs || [])
    .map((relatedSlug) => getPostBySlug(relatedSlug))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-bp-bg relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        <motion.div
          animate={{
            opacity: [0.05, 0.11, 0.05],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-bp-cta/5 rounded-full blur-[150px]"
        />

        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            x: [20, -20, 20],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-bp-highlight/5 rounded-full blur-[180px]"
        />

        <div className="absolute top-0 inset-x-0 h-[240px] bg-gradient-to-b from-bp-bg via-bp-bg/90 to-transparent"></div>
      </div>

      <div className="relative z-10 pt-20 lg:pt-28 pb-32">
        <section className="px-6 max-w-6xl mx-auto w-full text-center mb-14 lg:mb-20">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-4 mb-8 flex-wrap justify-center"
            >
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-bp-cta">
                {article.category}
              </span>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <span className="text-xs text-bp-support flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.02] text-bp-white mb-8 tracking-tight max-w-6xl"
            >
              {article.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-bp-support max-w-4xl leading-relaxed opacity-80"
            >
              {article.excerpt}
            </motion.p>

            <div className="mt-10 flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-bp-white/40">
                BluePeak Demand Intelligence
              </span>
              <span className="text-[10px] text-bp-support/40 uppercase tracking-[0.24em]">
                Published on {article.publishedAt}
              </span>
            </div>
          </div>
        </section>

        <section className="px-6 max-w-7xl mx-auto w-full mb-16 lg:mb-20">
          <div className="glass-card border-white/10 overflow-hidden">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-bp-cta/40 to-transparent"></div>
            <div className="px-6 md:px-10 lg:px-14 py-8 md:py-10">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-bp-support/50 mb-6">
                  <span>Strategic insight</span>
                  <span className="w-1 h-1 rounded-full bg-white/15"></span>
                  <span>Local visibility</span>
                  <span className="w-1 h-1 rounded-full bg-white/15"></span>
                  <span>Demand capture</span>
                </div>

                <p className="text-bp-support text-base md:text-lg leading-relaxed max-w-4xl">
                  This article is part of the BluePeak Demand editorial framework
                  for roofing companies focused on Google Maps visibility, trust,
                  and inspection demand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <article className="px-6 max-w-7xl mx-auto w-full">
          <div className="glass-card border-white/10 overflow-hidden">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-14">
              <div
                className="
                  prose
                  prose-invert
                  max-w-5xl
                  mx-auto
                  prose-headings:text-bp-white
                  prose-h2:text-3xl
                  prose-h2:lg:text-4xl
                  prose-h2:font-bold
                  prose-h2:tracking-tight
                  prose-h2:mt-16
                  prose-h2:mb-6
                  prose-h2:border-t
                  prose-h2:border-white/10
                  prose-h2:pt-8
                  prose-h3:text-2xl
                  prose-h3:font-bold
                  prose-h3:mt-10
                  prose-h3:mb-4
                  prose-p:text-bp-support
                  prose-p:text-lg
                  prose-p:leading-[1.9]
                  prose-p:mb-6
                  prose-strong:text-bp-white
                  prose-strong:font-semibold
                  prose-a:text-bp-cta
                  prose-a:no-underline
                  hover:prose-a:text-bp-white
                  prose-ul:my-6
                  prose-ul:pl-6
                  prose-li:text-bp-support
                  prose-li:text-lg
                  prose-li:leading-[1.8]
                  prose-li:my-2
                  prose-hr:border-white/10
                  prose-blockquote:border-l-bp-cta
                  prose-blockquote:bg-bp-cta/5
                  prose-blockquote:px-6
                  prose-blockquote:py-4
                  prose-blockquote:rounded-r-2xl
                  prose-blockquote:text-bp-white
                  prose-blockquote:not-italic
                "
              >
                <article.Content />
              </div>
            </div>
          </div>
        </article>

        <section className="px-6 max-w-7xl mx-auto w-full py-20 lg:py-24">
          <div className="glass-card p-10 md:p-12 lg:p-16 border-bp-cta/20 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bp-cta/40 to-transparent"></div>
            <div className="absolute -bottom-24 -right-16 w-64 h-64 bg-bp-cta/10 rounded-full blur-[100px]"></div>

            <h2 className="text-3xl lg:text-5xl font-bold text-bp-white mb-8 leading-tight max-w-4xl mx-auto">
              Want to See Where Your Profile May Be Losing Calls?
            </h2>

            <p className="text-bp-support text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              We review roofing Google Maps profiles to identify visibility
              gaps, trust weaknesses, and missed demand opportunities.
            </p>

            <div className="flex justify-center">
              <Button
                variant="primary"
                size="lg"
                to={
                  article.ctaType === 'storm'
                    ? '/request-storm-activation'
                    : '/free-audit'
                }
                icon
              >
                {article.ctaType === 'storm'
                  ? 'Request Storm Activation'
                  : 'Get My Free Audit'}
              </Button>
            </div>
          </div>
        </section>

        {relatedArticles.length > 0 && (
          <section className="px-6 max-w-7xl mx-auto w-full pb-24">
            <div className="flex items-center justify-between mb-10 gap-4 flex-wrap">
              <h2 className="text-2xl lg:text-3xl font-bold text-bp-white">
                Related Intelligence
              </h2>

              <Link
                to="/insights"
                className="text-bp-cta text-sm font-bold flex items-center gap-2 group"
              >
                View All Insights
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel!.slug}
                  to={`/insights/${rel!.slug}`}
                  className="glass-card p-8 flex flex-col group hover:border-bp-cta/40 hover:bg-bp-cta/[0.02] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-6 gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-bp-cta">
                      {rel!.category}
                    </span>
                    <span className="text-[10px] text-bp-support opacity-40 whitespace-nowrap">
                      {rel!.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-bp-white mb-4 group-hover:text-bp-cta transition-colors line-clamp-2">
                    {rel!.title}
                  </h3>

                  <p className="text-sm text-bp-support opacity-70 mb-6 line-clamp-3 leading-relaxed">
                    {rel!.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center text-xs font-bold text-bp-support group-hover:text-bp-white transition-colors uppercase tracking-widest">
                    Read Insight
                    <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="px-6 max-w-5xl mx-auto w-full text-center py-12 border-t border-white/5">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-bp-white/40">
              BluePeak Demand Intelligence
            </span>
            <p className="text-[10px] text-bp-support/40 uppercase tracking-[0.2em] leading-relaxed max-w-2xl">
              Strategic insight for storm-damage roofing companies focused on
              Google Maps visibility, trust, and demand capture.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}