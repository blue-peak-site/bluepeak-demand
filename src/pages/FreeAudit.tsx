import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  CloudLightning,
  ShieldCheck,
  Target,
  Activity,
  Search,
  BarChart3,
  MessageSquare,
  Globe
} from 'lucide-react';
import Button from '../components/Button';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwWPmrgBtHCDmyRmMxvo5xq5SXvYjTublc_fNQT9yFCLCHhcDb4m4ymt_t4nKMn0JMMBw/exec';

export default function FreeAudit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    city: '',
    website: '',
    gbp: '',
    specifics: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      const body = new URLSearchParams({
        formType: 'Free Audit',
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: '',
        city: formData.city,
        market: '',
        website: formData.website,
        gbp: formData.gbp,
        specifics: formData.specifics,
        storm: '',
      });

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: body.toString(),
      });

      const text = await response.text();
      console.log('Resposta do Apps Script:', text);

      if (!response.ok || text.trim().toLowerCase() !== 'ok') {
        throw new Error(`Falha no envio: ${text}`);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Verifica o console e tenta de novo.');
    } finally {
      setIsLoading(false);
    }
  };

  const auditItems = [
    {
      title: 'Visibility Gaps',
      description: 'Where your profile is hidden in local searches.',
      icon: Search,
    },
    {
      title: 'Review Gap',
      description: 'How many reviews you need to beat local leaders.',
      icon: MessageSquare,
    },
    {
      title: 'Trust Signals',
      description: 'Critical missing elements that cost you conversions.',
      icon: ShieldCheck,
    },
    {
      title: 'Competitor Advantage',
      description: 'What your top 3 competitors are doing better.',
      icon: Target,
    },
  ];

  const nextSteps = [
    {
      title: 'Analysis (24-48h)',
      description:
        'Our team manually reviews your profile and local market data.',
      icon: Activity,
    },
    {
      title: 'Practical Review',
      description:
        "You'll receive a clear report with prioritized improvements.",
      icon: BarChart3,
    },
    {
      title: 'No Obligation',
      description:
        'The audit is yours to keep, with no pressure to move forward.',
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-bp-bg relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-bp-cta/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            x: [-20, 20, -20],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-bp-highlight/5 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-16 lg:gap-24 pb-32 pt-12 lg:pt-20">
        <section className="px-6 max-w-5xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bp-cta/10 border border-bp-cta/20 text-bp-cta text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <CloudLightning className="w-3 h-3" />
              <span>Conversion Focused</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] text-bp-white mb-8 tracking-tight">
              See Where Your{' '}
              <span className="text-bp-cta text-glow">Google Maps Profile</span>{' '}
              May Be Losing Calls
            </h1>

            <p className="text-lg md:text-xl text-bp-support mb-8 max-w-3xl mx-auto leading-relaxed">
              Get a manual, expert review of your local visibility. We identify
              the exact gaps preventing roofing companies from dominating their
              service areas.
            </p>

            <div className="flex items-center justify-center gap-6 text-xs font-mono text-bp-support/40 uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-bp-cta shadow-[0_0_5px_rgba(30,167,255,1)]"></div>
                Free Manual Audit
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-bp-cta shadow-[0_0_5px_rgba(30,167,255,1)]"></div>
                Roofing Specialist Review
              </span>
            </div>
          </motion.div>
        </section>

        <section className="px-6 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="glass-card p-8 lg:p-10 border-white/10 relative overflow-hidden group">
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none"
              />

              <h2 className="text-2xl lg:text-3xl font-bold text-bp-white mb-8">
                What Your Audit Covers
              </h2>

              <div className="space-y-8">
                {auditItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-5 group/item"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-bp-bg border border-white/10 flex items-center justify-center shadow-lg group-hover/item:border-bp-cta/50 transition-colors">
                        <item.icon className="w-6 h-6 text-bp-cta" />
                      </div>
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        className="absolute -inset-1 bg-bp-cta/20 blur-md rounded-full -z-10"
                      />
                    </div>
                    <div>
                      <h3 className="text-bp-white font-bold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-bp-support text-sm leading-relaxed opacity-70">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-bp-support text-sm leading-relaxed italic opacity-60">
                  "You'll receive a practical review of where your profile may
                  be underperforming and what to improve first."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-4 bg-bp-cta/10 blur-[60px] rounded-[40px] -z-10"
            />

            <div className="glass-card p-8 lg:p-12 border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-bp-cta/50 to-transparent"></div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 relative z-10"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-bp-white mb-4">
                    Audit Requested
                  </h3>
                  <p className="text-bp-support text-lg max-w-md mx-auto">
                    Thank you. Our specialists are now reviewing your profile.
                    You'll receive your manual audit via email within 24-48
                    hours.
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-10"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        city: '',
                        website: '',
                        gbp: '',
                        specifics: '',
                      });
                    }}
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <div className="relative z-10">
                  <div className="mb-10">
                    <p className="text-bp-cta font-bold text-sm mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      Free Professional Review
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-bp-white mb-4">
                      Get Your Free Audit
                    </h3>
                    <p className="text-bp-support text-sm leading-relaxed opacity-70">
                      A weak Google profile can quietly cost roofing companies
                      calls. Fill out the details below to see exactly where you
                      stand.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/60 ml-1">
                          Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-white/5 border ${
                            focusedField === 'name'
                              ? 'border-bp-cta/50 bg-white/10'
                              : 'border-white/10'
                          } rounded-xl px-5 py-4 text-bp-white placeholder:text-bp-support/30 focus:outline-none transition-all duration-300`}
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/60 ml-1">
                          Company
                        </label>
                        <input
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-white/5 border ${
                            focusedField === 'company'
                              ? 'border-bp-cta/50 bg-white/10'
                              : 'border-white/10'
                          } rounded-xl px-5 py-4 text-bp-white placeholder:text-bp-support/30 focus:outline-none transition-all duration-300`}
                          placeholder="Roofing Company Name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/60 ml-1">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-white/5 border ${
                          focusedField === 'email'
                            ? 'border-bp-cta/50 bg-white/10'
                            : 'border-white/10'
                        } rounded-xl px-5 py-4 text-bp-white placeholder:text-bp-support/30 focus:outline-none transition-all duration-300`}
                        placeholder="email@company.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/60 ml-1">
                          City / Service Area
                        </label>
                        <input
                          name="city"
                          type="text"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('city')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-white/5 border ${
                            focusedField === 'city'
                              ? 'border-bp-cta/50 bg-white/10'
                              : 'border-white/10'
                          } rounded-xl px-5 py-4 text-bp-white placeholder:text-bp-support/30 focus:outline-none transition-all duration-300`}
                          placeholder="e.g. Dallas, TX"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/60 ml-1">
                          Website
                        </label>
                        <input
                          name="website"
                          type="url"
                          value={formData.website}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('website')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-white/5 border ${
                            focusedField === 'website'
                              ? 'border-bp-cta/50 bg-white/10'
                              : 'border-white/10'
                          } rounded-xl px-5 py-4 text-bp-white placeholder:text-bp-support/30 focus:outline-none transition-all duration-300`}
                          placeholder="https://yourroofing.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/60 ml-1">
                        Google Business Profile Link (Optional)
                      </label>
                      <input
                        name="gbp"
                        type="url"
                        value={formData.gbp}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('gbp')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-white/5 border ${
                          focusedField === 'gbp'
                            ? 'border-bp-cta/50 bg-white/10'
                            : 'border-white/10'
                        } rounded-xl px-5 py-4 text-bp-white placeholder:text-bp-support/30 focus:outline-none transition-all duration-300`}
                        placeholder="Link to your Google Maps listing"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/60 ml-1">
                        Anything specific we should look at? (Optional)
                      </label>
                      <textarea
                        name="specifics"
                        rows={3}
                        value={formData.specifics}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('specifics')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-white/5 border ${
                          focusedField === 'specifics'
                            ? 'border-bp-cta/50 bg-white/10'
                            : 'border-white/10'
                        } rounded-xl px-5 py-4 text-bp-white placeholder:text-bp-support/30 focus:outline-none transition-all duration-300 resize-none`}
                        placeholder="e.g. 'We recently lost our #1 spot' or 'Our reviews aren't showing up'"
                      />
                    </div>

                    <div className="mt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full py-5 text-xl font-bold shadow-[0_0_30px_rgba(30,167,255,0.3)] hover:shadow-[0_0_40px_rgba(30,167,255,0.5)] transition-all group"
                        icon
                        disabled={isLoading}
                      >
                        {isLoading ? 'Sending...' : 'Get My Free Audit'}
                      </Button>

                      <p className="text-center text-[10px] text-bp-support/40 mt-4 uppercase tracking-[0.2em]">
                        No spam. No obligation. Just a practical review of your
                        profile.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </section>
      
        <section className="px-6 max-w-7xl mx-auto w-full pt-12 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-bp-white mb-4">
              What Happens Next
            </h2>
            <p className="text-bp-support opacity-60">
              Our process is straightforward and focused on your results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 border-white/5 hover:border-bp-cta/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-bp-cta/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-bp-cta" />
                </div>
                <h3 className="text-xl font-bold text-bp-white mb-3">
                  {step.title}
                </h3>
                <p className="text-bp-support text-sm leading-relaxed opacity-60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}