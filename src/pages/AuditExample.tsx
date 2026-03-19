import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Search, 
  Camera, 
  Star, 
  Activity, 
  Target, 
  ShieldAlert, 
  TrendingUp, 
  MapPin, 
  Check,
  Info,
  Zap,
  Cpu,
  Eye,
  PhoneCall,
  Lock,
  Radar,
  Signal
} from 'lucide-react';
import Button from '../components/Button';

// Micro-Transitions
const GlowDrop = () => (
  <div className="h-24 flex items-center justify-center relative overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-px h-16 bg-gradient-to-b from-bp-cta/40 to-transparent relative"
    >
      <motion.div 
        animate={{ y: [0, 64], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-bp-cta blur-[2px] rounded-full"
      />
    </motion.div>
  </div>
);

const SideCue = () => (
  <div className="h-20 flex items-center justify-end px-12 relative overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3"
    >
      <div className="text-[8px] font-mono text-bp-cta/40 uppercase tracking-widest">Diagnostic Flow</div>
      <div className="w-12 h-px bg-gradient-to-r from-bp-cta/40 to-transparent"></div>
    </motion.div>
  </div>
);

const SignalTransfer = () => (
  <div className="h-24 flex items-center justify-center relative overflow-hidden">
    <div className="flex gap-12">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 10 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="w-1 h-1 rounded-full bg-bp-cta shadow-[0_0_8px_rgba(30,167,255,0.8)]"
        />
      ))}
    </div>
  </div>
);

const ExpansionTransition = () => (
  <div className="h-20 flex items-center justify-center relative overflow-hidden">
    <motion.div 
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "200px", opacity: 1 }}
      viewport={{ once: true }}
      className="h-px bg-gradient-to-r from-transparent via-bp-cta/30 to-transparent"
    />
  </div>
);

const ConvergenceTransition = () => (
  <div className="h-24 flex items-center justify-center relative overflow-hidden">
    <div className="relative w-32 h-12">
      <motion.div 
        initial={{ scaleX: 1.5, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-bp-cta/40 to-transparent"></div>
        <div className="absolute w-2 h-2 rounded-full bg-bp-cta blur-[1px]"></div>
      </motion.div>
    </div>
  </div>
);

const GlowCarryover = () => (
  <div className="h-20 flex items-center justify-center relative overflow-hidden">
    <motion.div 
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="w-48 h-24 bg-bp-cta/5 blur-[40px] rounded-full"
    />
  </div>
);

const DiagnosticSection = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative z-10 py-16 lg:py-20 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function AuditExample() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative bg-[#020408] text-bp-white overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-bp-cta/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-bp-cta/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION 1 — HERO */}
        <DiagnosticSection className="min-h-[80vh] flex flex-col justify-center text-center pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bp-cta/10 border border-bp-cta/20 text-[9px] font-mono text-bp-cta uppercase tracking-[0.2em] mb-8 mx-auto">
              <Radar className="w-3 h-3" /> Diagnostic Audit Report
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Example Roofing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bp-cta to-bp-cta/60 text-glow">Google Maps Audit</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-bp-support mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              See how hidden profile gaps reduce visibility, trust, and incoming calls from Google Maps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button to="/free-audit" variant="primary" icon>Get Free Google Maps Audit</Button>
              <Button to="/stormrank" variant="outline">See How StormRank Works</Button>
            </div>
            
            <div className="flex items-center justify-center gap-3 py-5 border-y border-white/5 max-w-lg mx-auto">
              <ShieldAlert className="w-5 h-5 text-bp-cta shrink-0" />
              <p className="text-xs text-bp-support text-left leading-relaxed">
                This is the same diagnostic process we run before starting any growth work.
              </p>
            </div>
          </motion.div>
        </DiagnosticSection>

        <GlowDrop />

        {/* SECTION 2 — COMPANY SNAPSHOT */}
        <DiagnosticSection>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-0.5 rounded-3xl border-white/5 glow-border overflow-hidden">
              <div className="bg-[#060a12]/60 backdrop-blur-md rounded-[1.4rem] p-6 lg:p-10 relative overflow-hidden">
                {/* Subtle Sweep Light */}
                <motion.div 
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12 pointer-events-none"
                />

                <div className="absolute top-6 right-8 text-[9px] font-mono text-bp-cta/30 tracking-widest">REF: AUDIT-2024-001</div>
                
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="text-[9px] font-bold tracking-[0.3em] text-bp-cta uppercase mb-3">ANALYZED PROFILE</div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-bp-white mb-6">XYZ Roofing</h2>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-0.5">
                        <p className="text-[9px] text-bp-support uppercase tracking-widest">Location</p>
                        <p className="text-base font-medium text-bp-white flex items-center gap-1.5 justify-center lg:justify-start">
                          <MapPin className="w-3.5 h-3.5 text-bp-cta" /> Dallas, TX
                        </p>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[9px] text-bp-support uppercase tracking-widest">Focus</p>
                        <p className="text-base font-medium text-bp-white flex items-center gap-1.5 justify-center lg:justify-start">
                          <Target className="w-3.5 h-3.5 text-bp-cta" /> Storm Damage
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-72 p-6 rounded-xl bg-red-500/[0.03] border border-red-500/10 relative">
                    <div className="flex items-center gap-2 text-red-400/80 mb-3">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Critical Gaps</span>
                    </div>
                    <p className="text-xs text-bp-support leading-relaxed">
                      Profile currently lacks the necessary signals to compete for high-intent storm searches in the Dallas metro area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DiagnosticSection>

        <SideCue />

        {/* SECTION 3 — VISUAL DIAGNOSTIC */}
        <DiagnosticSection>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-[10px] font-bold tracking-[0.2em] text-bp-cta uppercase mb-6">VISUAL DIAGNOSTIC</div>
              <h2 className="text-3xl lg:text-5xl font-bold text-bp-white mb-8 leading-tight">
                The Homeowner's <br />
                <span className="text-bp-cta">First Impression</span>
              </h2>
              <p className="text-lg text-bp-support mb-10 leading-relaxed font-light">
                We analyzed how your profile appears to a homeowner searching for "roof repair after storm".
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Review Gap", text: "Low volume compared to top competitors.", delay: 0 },
                  { label: "Weak Visual Trust", text: "Photos fail to prove real storm expertise.", delay: 0.1 },
                  { label: "Limited Activity", text: "No recent updates or signal momentum.", delay: 0.2 }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.01] border border-white/5"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500/5 border border-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.6)]"></div>
                    </div>
                    <div>
                      <p className="text-sm text-bp-white font-bold mb-0.5">{item.label}</p>
                      <p className="text-xs text-bp-support leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-10 left-0 right-0 flex justify-between items-end px-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-bp-cta animate-pulse"></div>
                  <span className="text-[9px] font-mono text-bp-cta uppercase tracking-widest">Analysis Active</span>
                </div>
                <div className="text-[9px] font-mono text-bp-support/60 uppercase tracking-widest">Scanning Trust Signals</div>
              </div>

              <div className="glass-card p-0 border-white/5 glow-border overflow-hidden bg-[#060a12] shadow-2xl relative">
                <div className="h-48 bg-[url('https://picsum.photos/seed/roofing-audit/1000/600')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-transparent to-black/10"></div>
                  
                  {/* Subtle Scan Line */}
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-px bg-bp-cta/20 z-30 pointer-events-none"
                  />

                  <div className="absolute bottom-5 left-6">
                    <div className="flex items-center gap-1 text-yellow-500 mb-1.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-3.5 h-3.5 fill-current ${i === 4 ? 'opacity-20' : ''}`} />)}
                      <span className="text-xs text-bp-white font-bold ml-1.5">4.9 (28 reviews)</span>
                    </div>
                    <h3 className="text-xl font-bold text-bp-white tracking-tight">XYZ Roofing</h3>
                    <p className="text-[10px] text-bp-support uppercase tracking-widest">Dallas, TX</p>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="absolute top-5 right-6 bg-red-500 text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow-lg"
                  >
                    LOW REVIEW VOLUME
                  </motion.div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-center pb-5 border-b border-white/5">
                    <div className="flex gap-4">
                      {[Activity, MapPin, Search].map((Icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-lg bg-bp-cta/5 border border-bp-cta/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-bp-cta/60" />
                        </div>
                      ))}
                    </div>
                    <div className="px-5 py-2 rounded-lg bg-bp-cta text-bp-white text-[10px] font-bold tracking-widest uppercase">CALL NOW</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Camera className="w-4 h-4 text-bp-support" />
                        <span className="text-xs text-bp-support">Photos (12)</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-red-400 text-[9px] font-bold tracking-widest">
                        <AlertTriangle className="w-3 h-3" /> WEAK VISUAL TRUST
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Activity className="w-4 h-4 text-bp-support" />
                        <span className="text-xs text-bp-support">Last Update: 4 months ago</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-red-400 text-[9px] font-bold tracking-widest">
                        <AlertTriangle className="w-3 h-3" /> LIMITED ACTIVITY
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DiagnosticSection>

        <SignalTransfer />

        {/* SECTION 4 — PROFILE SCORE */}
        <DiagnosticSection>
          <div className="text-center mb-16">
            <div className="text-[10px] font-bold tracking-[0.3em] text-bp-cta uppercase mb-4">PERFORMANCE METRICS</div>
            <h2 className="text-3xl lg:text-5xl font-bold text-bp-white">Profile Diagnostic Score</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Review Strength", score: 3, total: 10, desc: "Volume & Velocity" },
              { label: "Photo Authority", score: 2, total: 10, desc: "Trust & Proof" },
              { label: "Activity Signals", score: 1, total: 10, desc: "Signal Momentum" },
              { label: "Service Alignment", score: 4, total: 10, desc: "Intent Mapping" }
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 border-white/5 flex flex-col items-center text-center group hover:border-bp-cta/20 transition-all"
              >
                <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="42" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5" />
                    <motion.circle 
                      cx="48" cy="48" r="42" stroke="currentColor" strokeWidth="6" fill="transparent" 
                      strokeDasharray={263.8}
                      initial={{ strokeDashoffset: 263.8 }}
                      whileInView={{ strokeDashoffset: 263.8 - (263.8 * metric.score) / metric.total }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 + (i * 0.1) }}
                      className={metric.score < 4 ? 'text-red-500' : 'text-yellow-500'}
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-bold text-bp-white">{metric.score}</span>
                    <span className="text-[8px] text-bp-support uppercase tracking-widest">/ 10</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-bp-white mb-2">{metric.label}</h3>
                <p className="text-[9px] text-bp-support uppercase tracking-[0.2em]">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </DiagnosticSection>

        <ExpansionTransition />

        {/* SECTION 5 — COMPETITOR COMPARISON */}
        <DiagnosticSection>
          <div className="text-center mb-16">
            <div className="text-[10px] font-bold tracking-[0.3em] text-bp-cta uppercase mb-4">MARKET POSITIONING</div>
            <h2 className="text-3xl lg:text-5xl font-bold text-bp-white">Current Profile vs. Top Competitor</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Current Profile */}
            <div className="glass-card p-8 border-red-500/10 bg-red-500/[0.01] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-red-500/20"></div>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-xl font-bold text-bp-white mb-0.5">XYZ Roofing</h3>
                  <p className="text-[9px] text-bp-support uppercase tracking-widest">Current Status</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-red-500/5 border border-red-500/10 text-red-400 text-[9px] font-bold uppercase tracking-widest">Losing Calls</div>
              </div>
              
              <div className="space-y-8">
                {[
                  { label: "Reviews", value: "28", percent: 10, color: "bg-red-500" },
                  { label: "Activity Signals", value: "Low", percent: 15, color: "bg-red-500" },
                  { label: "Photo Authority", value: "Weak", percent: 20, color: "bg-red-500" },
                  { label: "Service Alignment", value: "Partial", percent: 40, color: "bg-yellow-500" }
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-2.5">
                      <span className="text-bp-support font-medium">{row.label}</span>
                      <span className="text-bp-white font-bold">{row.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                        className={`h-full ${row.color} opacity-80`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Top Competitor */}
            <div className="glass-card p-8 border-bp-cta/20 bg-bp-cta/[0.01] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-0.5 h-full bg-bp-cta/30"></div>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-xl font-bold text-bp-white mb-0.5">Top Competitor</h3>
                  <p className="text-[9px] text-bp-support uppercase tracking-widest">Market Leader</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-bp-cta/5 border border-bp-cta/10 text-bp-cta text-[9px] font-bold uppercase tracking-widest">Capturing Demand</div>
              </div>
              
              <div className="space-y-8">
                {[
                  { label: "Reviews", value: "420+", percent: 95, color: "bg-bp-cta" },
                  { label: "Activity Signals", value: "High", percent: 90, color: "bg-bp-cta" },
                  { label: "Photo Authority", value: "Strong", percent: 85, color: "bg-bp-cta" },
                  { label: "Service Alignment", value: "Strong", percent: 92, color: "bg-bp-cta" }
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-2.5">
                      <span className="text-bp-support font-medium">{row.label}</span>
                      <span className="text-bp-white font-bold">{row.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                        className={`h-full ${row.color} opacity-80`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DiagnosticSection>

        <ConvergenceTransition />

        {/* SECTION 6 — IMPACT */}
        <DiagnosticSection>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[10px] font-bold tracking-[0.3em] text-bp-cta uppercase mb-6">THE CONSEQUENCE</div>
            <h2 className="text-3xl lg:text-5xl font-bold text-bp-white mb-12">What This Means</h2>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Eye, title: "Reduced Visibility", text: "Google hides your profile in favor of more active competitors." },
                { icon: ShieldAlert, title: "Lower Trust", text: "Homeowners choose the competitor with more proof of work." },
                { icon: PhoneCall, title: "Fewer Calls", text: "The high-intent inspection calls go to the top 3 results." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 0 20px rgba(30,167,255,0.05)" }}
                  className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 flex flex-col items-center group transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-red-500/5 flex items-center justify-center mb-6 group-hover:bg-red-500/10 transition-colors">
                    <item.icon className="w-7 h-7 text-red-500/80" />
                  </div>
                  <h3 className="text-xl font-bold text-bp-white mb-3">{item.title}</h3>
                  <p className="text-sm text-bp-support leading-relaxed font-light">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </DiagnosticSection>

        <GlowCarryover />

        {/* SECTION 7 — OPPORTUNITY / CTA */}
        <DiagnosticSection>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-bp-cta/5 blur-[100px] rounded-full"></div>
              <div className="glass-card p-10 lg:p-14 border-bp-cta/10 relative z-10 text-center rounded-[2.5rem]">
                <div className="text-[9px] font-bold tracking-[0.3em] text-bp-cta uppercase mb-8">REVENUE POTENTIAL</div>
                <h3 className="text-2xl font-bold text-bp-white mb-10">Estimated Opportunity</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 rounded-2xl bg-bp-cta/[0.03] border border-bp-cta/10">
                    <div className="text-left">
                      <p className="text-[9px] text-bp-support uppercase tracking-widest mb-1.5">Additional Calls</p>
                      <p className="text-3xl font-bold text-bp-white tracking-tight">+5–10 <span className="text-base font-normal text-bp-support">/mo</span></p>
                    </div>
                    <TrendingUp className="w-10 h-10 text-bp-cta opacity-30" />
                  </div>
                  
                  <div className="flex items-center justify-between p-6 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/10">
                    <div className="text-left">
                      <p className="text-[9px] text-bp-support uppercase tracking-widest mb-1.5">Additional Jobs</p>
                      <p className="text-3xl font-bold text-emerald-400 tracking-tight">+1–2 <span className="text-base font-normal text-bp-support">/mo</span></p>
                    </div>
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 opacity-30" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl font-bold text-bp-white mb-8 leading-tight">
                Small Visibility Gains <br />
                <span className="text-bp-cta">Real Revenue Impact</span>
              </h2>
              <p className="text-lg text-bp-support mb-10 leading-relaxed font-light">
                In a competitive market like Dallas, moving from #7 to #3 can be the difference between a slow month and a fully booked schedule.
              </p>
              
              <div className="flex flex-col items-start gap-8">
                <Button to="/free-audit" variant="primary" icon>Get Free Google Maps Audit</Button>
                
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-bp-cta/5 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-6 h-6 text-bp-cta/60" />
                  </div>
                  <p className="text-xs text-bp-support leading-relaxed">Our goal is to identify the quickest path to capturing this missed demand.</p>
                </div>
              </div>
            </div>
          </div>
        </DiagnosticSection>

        {/* FINAL CTA BLOCK */}
        <DiagnosticSection className="text-center pt-20 pb-32">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-bp-white mb-8 leading-tight tracking-tight">
              Ready to fix your <br />
              <span className="text-bp-cta text-glow">Google Maps profile?</span>
            </h2>
            <p className="text-lg text-bp-support mb-12 font-light">
              Get a clear breakdown of your biggest opportunities and a step-by-step plan to fix the gaps.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <Button to="/free-audit" variant="primary" className="h-14 px-10" icon>Get Free Google Maps Audit</Button>
              <div className="flex items-center gap-2 text-bp-support">
                <Info className="w-4 h-4 text-bp-cta/60" />
                <p className="text-xs font-light tracking-wide">No pressure. Just a clear breakdown of your biggest opportunities.</p>
              </div>
            </div>
          </div>
          
          {/* Footer Spacing */}
          <div className="mt-20"></div>
        </DiagnosticSection>
      </div>
    </div>
  );
}
