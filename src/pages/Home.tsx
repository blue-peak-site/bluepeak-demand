import React, { useState } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ShieldAlert, TrendingUp, MapPin, Search, Star, Camera, Activity, Target, CheckCircle2, ChevronDown, X, Check, ArrowRight, Radar, Layers, AlertCircle, Zap, BarChart3, ShieldCheck, Signal } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const decisionQuestions = [
  {
    id: "01",
    label: "Rankings",
    question: "Do you guarantee Google Maps rankings?",
    answer: [
      "We do not guarantee rankings, and we do not sell Google Maps management as a “get you to #1” promise.",
      "What we do is operate the signals that usually have the biggest impact on local visibility, trust, and conversion: profile structure, review momentum, service alignment, visual authority, activity signals, and ongoing optimization.",
      "Google Maps performance depends on factors like competition, proximity, market conditions, and the current strength of the profile. What we aim to create is consistent improvement, stronger positioning, and more qualified demand over time."
    ],
    signalLine: "What we optimize: visibility, trust, and call-generating profile strength.",
    tags: ["RISK", "EXPECTATION", "VISIBILITY"]
  },
  {
    id: "02",
    label: "Timeline",
    question: "How long does it usually take to see movement?",
    answer: [
      "That depends on the starting point, the market, and how competitive the area is.",
      "In many cases, the first 30 days are about fixing the foundation: profile structure, services, review process, visual trust, and activity consistency. From there, the goal is to build momentum over the next 60–90 days.",
      "That is why we work with a 90-day minimum. Local growth needs enough time for profile improvements, review momentum, activity signals, and performance visibility to compound."
    ],
    signalLine: "Best expectation: early improvements first, stronger compounding after the foundation is in place.",
    tags: ["TIMELINE", "PROCESS", "MOMENTUM"]
  },
  {
    id: "03",
    label: "Fit",
    question: "What kind of roofing company is the best fit for this?",
    answer: [
      "This works best for roofing companies that already do real local service work, want more inspection calls, understand local competition, and are willing to improve the signals that affect trust and visibility.",
      "It is a strong fit for companies that want more than traffic. The system is built for businesses that want more calls, more qualified leads, and more booked jobs from Google Maps.",
      "It is usually a weak fit for companies expecting instant rankings, unwilling to improve reviews or activity, or looking for a “set and forget” marketing solution."
    ],
    signalLine: "Best fit: roofing companies that want demand, not just traffic.",
    tags: ["FIT", "QUALIFICATION", "DEMAND"]
  },
  {
    id: "04",
    label: "Website",
    question: "Do we need a new website before starting?",
    answer: [
      "No. Many roofing companies can start improving their Google Maps performance without rebuilding their website.",
      "In a lot of cases, the first opportunity is in the Google Business Profile itself: structure, reviews, service alignment, trust signals, activity, and conversion clarity.",
      "If the website becomes a limiting factor later, we can identify that and recommend a focused Website Relevance Layer rather than turning it into a full redesign project."
    ],
    signalLine: "Translation: you do not need a full rebuild to start capturing better demand.",
    tags: ["WEBSITE", "GBP", "CONVERSION"]
  },
  {
    id: "05",
    label: "Reviews",
    question: "Can you help us generate more reviews consistently?",
    answer: [
      "Yes. Review growth is one of the core parts of the system.",
      "We help create a practical review process your team can actually use: direct review link, request messaging, timing guidance, follow-up structure, and ongoing support to improve consistency.",
      "The goal is not random bursts. The goal is review momentum that strengthens trust, visibility, and conversion over time."
    ],
    signalLine: "What matters most: consistency beats occasional spikes.",
    tags: ["REVIEWS", "TRUST", "MOMENTUM"]
  },
  {
    id: "06",
    label: "Territory",
    question: "Do you work with more than one roofing company in the same area?",
    answer: [
      "It depends on the market, the level of overlap, and the type of engagement.",
      "In highly relevant local markets, too much overlap can create strategic conflict, especially when service areas, target searches, and growth priorities are very similar.",
      "When we see that risk, we are selective. The goal is not to overload an area. The goal is to operate real growth with enough strategic clarity to protect execution quality."
    ],
    signalLine: "We care more about strategic fit than account volume.",
    tags: ["TERRITORY", "COMPETITION", "FIT"]
  }
];

export default function Home() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const section8Ref = useRef(null);
  const transitionMarkerRef = useRef(null);
  const howItWorksRef = useRef(null);
  const decisionTransitionRef = useRef(null);
  const investmentRef = useRef(null);
  const decisionSectionRef = useRef(null);
  const unsureSectionRef = useRef(null);
  const finalCtaRef = useRef(null);

  const isInView8 = useInView(section8Ref, { amount: 0.2, once: true });
  const isTransitionInView = useInView(transitionMarkerRef, { amount: 0.3, once: true });
  const isHowItWorksInView = useInView(howItWorksRef, { amount: 0.2, once: true });
  const isDecisionTransitionInView = useInView(decisionTransitionRef, { amount: 0.5, once: true });
  const isInvestmentInView = useInView(investmentRef, { amount: 0.2, once: true });
  const isDecisionInView = useInView(decisionSectionRef, { amount: 0.2, once: true });
  const isUnsureInView = useInView(unsureSectionRef, { amount: 0.3, once: true });
  const isFinalCtaInView = useInView(finalCtaRef, { amount: 0.2, once: true });
  
  const { scrollYProgress: scroll8 } = useScroll({
    target: section8Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: scrollHowItWorks } = useScroll({
    target: howItWorksRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: scrollDecision } = useScroll({
    target: decisionSectionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: scrollUnsure } = useScroll({
    target: unsureSectionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: scrollFinalCta } = useScroll({
    target: finalCtaRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY8 = useTransform(scroll8, [0, 1], ["-10px", "10px"]);
  const backgroundYHowItWorks = useTransform(scrollHowItWorks, [0, 1], ["-15px", "15px"]);
  const backgroundYDecision = useTransform(scrollDecision, [0, 1], ["-20px", "20px"]);
  const backgroundYUnsure = useTransform(scrollUnsure, [0, 1], ["-20px", "20px"]);
  const backgroundYFinalCta = useTransform(scrollFinalCta, [0, 1], ["-30px", "30px"]);
  return (
    <div className="flex flex-col pb-8">
      {/* Section 1 — Hero */}
      <div className="relative w-full overflow-hidden">
        <section className="pt-12 lg:pt-16 pb-16 lg:pb-24 px-6 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-bp-highlight/20 border border-bp-highlight/30 text-bp-light text-xs font-medium uppercase tracking-wider">
              Google Maps Growth
            </span>
            <span className="px-3 py-1 rounded-full bg-bp-highlight/20 border border-bp-highlight/30 text-bp-light text-xs font-medium uppercase tracking-wider">
              More Inspections
            </span>
            <span className="px-3 py-1 rounded-full bg-bp-highlight/20 border border-bp-highlight/30 text-bp-light text-xs font-medium uppercase tracking-wider">
              Storm Demand
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-bp-white">
            Get More Roof Inspection Calls from <span className="text-bp-cta text-glow">Google Maps</span>
          </h1>
          
          <p className="text-lg text-bp-support max-w-xl leading-relaxed">
            We help storm-damage roofing companies increase visibility, build trust, and turn more local searches into calls, inspections, and booked roofing jobs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button to="/free-audit" variant="primary" icon>Get Free Google Maps Audit</Button>
            <Button to="/stormrank" variant="outline">See How StormRank Works</Button>
          </div>
          
          <div className="flex flex-col gap-2 pt-4">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-base text-bp-support">Google Maps growth for roofing companies</p>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-base text-bp-support">More calls and inspections</p>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-base text-bp-support">Storm demand capture system</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-4">
            <ShieldAlert className="w-5 h-5 text-bp-cta" />
            <p className="text-sm text-bp-support">Focused exclusively on Google Maps growth for storm-damage roofing companies.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-bp-cta/20 blur-[100px] rounded-full"></div>
          <div className="glass-card p-6 relative z-10 border-white/10 glow-border flex flex-col gap-5">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-bp-support font-mono tracking-wider">LOCAL DEMAND COMMAND</div>
            </div>
            
            {/* Top Info Strip */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-bp-support mb-1 font-medium">Profile Visibility Score</p>
                <div className="flex items-baseline gap-3">
                  <p className="text-4xl font-bold text-bp-white">94<span className="text-bp-support text-xl font-normal">/100</span></p>
                  <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded text-xs font-bold tracking-wide relative overflow-hidden">
                    <motion.div
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-emerald-400/20"
                    />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    LIVE +28%
                  </div>
                </div>
              </div>
            </div>
            
            {/* Central Map/Grid */}
            <div className="relative w-full h-52 bg-[#060a12] rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-inner">
              {/* Grid Background */}
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              {/* Grid Annotations */}
              <div className="absolute top-2 right-2 text-[8px] font-mono text-bp-support/40">SEC-4A</div>
              <div className="absolute bottom-2 left-1/2 text-[8px] font-mono text-bp-support/40">LAT:32.77 / LNG:-96.79</div>

              {/* Scanning Lines */}
              <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-bp-cta/40 shadow-[0_0_15px_rgba(30,167,255,0.6)] z-10"
              />
              <motion.div
                animate={{ left: ['-10%', '110%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute top-0 bottom-0 w-[1px] bg-bp-cta/20 shadow-[0_0_10px_rgba(30,167,255,0.3)] z-10"
              />
              
              {/* Heat Zones */}
              {/* Stronger Central Zone */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-bp-cta/30 blur-[45px] rounded-full"
              />
              {/* Weaker Outer Zone */}
              <div className="absolute top-[60%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-bp-cta/10 blur-[35px] rounded-full" />
              
              {/* Connecting Lines & Expansion Path (SVG) */}
              <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
                {/* Subtle base connections */}
                <path d="M 40 50 L 140 90 L 220 70 L 300 130" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M 140 90 L 100 160 L 180 180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 4" />
                
                {/* Expansion Path (Strong to Weak) */}
                <path d="M 160 100 Q 220 120 280 140" fill="none" stroke="#1ea7ff" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
                <path d="M 160 100 L 280 140" fill="none" stroke="#1ea7ff" strokeWidth="8" className="opacity-10 blur-sm" />
              </svg>
                           {/* Internal Labels */}
              <div className="absolute top-3 left-3 z-30 flex flex-col gap-2">
                <div className="text-[9px] font-bold tracking-widest text-bp-cta/90 uppercase">OPPORTUNITY WINDOW ACTIVE</div>
                {/* Integrated Roof Inspection Demand Layer */}
                <div className="flex items-center gap-2 border-l border-emerald-400/40 pl-2">
                  <div className="text-[8px] font-mono tracking-widest text-emerald-400/80 uppercase">ROOF INSPECTION DEMAND</div>
                </div>
              </div>
              
              <div className="absolute bottom-3 right-3 z-30">
                <div className="text-[10px] font-bold tracking-wider text-bp-white uppercase bg-bp-cta/10 px-2.5 py-1 rounded border border-bp-cta/30 backdrop-blur-md">
                  DALLAS / PLANO / FRISCO
                </div>
              </div>
              
              {/* Legend */}
              <div className="absolute bottom-3 left-3 z-30 flex gap-3 bg-[#060a12]/80 px-2.5 py-1.5 rounded border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-bp-cta/40"></div>
                  <span className="text-[9px] text-bp-support uppercase tracking-wider">Coverage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-bp-cta"></div>
                  <span className="text-[9px] text-bp-support uppercase tracking-wider">Visibility</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  <span className="text-[9px] text-bp-support uppercase tracking-wider">Calls</span>
                </div>
              </div>

              {/* Nodes / Pins */}
              {/* Central Control Node (Strong Zone) */}
              <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                {/* Influence Area */}
                <div className="absolute w-16 h-16 border border-bp-cta/20 rounded-full bg-bp-cta/5"></div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute w-10 h-10 bg-bp-cta/30 rounded-full"
                />
                <div className="relative flex items-center justify-center w-6 h-6 bg-bp-bg border border-bp-cta rounded-full shadow-[0_0_15px_rgba(30,167,255,0.6)]">
                  <div className="w-2 h-2 bg-bp-cta rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                </div>
                <div className="mt-1 bg-bp-bg/90 backdrop-blur-sm border border-bp-cta/40 text-bp-white text-[9px] px-1.5 py-0.5 rounded font-mono">#1 RANK</div>
              </div>
              
              {/* Expansion Target Node (Weak Zone) -> Opportunity Zone */}
              <div className="absolute top-[60%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="absolute w-16 h-16 bg-emerald-400/5 rounded-full border border-emerald-400/10"></div>
                <div className="w-1.5 h-1.5 bg-emerald-400/80 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                <div className="mt-2 flex items-center gap-1.5">
                  <div className="w-2 h-[1px] bg-emerald-400/40"></div>
                  <div className="text-emerald-400/90 text-[8px] tracking-widest font-mono uppercase">OPPORTUNITY ZONE</div>
                  <div className="w-2 h-[1px] bg-emerald-400/40"></div>
                </div>
              </div>
              
              {/* Secondary Control Node */}
              <div className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="relative flex items-center justify-center w-4 h-4 bg-bp-bg border border-bp-cta/60 rounded-full">
                  <div className="w-1 h-1 bg-bp-cta/80 rounded-full"></div>
                </div>
                <div className="mt-1 bg-bp-bg/90 backdrop-blur-sm border border-white/10 text-bp-support text-[9px] px-1.5 py-0.5 rounded font-mono">#3</div>
              </div>

              {/* Functional Micro-nodes (Aligned to paths) */}
              <div className="absolute top-[50%] left-[60%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-bp-cta/80 rounded-full shadow-[0_0_5px_rgba(30,167,255,0.5)]"></div>
                <span className="text-[7px] font-mono text-bp-cta/80">#4</span>
              </div>
              <div className="absolute top-[32%] left-[35%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-bp-cta/60 rounded-full"></div>
                <span className="text-[7px] font-mono text-bp-cta/60">#7</span>
              </div>
              
              {/* Intentional Signal Points (Clustered along expansion and coverage zones) */}
              {/* Cluster near expansion path */}
              <div className="absolute top-[48%] left-[55%] w-1 h-1 bg-emerald-400/80 rounded-full z-10 shadow-[0_0_4px_rgba(52,211,153,0.6)]"></div>
              <div className="absolute top-[52%] left-[65%] w-1 h-1 bg-emerald-400/60 rounded-full z-10"></div>
              <div className="absolute top-[56%] left-[70%] w-0.5 h-0.5 bg-emerald-400/40 rounded-full z-10"></div>
              
              {/* Cluster near main node */}
              <div className="absolute top-[35%] left-[42%] w-1 h-1 bg-bp-cta/50 rounded-full z-10"></div>
              <div className="absolute top-[45%] left-[38%] w-1 h-1 bg-bp-cta/40 rounded-full z-10"></div>
              
              {/* Cluster near secondary node */}
              <div className="absolute top-[20%] left-[30%] w-0.5 h-0.5 bg-bp-cta/40 rounded-full z-10"></div>
              <div className="absolute top-[28%] left-[20%] w-1 h-1 bg-bp-cta/30 rounded-full z-10"></div>
              
              {/* Low-key monitoring marker (Anchored to grid) */}
              <div className="absolute top-[65%] left-[85%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1">
                <div className="w-3 h-3 border border-bp-support/20 rounded-sm flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-bp-support/40 rounded-full"></div>
                </div>
                <span className="text-[6px] font-mono text-bp-support/40">MON-8</span>
              </div>
            </div>

            {/* Bottom Metric Cards */}
            <div className="grid grid-cols-2 gap-3">
              {/* Card 1 */}
              <div className="bg-[#060a12]/80 rounded-lg p-3 border border-white/5 hover:border-bp-cta/30 transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-bp-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-[10px] text-bp-support mb-1.5 uppercase tracking-wider font-medium">Inspection Calls</p>
                <div className="flex items-end justify-between">
                  <p className="text-xl font-bold text-bp-white leading-none">142</p>
                  <p className="text-xs font-semibold text-emerald-400">+12</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#060a12]/80 rounded-lg p-3 border border-white/5 hover:border-bp-cta/30 transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-bp-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-[10px] text-bp-support mb-1.5 uppercase tracking-wider font-medium">Map Views</p>
                <div className="flex items-end justify-between">
                  <p className="text-xl font-bold text-bp-white leading-none">8.4k</p>
                  <p className="text-xs font-semibold text-emerald-400">+2.1k</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-[#060a12]/80 rounded-lg p-3 border border-white/5 hover:border-bp-cta/30 transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-bp-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-[10px] text-bp-support mb-1.5 uppercase tracking-wider font-medium">Reviews Growth</p>
                <div className="flex items-end justify-between">
                  <p className="text-xl font-bold text-emerald-400 leading-none">+18</p>
                  <p className="text-[10px] font-medium text-bp-support uppercase tracking-wider">This Month</p>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="bg-[#060a12]/80 rounded-lg p-3 border border-white/5 hover:border-bp-cta/30 transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-bp-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-[10px] text-bp-support mb-1.5 uppercase tracking-wider font-medium">Territory Control</p>
                <div className="flex items-end justify-between">
                  <p className="text-xl font-bold text-bp-white leading-none">84%</p>
                  <p className="text-[10px] font-medium text-bp-support uppercase tracking-wider">DFW Active</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </section>
        
        {/* Bottom Edge Fade (Inside Hero) */}
        <div className="absolute -bottom-8 -left-8 -right-8 h-[180px] bg-gradient-to-b from-transparent via-[#020408] via-[80%] to-[#020408] blur-[10px] z-20 pointer-events-none"></div>
      </div>

      {/* Section 2 — Problem / Diagnostic Layer */}
      <section className="relative w-full bg-[#020408] pt-12 pb-14 overflow-hidden z-20">
        {/* Layer 1 & 2: Base & Technical Grid */}
        <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px', backgroundPosition: 'center top' }}></div>
        
        {/* Layer 3: Soft Lighter Panel/Haze */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.02] blur-[80px] rounded-[100%] pointer-events-none z-0"></div>

        {/* Layer 4: Interface Details */}
        <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none z-0">
          {/* Scan lines */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
          {/* Coordinate markers */}
          <div className="absolute top-24 left-10 text-[9px] font-mono text-bp-cta/30">SYS.DIAG // 001</div>
          <div className="absolute bottom-40 right-10 text-[9px] font-mono text-bp-cta/30">LAT.40.7128</div>
          {/* Crosshairs */}
          <div className="absolute top-32 right-20 w-4 h-4 border-t border-l border-bp-cta/20"></div>
          <div className="absolute bottom-32 left-20 w-4 h-4 border-b border-r border-bp-cta/20"></div>
        </div>

        {/* Top-Right Live Status Detail */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 z-20 bg-white/[0.02] border border-white/5 rounded-full px-3 py-1.5 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-bp-cta animate-pulse shadow-[0_0_8px_rgba(30,167,255,0.8)]"></div>
          <span className="text-[9px] font-mono text-bp-cta/80 tracking-widest uppercase">SIGNAL LOSS DETECTED</span>
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
          {/* Top Area: Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto -mt-4"
          >
            <div className="text-[12px] font-bold tracking-[0.2em] text-bp-cta uppercase mb-8">
              WHY CALLS LEAK ON GOOGLE MAPS
            </div>
            
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] font-bold text-bp-white mb-8 tracking-tight max-w-[1000px] mx-auto">
              Most Roofing Companies Lose Calls<br className="hidden md:block" /> Before They Realize It
            </h2>
            
            <p className="text-[18px] lg:text-[20px] leading-[1.45] text-gray-300 max-w-[640px] mx-auto">
              Weak trust signals, inactive profiles, and poor service alignment reduce visibility and push calls to competitors.
            </p>
          </motion.div>

          {/* Pipeline Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 mb-10 flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto"
          >
            {['Weak Signals', 'Lower Trust', 'Lower Visibility', 'Fewer Calls'].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#060A12]/90 border border-white/10 shadow-[inset_0_0_10px_rgba(30,167,255,0.03)] backdrop-blur-md relative overflow-hidden group">
                  <div className="w-1.5 h-1.5 rounded-full bg-bp-cta/70 shadow-[0_0_5px_rgba(30,167,255,0.4)]"></div>
                  <span className="text-[11px] md:text-[12px] font-mono text-gray-200 tracking-wide uppercase relative z-10">{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:flex items-center w-8 h-[1px] bg-white/10 relative overflow-hidden">
                    {/* Animated signal pulse */}
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 w-3 bg-bp-cta shadow-[0_0_8px_rgba(30,167,255,0.8)]"
                      animate={{ x: [ -10, 40 ] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                    />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 border-t border-r border-white/30 rotate-45"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Card Grid (1 Row on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px] lg:gap-[20px] w-full">
            {[
              {
                label: "TRUST RISK",
                title: "Review Gap",
                desc: "Competitors often look more trusted.",
                icon: Star
              },
              {
                label: "FRESHNESS RISK",
                title: "Dead Profile",
                desc: "Inactive profiles lose freshness and confidence.",
                icon: Activity
              },
              {
                label: "VISUAL CREDIBILITY",
                title: "Low Trust Visuals",
                desc: "Photos fail to prove real storm expertise.",
                icon: Camera
              },
              {
                label: "SEARCH ALIGNMENT",
                title: "Search Misalignment",
                desc: "Services don’t match high-intent local searches.",
                icon: Target
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="group bg-gradient-to-b from-white/[0.03] to-transparent h-[180px] lg:h-[200px] px-6 py-6 rounded-[22px] border border-white/5 hover:border-bp-cta/30 hover:-translate-y-1.5 transition-all duration-400 relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] hover:shadow-[0_10px_30px_-10px_rgba(30,167,255,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col"
              >
                {/* Active Top Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-bp-cta/10 to-transparent group-hover:via-bp-cta/60 transition-colors duration-400"></div>
                
                {/* Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-bp-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Indicator */}
                <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-bp-cta/0 group-hover:bg-bp-cta/50 transition-colors duration-400"></div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <card.icon className="w-4 h-4 text-bp-cta/60 mb-4 group-hover:text-bp-cta group-hover:drop-shadow-[0_0_8px_rgba(30,167,255,0.8)] transition-all duration-400" />
                  <div className="text-[9px] font-bold tracking-[0.15em] text-bp-cta/70 uppercase mb-2 group-hover:text-bp-cta/90 transition-colors">{card.label}</div>
                  <h3 className="text-[22px] lg:text-[24px] font-bold text-bp-white mb-2 tracking-tight">{card.title}</h3>
                  <p className="text-[16px] text-gray-400 leading-snug line-clamp-2 group-hover:text-gray-300 transition-colors">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Summary Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 max-w-3xl mx-auto bg-[#020408]/90 border border-white/10 rounded-full py-3 px-6 lg:px-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-center gap-3 lg:gap-6 relative overflow-hidden z-30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bp-cta/5 to-transparent"></div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-bp-cta/80 uppercase whitespace-nowrap relative z-10">DIAGNOSTIC SUMMARY</div>
            <div className="hidden md:block w-[1px] h-4 bg-white/20 relative z-10"></div>
            <p className="relative z-10 text-[15px] lg:text-[16px] font-medium text-bp-white/90 tracking-wide text-center md:text-left">
              When nearby competitors look stronger, Google Maps visibility and conversion shift in their favor.
            </p>
          </motion.div>
        </div>

        {/* Center Illuminated Grid Glow (Top Half) */}
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-bp-cta/20 blur-[80px] rounded-full pointer-events-none z-0"></div>

        {/* Vertical Continuity Line (Top Half - starts below summary strip) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-14 z-10">
          <div className="absolute inset-0 bg-bp-cta shadow-[0_0_15px_rgba(30,167,255,0.8)]" />
        </div>
      </section>

      {/* Section 3 — Missed Revenue & Perspective */}
      <section className="relative w-full bg-[#020408] pt-12 pb-12 z-10">
        {/* Center Illuminated Grid Glow (Bottom Half) */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-bp-cta/20 blur-[80px] rounded-full pointer-events-none z-0"></div>

        {/* Vertical Continuity Line (Bottom Half) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-bp-cta to-transparent shadow-[0_0_15px_rgba(30,167,255,0.8)]" />
        </div>

        {/* Background Design for Section 3 Only */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, rgba(30,167,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,167,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px', backgroundPosition: 'center top', maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)' }}></div>

        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-bp-cta/[0.02] to-transparent z-0 pointer-events-none"
        />
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-bp-cta/10 rounded-full opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 border border-bp-cta/5 rounded-full opacity-20 pointer-events-none"></div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-center">
          {/* Left Column: Lost Opportunity Panel */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] font-bold text-bp-white mb-5 tracking-tight">
                Every Week Your Google Maps Profile<br />
                May Be Losing <span className="text-transparent bg-clip-text bg-gradient-to-r from-bp-cta to-blue-400 drop-shadow-[0_0_15px_rgba(30,167,255,0.3)]">Calls, Inspections, and Revenue</span>
              </h2>
            </motion.div>

            <div className="space-y-5 mt-8">
              {/* Layer 1: Demand */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bp-cta/10 border border-bp-cta/20 text-[10px] font-mono text-bp-cta uppercase tracking-widest mb-3">
                  <Activity className="w-3 h-3" /> Local Demand Window
                </div>
                <p className="text-[18px] lg:text-[20px] leading-[1.45] text-bp-support font-medium">After a storm, local search demand spikes fast.</p>
              </motion.div>

              {/* Layer 2: Visibility */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#060a12]/80 border border-bp-cta/20 rounded-xl p-4 shadow-[inset_0_0_20px_rgba(30,167,255,0.05)] flex items-start gap-3"
              >
                <ArrowRight className="w-5 h-5 text-bp-cta shrink-0 mt-0.5" />
                <span className="text-[18px] lg:text-[20px] leading-[1.45] text-bp-white font-medium">Google shows only a handful of local businesses.</span>
              </motion.div>

              {/* Layer 3: Loss */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-3 relative pl-6"
              >
                {/* Technical Guide Line */}
                <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-bp-cta/30 via-bp-cta/10 to-transparent">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-1/3 bg-bp-cta/20 blur-[2px]"></div>
                </div>
                <p className="text-[16px] leading-snug text-bp-support/80">
                  If your profile looks weaker than nearby competitors, those calls often go somewhere else.
                </p>
                <p className="text-[16px] leading-snug text-bp-support/80">
                  If your profile looks weaker than nearby competitors, you may be losing inspection calls, insurance-related jobs, and high-value roof replacements every single week — without realizing how much revenue is slipping away.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Opportunity Impact Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:-mt-2 relative"
          >
            <div className="glass-card p-8 relative overflow-hidden border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.4)] group">
              {/* Internal Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[250px] bg-gradient-to-b from-bp-cta/10 to-transparent blur-[60px] pointer-events-none"></div>

              {/* Layer 1: Heading */}
              <div className="mb-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono text-bp-cta uppercase tracking-widest mb-3 opacity-80">
                  <Target className="w-3 h-3" /> Revenue Opportunity
                </div>
                <h3 className="text-[22px] lg:text-[24px] font-bold text-bp-white tracking-tight">What One Additional Job Can Mean</h3>
              </div>

              {/* Layer 2: Value Block */}
              <div className="relative bg-[#020408]/80 border border-white/10 rounded-2xl py-6 px-8 mb-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 group-hover:border-bp-cta/30 group-hover:shadow-[inset_0_0_30px_rgba(30,167,255,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-b from-bp-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-bp-cta/20 blur-[40px] rounded-full pointer-events-none"></div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative z-10 text-3xl lg:text-4xl font-bold text-bp-white mb-1 drop-shadow-[0_0_20px_rgba(30,167,255,0.4)]"
                >
                  $12,000–$25,000+
                </motion.p>
                <p className="relative z-10 text-bp-support uppercase tracking-widest text-[10px] font-semibold">Average roof replacement value</p>
              </div>

              {/* Layer 3: Logic Stack */}
              <div className="relative z-10">
                {/* Center Connector */}
                <div className="flex flex-col items-center justify-center mb-6 relative">
                  <div className="w-px h-10 bg-gradient-to-b from-bp-cta/50 to-transparent relative">
                    <motion.div
                      animate={{ y: [0, 40, 0], opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-3 bg-bp-cta blur-[1px] rounded-full"
                    />
                  </div>
                  <div className="mt-2 px-3 py-1.5 rounded border border-bp-cta/20 bg-bp-cta/5 text-[11px] md:text-[12px] font-mono text-bp-cta uppercase tracking-widest flex items-center gap-2">
                    Visibility Lift <ArrowRight className="w-3 h-3" /> More Calls <ArrowRight className="w-3 h-3" /> One Booked Job
                  </div>
                </div>

                <div className="text-center mb-5">
                  <p className="text-[16px] leading-snug text-bp-support/80 font-medium mb-3">
                    Even a small lift in visibility can turn into:
                  </p>
                  <div className="space-y-2 max-w-[280px] mx-auto text-left">
                    {[
                      "more inspection calls",
                      "more insurance claim opportunities",
                      "one additional booked job"
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + (i * 0.15) }}
                        className="flex items-center gap-2.5 text-[16px] leading-snug text-bp-support font-medium"
                      >
                        <div className="w-1 h-1 rounded-full bg-bp-cta shadow-[0_0_6px_rgba(30,167,255,0.8)] shrink-0"></div>
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5 mb-6 text-center">
                  <p className="text-[18px] lg:text-[20px] leading-[1.45] text-bp-white font-bold drop-shadow-md">
                    In many cases, that one job alone can cover months of management.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    to="/free-audit"
                    variant="primary"
                    className="w-full h-12 text-[16px] leading-snug shadow-[0_0_20px_rgba(30,167,255,0.2)] hover:shadow-[0_0_30px_rgba(30,167,255,0.4)] transition-all duration-300 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Your Free Google Maps Audit
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 — StormRank System */}
      <section className="relative w-full bg-[#061326] pt-0 pb-0 z-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Smooth transition from previous section (dark top blending into deep brand blue) */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020408] to-[#061326] z-0 pointer-events-none"></div>
          
          {/* Blueprint Depth: Backgrounds and Grids */}
          <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px', backgroundPosition: 'center top' }}></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 15%, #061326 70%), repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(30,167,255,0.02) 8px, rgba(30,167,255,0.02) 9px)' }}></div>
          
          {/* Technical Geometry & Radar Traces */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-bp-cta/4 rounded-full pointer-events-none z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-bp-cta/3 rounded-full pointer-events-none z-0 border-dashed"></div>
          <motion.div 
            animate={{ y: ['-100%', '300%'] }} 
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }} 
            className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-bp-cta/3 to-transparent pointer-events-none z-0" 
          />
          <motion.div 
            animate={{ rotate: [0, 360] }} 
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-bp-cta/2 rounded-full pointer-events-none z-0"
          />
          
          {/* Subtle radial glow behind central hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-bp-cta/8 blur-[80px] rounded-full pointer-events-none z-0"></div>
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full mt-2">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-[1200px] mx-auto mb-6 relative pt-12"
          >
            {/* Animated Line from middle of Section 3 to the dot */}
            <div className="hidden lg:block absolute bottom-[calc(100%-32px)] left-1/2 -translate-x-1/2 w-px h-[500px] bg-gradient-to-b from-transparent via-bp-cta/20 to-bp-cta/80 z-0 overflow-hidden">
              <motion.div 
                animate={{ y: [0, 372, 0], opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }} 
                className="w-[3px] h-32 bg-bp-cta blur-[2px] -ml-[1px]" 
              />
            </div>

            {/* The Dot (Target) */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020408] border border-bp-cta/30 flex items-center justify-center z-20">
               <motion.div 
                 animate={{ opacity: [0.5, 1, 0.5] }} 
                 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
                 className="w-1.5 h-1.5 rounded-full bg-bp-cta shadow-[0_0_10px_rgba(30,167,255,1)]"
               />
            </div>

            <p className="text-[12px] font-medium text-bp-cta/80 uppercase tracking-widest mb-2 mt-2">
              THIS IS EXACTLY WHAT THE STORMRANK SYSTEM IS BUILT TO FIX.
            </p>
            <div className="text-[11px] font-bold tracking-[0.18em] text-bp-cta uppercase mb-2">
              THE STORMRANK SYSTEM
            </div>
            
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] font-bold text-bp-white mb-4 tracking-tight w-full max-w-none lg:max-w-[1200px] mx-auto">
              A 6-part Google Maps growth system built<br className="hidden md:block" /> for storm-damage roofing companies
            </h2>
            
            <p className="text-[16px] lg:text-[17px] leading-[1.4] text-gray-300 max-w-[850px] mx-auto mb-2">
              Most agencies treat Google Maps like a listing. We treat it like a local demand engine. StormRank is the<br className="hidden md:block" /> structured system we use to strengthen the signals that drive visibility, trust, and conversion.
            </p>

            <p className="text-[14px] text-bp-support font-medium">
              The same gaps that reduce calls are the signals StormRank is built to improve.
            </p>
          </motion.div>

          {/* System Diagram Visual - Living Network */}
          <div className="relative max-w-6xl mx-auto mb-6 py-2">
            {/* Central Vertical Spine (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bp-cta/15 to-transparent -translate-x-1/2 z-0">
              <motion.div 
                animate={{ y: ['-100%', '100%'] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }} 
                className="w-full h-1/3 bg-gradient-to-b from-transparent via-bp-cta/40 to-transparent" 
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-8 items-center relative z-10">
              
              {/* Left Column (Pillars 1, 2, 3) */}
              <div className="flex flex-col gap-4 lg:gap-5">
                {[
                  { num: "01", title: "Profile Foundation", desc: "Structure and local relevance", icon: MapPin },
                  { num: "02", title: "Review Momentum", desc: "Trust through recent reviews", icon: Star },
                  { num: "03", title: "Storm Search Positioning", desc: "High-intent local search alignment", icon: Search }
                ].map((pillar, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative group flex items-center gap-3.5 lg:flex-row-reverse lg:text-right bg-[#020408]/40 border border-white/5 rounded-xl p-3.5 w-full max-w-[320px] mx-auto lg:ml-auto lg:mr-0 hover:bg-[#020408]/80 hover:border-bp-cta/20 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                  >
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 -right-5 w-5 h-px bg-bp-cta/20 -translate-y-1/2 overflow-hidden">
                      <motion.div 
                        animate={{ x: [-20, 20] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: i * 0.3 }} 
                        className="w-1/2 h-full bg-gradient-to-r from-transparent via-bp-cta/80 to-transparent" 
                      />
                    </div>
                    
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-[#061326] border border-white/10 flex items-center justify-center group-hover:border-bp-cta/40 group-hover:bg-bp-cta/10 transition-all duration-300 shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] relative z-10">
                      <pillar.icon className="w-4 h-4 text-bp-cta group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 lg:justify-end mb-1">
                        <span className="text-[10px] font-mono font-bold text-bp-cta/70">{pillar.num}</span>
                        <h4 className="text-[15px] font-bold text-bp-white tracking-tight group-hover:text-bp-cta transition-colors duration-300">{pillar.title}</h4>
                      </div>
                      <p className="text-[12px] text-bp-support leading-tight">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center Hub */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative flex justify-center items-center py-4 lg:py-0"
              >
                {/* Outer Glow / Pulse */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
                  className="absolute inset-0 bg-bp-cta/20 blur-[50px] rounded-full pointer-events-none"
                />
                
                {/* Hub Container - Single clear premium engine */}
                <div className="relative w-56 h-56 rounded-full bg-[#020408] border border-bp-cta/30 flex flex-col items-center justify-center p-6 text-center shadow-[0_0_50px_rgba(30,167,255,0.2),inset_0_0_30px_rgba(30,167,255,0.15)] group hover:border-bp-cta/50 hover:shadow-[0_0_80px_rgba(30,167,255,0.3),inset_0_0_40px_rgba(30,167,255,0.2)] transition-all duration-500">
                  
                  {/* Single elegant technical ring */}
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }} 
                    className="absolute inset-3 rounded-full border border-dashed border-bp-cta/20 group-hover:border-bp-cta/40 transition-colors duration-500"
                  />
                  
                  {/* Refined pulse indicator */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#020408] border border-bp-cta/30 flex items-center justify-center z-20">
                     <motion.div 
                       animate={{ opacity: [0.5, 1, 0.5] }} 
                       transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
                       className="w-1.5 h-1.5 rounded-full bg-bp-cta shadow-[0_0_12px_rgba(30,167,255,1)]"
                     />
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-[22px] font-bold text-bp-white leading-tight mb-2 tracking-tight">StormRank<br/>System</h3>
                    <p className="text-[10px] font-mono text-bp-cta/90 uppercase tracking-[0.2em]">Local Demand<br/>Engine</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column (Pillars 4, 5, 6) */}
              <div className="flex flex-col gap-4 lg:gap-5">
                {[
                  { num: "04", title: "Visual Authority", desc: "Stronger visual proof and credibility", icon: Camera },
                  { num: "05", title: "Activity Signals", desc: "Freshness, activity, and movement", icon: Activity },
                  { num: "06", title: "Conversion Layer", desc: "Turn visibility into calls and leads", icon: Target }
                ].map((pillar, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative group flex items-center gap-3.5 bg-[#020408]/40 border border-white/5 rounded-xl p-3.5 w-full max-w-[320px] mx-auto lg:mr-auto lg:ml-0 hover:bg-[#020408]/80 hover:border-bp-cta/20 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                  >
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 -left-5 w-5 h-px bg-bp-cta/20 -translate-y-1/2 overflow-hidden">
                      <motion.div 
                        animate={{ x: [20, -20] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: i * 0.3 }} 
                        className="w-1/2 h-full bg-gradient-to-r from-transparent via-bp-cta/80 to-transparent" 
                      />
                    </div>
                    
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-[#061326] border border-white/10 flex items-center justify-center group-hover:border-bp-cta/40 group-hover:bg-bp-cta/10 transition-all duration-300 shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] relative z-10">
                      <pillar.icon className="w-4 h-4 text-bp-cta group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono font-bold text-bp-cta/70">{pillar.num}</span>
                        <h4 className="text-[15px] font-bold text-bp-white tracking-tight group-hover:text-bp-cta transition-colors duration-300">{pillar.title}</h4>
                      </div>
                      <p className="text-[12px] text-bp-support leading-tight">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[14px] text-bp-support mb-4 font-medium">
              Together, these six layers create a stronger Google Maps presence that compounds over time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2">
              <Button to="/free-audit" variant="primary" className="w-full sm:w-auto h-12 px-8 text-[15px] font-bold shadow-[0_0_20px_rgba(30,167,255,0.3)] hover:shadow-[0_0_30px_rgba(30,167,255,0.5)] transition-shadow">
                Get Your Free Google Maps Audit
              </Button>
              <Button to="/stormrank" variant="outline">
                See the StormRank System in Action
              </Button>
            </div>

            {/* Transition to Next Section */}
            <div ref={transitionMarkerRef} className="mt-8 relative flex flex-col items-center justify-center z-10">
              {/* Vertical line from buttons */}
              <motion.div 
                initial={{ opacity: 0, scaleY: 0 }}
                animate={isTransitionInView ? { opacity: 1, scaleY: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ originY: 0 }}
                className="w-px h-6 bg-gradient-to-b from-transparent to-bp-cta/50"
              ></motion.div>
              
              {/* Label */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={isTransitionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                className="mt-2 mb-2 text-[10px] font-bold tracking-[0.3em] text-bp-cta/80 uppercase"
              >
                StormRank In Execution
              </motion.div>

              {/* Vertical line continuing to dot */}
              <motion.div 
                initial={{ opacity: 0, scaleY: 0 }}
                animate={isTransitionInView ? { opacity: 1, scaleY: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                style={{ originY: 0 }}
                className="w-px h-8 bg-gradient-to-b from-bp-cta/50 to-bp-cta/80"
              ></motion.div>

              {/* Central Circle with pulsing glow */}
              <motion.div 
                initial={{ scale: 0.7, opacity: 0 }}
                animate={isTransitionInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.22, ease: "easeOut" }}
                className="relative w-4 h-4 rounded-full bg-bp-cta shadow-[0_0_25px_rgba(30,167,255,0.8)] z-10 my-1 flex items-center justify-center"
              >
                {/* Idle Pulse & Glow */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.08, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.4, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-full bg-bp-cta blur-[4px]"
                />
                
                {/* Optional Ripple */}
                <motion.div 
                  animate={{ 
                    scale: [1, 2.5],
                    opacity: [0.3, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.8, 
                    ease: "easeOut" 
                  }}
                  className="absolute inset-0 rounded-full border border-bp-cta/40"
                />

                {/* Horizontal line extending from the dot */}
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isTransitionInView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  style={{ originX: 0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-px bg-gradient-to-r from-transparent via-bp-cta/30 to-transparent z-[-1]"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[2px] bg-bp-cta/40 blur-[3px]"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6 — How It Works */}
      <section ref={howItWorksRef} className="relative w-full pt-0 pb-16 bg-[#061326]">
        {/* Smooth Background Continuity */}
        <div className="absolute inset-0 bg-[#061326] z-0 pointer-events-none"></div>

        {/* Extended Backgrounds from Section 4 */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-[0.02]" 
          style={{ 
            y: backgroundYHowItWorks,
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)', 
            backgroundSize: '32px 32px', 
            backgroundPosition: 'center top', 
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', 
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' 
          }}
        ></motion.div>

        {/* Headline Light Effect */}
        <motion.div 
          style={{ y: backgroundYHowItWorks }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-bp-cta/5 to-transparent blur-[80px] rounded-full pointer-events-none z-0"
        ></motion.div>

        <div className="px-6 max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center max-w-3xl mx-auto mt-8 mb-12 relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-[12px] font-bold tracking-[0.2em] text-bp-cta uppercase mb-4"
            >
              How StormRank Works
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 24 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              className="text-3xl lg:text-5xl font-bold mb-6 text-bp-white tracking-tight"
            >
              How We Turn Google Maps Into a Demand Engine
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 18 }}
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              className="text-[16px] text-bp-support/90 leading-relaxed"
            >
              This is the operating process we use to move from profile gaps to stronger visibility, trust, and more inspection calls.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Horizontal Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-0 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-bp-cta/50 to-transparent z-0 overflow-hidden">
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isHowItWorksInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                style={{ originX: 0.5 }}
                className="w-full h-full bg-bp-cta/50 relative"
              >
                {/* Animated signal on the line */}
                <motion.div 
                  animate={{ left: ['0%', '100%'] }} 
                  transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }} 
                  className="absolute top-1/2 -translate-y-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-bp-cta to-transparent" 
                />
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {[
              { 
                step: "01", 
                label: "SCAN", 
                title: "Audit", 
                desc: "We identify where your profile is losing visibility, trust, and call opportunities — and deliver a short video breakdown of what we’d fix first.", 
                output: "Clear profile diagnosis",
                icon: Radar
              },
              { 
                step: "02", 
                label: "DEPLOY", 
                title: "Setup", 
                desc: "We correct the foundation, improve local relevance, and strengthen the signals that influence rankings and calls.", 
                output: "Stronger ranking and trust signals",
                icon: Layers
              },
              { 
                step: "03", 
                label: "OPERATE", 
                title: "Growth", 
                desc: "We operate the ongoing system that drives review momentum, profile activity, optimization, and performance visibility over time.", 
                output: "Compounding visibility and calls",
                icon: Activity
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 28, scale: 0.985 }}
                animate={isHowItWorksInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.65, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Node Connection Dot (Desktop) */}
                <motion.div 
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={isHowItWorksInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
                  className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#020408] border border-bp-cta/50 z-20 items-center justify-center -translate-y-1/2 shadow-[0_0_10px_rgba(30,167,255,0.4)]"
                >
                  <motion.div 
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    className="w-1.5 h-1.5 rounded-full bg-bp-cta shadow-[0_0_8px_rgba(30,167,255,0.9)]"
                  ></motion.div>
                </motion.div>

                {/* Vertical drop line from dot to panel */}
                <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-bp-cta/30 to-transparent z-10"></div>

                {/* System Node Panel */}
                <div className="w-full bg-[#020408]/60 border border-bp-cta/10 hover:border-bp-cta/40 rounded-xl p-6 lg:px-8 lg:py-6 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(30,167,255,0.15)] transition-all duration-300 relative flex flex-col items-center h-full mt-6 overflow-hidden">
                  {/* Subtle Idle Shimmer */}
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-bp-cta/[0.03] to-transparent pointer-events-none"
                  />
                  
                  {/* Hover Backlight */}
                  <div className="absolute inset-0 bg-bp-cta/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Subtle Top Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-bp-cta/30 to-transparent"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-bp-cta/5 blur-[20px] rounded-full pointer-events-none"></div>

                  {/* 1. Large Number */}
                  <div className="text-4xl lg:text-5xl font-bold font-mono text-bp-white/10 mb-3 leading-none select-none group-hover:text-bp-white/20 transition-colors duration-300">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-bp-cta/5 border border-bp-cta/20 flex items-center justify-center text-bp-cta mb-3 shadow-[0_0_15px_rgba(30,167,255,0.1)] group-hover:bg-bp-cta/10 group-hover:border-bp-cta/40 group-hover:text-bp-white transition-all duration-300">
                    <item.icon className="w-4 h-4 lg:w-5 lg:h-5 stroke-[1.5]" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow w-full text-center items-center">
                    {/* 2. Small technical label */}
                    <div className="text-[10px] lg:text-[11px] font-bold tracking-[0.25em] text-bp-cta/80 uppercase mb-2">
                      {item.label}
                    </div>
                    {/* 3. Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-bp-white mb-2 group-hover:brightness-125 transition-all duration-300">{item.title}</h3>
                    {/* 4. Description */}
                    <p className="text-[14px] lg:text-[15px] text-bp-support/80 leading-relaxed mb-5 flex-grow">
                      {item.desc}
                    </p>
                    
                    {/* 5. Output Micro-line */}
                    <div className="pt-3 border-t border-white/5 w-full mt-auto flex justify-center">
                      <div className="flex items-center gap-2 text-[12px] lg:text-[13px] text-bp-cta/90 font-medium tracking-wide">
                        <div className="w-1.5 h-1.5 rounded-full bg-bp-cta shadow-[0_0_8px_rgba(30,167,255,0.8)]"></div>
                        Output: {item.output}
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Point on Bottom (for Audit card only) - Moved outside overflow-hidden */}
                {i === 0 && (
                  <>
                    <div className="hidden lg:flex absolute bottom-0 left-8 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#020408] border border-bp-cta/60 z-50 items-center justify-center shadow-[0_0_15px_rgba(30,167,255,0.6)]">
                      <div className="w-2 h-2 rounded-full bg-bp-cta shadow-[0_0_10px_rgba(30,167,255,1)]"></div>
                    </div>
                    
                    {/* Animated Connection Line going down */}
                    <div className="hidden lg:block absolute top-full left-8 w-[2px] h-[420px] bg-bp-cta/20 z-40 overflow-hidden pointer-events-none">
                      {/* Moving Glow Trace */}
                      <motion.div
                        animate={{ top: ['-20%', '120%'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute w-full h-64 bg-gradient-to-b from-transparent via-bp-cta to-transparent shadow-[0_0_25px_rgba(30,167,255,0.9)]"
                      />
                      {/* Ambient Light around the glow */}
                      <motion.div
                        animate={{ top: ['-20%', '120%'] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute left-1/2 -translate-x-1/2 w-32 h-64 bg-bp-cta/10 blur-3xl"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Section 7 — Audit Command Panel */}
      <section className="relative w-full pt-8 pb-0 bg-[#061326]">
        
        <div className="px-6 max-w-7xl mx-auto w-full relative z-10">
          {/* Header Area */}
          <div className="text-center max-w-4xl mx-auto mb-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] font-bold tracking-[0.2em] text-bp-cta uppercase mb-3"
            >
              AUDIT PREVIEW // GOOGLE MAPS SIGNAL ANALYSIS
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl font-bold mb-4 text-bp-white tracking-tight"
            >
              How We Diagnose Missed Calls, Weak Trust, and Lost Google Maps Demand
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[16px] lg:text-[18px] text-bp-support/90 leading-relaxed"
            >
              We identify where visibility, trust, and inspection calls are being lost on Google Maps.
            </motion.p>
          </div>

          {/* Panel Activation Label */}
          <div className="flex justify-center mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="px-4 py-1.5 rounded-t-xl bg-[#01040a] border-x border-t border-bp-cta/30 text-[10px] font-bold tracking-[0.2em] text-bp-cta uppercase relative z-20"
            >
              SIGNAL DELTA DETECTED
            </motion.div>
          </div>

          {/* Main Audit Command Panel */}
          <div className="relative">
            {/* Background Glow behind the panel */}
            <div className="absolute inset-0 -m-8 bg-bp-cta/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
            
            <motion.div 
              initial={{ opacity: 0, scaleY: 0.95, transformOrigin: 'top' }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#01040a] border border-bp-cta/20 rounded-2xl shadow-[inset_0_2px_20px_rgba(0,0,0,0.8)] group z-10"
            >
            {/* New Point on Top (Intake) aligned with vertical line */}
            <div className="hidden lg:flex absolute top-0 left-8 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#01040a] border border-bp-cta/60 z-50 items-center justify-center shadow-[0_0_15px_rgba(30,167,255,0.6)]">
              <div className="w-2 h-2 rounded-full bg-bp-cta shadow-[0_0_10px_rgba(30,167,255,1)] animate-pulse"></div>
            </div>

            {/* Subtle Technical Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-grid-pattern"></div>
            
            {/* Soft Glow at Bottom Center Only */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[50%] h-40 bg-bp-cta/15 blur-[80px] rounded-full pointer-events-none"></div>

            {/* Panel Content */}
            <div className="relative z-10">
              {/* Snapshot Block */}
              <div className="relative px-6 py-4 flex flex-wrap items-center justify-between gap-4 bg-white/[0.01] overflow-hidden rounded-t-2xl">
                {/* Active Scan Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div 
                    animate={{ x: ['-100%', '500%'] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-64 bg-gradient-to-r from-transparent via-bp-cta/[0.18] to-transparent -skew-x-12"
                  />
                </div>

                <div className="relative flex items-center gap-3">
                  <Radar className="w-5 h-5 text-bp-cta animate-pulse" />
                  <span className="text-[12px] font-bold text-bp-white tracking-wider uppercase">Google Maps Signal Snapshot</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-bp-support uppercase tracking-wider">Trust Layer:</span>
                    <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">Low</span>
                  </div>
                  <div className="w-px h-3 bg-white/10 hidden sm:block"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-bp-support uppercase tracking-wider">Activity State:</span>
                    <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">Weak</span>
                  </div>
                  <div className="w-px h-3 bg-white/10 hidden sm:block"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-bp-support uppercase tracking-wider">Service Alignment:</span>
                    <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider">Partial</span>
                  </div>
                  <div className="w-px h-3 bg-white/10 hidden sm:block"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-bp-support uppercase tracking-wider">Competitive Pressure:</span>
                    <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">High</span>
                  </div>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {/* 3 Columns Grid */}
              <div className="relative grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                {/* Circuit Flow Connectors (Desktop Only) */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                  {/* Connector 1-2 */}
                  <div className="absolute top-[4.5rem] left-[33.33%] -translate-x-1/2 flex items-center">
                    <div className="w-8 h-[1px] bg-white/20 shadow-[0_0_8px_rgba(30,167,255,0.2)]"></div>
                    <div className="w-2 h-2 rounded-full bg-bp-cta shadow-[0_0_12px_rgba(30,167,255,0.8)]"></div>
                    <div className="w-8 h-[1px] bg-white/20 shadow-[0_0_8px_rgba(30,167,255,0.2)]"></div>
                  </div>
                  {/* Connector 2-3 */}
                  <div className="absolute top-[4.5rem] left-[66.66%] -translate-x-1/2 flex items-center">
                    <div className="w-8 h-[1px] bg-white/20 shadow-[0_0_8px_rgba(30,167,255,0.2)]"></div>
                    <div className="w-2 h-2 rounded-full bg-bp-cta shadow-[0_0_12px_rgba(30,167,255,0.8)]"></div>
                    <div className="w-8 h-[1px] bg-white/20 shadow-[0_0_8px_rgba(30,167,255,0.2)]"></div>
                  </div>
                </div>

                {/* Column 1: Current Signal State */}
                <div className="relative p-6 lg:p-7 flex flex-col gap-6 z-10 opacity-75">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(239,68,68,0.1)]">
                        <ShieldAlert className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="text-[14px] font-bold text-bp-white uppercase tracking-wider">Current Signal State</h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-3.5">
                    {[
                      "22 reviews",
                      "No recent posts",
                      "Weak photo trust layer",
                      "Incomplete service structure",
                      "Limited proof of activity"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <X className="w-4 h-4 text-red-400/60 mt-0.5 shrink-0" />
                        <span className="text-[14px] text-bp-support leading-[1.4] group-hover/item:text-bp-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Nearby Competitor Advantage */}
                <div className="relative p-6 lg:p-7 flex flex-col gap-6 bg-white/[0.01] z-10 overflow-hidden">
                  {/* Central Focus Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-bp-cta/[0.08] blur-[50px] rounded-full pointer-events-none"></div>
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-bp-cta/10 border border-bp-cta/20 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(30,167,255,0.1)]">
                        <TrendingUp className="w-5 h-5 text-bp-cta" />
                      </div>
                      <h3 className="text-[14px] font-bold text-bp-white uppercase tracking-wider">Nearby Competitor Advantage</h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-3.5">
                    {[
                      "480+ reviews",
                      "Active profile presence",
                      "Stronger visual authority",
                      "Better service alignment",
                      "Higher trust at first glance"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <Check className="w-4 h-4 text-bp-cta/60 mt-0.5 shrink-0" />
                        <span className="text-[14px] text-bp-support leading-[1.4] group-hover/item:text-bp-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Likely Demand Impact */}
                <div className="relative p-6 lg:p-7 flex flex-col gap-6 z-10 shadow-[inset_0_0_40px_rgba(30,167,255,0.07)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(249,115,22,0.1)]">
                        <Activity className="w-5 h-5 text-orange-400" />
                      </div>
                      <h3 className="text-[14px] font-bold text-bp-white uppercase tracking-wider">Likely Demand Impact</h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-3.5">
                    {[
                      "Lower click confidence",
                      "Reduced local visibility",
                      "Fewer inspection calls",
                      "More storm demand going elsewhere",
                      "Lost roofing revenue over time"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <AlertCircle className="w-4 h-4 text-orange-400/60 mt-0.5 shrink-0" />
                        <span className="text-[14px] text-bp-support leading-[1.4] group-hover/item:text-bp-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Diagnostic Conclusion */}
              <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 text-center">
                <p className="text-[12px] lg:text-[13px] text-bp-support font-medium tracking-wide">
                  <span className="text-bp-cta font-bold uppercase mr-2">Diagnostic Conclusion:</span>
                  This is how demand leaks: weaker trust signals → lower visibility → fewer calls → more jobs captured by competitors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

          {/* CTA Button */}
          <div className="mt-8 flex flex-col items-center">
            <Button 
              to="/free-audit" 
              variant="primary"
              className="h-12 px-8 text-[16px] font-bold shadow-[0_0_30px_rgba(30,167,255,0.2)] hover:shadow-[0_0_40px_rgba(30,167,255,0.4)] transition-all duration-300 group/btn"
            >
              <span className="flex items-center gap-2">
                See Where Your Google Maps Profile Is Losing Calls
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            {/* Vertical Line starting from button */}
            <div className="w-px h-12 bg-gradient-to-b from-bp-cta to-[#3BA4FF]/20 shadow-[0_0_8px_rgba(59,164,255,0.2)]"></div>
          </div>
        </div>
      </section>

      {/* Transition Block */}
      <div className="relative w-full h-[80px] flex flex-col items-center justify-start overflow-hidden bg-[#061326]">
        {/* Diffused dark glow to avoid horizontal concentration - extremely soft and organic */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,8,23,0.6)_0%,transparent_90%)] blur-[40px] pointer-events-none"></div>
        
        {/* Center Vertical Line - goes from top to microcopy */}
        <div className="absolute top-0 left-1/2 w-px h-[30px] bg-[#3BA4FF]/20 shadow-[0_0_8px_rgba(59,164,255,0.4)]"></div>
        
        {/* Microcopy */}
        <div className="relative z-10 text-center pt-[30px] space-y-4">
          <div className="text-[13px] text-[#3BA4FF] font-medium tracking-wide">
            Not every roofing company is structurally positioned to capture demand.
          </div>
        </div>

        {/* Center Vertical Line - goes from microcopy to bottom */}
        <div className="absolute bottom-0 left-1/2 w-px h-[20px] bg-[#3BA4FF]/20 shadow-[0_0_8px_rgba(59,164,255,0.4)]"></div>
      </div>

      {/* Section 8 — Who StormRank Is Built For */}
      <section ref={section8Ref} className="relative w-full py-0 overflow-hidden bg-[#061326]">
        {/* Background Grid with Vignette */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            y: backgroundY8
          }}
          animate={{
            backgroundPosition: ["0px 0px", "0px 40px"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        {/* Deep Cinematic Vignette */}
        <motion.div style={{ y: backgroundY8 }} className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#061326_100%)]"></motion.div>
        <motion.div style={{ y: backgroundY8 }} className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#061326] to-transparent z-0 pointer-events-none"></motion.div>
        <motion.div style={{ y: backgroundY8 }} className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#061326] to-transparent z-0 pointer-events-none"></motion.div>

        <div className="max-w-[1280px] mx-auto min-h-[500px] max-h-[760px] flex flex-col justify-start pt-4 px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView8 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-[12px] font-bold tracking-[0.2em] text-bp-cta uppercase"
            >
              INITIATING FIT ANALYSIS
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView8 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-3xl lg:text-5xl font-bold text-bp-white tracking-tight"
            >
              Who This System Actually Works For
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView8 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="text-[16px] lg:text-[18px] text-bp-support/90 leading-relaxed max-w-[700px] mx-auto"
            >
              Not every roofing company is positioned to convert visibility into demand. This system works best when the right signals are already in place.
            </motion.p>
          </div>

          {/* Comparison Board */}
          <div className="max-w-4xl mx-auto w-full relative">
            {/* Column Titles */}
            <div className="grid grid-cols-3 mb-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView8 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="text-right pr-2 relative"
              >
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-24 h-8 bg-bp-cta/10 blur-xl rounded-full pointer-events-none"></div>
                <span className="relative z-10 text-[14px] font-bold text-bp-cta uppercase tracking-wider">Strong Fit</span>
              </motion.div>
              <div></div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={isInView8 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="text-left pl-2 relative"
              >
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-24 h-8 bg-red-500/10 blur-xl rounded-full pointer-events-none"></div>
                <span className="relative z-10 text-[14px] font-bold text-red-400 uppercase tracking-wider">Weak Fit</span>
              </motion.div>
            </div>

            {/* Center Axis Line */}
            <div className="absolute left-1/2 top-[48px] bottom-0 w-px -translate-x-1/2 overflow-hidden">
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={isInView8 ? { height: "100%", opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full bg-[#3BA4FF]/20 shadow-[0_0_15px_rgba(59,164,255,0.3)] relative"
              >
                {/* Continuous Glow Loop */}
                <motion.div 
                  animate={{ opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#3BA4FF]/40 blur-[2px]"
                />
              </motion.div>
            </div>

            {/* Rows */}
            <div className="space-y-0">
              {[
                { left: "Actively doing storm-related jobs", right: "Businesses outside local service industries" },
                { left: "Wants inspection calls, not just traffic", right: "Companies expecting instant #1 rankings" },
                { left: "Willing to improve reviews and profile quality", right: "Teams unwilling to improve reviews or profile activity" },
                { left: "Understands local competition", right: "Businesses looking for \"set and forget\" marketing" },
                { left: "Already closing jobs but want more volume", right: "Companies without real service demand" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 items-center h-[68px] relative group cursor-default">
                  {/* Left Column */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView8 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + (i * 0.08), ease: "easeOut" }}
                    className="text-right pr-2"
                  >
                    <div className="inline-flex items-center gap-4 py-2 px-4 rounded-lg transition-all duration-300 group-hover:translate-x-1">
                      <span className="text-[16px] text-white font-semibold tracking-tight leading-snug group-hover:text-bp-cta group-hover:brightness-125 transition-all duration-300">
                        {row.left}
                      </span>
                      <Check className="w-4 h-4 text-bp-cta/80 shadow-[0_0_10px_rgba(30,167,255,0.4)]" />
                    </div>
                  </motion.div>

                  {/* Center Node */}
                  <div className="flex justify-center relative z-10">
                    <div className="relative">
                      <motion.div 
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={isInView8 ? { 
                          scale: [1, 1.08, 1],
                          opacity: 1,
                          boxShadow: [
                            '0 0 10px rgba(30,167,255,0.5)',
                            '0 0 20px rgba(30,167,255,0.8)',
                            '0 0 10px rgba(30,167,255,0.5)'
                          ]
                        } : {}}
                        transition={isInView8 ? {
                          scale: { duration: 2.5 + (i * 0.15), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                          opacity: { duration: 0.4, delay: 0.1 + (i * 0.1), ease: "easeOut" },
                          boxShadow: { duration: 2.5 + (i * 0.15), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }
                        } : {}}
                        className="w-2.5 h-2.5 rounded-full bg-bp-cta border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all duration-300"
                      ></motion.div>
                      <motion.div 
                        animate={isInView8 ? {
                          scale: [1.5, 1.8, 1.5],
                          opacity: [0.2, 0.4, 0.2]
                        } : {}}
                        transition={{ duration: 2.5 + (i * 0.15), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                        className="absolute inset-0 rounded-full bg-bp-cta/20 blur-md"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView8 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 + (i * 0.08), ease: "easeOut" }}
                    className="text-left pl-2"
                  >
                    <div className="py-2 px-4 transition-all duration-300 group-hover:-translate-x-1">
                      <span className="text-[16px] text-white font-medium tracking-tight leading-snug group-hover:text-red-400 group-hover:opacity-60 transition-all duration-300">{row.right}</span>
                    </div>
                  </motion.div>
                  
                  {/* Subtle Row Highlight */}
                  <div className="absolute inset-0 bg-bp-cta/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>

                  {/* Subtle Row Separator */}
                  {i < 4 && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 relative z-30">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[700px] mx-auto flex flex-col items-center justify-center relative z-10"
            >
              <p className="text-[16px] lg:text-[18px] text-bp-support/90 leading-relaxed text-center tracking-tight">
                Without strong alignment, visibility never converts into real demand.
              </p>
            </motion.div>
            
            {/* Glow behind (No vertical line) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-bp-cta/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          </div>

        </div>
      </section>

      {/* Section 9 — Decision Layer */}
      <div className="relative bg-gradient-to-b from-transparent to-[#020408]" ref={decisionSectionRef}>
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y: backgroundYDecision }}
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,167,255,0.1)_0%,transparent_70%)]"></div>
        </motion.div>

        <div className="flex flex-col items-center py-10 relative" ref={decisionTransitionRef}>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-bp-cta/30 to-transparent relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isDecisionTransitionInView ? { 
                scale: [0.8, 1.2, 1],
                opacity: 1,
                boxShadow: ["0 0 0px rgba(30,167,255,0)", "0 0 20px rgba(30,167,255,0.6)", "0 0 10px rgba(30,167,255,0.4)"]
              } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-bp-cta z-10"
            />
            
            <div className="absolute top-1/2 left-6 -translate-y-1/2 flex items-center gap-4 whitespace-nowrap">
              <div className="w-8 h-px bg-bp-cta/30"></div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-bp-cta/60 uppercase">
                DECISION LAYER // PRE-AUDIT QUESTIONS
              </span>
            </div>
          </div>
        </div>

        <section className="px-6 max-w-7xl mx-auto w-full mb-0 relative">
          {/* Background Scan Line */}
        <motion.div 
          initial={{ x: '-100%' }}
          whileInView={{ x: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bp-cta/20 to-transparent z-0 pointer-events-none"
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-8 relative z-10"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-bp-white">Decision Layer</h2>
          <p className="text-lg text-bp-support">
            Clear answers to the questions roofing companies usually ask before requesting a Google Maps audit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 relative z-10">
          {/* Left Column: Navigation Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 space-y-3"
          >
            {decisionQuestions.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.08) }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveQuestionIndex(index)}
                className={`w-full group relative flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left ${
                  activeQuestionIndex === index 
                    ? 'bg-bp-cta/10 border-bp-cta/40 shadow-[0_0_20px_rgba(30,167,255,0.1)]' 
                    : 'bg-[#020408]/40 border-white/5 hover:border-white/10 hover:bg-[#020408]/60 hover:shadow-[0_0_15px_rgba(30,167,255,0.05)]'
                }`}
              >
                {/* Active Indicator Bar */}
                {activeQuestionIndex === index && (
                  <motion.div 
                    layoutId="activeBar"
                    className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-bp-cta rounded-r-full"
                  />
                )}

                <span className={`font-mono text-sm font-bold transition-colors duration-300 ${
                  activeQuestionIndex === index ? 'text-bp-cta' : 'text-bp-white/20 group-hover:text-bp-white/40'
                }`}>
                  {item.id}
                </span>
                
                <span className={`text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${
                  activeQuestionIndex === index ? 'text-bp-white' : 'text-bp-support/60 group-hover:text-bp-support'
                }`}>
                  {item.label}
                </span>

                {/* Signal Dot */}
                <div className={`ml-auto w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeQuestionIndex === index 
                    ? 'bg-bp-cta shadow-[0_0_8px_rgba(30,167,255,0.8)]' 
                    : 'bg-white/10'
                }`} />
              </motion.button>
            ))}
          </motion.div>

          {/* Right Column: Response Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-bp-cta/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="bg-bp-cta/10 border-bp-cta/40 border rounded-xl shadow-[0_0_20px_rgba(30,167,255,0.1)] p-6 lg:p-8 relative overflow-hidden min-h-[350px] flex flex-col">
              {/* Header Info */}
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="text-[10px] font-bold tracking-[0.2em] text-bp-cta/60 uppercase">QUERY RESPONSE</div>
                <div className="font-mono text-xs text-bp-support/60">
                  <span className="text-bp-cta font-bold">{String(activeQuestionIndex + 1).padStart(2, '0')}</span> / 06
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuestionIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-grow flex flex-col"
                >
                  <h3 className="text-xl lg:text-2xl font-bold text-bp-white mb-4 leading-tight">
                    {decisionQuestions[activeQuestionIndex].question}
                  </h3>
                  
                  <div className="space-y-4 text-bp-support text-sm lg:text-base leading-relaxed mb-6">
                    {decisionQuestions[activeQuestionIndex].answer.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 text-bp-cta/90 mb-4">
                      <div className="w-1 h-1 rounded-full bg-bp-cta"></div>
                      <span className="text-[10px] font-bold tracking-wide uppercase italic">SIGNAL LINE</span>
                      <p className="text-xs lg:text-sm font-medium text-bp-white/80">{decisionQuestions[activeQuestionIndex].signalLine}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {decisionQuestions[activeQuestionIndex].tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-bp-support/80 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center max-w-2xl mx-auto relative" ref={unsureSectionRef}>
          {/* Parallax Background Glow */}
          <motion.div 
            style={{ y: backgroundYUnsure }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-bp-cta/15 blur-[100px] rounded-full pointer-events-none -z-10"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10"
          >
            <h3 className="text-xl font-bold text-bp-white mb-4">Still unsure?</h3>
            <p className="text-bp-support mb-10 leading-relaxed">
              We can review your profile and show you where visibility, trust, and conversion may be leaking.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }}>
                <Button 
                  to="/free-audit" 
                  variant="primary" 
                  className="w-full sm:w-auto h-12 px-8 text-[15px] font-bold shadow-[0_0_20px_rgba(30,167,255,0.3)] hover:shadow-[0_0_30px_rgba(30,167,255,0.5)] transition-all duration-300"
                >
                  Get Your Free Google Maps Audit
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Button 
                  to="/stormrank" 
                  variant="outline" 
                  className="w-full sm:w-auto h-12 px-8 text-[15px] font-bold transition-all duration-300"
                >
                  See How StormRank Works
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Central Vertical Line Transition */}
          <div className="relative flex flex-col items-center mt-8 h-16 overflow-visible">
            {/* Subtle Light Flow (Still Unsure -> Investment) */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle_at_50%_20%,rgba(30,167,255,0.12)_0%,transparent_70%)] pointer-events-none -z-20"></div>
            
            {/* Horizontal Light Spread at Headline Level */}
            <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[1000px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(30,167,255,0.08)_0%,transparent_80%)] pointer-events-none -z-20"></div>

            {/* Blue Glow / Shadow that starts here and intensifies at Investment title */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-b from-bp-cta/5 via-bp-cta/10 to-bp-cta/20 blur-[80px] opacity-40 pointer-events-none -z-10"></div>
            
            {/* Subtle Vertical Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-bp-cta/10 blur-[30px] opacity-30 pointer-events-none"></div>
            
            <div className="w-px h-full bg-gradient-to-b from-bp-cta/40 to-bp-cta relative">
              {/* Energy Flow Animation */}
              <motion.div 
                animate={{ y: ['0%', '100%'], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-bp-cta to-transparent"
              />

              {/* Transition Node */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ 
                  scale: [0.8, 1.2, 1],
                  opacity: 1,
                }}
                transition={{ 
                  duration: 1, 
                  ease: "easeOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-bp-cta shadow-[0_0_15px_rgba(30,167,255,0.6)] z-10"
              >
                {/* Continuous Pulse Effect */}
                <motion.div 
                  animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0.3, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-bp-cta/50"
                />
                
                {/* Pulse Effect */}
                <motion.div 
                  animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-bp-cta"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Section 10 — Investment */}
      <section className="relative pt-4 pb-24 overflow-visible bg-gradient-to-b from-[#020408] to-[#020611] min-h-[100vh] flex flex-col justify-center" ref={investmentRef}>
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.08] pointer-events-none"></div>
        
        {/* Dynamic System Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,167,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
        <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none"></div>
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-bp-cta rounded-full blur-[1px]"
            style={{
              top: `${10 + i * 8}%`,
              left: `${5 + i * 8}%`
            }}
          />
        ))}

        {/* Central Vertical Line System */}
        <div className="absolute top-[450px] bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-bp-cta via-bp-cta/20 to-bp-cta/5 z-0">
          {/* Subtle Vertical Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-bp-cta/5 blur-[20px] pointer-events-none"></div>
          
          {/* Animated downward flow */}
          <motion.div 
            animate={{ y: [0, 800], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-bp-cta to-transparent"
          />
        </div>

        <div className="px-6 max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInvestmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-bp-white relative inline-block">
                Investment Range
                <div className="absolute inset-0 bg-bp-cta/10 blur-xl -z-10 rounded-full"></div>
              </h2>
              <p className="text-lg text-bp-support">
                Most companies fall within one of these ranges based on how strong their current visibility and demand signals are.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-8 relative">
            {/* Horizontal Connection Lines (Visual only, hidden on mobile) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-bp-cta/20 to-transparent -translate-y-1/2 hidden lg:block pointer-events-none"></div>

            {/* Signal Panel 1: FOUNDATION */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInvestmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-[#050a18]/80 border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:border-bp-cta/30"
            >
              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-bp-cta/0 group-hover:bg-bp-cta/[0.02] transition-colors"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-bp-cta/5 blur-[40px] rounded-full"></div>
              
              <div className="relative z-10 w-full">
                <span className="text-[10px] font-bold tracking-[0.3em] text-bp-support/60 uppercase block mb-2">LOW SIGNAL</span>
                <h3 className="text-xl font-bold text-bp-white mb-6 tracking-widest">FOUNDATION</h3>
                
                <div className="mb-8 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                  <p className="text-lg font-bold text-bp-white/80">$1,000 setup</p>
                  <p className="text-3xl font-bold text-bp-cta mt-1">$897/month</p>
                </div>
                
                <p className="text-sm text-bp-support leading-relaxed">For companies needing to fix core profile issues</p>
              </div>

              {/* System Connection Node */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-l from-bp-cta/40 to-transparent hidden lg:block"></div>
            </motion.div>

            {/* Signal Panel 2: GROWTH */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInvestmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="group bg-[#081229]/90 border border-bp-cta/20 p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:border-bp-cta/50 shadow-[0_0_30px_rgba(30,167,255,0.05)]"
            >
              {/* Medium Glow */}
              <div className="absolute inset-0 bg-bp-cta/[0.02] group-hover:bg-bp-cta/[0.05] transition-colors"></div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-bp-cta/10 blur-[50px] rounded-full"></div>
              
              <div className="relative z-10 w-full">
                <span className="text-[10px] font-bold tracking-[0.3em] text-bp-cta uppercase block mb-2">ACTIVE SIGNAL</span>
                <h3 className="text-xl font-bold text-bp-white mb-6 tracking-widest">GROWTH</h3>
                
                <div className="mb-8 p-4 bg-bp-cta/[0.03] rounded-xl border border-bp-cta/10">
                  <p className="text-lg font-bold text-bp-white/80">$1,800 setup</p>
                  <p className="text-3xl font-bold text-bp-cta mt-1">$1,497/month</p>
                </div>
                
                <p className="text-sm text-bp-support leading-relaxed">For companies ready to generate consistent call flow</p>
              </div>

              {/* System Connection Nodes */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-bp-cta/40 to-transparent hidden lg:block"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-l from-bp-cta/40 to-transparent hidden lg:block"></div>
            </motion.div>

            {/* Signal Panel 3: AUTHORITY */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInvestmentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-[#0a081a]/90 border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:border-indigo-500/30"
            >
              {/* Stronger Glow */}
              <div className="absolute inset-0 bg-indigo-500/[0.02] group-hover:bg-indigo-500/[0.05] transition-colors"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full"></div>
              
              <div className="relative z-10 w-full">
                <span className="text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase block mb-2">DOMINANT SIGNAL</span>
                <h3 className="text-xl font-bold text-bp-white mb-6 tracking-widest">AUTHORITY</h3>
                
                <div className="mb-8 p-4 bg-indigo-500/[0.03] rounded-xl border border-indigo-500/10">
                  <p className="text-lg font-bold text-bp-white/80">$3,500 setup</p>
                  <p className="text-3xl font-bold text-indigo-400 mt-1">$2,797/month</p>
                </div>
                
                <p className="text-sm text-bp-support leading-relaxed">For companies scaling visibility and territory control</p>
              </div>

              {/* System Connection Node */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-bp-cta/40 to-transparent hidden lg:block"></div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInvestmentInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="text-center max-w-2xl mx-auto relative z-10"
          >
            <div className="inline-block bg-[#020611] px-4 py-2 mb-2 rounded-lg">
              <p className="text-bp-white/90 text-sm">
                Every company we work with is assessed individually.
                We recommend the right level after identifying where your profile is losing calls.
              </p>
            </div>
            <div className="block">
              <div className="inline-block bg-[#020611] px-4 py-1 mb-8 rounded-lg italic">
                <p className="text-xs text-bp-support/60">
                  Even one additional roof replacement job can cover months of management.
                </p>
              </div>
            </div>
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-bp-cta/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Button to="/free-audit" variant="primary" className="relative z-10 px-10 py-4 text-lg transition-all">
                Get Your Google Maps Audit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 11 — Final CTA */}
      <section 
        ref={finalCtaRef}
        className="relative w-full pb-12 overflow-visible"
      >
        {/* Section-to-Section Transition Layer 1: Background Bleed */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#020611] to-transparent z-0 pointer-events-none"></div>
        
        {/* Transition Layer 2: Vertical Central Beam */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 h-64 w-px bg-gradient-to-b from-bp-cta/0 via-bp-cta to-transparent z-10 pointer-events-none">
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              height: ['20%', '100%', '20%'],
              top: ['0%', '0%', '80%']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-bp-cta shadow-[0_0_15px_rgba(30,167,255,0.8)]"
          />
          {/* Top Signal Node */}
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-bp-cta shadow-[0_0_10px_rgba(30,167,255,1)]"
          />
        </div>

        {/* Background Elements */}
        <motion.div 
          style={{ y: backgroundYFinalCta }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {/* Technical Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40"></div>
          
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[radial-gradient(circle_at_center,rgba(30,167,255,0.08)_0%,transparent_70%)]"></div>
          
          {/* Signal Nodes */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i }}
              className="absolute w-1 h-1 bg-bp-cta rounded-full"
              style={{
                top: `${20 + i * 20}%`,
                left: `${15 + (i % 2) * 70}%`
              }}
            />
          ))}
        </motion.div>

        {/* Main Panel Container with Overlap */}
        <div className="px-6 max-w-7xl mx-auto relative z-20 -mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Command Panel Card */}
            <div className="bg-[#050a18]/90 backdrop-blur-xl border border-bp-cta/20 rounded-[32px] p-8 lg:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.4),0_0_40px_rgba(30,167,255,0.05)] relative overflow-hidden">
              {/* Inner Illuminated Border */}
              <div className="absolute inset-0 rounded-[32px] border border-white/5 pointer-events-none"></div>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bp-cta/40 to-transparent"></div>
              
              {/* Background Scan Line (Subliminal) */}
              <motion.div 
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-bp-cta/[0.03] to-transparent pointer-events-none"
              />

              <div className="relative z-10 text-center">
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-4"
                >
                  <span className="text-[11px] font-bold tracking-[0.4em] text-bp-cta uppercase opacity-80">
                    GOOGLE MAPS OPPORTUNITY AUDIT
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl lg:text-5xl font-bold mb-4 text-bp-white leading-[1.15] max-w-4xl mx-auto"
                >
                  See Where Your Google Maps Profile Is Losing Calls — And What to Fix First
                </motion.h2>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-bp-support mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                  We’ll identify the visibility gaps, trust weaknesses, and competitor advantages that may be limiting calls from Google Maps.
                </motion.p>

                {/* Value Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {[
                    { text: "Where visibility is leaking", icon: Radar },
                    { text: "What weakens trust", icon: ShieldAlert },
                    { text: "How competitors are winning", icon: TrendingUp },
                    { text: "What we would fix first", icon: Target }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                      whileHover={{ y: -5, backgroundColor: "rgba(30, 167, 255, 0.06)", borderColor: "rgba(30, 167, 255, 0.3)" }}
                      className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl transition-all duration-300 group/card text-left flex flex-col gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-bp-cta/10 flex items-center justify-center border border-bp-cta/20 group-hover/card:border-bp-cta/40 transition-colors">
                        <item.icon className="w-5 h-5 text-bp-cta" />
                      </div>
                      <p className="text-sm font-bold text-bp-white leading-snug">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Area */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="relative inline-block"
                >
                  {/* Breathing Glow */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-bp-cta/30 blur-2xl rounded-full pointer-events-none"
                  />
                  
                  <div className="relative flex flex-col items-center gap-4">
                    <Button 
                      to="/free-audit" 
                      variant="primary" 
                      className="px-12 py-5 text-lg font-bold shadow-[0_0_30px_rgba(30,167,255,0.4)] hover:shadow-[0_0_40px_rgba(30,167,255,0.6)] transition-all transform hover:-translate-y-1"
                    >
                      Get Google Maps Audit
                    </Button>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-bp-support font-medium">
                        No pressure — just a clear look at what may be holding back calls from Google Maps.
                      </p>
                      <p className="text-xs text-bp-support/60 italic">
                        Usually best for roofing companies already getting calls but underperforming on Maps.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
