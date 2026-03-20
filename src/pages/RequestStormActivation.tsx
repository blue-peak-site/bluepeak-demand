import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  CloudLightning,
  ShieldCheck,
  Target,
  Activity,
  Globe,
  Zap,
  MapPin,
  Building2,
  Phone,
  Mail,
  User,
  Layout,
  MousePointer2
} from 'lucide-react';
import Button from '../components/Button';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwWPmrgBtHCDmyRmMxvo5xq5SXvYjTublc_fNQT9yFCLCHhcDb4m4ymt_t4nKMn0JMMBw/exec';

export default function RequestStormActivation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    market: '',
    website: '',
    gbp: '',
    storm: '',
  });

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      market: '',
      website: '',
      gbp: '',
      storm: '',
    });
  };

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
        formType: 'Storm Activation',
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        city: '',
        market: formData.market,
        website: formData.website,
        gbp: formData.gbp,
        specifics: '',
        storm: formData.storm,
      });

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: body.toString(),
      });

      const text = await response.text();
      console.log('Status HTTP:', response.status);
      console.log('Resposta do Apps Script:', text);

      let result: { ok?: boolean; error?: string; message?: string } = {};

      try {
        result = JSON.parse(text);
      } catch {
        throw new Error(`Resposta inválida do servidor: ${text}`);
      }

      if (result.ok === true) {
        setIsSubmitted(true);
        resetForm();
        return;
      }

      throw new Error(result.error || result.message || `Falha no envio: ${text}`);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Verifica o console e tenta de novo.');
    } finally {
      setIsLoading(false);
    }
  };

  const evaluationItems = [
    {
      title: 'Market Opportunity',
      description: 'Market and service area opportunity.',
      icon: Target,
    },
    {
      title: 'Profile Readiness',
      description: 'Google Maps profile readiness.',
      icon: ShieldCheck,
    },
    {
      title: 'Area Alignment',
      description: 'Service area alignment.',
      icon: MapPin,
    },
    {
      title: 'Contact Setup',
      description: 'Website and contact setup.',
      icon: Globe,
    },
    {
      title: 'Activation Speed',
      description: 'Speed-to-activation fit.',
      icon: Zap,
    },
    {
      title: 'Demand Capture',
      description: 'Storm demand capture potential.',
      icon: CloudLightning,
    },
  ];

  const nextSteps = [
    {
      title: 'Submit Details',
      description: 'Submit your details via the activation request form.',
      icon: MousePointer2,
    },
    {
      title: 'Expert Review',
      description:
        'We review your market, profile, and service area manually.',
      icon: Activity,
    },
    {
      title: 'Fit Determination',
      description:
        'We let you know if your company is a fit for storm activation.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-bp-bg relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-5%] right-[-5%] w-[45%] h-[45%] bg-bp-cta/5 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            x: [20, -20, 20],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[-5%] left-[-5%] w-[55%] h-[55%] bg-bp-highlight/5 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-bp-cta/5 to-transparent h-[20%] w-full pointer-events-none opacity-20"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-12 lg:gap-20 pb-32 pt-12 lg:pt-20">
        <section className="px-6 max-w-5xl mx-auto w-full text-center">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bp-cta/10 border border-bp-cta/20 text-bp-cta text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              <Zap className="w-3 h-3" />
              <span>Tactical Activation Request</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] text-bp-white mb-6 tracking-tight max-w-4xl"
            >
              Activate Your Profile Before the{' '}
              <span className="text-bp-cta text-glow">Storm Demand</span> Window
              Closes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-bp-support mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We use your details to review your market, Google Maps profile,
              and service area so we can determine whether a storm activation
              setup makes sense for your roofing company.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-mono text-bp-support/40 uppercase tracking-[0.3em]"
            >
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-bp-cta shadow-[0_0_5px_rgba(30,167,255,1)]"></div>
                Takes less than a minute
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-bp-cta shadow-[0_0_5px_rgba(30,167,255,1)]"></div>
                Built for roofing companies
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-bp-cta shadow-[0_0_5px_rgba(30,167,255,1)]"></div>
                Designed for urgent demand windows
              </span>
            </motion.div>
          </div>
        </section>

        <section className="px-6 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-8 lg:p-10 border-white/10 relative overflow-hidden group h-full">
              <h2 className="text-2xl lg:text-3xl font-bold text-bp-white mb-8">
                What We’ll Use to Evaluate Your Activation Fit
              </h2>

              <div className="space-y-6">
                {evaluationItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-bp-bg border border-white/10 flex items-center justify-center shadow-lg group-hover/item:border-bp-cta/50 transition-colors shrink-0">
                      <item.icon className="w-5 h-5 text-bp-cta" />
                    </div>
                    <div>
                      <h3 className="text-bp-white font-bold text-base mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-bp-support text-sm opacity-60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-bp-support text-sm leading-relaxed italic opacity-60">
                  This helps us determine whether your company is a strong fit
                  for a fast storm activation setup.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 relative"
          >
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.03, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-4 bg-bp-cta/10 blur-[50px] rounded-[40px] -z-10"
            />

            <div className="glass-card p-8 lg:p-12 border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bp-cta/40 to-transparent"></div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 relative z-10"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-bp-cta/10 border border-bp-cta/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(30,167,255,0.2)]">
                    <CheckCircle2 className="w-10 h-10 text-bp-cta" />
                  </div>
                  <h3 className="text-3xl font-bold text-bp-white mb-4">
                    Request Received
                  </h3>
                  <p className="text-bp-support text-lg max-w-md mx-auto">
                    Our team is now reviewing your market and profile. We'll
                    contact you shortly regarding your storm activation fit.
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-10"
                    onClick={() => {
                      setIsSubmitted(false);
                      resetForm();
                    }}
                  >
                    Submit New Request
                  </Button>
                </motion.div>
              ) : (
                <div className="relative z-10">
                  <div className="mb-10">
                    <p className="text-bp-support text-sm mb-4 opacity-80">
                      Storm demand windows move fast. This request helps us
                      evaluate whether your market and profile are a strong fit
                      for activation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/50 ml-1">
                          Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bp-support/30" />
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
                            } rounded-xl pl-11 pr-5 py-3.5 text-bp-white placeholder:text-bp-support/20 focus:outline-none transition-all duration-300`}
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/50 ml-1">
                          Company
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bp-support/30" />
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
                            } rounded-xl pl-11 pr-5 py-3.5 text-bp-white placeholder:text-bp-support/20 focus:outline-none transition-all duration-300`}
                            placeholder="XYZ Roofing"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/50 ml-1">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bp-support/30" />
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
                            } rounded-xl pl-11 pr-5 py-3.5 text-bp-white placeholder:text-bp-support/20 focus:outline-none transition-all duration-300`}
                            placeholder="john@xyzroofing.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/50 ml-1">
                          Phone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bp-support/30" />
                          <input
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-white/5 border ${
                              focusedField === 'phone'
                                ? 'border-bp-cta/50 bg-white/10'
                                : 'border-white/10'
                            } rounded-xl pl-11 pr-5 py-3.5 text-bp-white placeholder:text-bp-support/20 focus:outline-none transition-all duration-300`}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/50 ml-1">
                          Primary Market / City
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bp-support/30" />
                          <input
                            name="market"
                            type="text"
                            required
                            value={formData.market}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('market')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-white/5 border ${
                              focusedField === 'market'
                                ? 'border-bp-cta/50 bg-white/10'
                                : 'border-white/10'
                            } rounded-xl pl-11 pr-5 py-3.5 text-bp-white placeholder:text-bp-support/20 focus:outline-none transition-all duration-300`}
                            placeholder="Dallas, TX"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/50 ml-1">
                          Website
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bp-support/30" />
                          <input
                            name="website"
                            type="url"
                            required
                            value={formData.website}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('website')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-white/5 border ${
                              focusedField === 'website'
                                ? 'border-bp-cta/50 bg-white/10'
                                : 'border-white/10'
                            } rounded-xl pl-11 pr-5 py-3.5 text-bp-white placeholder:text-bp-support/20 focus:outline-none transition-all duration-300`}
                            placeholder="https://xyzroofing.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/50 ml-1">
                        Google Business Profile Link
                      </label>
                      <div className="relative">
                        <Layout className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bp-support/30" />
                        <input
                          name="gbp"
                          type="url"
                          required
                          value={formData.gbp}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('gbp')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-white/5 border ${
                            focusedField === 'gbp'
                              ? 'border-bp-cta/50 bg-white/10'
                              : 'border-white/10'
                          } rounded-xl pl-11 pr-5 py-3.5 text-bp-white placeholder:text-bp-support/20 focus:outline-none transition-all duration-300`}
                          placeholder="https://g.page/..."
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-bp-support/50 ml-1">
                        Affected Area or Storm Market (optional)
                      </label>
                      <textarea
                        name="storm"
                        rows={2}
                        value={formData.storm}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('storm')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-white/5 border ${
                          focusedField === 'storm'
                            ? 'border-bp-cta/50 bg-white/10'
                            : 'border-white/10'
                        } rounded-xl px-5 py-3 text-bp-white placeholder:text-bp-support/20 focus:outline-none transition-all duration-300 resize-none`}
                        placeholder="Plano, TX / Frisco / North Dallas / hail zone near McKinney"
                      />
                    </div>

                    <div className="mt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full py-4.5 text-lg font-bold shadow-[0_0_25px_rgba(30,167,255,0.25)] hover:shadow-[0_0_35px_rgba(30,167,255,0.45)] transition-all group"
                        icon
                        disabled={isLoading}
                      >
                        {isLoading ? 'Sending...' : 'Request Storm Activation'}
                      </Button>
                      <p className="text-center text-[10px] text-bp-support/40 mt-4 uppercase tracking-[0.2em] leading-relaxed max-w-sm mx-auto">
                        No spam. No obligation. We’ll use your information only
                        to review your fit for storm activation and contact you
                        about the next step.
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-bp-white mb-4">
              What Happens Next
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {nextSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 border-white/5 hover:border-bp-cta/20 transition-all group"
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