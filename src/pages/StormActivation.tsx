import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CloudLightning, 
  Clock, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Search, 
  AlertCircle, 
  ShieldAlert, 
  BarChart3, 
  Target, 
  Activity,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Radar
} from 'lucide-react';
import Button from '../components/Button';

export default function StormActivation() {
  return (
    <div className="flex flex-col pb-16 overflow-hidden">
      {/* SECTION 1 — HERO (PREMIUM & TACTICAL) */}
      <section className="relative pt-12 lg:pt-20 pb-12 lg:pb-16 px-6 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center gap-10 min-h-[calc(100vh-80px)]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 max-w-5xl"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <CloudLightning className="w-3.5 h-3.5" /> Storm Demand Window Active
            </span>
            <span className="px-3 py-1 rounded-full bg-bp-highlight/20 border border-bp-highlight/30 text-bp-light text-xs font-medium uppercase tracking-wider">
              Tactical Activation System
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-bp-white max-w-5xl tracking-tight">
            Capture Storm-Related Calls Before the <span className="text-bp-cta text-glow">Demand Window</span> Closes
          </h1>
          
          <p className="text-lg lg:text-xl text-bp-support max-w-3xl leading-relaxed">
            After major storms, search demand for roof inspections spikes fast. We activate your Google Maps profile to help capture that demand while it is still peaking.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/request-storm-activation" variant="primary" icon>Request Storm Activation</Button>
            <Button to="/stormrank" variant="outline">See The System</Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-white/10 w-full max-w-2xl">
            {[
              { icon: ShieldCheck, text: "Rapid 10-Day Activation", color: "text-emerald-400" },
              { icon: Target, text: "High-Intent Search Capture", color: "text-bp-cta" },
              { icon: Activity, text: "Real-Time Monitoring", color: "text-bp-cta" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-xs text-bp-support font-medium tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TACTICAL SUPPORT STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl relative mt-4"
        >
          <div className="absolute inset-0 bg-bp-cta/5 blur-[100px] rounded-full"></div>
          <div className="glass-card p-6 lg:p-8 relative z-10 border-white/10 glow-border flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-2">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-bp-support font-mono tracking-[0.2em] uppercase">Tactical Monitor</span>
                  <span className="text-sm font-bold text-bp-white">Search Volume Spike Detected</span>
                </div>
              </div>
              
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[10px] text-bp-support uppercase tracking-wider font-medium">Active Window</span>
                  <span className="text-xs font-bold text-emerald-400">DAY 3 — PEAK</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[10px] text-bp-support uppercase tracking-wider font-medium">Missed Calls Risk</span>
                  <span className="text-xs font-bold text-red-400">62% RISK LEVEL</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[10px] text-bp-support uppercase tracking-wider font-medium">Activation Status</span>
                  <span className="text-xs font-bold text-bp-cta uppercase tracking-widest">Ready</span>
                </div>
              </div>
            </div>

            <div className="h-24 w-full relative bg-[#060a12] rounded-xl border border-white/5 px-2 overflow-hidden shadow-inner">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
              
              <svg className="w-full h-full relative z-10" viewBox="0 0 800 96" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="spikeGradientHeroTactical" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1ea7ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1ea7ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  d="M 0 80 L 150 77 L 300 73 L 350 20 L 400 15 L 450 28 L 550 60 L 700 73 L 800 77" 
                  fill="none" 
                  stroke="#1ea7ff" 
                  strokeWidth="2.5"
                  className="drop-shadow-[0_0_10px_rgba(30,167,255,0.6)]"
                />
                <motion.path 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  d="M 0 80 L 150 77 L 300 73 L 350 20 L 400 15 L 450 28 L 550 60 L 700 73 L 800 77 L 800 96 L 0 96 Z" 
                  fill="url(#spikeGradientHeroTactical)"
                />
                
                {/* Scanning Line */}
                <motion.line 
                  animate={{ x: [350, 450, 350] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  x1="0" y1="0" x2="0" y2="96" 
                  stroke="rgba(30,167,255,0.3)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                />
              </svg>
              
              {/* Floating Label */}
              <div className="absolute top-3 left-[365px] z-20">
                <div className="bg-bp-cta/20 border border-bp-cta/40 px-3 py-1.5 rounded text-xs font-bold text-bp-white whitespace-nowrap backdrop-blur-md shadow-[0_0_20px_rgba(30,167,255,0.4)]">
                  DEMAND PEAK
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 — WINDOW OF DEMAND (PREMIUM SPACING) */}
      <section className="py-20 lg:py-24 px-6 relative">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-12">
          <div className="flex flex-col items-center gap-4 max-w-3xl">
            <span className="text-bp-cta font-mono text-sm tracking-[0.3em] uppercase">The Opportunity</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-bp-white">Storm events create short windows of high-intent demand.</h2>
            <p className="text-lg text-bp-support">
              After a major storm, homeowners search for immediate solutions. If you aren't visible on Google Maps in the first 72 hours, you've already lost the lead to a faster competitor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 w-full">
            <div className="glass-card p-8 border-white/5 flex flex-col gap-6 items-start text-left group hover:border-bp-cta/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-bp-cta/10 flex items-center justify-center group-hover:bg-bp-cta/20 transition-colors">
                <Search className="w-6 h-6 text-bp-cta" />
              </div>
              <h3 className="text-xl font-bold text-bp-white">Search Spike Alignment</h3>
              <div className="flex flex-wrap gap-2">
                {['hail damage repair', 'roof inspection', 'storm roofing'].map((term) => (
                  <span key={term} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-bp-support text-[10px] font-mono">
                    {term}
                  </span>
                ))}
              </div>
              <p className="text-sm text-bp-support leading-relaxed">
                We align your profile with specific high-intent terms that spike 500%+ immediately after a storm.
              </p>
            </div>

            <div className="glass-card p-8 border-white/5 flex flex-col gap-6 items-start text-left group hover:border-bp-cta/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-bp-cta/10 flex items-center justify-center group-hover:bg-bp-cta/20 transition-colors">
                <Clock className="w-6 h-6 text-bp-cta" />
              </div>
              <h3 className="text-xl font-bold text-bp-white">The 10-Day Peak</h3>
              <p className="text-sm text-bp-support leading-relaxed">
                The majority of inspection calls are booked within the first 10 days. Speed to visibility is the single biggest factor in capturing this revenue.
              </p>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mt-auto">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-bp-cta shadow-[0_0_10px_#1ea7ff]"
                />
              </div>
            </div>

            <div className="glass-card p-8 border-white/5 flex flex-col gap-6 items-start text-left group hover:border-bp-cta/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-bp-cta/10 flex items-center justify-center group-hover:bg-bp-cta/20 transition-colors">
                <PhoneCall className="w-6 h-6 text-bp-cta" />
              </div>
              <h3 className="text-xl font-bold text-bp-white">Immediate Revenue</h3>
              <p className="text-sm text-bp-support leading-relaxed">
                These aren't just leads; they are insurance-backed projects ready to be signed. Our activation ensures you are the first call they make.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mt-auto">
                <TrendingUp className="w-4 h-4" />
                <span>HIGH CONVERSION POTENTIAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY ROOFERS MISS CALLS (TIGHTER SPACING) */}
      <section className="py-16 lg:py-20 px-6 bg-bp-bg/30 relative">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-red-400 font-mono text-sm tracking-[0.3em] uppercase">The Failure Point</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-bp-white leading-tight">Most roofing companies are not ready when storm demand hits.</h2>
            <p className="text-lg text-bp-support">
              Even with a great reputation, a static Google Maps profile is invisible to the specific, urgent search behavior that follows a storm event.
            </p>
            
            <div className="flex flex-col gap-4 pt-4">
              {[
                { title: "Static Messaging", desc: "Your profile looks the same during a storm as it does on a sunny day. No urgency, no storm-specific trust." },
                { title: "Keyword Misalignment", desc: "You rank for 'roofing contractor' but are invisible for 'hail damage inspection'—the term that matters now." },
                { title: "Weak Trust Signals", desc: "Homeowners are stressed. If your profile doesn't scream 'Storm Specialist,' they click the next listing." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="text-bp-white font-bold">{item.title}</p>
                    <p className="text-sm text-bp-support">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full"></div>
            <div className="glass-card p-8 relative z-10 border-red-500/20 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-red-400">
                <ShieldAlert className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Diagnostic: Revenue Leakage</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs text-bp-support uppercase font-bold">
                    <span>Profile Relevance</span>
                    <span className="text-red-400">Low</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-red-500/50"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs text-bp-support uppercase font-bold">
                    <span>Storm Keyword Authority</span>
                    <span className="text-red-400">12%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[12%] bg-red-500/50"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-red-500/5 border border-red-500/10 rounded-lg">
                <p className="text-xs text-bp-support leading-relaxed italic">
                  "Static profiles are invisible during the most profitable 10 days of the year."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — STORM ACTIVATION SYSTEM (TIGHTER SPACING) */}
      <section className="py-16 lg:py-20 px-6 relative">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-12">
          <div className="text-center flex flex-col items-center gap-4 max-w-3xl">
            <span className="text-bp-cta font-mono text-sm tracking-[0.3em] uppercase">The Solution</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-bp-white">What We Activate in the First 10–14 Days</h2>
            <p className="text-lg text-bp-support">
              A tactical, rapid-response deployment to prepare and activate your Google Maps profile for maximum storm demand capture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { title: "Rapid Profile Fix", desc: "Immediate restructuring to align with urgent storm search behavior and intent.", icon: Zap },
              { title: "Storm Search Alignment", desc: "Injecting authority to rank for hail and storm damage terms in real-time.", icon: Target },
              { title: "Trust Layer Boost", desc: "Updating visuals to position you as the go-to storm specialist in your area.", icon: ShieldCheck },
              { title: "Demand Monitoring", desc: "Real-time tracking of search volume shifts to adjust profile tactics dynamically.", icon: Activity }
            ].map((module, i) => (
              <div key={i} className="glass-card p-8 border-white/5 flex flex-col gap-6 group hover:border-bp-cta/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-bp-cta/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <module.icon className="w-6 h-6 text-bp-cta" />
                </div>
                <h3 className="text-xl font-bold text-bp-white">{module.title}</h3>
                <p className="text-sm text-bp-support leading-relaxed">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — OFFER + PRICE + ROI (TIGHTER SPACING) */}
      <section className="py-16 lg:py-20 px-6 bg-bp-bg/30 relative">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-bp-cta font-mono text-sm tracking-[0.3em] uppercase">The Investment</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-bp-white">Storm Activation Setup</h2>
              <p className="text-lg text-bp-support">
                We don't just "manage" your profile—we activate it for a specific revenue event. The cost is often covered by a single inspection that turns into a job.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "One additional roof replacement job easily covers the cost.",
                "4x - 10x ROI potential within the first 30 days.",
                "No long-term contracts required for activation."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-400/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-bp-white font-medium text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-bp-cta/20 blur-[100px] rounded-full"></div>
            <div className="glass-card p-10 relative z-10 border-bp-cta/40 bg-bp-cta/5 shadow-[0_0_40px_rgba(30,167,255,0.1)] flex flex-col items-center text-center gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-bp-white">Tactical Activation</h3>
                <p className="text-sm text-bp-support">Complete 14-Day Deployment</p>
              </div>
              
              <div className="flex flex-col items-center">
                <p className="text-6xl font-bold text-bp-white tracking-tight">$2,200</p>
                <p className="text-bp-cta font-mono text-[10px] tracking-[0.2em] mt-2 uppercase">One-Time Activation Fee</p>
              </div>

              <div className="w-full h-[1px] bg-white/10"></div>

              <div className="flex flex-col gap-4 w-full">
                <Button to="/request-storm-activation" variant="primary" className="w-full py-4" icon>Request Activation</Button>
                <p className="text-[10px] text-bp-support uppercase tracking-widest">Limited availability per market territory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — LIMITED AVAILABILITY (TIGHTER SPACING) */}
      <section className="py-16 lg:py-20 px-6 relative">
        <div className="max-w-4xl mx-auto w-full">
          <div className="glass-card p-10 border-red-500/30 bg-red-500/5 relative overflow-hidden flex flex-col items-center text-center gap-6">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-red-400" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-bp-white">Storm Demand Windows Are Short</h2>
              <p className="text-lg text-bp-support max-w-2xl">
                Because storm windows require intense, manual optimization, we only accept a maximum of <span className="text-bp-white font-bold">3 roofing companies per market territory</span>.
              </p>
            </div>
            <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-widest">
              <AlertCircle className="w-3 h-3" /> Current Status: Limited Slots Remaining
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHAT HAPPENS AFTER (TIGHTER SPACING) */}
      <section className="py-16 lg:py-20 px-6 bg-bp-bg/30 relative">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-bp-cta/10 blur-[80px] rounded-full"></div>
            <div className="glass-card p-8 relative z-10 border-white/5 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-bp-cta">
                <BarChart3 className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Long-Term Growth Path</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Phase 1: Activation", status: "COMPLETE", color: "text-emerald-400" },
                  { label: "Phase 2: Market Dominance", status: "RECOMMENDED", color: "text-bp-cta" },
                  { label: "Phase 3: Automated Demand", status: "PENDING", color: "text-bp-support" }
                ].map((phase, i) => (
                  <div key={i} className={`flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 ${i === 2 ? 'opacity-50' : ''}`}>
                    <span className="text-sm text-bp-white font-medium">{phase.label}</span>
                    <span className={`text-[10px] ${phase.color} font-bold`}>{phase.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <span className="text-bp-cta font-mono text-sm tracking-[0.3em] uppercase">The Future</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-bp-white leading-tight">What Happens After the Activation Window</h2>
            <p className="text-lg text-bp-support">
              Storm activation is a high-intensity sprint. After the initial window, many roofing companies choose to transition into our ongoing growth management to maintain their position year-round.
            </p>
            <div className="flex items-center gap-2 text-bp-cta font-bold group cursor-pointer">
              <Link to="/stormrank" className="flex items-center gap-2">
                <span className="text-sm">Explore the StormRank System</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA (TIGHTER SPACING) */}
      <section className="py-24 lg:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-bp-cta/5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-10 relative z-10">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-bp-cta/10 flex items-center justify-center shadow-[0_0_30px_rgba(30,167,255,0.2)]">
              <Zap className="w-8 h-8 text-bp-cta" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-bp-white leading-tight">Want to Capture Storm-Related Calls Before the Window Slows Down?</h2>
            <p className="text-xl text-bp-support max-w-2xl">
              Don't let the storm window close without your profile being fully activated. Secure your market territory today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/request-storm-activation" variant="primary" className="text-lg px-10 py-4" icon>Request Storm Activation</Button>
          </div>
          
          <div className="flex items-center gap-2 text-bp-support text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>No long-term commitment required for activation.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
