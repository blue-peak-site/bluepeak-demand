import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Star, 
  Search, 
  Camera, 
  Activity, 
  MousePointerClick, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  Radar, 
  Layers,
  Zap,
  BarChart3,
  MapPin,
  ChevronRight,
  Quote,
  MousePointer2,
  Phone,
  ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '../components/Button';

const CornerMarkers = () => (
  <>
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20"></div>
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20"></div>
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20"></div>
  </>
);

export default function StormRank() {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const pillars = [
    {
      id: '01',
      name: "Profile Foundation",
      impact: "A weaker structure limits how well your profile matches local search intent.",
      explanation: "We strengthen the profile foundation so Google can better understand what you do, where you operate, and why the profile is relevant for high-intent local roofing searches.",
      includes: "Categories, services, service areas, description, Q&A, structural alignment.",
      outcome: "Better relevance, stronger local match, cleaner foundation for growth.",
      icon: Layers
    },
    {
      id: '02',
      name: "Review Momentum",
      impact: "Recent reviews don't just improve trust. They reinforce local demand signals.",
      explanation: "We help install a repeatable review momentum layer so the profile keeps building social proof instead of staying static.",
      includes: "Review request system, response cadence, momentum support, social proof reinforcement.",
      outcome: "Stronger trust, better proof, healthier review velocity.",
      icon: Star
    },
    {
      id: '03',
      name: "Storm Search Positioning",
      impact: "Your profile needs to align with the searches that actually drive inspection demand.",
      explanation: "We strengthen alignment with high-intent local terms like storm damage roofing, hail damage roof repair, roof inspection, and related service intent.",
      includes: "Service alignment, local search intent matching, keyword positioning, Q&A reinforcement.",
      outcome: "Stronger visibility for relevant roofing searches.",
      icon: Search
    },
    {
      id: '04',
      name: "Visual Authority",
      impact: "Homeowners trust what looks real, active, and proven.",
      explanation: "We improve the visual trust layer of the profile with stronger photos, better proof of work, and a more credible first impression.",
      includes: "Photo quality, proof-of-work framing, trust visuals, active profile credibility.",
      outcome: "Stronger first impression and better conversion confidence.",
      icon: Camera
    },
    {
      id: '05',
      name: "Activity Signals",
      impact: "An inactive profile looks weaker to both Google and the customer.",
      explanation: "We keep the profile active through updates, posts, fresh photos, and ongoing signal reinforcement.",
      includes: "Posts, updates, photo refreshes, activity cadence, ongoing profile movement.",
      outcome: "Stronger freshness, stronger signal consistency, stronger profile presence.",
      icon: Activity
    },
    {
      id: '06',
      name: "Conversion Layer",
      impact: "More visibility only matters if it turns into calls.",
      explanation: "We strengthen the conversion layer through clearer CTA paths, stronger service clarity, better trust framing, and cleaner intent alignment.",
      includes: "CTA clarity, service clarity, trust framing, click-to-call alignment, conversion path refinement.",
      outcome: "Better call intent, stronger lead flow, stronger conversion efficiency.",
      icon: MousePointerClick
    }
  ];

  const architectureModules = [
    { name: "Profile Foundation", label: "Structure and local relevance", message: "Supports local relevance" },
    { name: "Review Momentum", label: "Trust through recent reviews", message: "Improves trust" },
    { name: "Storm Search Positioning", label: "High-intent local search alignment", message: "Strengthens visibility" },
    { name: "Visual Authority", label: "Stronger visual proof and credibility", message: "Builds authority" },
    { name: "Activity Signals", label: "Freshness, activity, and movement", message: "Sustains activity" },
    { name: "Conversion Layer", label: "Turn visibility into calls and leads", message: "Increases conversion" }
  ];

  const problemSignals = [
    "Weak profile structure",
    "Inconsistent review momentum",
    "Poor storm keyword alignment",
    "Weak visual proof",
    "Inactive profile signals",
    "Lost conversion opportunities"
  ];

  const hoverConcepts = [
    "Impact on calls",
    "Impact on trust",
    "Impact on local visibility"
  ];

  const [hoverTextIndex, setHoverTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoverTextIndex((prev) => (prev + 1) % hoverConcepts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col relative bg-[#05070a]">
      {/* Background Feel */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-[0.03]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bp-cta/5 rounded-full blur-[120px] animate-breathing"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bp-highlight/5 rounded-full blur-[120px] animate-breathing-delayed"></div>
      </div>

      {/* SECTION 1 — PREMIUM PRODUCT HERO */}
      <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#05070a] border-b border-white/5">
        {/* Layer B — Background System Visual */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Richer Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-bp-cta/10 rounded-full blur-[160px] animate-breathing opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bp-highlight/10 rounded-full blur-[120px] animate-breathing-delayed opacity-40"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
            {/* Territorial Arc Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-white/[0.03] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square border border-white/[0.02] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-white/[0.01] rounded-full"></div>

            {/* Radar / Grid Feel */}
            <div className="absolute inset-0 border border-bp-cta/5 rounded-full scale-[1.5] opacity-10"></div>
            <div className="absolute inset-0 border border-bp-cta/5 rounded-full scale-[1.2] opacity-15"></div>
            <div className="absolute inset-0 border border-bp-cta/5 rounded-full scale-[0.9] opacity-20"></div>
            
            {/* Pulse Lines & Nodes */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-bp-cta rounded-full shadow-[0_0_10px_rgba(30,167,255,1)] animate-pulse"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-bp-cta rounded-full shadow-[0_0_10px_rgba(30,167,255,1)] animate-pulse-delayed"></div>
            <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-bp-cta rounded-full shadow-[0_0_10px_rgba(30,167,255,1)] animate-pulse"></div>
            
            {/* Scanning Diagonals */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(30,167,255,0.03)_50%,transparent_52%)] bg-[length:200%_200%] animate-scan-diagonal"></div>
            
            {/* Floating Micro-labels - More Intentional Placement */}
            <div className="absolute top-[15%] left-[10%] text-[8px] font-mono text-bp-cta/20 uppercase tracking-[0.4em] border-l border-bp-cta/20 pl-2">Review Velocity</div>
            <div className="absolute top-[30%] right-[5%] text-[8px] font-mono text-bp-cta/20 uppercase tracking-[0.4em] border-r border-bp-cta/20 pr-2">Search Alignment</div>
            <div className="absolute bottom-[20%] left-[20%] text-[8px] font-mono text-bp-cta/20 uppercase tracking-[0.4em] border-l border-bp-cta/20 pl-2">Activity Signals</div>
            <div className="absolute bottom-[35%] right-[15%] text-[8px] font-mono text-bp-cta/20 uppercase tracking-[0.4em] border-r border-bp-cta/20 pr-2">Conversion Layer</div>

            {/* Subtle Interface Dots */}
            <div className="absolute top-10 left-10 w-1 h-1 bg-white/10 rounded-full"></div>
            <div className="absolute top-10 right-10 w-1 h-1 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-1 h-1 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-1 h-1 bg-white/10 rounded-full"></div>
          </div>
        </div>

        {/* Layer A — Primary Text Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-bp-cta font-mono text-[10px] font-bold tracking-[0.6em] uppercase block mb-12 mt-12 opacity-90">
              THE STORMRANK SYSTEM
            </span>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-bp-white leading-[1.1] mb-8 tracking-tight">
              The Google Maps <br />
              operating system built for <br />
              storm-damage roofing companies
            </h1>
            
            <p className="text-lg lg:text-xl text-bp-support mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
              StormRank is BluePeak’s 6-part local demand system for increasing visibility, trust, and conversion on Google Maps — so more local searches turn into calls, inspections, and booked roofing jobs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              {[
                "Built for storm-damage roofing",
                "Structured for local demand growth",
                "Designed to drive calls, not vanity metrics"
              ].map((chip, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-bp-white/80 text-[11px] font-medium backdrop-blur-xl"
                >
                  {chip}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-8">
              <Button to="/free-audit" variant="primary" className="px-14 py-6 text-lg group relative overflow-hidden shadow-[0_0_40px_rgba(30,167,255,0.2)] hover:shadow-[0_0_60px_rgba(30,167,255,0.4)] transition-all duration-500">
                <span className="relative z-10">Get Your Free Google Maps Audit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-bp-cta to-bp-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              
              <Button to="/audit-example" variant="secondary" className="text-[10px] text-bp-support hover:text-bp-cta transition-colors p-0 bg-transparent border-none shadow-none hover:translate-y-0 uppercase tracking-[0.3em] font-mono opacity-70 hover:opacity-100">
                See an Audit Example
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — SIGNAL BREAKDOWN STRIP */}
      <div className="relative z-20 h-[15vh] min-h-[120px] max-h-[180px] bg-[#05070a]/90 backdrop-blur-2xl border-y border-white/5 overflow-hidden">
        {/* Corner Markers */}
        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20"></div>
        <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20"></div>

        {/* Scan Line */}
        <motion.div 
          animate={{ x: ['-100%', '300%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-bp-cta/[0.07] to-transparent pointer-events-none"
        />
        
        <div className="max-w-7xl mx-auto h-full px-12 flex items-center justify-between gap-4">
          {[
            { id: "01", title: "Foundation", desc: "Structure + relevance" },
            { id: "02", title: "Review Momentum", desc: "Trust via recency" },
            { id: "03", title: "Search Positioning", desc: "High-intent alignment" },
            { id: "04", title: "Visual Authority", desc: "Proof + credibility" },
            { id: "05", title: "Activity Signals", desc: "Freshness + movement" },
            { id: "06", title: "Conversion Layer", desc: "Calls + lead flow" }
          ].map((module, i) => (
            <div key={i} className="flex-1 group relative h-full flex flex-col justify-center px-4 transition-all duration-500 hover:bg-white/[0.03] cursor-default">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[9px] font-mono text-bp-cta/30 group-hover:text-bp-cta transition-colors duration-500 tracking-tighter">0{i+1}</span>
                <div className="w-1 h-1 rounded-full bg-bp-cta/10 group-hover:bg-bp-cta shadow-[0_0_5px_rgba(30,167,255,0)] group-hover:shadow-[0_0_8px_rgba(30,167,255,1)] transition-all duration-500 animate-pulse"></div>
              </div>
              <h4 className="text-[11px] font-bold text-bp-white/80 group-hover:text-bp-white transition-colors mb-1 uppercase tracking-widest">{module.title}</h4>
              <p className="text-[9px] text-bp-support/50 group-hover:text-bp-support/80 transition-colors leading-tight font-medium">{module.desc}</p>
              
              {/* Mini signal bar */}
              <div className="absolute bottom-6 left-4 right-4 h-[1px] bg-white/[0.05] overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="w-full h-full bg-bp-cta shadow-[0_0_10px_rgba(30,167,255,0.5)]"
                />
              </div>
              
              {/* Separator with blinking dot */}
              {i < 5 && (
                <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/[0.05] flex items-center justify-center">
                  <div className="w-[3px] h-[3px] rounded-full bg-bp-cta/20 animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Hero to Strip Transition Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-bp-cta/40 to-transparent"></div>
      </div>

      {/* SECTION 3 — THE SIGNAL PROBLEM (COMPACT DIAGNOSTIC PANEL) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-16 pb-4 px-6 bg-[#05070a] overflow-hidden">
        {/* Technical Navy Diagnostic Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#05070a]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.12]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030508_85%)]"></div>
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          {/* Subtle Scan Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Main Diagnostic Container */}
          <div className="relative p-8 lg:p-12 rounded-[2rem] bg-white/[0.01] border border-white/[0.05] backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.3)]">
            <CornerMarkers />
            
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="w-8 h-px bg-bp-highlight/30"></div>
                <span className="text-bp-highlight font-mono text-[10px] font-bold tracking-[0.5em] uppercase">
                  THE SIGNAL PROBLEM
                </span>
                <div className="w-8 h-px bg-bp-highlight/30"></div>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-4xl font-bold text-bp-white mb-6 leading-tight tracking-tight"
              >
                Most roofing companies don’t have a ranking problem. <br />
                <span className="text-bp-cta text-glow">They have a signal problem.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base text-bp-support max-w-2xl mx-auto leading-relaxed opacity-80"
              >
                When a Google Maps profile underperforms, the issue is usually not one big mistake. It’s a stack of smaller weaknesses that reduce visibility, trust, and conversion at the same time.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { code: "0xF2", title: "Weak profile structure", desc: "Poor category and service setup reduces local relevance.", icon: Layers },
                { code: "0x1F3", title: "Inconsistent review momentum", desc: "Lack of recent reviews weakens trust and freshness.", icon: Star },
                { code: "0x2F4", title: "Poor storm keyword alignment", desc: "The profile does not align well with high-intent search behavior.", icon: Search },
                { code: "0x3F5", title: "Weak visual proof", desc: "Photos fail to build enough credibility and trust.", icon: Camera },
                { code: "0x4F6", title: "Inactive profile signals", desc: "Low activity reduces freshness, confidence, and movement.", icon: Activity },
                { code: "0x5F7", title: "Lost conversion opportunities", desc: "Weak calls-to-action reduce the flow from visibility to leads.", icon: MousePointerClick }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-bp-cta/30 transition-all duration-500 overflow-hidden cursor-default"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-all duration-500 group-hover:scale-110">
                    <card.icon className="w-8 h-8 text-bp-cta" />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-mono text-bp-cta/40 uppercase tracking-widest mb-1">DIAG_CODE</span>
                      <span className="text-[10px] font-mono text-bp-cta/60 group-hover:text-bp-cta transition-colors">{card.code}</span>
                    </div>
                    <div className="w-3 h-3 rounded-[2px] border border-white/10 flex items-center justify-center">
                      <div className="w-1 h-1 bg-bp-cta/20 group-hover:bg-bp-cta transition-colors"></div>
                    </div>
                  </div>
                  
                  <h4 className="text-base font-bold text-bp-white mb-2 group-hover:text-bp-cta transition-colors tracking-tight">{card.title}</h4>
                  <p className="text-[11px] text-bp-support/70 leading-relaxed mb-6 group-hover:text-bp-support transition-colors">{card.desc}</p>
                  
                  {/* Technical Lower Rule */}
                  <div className="relative h-px w-full bg-white/[0.05] mt-auto overflow-hidden">
                    <motion.div 
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-bp-cta/40 to-transparent"
                    />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-bp-cta/0 group-hover:bg-bp-cta transition-all duration-500 shadow-[0_0_8px_rgba(30,167,255,1)]"></div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/10 group-hover:border-bp-cta/40 transition-colors"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white/10 group-hover:border-bp-cta/40 transition-colors"></div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.05]">
                <div className="w-1.5 h-1.5 rounded-full bg-bp-cta animate-pulse"></div>
                <p className="text-sm lg:text-base font-bold text-bp-white/70 italic tracking-tight">
                  StormRank was built to fix exactly these six layers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — STORMRANK IS NOT A CHECKLIST (MANIFESTO PANEL) */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-0 pb-16 px-6 bg-[#05070a] overflow-hidden">
        {/* Deep Blue Gradient Explanation Panel */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(30,167,255,0.03)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]"></div>
          
          {/* Subtle Micro Scan Motion */}
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bp-cta/[0.05] to-transparent"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="relative p-12 lg:p-20 rounded-[3rem] bg-gradient-to-br from-white/[0.01] to-transparent border border-white/[0.03] backdrop-blur-sm overflow-hidden">
            {/* Corner Markers */}
            <div className="absolute top-8 left-8 w-3 h-3 border-t border-l border-white/10"></div>
            <div className="absolute top-8 right-8 w-3 h-3 border-t border-r border-white/10"></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-white/10"></div>
            <div className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-white/10"></div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-4 mb-10"
              >
                <div className="w-2 h-2 rounded-full bg-bp-cta/20 animate-pulse"></div>
                <span className="text-bp-cta font-mono text-[10px] font-bold tracking-[0.6em] uppercase">
                  THE SYSTEM
                </span>
                <div className="w-2 h-2 rounded-full bg-bp-cta/20 animate-pulse"></div>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-5xl font-bold text-bp-white mb-12 leading-[1.15] tracking-tight"
              >
                StormRank is not a checklist. <br />
                It’s a coordinated <span className="relative inline-block">
                  <span className="relative z-10 text-bp-cta">operating system</span>
                  <div className="absolute inset-0 bg-bp-cta/20 blur-2xl rounded-full scale-150 opacity-50"></div>
                </span> for Google Maps demand growth.
              </motion.h2>
              
              {/* Technical Horizontal Line */}
              <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-12"></div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-xl text-bp-support mb-16 leading-relaxed max-w-3xl mx-auto opacity-90"
              >
                Instead of relying on random updates, isolated posts, or generic local SEO work, StormRank coordinates the six signals that most influence Maps visibility, trust, and conversion for storm-damage roofing companies.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative inline-block p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03]"
              >
                <p className="text-xl lg:text-2xl font-bold text-bp-white leading-tight">
                  Most agencies treat Google Maps like a listing. <br />
                  <span className="text-bp-cta text-glow">We treat it like a local demand engine.</span>
                </p>
                
                {/* Micro Interface Markers */}
                <div className="absolute -top-2 -left-2 text-[6px] font-mono text-bp-cta/30">SYS_MODE: ACTIVE</div>
                <div className="absolute -bottom-2 -right-2 text-[6px] font-mono text-bp-cta/30">ENGINE_SYNC: 100%</div>
              </motion.div>
            </div>
          </div>
          
          {/* Lead-in to Orb Section */}
          <div className="mt-4 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-12 bg-gradient-to-b from-bp-cta/40 via-bp-cta/10 to-transparent"
            />
            <span className="text-[12px] font-bold tracking-[0.2em] text-bp-cta uppercase">Activating Architecture</span>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CENTRAL COMMAND CORE (SIGNATURE MOMENT) */}
      <section className="relative min-h-[110vh] flex flex-col justify-center pt-0 pb-32 px-6 bg-[#020408] overflow-hidden">
        {/* Darkest and Richest "Black Core Field" */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#010204]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,167,255,0.08)_0%,transparent_60%)]"></div>
          
          {/* Premium Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#010204_100%)]"></div>
          
          {/* Strongest Depth - Subtle Glow Accents */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bp-cta/[0.01] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-bp-highlight/[0.01] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="relative aspect-square md:aspect-video flex items-center justify-center">
            {/* Connection Lines & Signal Particles */}
            <div className="absolute inset-0 hidden md:block pointer-events-none">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(30,167,255,0.1)" />
                    <stop offset="50%" stopColor="rgba(30,167,255,0.5)" />
                    <stop offset="100%" stopColor="rgba(30,167,255,0.1)" />
                  </linearGradient>
                </defs>
                {architectureModules.map((_, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const r = 38; // Radius for modules
                  const x2 = 50 + r * Math.cos(angle);
                  const y2 = 50 + r * Math.sin(angle);
                  return (
                    <g key={i}>
                      <motion.line
                        x1="50%" y1="50%" x2={`${x2}%`} y2={`${y2}%`}
                        stroke={activeModule === i ? "rgba(30,167,255,0.6)" : "rgba(255,255,255,0.05)"}
                        strokeWidth={activeModule === i ? "2" : "1"}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                      />
                      {/* Signal Particle */}
                      <motion.circle
                        r="2"
                        fill="#1ea7ff"
                        initial={{ offsetDistance: "0%" }}
                        animate={{ offsetDistance: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                        style={{
                          offsetPath: `path('M ${50}% ${50}% L ${x2}% ${y2}%')`,
                          visibility: activeModule === i ? 'visible' : 'hidden'
                        }}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Center Core Orb */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 w-56 h-56 md:w-80 md:h-80 rounded-full bg-[#05070a] border border-white/10 flex flex-col items-center justify-center text-center p-10 shadow-[0_0_100px_rgba(30,167,255,0.15)] group"
            >
              <div className="absolute inset-0 bg-bp-cta/5 rounded-full animate-pulse"></div>
              <div className="absolute -inset-4 border border-bp-cta/10 rounded-full animate-spin-slow"></div>
              
              <Activity className="w-12 h-12 text-bp-cta mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-bp-white mb-2 tracking-tight">StormRank System</h3>
              <p className="text-[10px] text-bp-support font-mono uppercase tracking-[0.3em] mb-4">LOCAL DEMAND ENGINE</p>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule ?? 'default'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="h-6"
                >
                  <p className="text-bp-cta font-medium text-xs uppercase tracking-widest">
                    {activeModule !== null ? [
                      "Supports local relevance",
                      "Improves trust",
                      "Strengthens visibility",
                      "Builds authority",
                      "Sustains activity",
                      "Increases conversion"
                    ][activeModule] : "System Active"}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Surrounding Modules (Desktop) */}
            <div className="absolute inset-0 hidden md:block">
              {architectureModules.map((module, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const r = 38;
                const x = 50 + r * Math.cos(angle);
                const y = 50 + r * Math.sin(angle);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    onMouseEnter={() => setActiveModule(i)}
                    onMouseLeave={() => setActiveModule(null)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-6 w-64 cursor-pointer transition-all duration-500 rounded-2xl border backdrop-blur-md ${
                      activeModule === i 
                        ? 'bg-bp-cta/5 border-bp-cta/50 shadow-[0_0_40px_rgba(30,167,255,0.2)] scale-105' 
                        : 'bg-white/[0.02] border-white/5'
                    }`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-500 ${
                        activeModule === i ? 'bg-bp-cta/20 border-bp-cta/40' : 'bg-white/5 border-white/10'
                      }`}>
                        <span className="text-sm font-bold text-bp-cta">{i + 1}</span>
                      </div>
                      <h4 className="font-bold text-bp-white text-sm uppercase tracking-wider">{module.name}</h4>
                    </div>
                    <p className="text-[11px] text-bp-support leading-relaxed">{module.label}</p>
                    
                    {/* Active State Indicator */}
                    <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                      activeModule === i ? 'bg-bp-cta shadow-[0_0_8px_rgba(30,167,255,1)]' : 'bg-white/10'
                    }`}></div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Stack */}
            <div className="md:hidden w-full flex flex-col gap-4 mt-12">
              {architectureModules.map((module, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-bp-cta font-bold text-sm">{i + 1}.</span>
                    <h4 className="font-bold text-bp-white text-sm uppercase tracking-wider">{module.name}</h4>
                  </div>
                  <p className="text-xs text-bp-support">{module.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DEEP DIVE INTO THE 6 PILLARS */}
      <section className="relative py-32 px-6 space-y-64 bg-[#05070a] overflow-hidden">
        {/* Premium System Background Layer — Richer Transition */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#010204] via-[#060b1a] to-[#05070a]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,167,255,0.04)_0%,transparent_80%)]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] scale-150"></div>
          
          {/* Enhanced Transition Glow from Orb Section */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(ellipse_at_top,rgba(30,167,255,0.2)_0%,transparent_70%)]"></div>
          
          {/* Vertical and Horizontal System Lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bp-cta/30 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.01]"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.01]"></div>
          <div className="absolute top-40 left-0 right-0 h-px bg-white/[0.02]"></div>
          
          {/* Connection Lines from Orb Area */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-64 bg-gradient-to-b from-bp-cta/60 to-transparent"></div>
          <div className="absolute top-0 left-[40%] w-px h-48 bg-gradient-to-b from-bp-cta/20 to-transparent"></div>
          <div className="absolute top-0 left-[60%] w-px h-48 bg-gradient-to-b from-bp-cta/20 to-transparent"></div>
          
          {/* Subtle Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.5)_100%)]"></div>
        </div>

        {pillars.map((pillar, i) => (
          <div key={i} className="relative z-10 max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-24 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                {/* System DNA Accents */}
                <div className="absolute -top-12 -left-4 hidden lg:block">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-bp-cta animate-pulse"></div>
                    <span className="text-[8px] font-mono text-bp-cta/40 uppercase tracking-[0.4em]">SYSTEM_NODE: {pillar.id}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a0c14] border border-bp-cta/30 flex items-center justify-center shadow-[0_0_25px_rgba(30,167,255,0.15)] relative group overflow-hidden">
                    <div className="absolute inset-0 bg-bp-cta/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <pillar.icon className="w-7 h-7 text-bp-cta relative z-10" />
                    <CornerMarkers />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-bp-cta font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-1 opacity-60">MODULE_{pillar.id}</span>
                    <h4 className="text-xl font-bold text-bp-white tracking-tight">{pillar.name}</h4>
                  </div>
                </div>

                <div className="relative">
                  {/* Content Block Material Depth */}
                  <div className="absolute -inset-8 bg-white/[0.01] blur-2xl rounded-[3rem] -z-10"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-bp-white mb-8 leading-[1.2] tracking-tight max-w-xl">
                    {pillar.impact}
                  </h3>
                  
                  <p className="text-lg text-bp-support mb-10 leading-relaxed max-w-lg opacity-70">
                    {pillar.explanation}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8 max-w-xl">
                    <div className="relative group">
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-bp-cta/60 to-transparent"></div>
                      <span className="text-[10px] font-bold text-bp-cta uppercase tracking-[0.3em] block mb-3 opacity-80">INCLUDES</span>
                      <p className="text-sm text-bp-white/60 leading-relaxed font-medium">{pillar.includes}</p>
                    </div>
                    <div className="relative group">
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-bp-highlight/60 to-transparent"></div>
                      <span className="text-[10px] font-bold text-bp-highlight uppercase tracking-[0.3em] block mb-3 opacity-80">OUTCOME</span>
                      <p className="text-sm text-bp-white/90 leading-relaxed font-bold">{pillar.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Micro Label */}
                <div className="mt-12 flex items-center gap-3 opacity-30">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <span className="text-[7px] font-mono text-white uppercase tracking-[0.5em]">OPERATIONAL_LAYER_v2.5</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative aspect-square rounded-[2.5rem] border border-white/[0.05] overflow-hidden flex items-center justify-center bg-[#05070f] shadow-2xl ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                {/* Module-Specific Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,167,255,0.08)_0%,transparent_70%)]"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] scale-125"></div>
                
                {/* Conceptual Visuals */}
                {i === 0 && (
                  <div className="relative w-full h-full p-10 flex flex-col gap-6">
                    {/* Real-world layer — Suggestive Texture */}
                    <div className="absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay">
                      <img 
                        src="https://picsum.photos/seed/roofing-texture/800/800" 
                        alt="Roofing Texture" 
                        className="w-full h-full object-cover blur-[4px]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="relative z-10 flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-bp-cta animate-pulse"></div>
                        <span className="text-[10px] font-mono text-bp-cta tracking-[0.2em] opacity-80">FOUNDATION_SCAN</span>
                      </div>
                      <span className="text-[9px] font-mono text-bp-highlight border border-bp-highlight/20 px-2 py-0.5 rounded bg-bp-highlight/5">STATUS: OPTIMIZED</span>
                    </div>

                    <div className="relative z-10 space-y-4">
                      {[
                        { label: "Category Alignment", value: "Roofing Contractor", status: "MATCH", icon: Target },
                        { label: "Service Area Lock", value: "25mi Radius", status: "ACTIVE", icon: MapPin },
                        { label: "NAP Consistency", value: "Verified", status: "SYNCED", icon: CheckCircle2 }
                      ].map((item, idx) => (
                        <div key={idx} className="relative group overflow-hidden">
                          <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors rounded-xl border border-white/5 backdrop-blur-sm"></div>
                          <div className="relative p-4 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                                <item.icon className="w-4 h-4 text-bp-cta/50" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[8px] text-bp-support uppercase tracking-widest font-bold mb-0.5 opacity-60">{item.label}</span>
                                <span className="text-sm text-bp-white font-bold tracking-tight">{item.value}</span>
                              </div>
                            </div>
                            <span className="text-[8px] font-mono text-bp-cta bg-bp-cta/10 px-2 py-1 rounded border border-bp-cta/10">{item.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="relative z-10 mt-auto p-6 rounded-2xl bg-bp-cta/[0.03] border border-bp-cta/10 flex items-center justify-between shadow-xl backdrop-blur-xl">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Activity className="w-5 h-5 text-bp-cta" />
                          <motion.div 
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-bp-cta rounded-full blur-md -z-10"
                          />
                        </div>
                        <span className="text-[10px] font-mono text-bp-cta font-bold uppercase tracking-[0.2em]">STRUCTURAL_INTEGRITY</span>
                      </div>
                      <span className="text-xl font-bold text-bp-white tabular-nums">100%</span>
                    </div>
                  </div>
                )}

                {i === 1 && (
                  <div className="relative w-full h-full p-10 flex flex-col justify-center">
                    {/* Integrated Velocity Chart Background */}
                    <div className="absolute inset-0 z-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 400 400">
                        <path 
                          d="M0,300 Q100,280 200,150 T400,50" 
                          fill="none" 
                          stroke="url(#velocityGradient)" 
                          strokeWidth="2" 
                          strokeDasharray="4 4"
                        />
                        <defs>
                          <linearGradient id="velocityGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="rgba(30,167,255,0)" />
                            <stop offset="100%" stopColor="rgba(30,167,255,0.5)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Faint Background Review Card */}
                    <div className="absolute top-12 right-8 w-64 p-4 rounded-xl bg-white/[0.02] border border-white/5 blur-[1px] -rotate-3 opacity-40 -z-10">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-2 h-2 text-bp-highlight fill-bp-highlight opacity-30" />
                        ))}
                      </div>
                      <div className="h-2 w-3/4 bg-white/10 rounded mb-1"></div>
                      <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                    </div>

                    <div className="relative z-10 space-y-6">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-bp-highlight animate-pulse"></div>
                          <span className="text-[10px] font-mono text-bp-highlight tracking-[0.2em] font-bold">NEW REVIEW — 2H AGO</span>
                        </div>
                        <span className="text-[9px] font-mono text-bp-support opacity-40">ID: REV_99281</span>
                      </div>

                      <div className="p-6 rounded-2xl bg-[#0a0c14]/80 border border-white/10 shadow-2xl backdrop-blur-xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-3">
                          <Quote className="w-8 h-8 text-bp-cta/10" />
                        </div>
                        
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-12 h-12 rounded-full border-2 border-bp-highlight/30 p-0.5 bg-gradient-to-br from-bp-highlight/20 to-transparent">
                            <img 
                              src="https://i.pravatar.cc/150?u=roofing-client-1" 
                              alt="Client" 
                              className="w-full h-full rounded-full object-cover grayscale-[0.2]"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <h5 className="text-bp-white font-bold text-sm tracking-tight">Michael R.</h5>
                            <div className="flex gap-0.5 mt-0.5">
                              {[...Array(5)].map((_, idx) => (
                                <Star key={idx} className="w-3 h-3 text-bp-highlight fill-bp-highlight" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-bp-support leading-relaxed italic opacity-90">
                          "The storm hit on Tuesday, and BluePeak had their crew out by Thursday. The documentation for my insurance was perfect."
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                          <span className="text-[9px] font-mono text-bp-support/40 uppercase tracking-widest">VERIFIED_STORM_REPAIR</span>
                          <span className="text-[9px] font-mono text-bp-highlight font-bold">5.0 RATING</span>
                        </div>
                      </div>

                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                        <div className="flex justify-between items-end gap-4">
                          <div className="flex-1">
                            <span className="text-[9px] font-mono text-bp-support uppercase tracking-widest block mb-3 opacity-60">REVIEW_VELOCITY</span>
                            <div className="flex items-end gap-1 h-12">
                              {[30, 45, 35, 60, 85, 70, 95].map((h, idx) => (
                                <motion.div 
                                  key={idx}
                                  initial={{ height: 0 }}
                                  whileInView={{ height: `${h}%` }}
                                  className={`flex-1 rounded-t-sm ${idx === 6 ? 'bg-bp-highlight shadow-[0_0_15px_rgba(242,125,38,0.4)]' : 'bg-bp-highlight/20'}`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-bp-white block tracking-tighter">+12</span>
                            <span className="text-[9px] font-mono text-bp-highlight uppercase tracking-wider font-bold">THIS_MONTH</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {i === 2 && (
                  <div className="relative w-full h-full p-8 flex flex-col">
                    {/* Geographic Underlay */}
                    <div className="absolute inset-0 z-0 opacity-[0.03] overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern scale-[0.5] rotate-12"></div>
                      <div className="absolute top-1/4 left-1/4 text-[80px] font-bold text-white/10 select-none">ZONE_A</div>
                      <div className="absolute bottom-1/4 right-1/4 text-[80px] font-bold text-white/10 select-none">ZONE_B</div>
                    </div>

                    <div className="relative z-10 flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-bp-cta shadow-[0_0_10px_rgba(30,167,255,0.8)]"></div>
                        <span className="text-[10px] font-mono text-bp-cta tracking-[0.2em] font-bold">SPATIAL_INTELLIGENCE_GRID</span>
                      </div>
                      <div className="flex items-center gap-4 text-[9px] font-mono text-bp-support/60">
                        <span>LAT: 39.7392° N</span>
                        <span>LONG: 104.9903° W</span>
                      </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-7 gap-1 mb-8 p-4 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-xl">
                      {[...Array(49)].map((_, idx) => {
                        const isCenter = idx === 24;
                        const isNearCenter = [16, 17, 18, 23, 25, 30, 31, 32].includes(idx);
                        return (
                          <div key={idx} className="aspect-square relative group">
                            <div className={`absolute inset-0 rounded-sm transition-all duration-500 ${
                              isCenter ? 'bg-bp-cta shadow-[0_0_20px_rgba(30,167,255,0.6)] z-10 scale-110' : 
                              isNearCenter ? 'bg-bp-cta/40' : 'bg-bp-cta/10'
                            }`}></div>
                            {isCenter && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <MapPin className="w-3 h-3 text-white drop-shadow-lg" />
                                <motion.div 
                                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="absolute w-full h-full bg-bp-cta rounded-full blur-sm"
                                />
                              </div>
                            )}
                            {/* Coordinate Marks */}
                            {idx % 7 === 0 && <div className="absolute -left-3 top-1/2 -translate-y-1/2 text-[6px] font-mono text-white/20">{Math.floor(idx/7)}</div>}
                            {idx < 7 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px] font-mono text-white/20">{idx}</div>}
                          </div>
                        );
                      })}
                      
                      {/* Zone Labels */}
                      <div className="absolute top-2 left-2 text-[7px] font-mono text-bp-cta/40 tracking-widest">NORTH_CLUSTER</div>
                      <div className="absolute bottom-2 right-2 text-[7px] font-mono text-bp-highlight/40 tracking-widest">HIGH_INTENT_ZONE</div>
                    </div>

                    <div className="relative z-10 mt-auto grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
                        <span className="text-[8px] font-mono text-bp-support uppercase tracking-widest opacity-60">COVERAGE_RADIUS</span>
                        <span className="text-lg font-bold text-bp-white tracking-tight">15.4 MI</span>
                      </div>
                      <div className="p-4 rounded-xl bg-bp-cta/5 border border-bp-cta/20 flex flex-col gap-1">
                        <span className="text-[8px] font-mono text-bp-cta uppercase tracking-widest font-bold">MARKET_DOMINANCE</span>
                        <span className="text-lg font-bold text-bp-white tracking-tight">84.2%</span>
                      </div>
                    </div>
                  </div>
                )}

                {i === 3 && (
                  <div className="relative w-full h-full overflow-hidden group/hero">
                    {/* HERO MODULE — Cinematic Visual Authority */}
                    <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover/hero:scale-105">
                      <img 
                        src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=1200" 
                        alt="Premium Roofing Detail" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {/* Dramatic Atmospheric Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/40 to-transparent"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(30,167,255,0.1)_0%,transparent_60%)]"></div>
                    </div>

                    {/* Embedded UI Elements */}
                    <div className="absolute top-8 left-8 z-10 space-y-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-bp-cta animate-pulse"></div>
                        <span className="text-[9px] font-mono text-bp-white font-bold tracking-widest uppercase">IMAGE_AUTHORITY_SCAN</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <span className="text-[8px] text-bp-support uppercase block mb-1 opacity-60">QUALITY</span>
                            <span className="text-lg font-bold text-bp-white tracking-tighter">4K_RAW</span>
                          </div>
                          <div className="w-px h-8 bg-white/10"></div>
                          <div className="text-center">
                            <span className="text-[8px] text-bp-support uppercase block mb-1 opacity-60">TRUST</span>
                            <span className="text-lg font-bold text-bp-highlight tracking-tighter">HIGH</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 z-10">
                      <div className="p-6 rounded-2xl bg-gradient-to-r from-bp-cta/20 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10 scale-50"></div>
                        <div className="relative flex justify-between items-center">
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-bp-cta font-bold tracking-[0.3em] uppercase">VISUAL_DOMINANCE_SCORE</span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-4xl font-bold text-bp-white tracking-tighter">98.4</span>
                              <span className="text-xs text-bp-cta font-mono">/ 100</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <div className="flex -space-x-2">
                              {[1, 2, 3].map(n => (
                                <div key={n} className="w-8 h-8 rounded-full border-2 border-[#05070a] bg-white/10 backdrop-blur-md flex items-center justify-center">
                                  <Camera className="w-3 h-3 text-bp-cta" />
                                </div>
                              ))}
                            </div>
                            <span className="text-[8px] font-mono text-bp-support uppercase tracking-widest opacity-60">LIVE_ASSET_VERIFICATION</span>
                          </div>
                        </div>
                        {/* Scan Line Animation */}
                        <motion.div 
                          animate={{ top: ['-10%', '110%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 right-0 h-px bg-bp-cta/40 z-20"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {i === 4 && (
                  <div className="relative w-full h-full p-10 flex flex-col">
                    <div className="relative z-10 flex justify-between items-center mb-10">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-bp-cta" />
                        <span className="text-[10px] font-mono text-bp-cta tracking-widest uppercase font-bold">LIVE_SIGNAL_TIMELINE</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-bp-cta/10 border border-bp-cta/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-bp-cta animate-ping"></div>
                        <span className="text-[8px] font-mono text-bp-cta font-bold">ACTIVE_SIGNAL</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow space-y-6 relative z-10">
                      {[
                        { time: "2m ago", event: "STORM_UPDATE_PUBLISHED", detail: "Storm Update #42 - Hail Damage Alert", active: true },
                        { time: "1h ago", event: "PHOTO_UPLOADED", detail: "Jobsite Proof: Dallas, TX - Full Roof Replacement", active: false },
                        { time: "3h ago", event: "Q&A_RESPONSE_SYNC", detail: "Customer Inquiry: Inspection Request Handled", active: false },
                        { time: "5h ago", event: "SIGNAL_REFRESH_COMPLETE", detail: "Maps Metadata Synchronization Successful", active: false }
                      ].map((e, idx) => (
                        <div key={idx} className={`flex gap-6 items-start transition-all duration-500 ${e.active ? 'opacity-100 scale-[1.02]' : 'opacity-30 hover:opacity-60'}`}>
                          <div className="flex flex-col items-center pt-1">
                            <div className={`w-3 h-3 rounded-full border-2 border-bp-bg z-10 transition-all duration-500 ${e.active ? 'bg-bp-cta shadow-[0_0_20px_rgba(30,167,255,0.8)] scale-125' : 'bg-white/20'}`}></div>
                            {idx < 3 && <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"></div>}
                          </div>
                          <div className={`flex flex-col p-4 rounded-xl border transition-all duration-500 flex-grow ${e.active ? 'bg-bp-cta/5 border-bp-cta/30 shadow-xl backdrop-blur-md' : 'bg-white/[0.01] border-white/5'}`}>
                            <div className="flex justify-between items-center mb-1">
                              <span className={`text-[11px] font-bold tracking-tight ${e.active ? 'text-bp-white' : 'text-bp-white/60'}`}>{e.event}</span>
                              <span className="text-[9px] text-bp-support font-mono opacity-40">{e.time}</span>
                            </div>
                            <span className={`text-[10px] leading-relaxed font-medium ${e.active ? 'text-bp-support' : 'text-bp-support/60'}`}>{e.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="relative z-10 mt-10 p-4 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center backdrop-blur-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-bp-highlight animate-pulse"></div>
                        <span className="text-[10px] font-mono text-bp-support uppercase tracking-widest opacity-60">ACTIVITY_CADENCE</span>
                      </div>
                      <span className="text-[10px] font-mono text-bp-highlight font-bold">OPTIMAL_SIGNAL_FLOW</span>
                    </div>
                  </div>
                )}

                {i === 5 && (
                  <div className="relative w-full h-full p-10 flex flex-col">
                    <div className="relative z-10 flex justify-between items-center mb-12">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-bp-cta" />
                        <span className="text-[10px] font-mono text-bp-cta tracking-widest uppercase font-bold">CONVERSION_FUNNEL_LOCK</span>
                      </div>
                      <div className="px-2 py-0.5 rounded border border-bp-highlight/30 text-[8px] font-mono text-bp-highlight bg-bp-highlight/5">PATH_SECURED</div>
                    </div>
                    
                    <div className="flex-grow flex flex-col items-center justify-center gap-6 relative z-10">
                      {[
                        { label: "USER CLICK", value: "GMB_PROFILE_VISIT", icon: MousePointer2, color: "bp-cta", active: false },
                        { label: "CALL INITIATED", value: "DIRECT_DIAL_TRIGGER", icon: Phone, color: "bp-cta", active: false },
                        { label: "LEAD CAPTURED", value: "CALL_TRACKING_SYNC", icon: CheckCircle2, color: "bp-highlight", active: true }
                      ].map((step, idx) => (
                        <div key={idx} className="w-full flex flex-col items-center gap-4">
                          <div className={`w-full p-5 rounded-2xl border transition-all duration-700 relative overflow-hidden group ${
                            step.active 
                              ? 'bg-bp-highlight/10 border-bp-highlight/40 shadow-[0_0_40px_rgba(242,125,38,0.2)] scale-[1.02]' 
                              : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                          }`}>
                            <div className="flex items-center justify-between relative z-10">
                              <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                                  step.active ? 'bg-bp-highlight/20 border border-bp-highlight/40' : 'bg-white/5 border border-white/10'
                                }`}>
                                  <step.icon className={`w-5 h-5 ${step.active ? 'text-bp-highlight' : 'text-bp-support/40'}`} />
                                </div>
                                <div className="flex flex-col">
                                  <span className={`text-[8px] font-mono uppercase tracking-widest opacity-60 ${step.active ? 'text-bp-highlight' : 'text-bp-support'}`}>{step.label}</span>
                                  <span className={`text-sm font-bold tracking-tight ${step.active ? 'text-bp-white' : 'text-bp-white/60'}`}>{step.value}</span>
                                </div>
                              </div>
                              {step.active && (
                                <div className="relative">
                                  <div className="w-2 h-2 rounded-full bg-bp-highlight shadow-[0_0_15px_rgba(242,125,38,1)]"></div>
                                  <motion.div 
                                    animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute inset-0 bg-bp-highlight rounded-full blur-sm"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                          {idx < 2 && (
                            <div className="flex flex-col items-center gap-1 opacity-20">
                              <div className="w-px h-4 bg-gradient-to-b from-bp-cta to-transparent"></div>
                              <ChevronDown className="w-3 h-3 text-bp-cta" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="relative z-10 mt-auto p-5 rounded-2xl bg-bp-highlight/10 border border-bp-highlight/30 flex items-center justify-between shadow-2xl backdrop-blur-xl overflow-hidden group">
                      <div className="absolute inset-0 bg-grid-pattern opacity-5 scale-50"></div>
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-bp-highlight/20 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-bp-highlight" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono text-bp-highlight font-bold uppercase tracking-widest">CALL_TRIGGERED</span>
                          <span className="text-[8px] text-bp-support uppercase tracking-[0.2em] opacity-60">CONVERSION_EVENT_SUCCESS</span>
                        </div>
                      </div>
                      <span className="text-xl font-bold text-bp-white tabular-nums relative z-10">+1</span>
                    </div>
                  </div>
                )}

                {/* Corner Markers for each Panel */}
                <CornerMarkers />
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 6 — WHY IT COMPOUNDS */}
      <section className="pt-24 pb-4 px-6 relative overflow-hidden bg-[#05070a] border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-bp-highlight font-mono text-[10px] font-bold tracking-[0.4em] uppercase block mb-4"
            >
              WHY_IT_COMPOUNDS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-bp-white mb-6 leading-tight tracking-tight"
            >
              Each pillar is useful alone. <br />
              <span className="text-bp-cta">StormRank works because they compound together.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-bp-support max-w-3xl mx-auto leading-relaxed opacity-70"
            >
              A better profile structure improves relevance. Better reviews increase trust. Stronger visual proof improves conversion. Together, these signals create a stronger local presence that can compound over time.
            </motion.p>
          </div>

          {/* COMPACT COMPOUND DIAGRAM */}
          <div className="relative max-w-4xl mx-auto h-[300px] flex items-center justify-center">
            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-bp-cta/5 rounded-full blur-[80px] -z-10"></div>
            
            {/* Connection Lines & Nodes */}
            <div className="relative w-full flex justify-between items-center px-12">
              {[
                { name: "Foundation", icon: Layers },
                { name: "Momentum", icon: Star },
                { name: "Positioning", icon: MapPin },
                { name: "Authority", icon: Camera },
                { name: "Activity", icon: Activity },
                { name: "Conversion", icon: Target }
              ].map((pillar, i, arr) => (
                <div key={i} className="flex items-center flex-grow last:flex-grow-0">
                  <div className="flex flex-col items-center group">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-12 h-12 rounded-xl bg-[#0a0c14] border border-white/10 flex items-center justify-center mb-3 relative overflow-hidden transition-all duration-500 group-hover:border-bp-cta/40"
                    >
                      <pillar.icon className="w-5 h-5 text-bp-support group-hover:text-bp-cta transition-colors" />
                      
                      {/* Signal Pulse Highlight */}
                      <motion.div 
                        animate={{ 
                          opacity: [0, 1, 0],
                          boxShadow: ["0 0 0px rgba(30,167,255,0)", "0 0 20px rgba(30,167,255,0.4)", "0 0 0px rgba(30,167,255,0)"]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                        className={`absolute inset-0 border border-bp-cta/40 rounded-xl ${i === arr.length - 1 ? 'border-bp-highlight/60' : ''}`}
                      />
                    </motion.div>
                    <span className="text-[8px] font-mono text-bp-support uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 transition-opacity">{pillar.name}</span>
                  </div>

                  {i < arr.length - 1 && (
                    <div className="flex-grow h-px bg-white/5 mx-4 relative overflow-hidden">
                      <motion.div 
                        animate={{ left: ['-100%', '200%'] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.3,
                          ease: "linear"
                        }}
                        className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-bp-cta/40 to-transparent"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — HOW STORMRANK GETS IMPLEMENTED */}
      <section className="pt-4 pb-24 px-6 relative bg-[#05070a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-bp-cta font-mono text-[10px] font-bold tracking-[0.4em] uppercase block mb-4"
            >
              IMPLEMENTATION_PIPELINE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-bp-white mb-6 tracking-tight"
            >
              How StormRank gets implemented
            </motion.h2>
            <p className="text-lg text-bp-support max-w-2xl mx-auto leading-relaxed opacity-70">
              We don't drop random tactics into the profile. We diagnose the gaps, fix the foundation, and then operate the system month after month.
            </p>
          </div>

          <div className="relative mb-20">
            {/* Horizontal Pipeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2 hidden lg:block overflow-hidden">
              <motion.div 
                animate={{ left: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-bp-cta/20 to-transparent"
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {[
                { phase: "PHASE 01", title: "Diagnostic Audit", copy: "We identify where visibility, trust, and conversion are leaking with a 40-point check.", icon: Search },
                { phase: "PHASE 02", title: "Foundation Setup", copy: "We fix the profile foundation and strengthen the highest-impact signals first.", icon: Target, active: true },
                { phase: "PHASE 03", title: "Growth Operations", copy: "We operate ongoing updates, review momentum, and signal reinforcement.", icon: TrendingUp }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className={`p-8 rounded-2xl bg-[#0a0c14] border transition-all duration-500 h-full flex flex-col ${
                    step.active ? 'border-bp-cta/30 shadow-[0_0_30px_rgba(30,167,255,0.05)]' : 'border-white/5 hover:border-white/10'
                  }`}>
                    <span className="text-[8px] font-mono text-bp-support/40 font-bold tracking-[0.4em] mb-6 block">{step.phase}</span>
                    
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      step.active ? 'bg-bp-cta/10 border border-bp-cta/20' : 'bg-white/5 border border-white/10'
                    }`}>
                      <step.icon className={`w-5 h-5 ${step.active ? 'text-bp-cta' : 'text-bp-support'}`} />
                    </div>

                    <h4 className="text-xl font-bold text-bp-white mb-4 tracking-tight">{step.title}</h4>
                    <p className="text-sm text-bp-support leading-relaxed opacity-60">{step.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <span className="text-[8px] font-mono text-bp-cta font-bold tracking-[0.4em] uppercase mb-4">NEXT_ACTION</span>
              <Button to="/free-audit" variant="primary" className="px-10 py-5 text-base hover:-translate-y-1 transition-all duration-500">
                Start with a Free Audit
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL SYSTEM CHECKPOINT */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="p-12 lg:p-16 rounded-[2.5rem] bg-[#0a0c14] border border-white/5 relative overflow-hidden text-center">
            {/* Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-bp-cta/5 rounded-full blur-[100px] -z-10"></div>
            
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-bp-highlight font-mono text-[10px] font-bold tracking-[0.4em] uppercase block mb-6"
            >
              SYSTEM_CHECKPOINT
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-bp-white mb-6 leading-tight tracking-tight"
            >
              Want to see where your Google Maps <br /> profile is losing calls?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-bp-support mb-12 max-w-2xl mx-auto leading-relaxed opacity-70"
            >
              We'll review your profile and identify the biggest gaps affecting visibility, trust, and conversion — plus the first fixes we'd make.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { label: "Visibility gaps", icon: Search },
                { label: "Review velocity", icon: TrendingUp },
                { label: "Trust weaknesses", icon: ShieldAlert },
                { label: "Competitor advantage", icon: Target },
                { label: "Growth opportunities", icon: BarChart3 }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-bp-white/80 text-[10px] font-medium hover:bg-white/5 transition-colors">
                  <item.icon className="w-3 h-3 text-bp-cta" />
                  {item.label}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[8px] font-mono text-bp-support/40 font-bold tracking-[0.4em] uppercase mb-6">CHOOSE YOUR NEXT STEP</span>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/free-audit" variant="primary" className="px-10 py-5 text-base w-full sm:w-auto hover:-translate-y-1 transition-all duration-500">
                  Get Your Free Audit
                </Button>
                <Button to="/audit-example" variant="secondary" className="px-10 py-5 text-base w-full sm:w-auto hover:-translate-y-1 transition-all duration-500">
                  See an Audit Example
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
