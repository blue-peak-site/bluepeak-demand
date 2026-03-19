import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Activity, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'StormRank System', path: '/stormrank' },
    { name: 'Audit Example', path: '/audit-example' },
    { name: 'Storm Activation', path: '/storm-activation' },
  ];

  const isStormRankPage = location.pathname === '/stormrank';
  const isAuditExamplePage = location.pathname === '/audit-example';
  const isFreeAuditPage = location.pathname === '/free-audit';
  const isRequestStormActivationPage = location.pathname === '/request-storm-activation';
  const isStormActivationPage = location.pathname === '/storm-activation';

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-bp-bg">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-bp-highlight/20 rounded-full blur-[120px] opacity-50"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isStormRankPage
            ? isScrolled
              ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4'
              : 'bg-black py-6'
            : isAuditExamplePage
              ? `bg-[#020408]/80 backdrop-blur-md ${isScrolled ? 'border-b border-white/5 py-4' : 'py-6'}`
            : isFreeAuditPage
              ? isScrolled
                ? 'bg-bp-bg/80 backdrop-blur-md border-b border-white/5 py-4'
                : 'bg-bp-bg py-6'
            : isRequestStormActivationPage || isStormActivationPage
              ? isScrolled
                ? 'bg-bp-bg/70 backdrop-blur-md border-b border-white/5 py-4'
                : 'bg-bp-bg py-6'
              : isScrolled 
                ? 'bg-bp-bg/80 backdrop-blur-xl border-b border-white/5 py-4' 
                : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://i.ibb.co/tpH5YQc0/Chat-GPT-Image-14-de-mar-de-2026-12-54-41.png" 
              alt="BluePeak Demand" 
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-all relative py-2 ${
                    isActive ? 'text-bp-white' : 'text-bp-support hover:text-bp-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-bp-cta shadow-[0_0_10px_rgba(30,167,255,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/free-audit"
              className="px-5 py-2.5 rounded-lg bg-bp-cta text-white font-semibold text-sm hover:bg-bp-cta/90 transition-all shadow-[0_0_20px_rgba(30,167,255,0.3)] hover:shadow-[0_0_30_rgba(30,167,255,0.5)]"
            >
              Free Audit
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-bp-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-bp-bg-secondary border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-bp-white font-medium text-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/free-audit"
              className="mt-4 px-5 py-3 rounded-lg bg-bp-cta text-white font-semibold text-center"
            >
              Free Audit
            </Link>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow relative z-10 pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-bp-bg pt-16 pb-8 border-t border-white/5 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-bp-cta/5 blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <Link to="/" className="flex items-center mb-8 group">
                <img 
                  src="https://i.ibb.co/tpH5YQc0/Chat-GPT-Image-14-de-mar-de-2026-12-54-41.png" 
                  alt="BluePeak Demand" 
                  className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-bp-support text-base leading-relaxed max-w-sm opacity-60">
                Premium local demand intelligence platform for storm-damage roofing companies. We turn Google Maps into a high-converting inspection engine.
              </p>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-bp-white font-bold mb-6 text-xs uppercase tracking-[0.3em] opacity-40">Platform</h4>
                <ul className="flex flex-col gap-5">
                  <li><Link to="/stormrank" className="text-bp-support hover:text-bp-cta transition-colors text-sm font-medium">StormRank System</Link></li>
                  <li><Link to="/audit-example" className="text-bp-support hover:text-bp-cta transition-colors text-sm font-medium">Audit Example</Link></li>
                  <li><Link to="/storm-activation" className="text-bp-support hover:text-bp-cta transition-colors text-sm font-medium">Storm Activation</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-bp-white font-bold mb-6 text-xs uppercase tracking-[0.3em] opacity-40">Resources</h4>
                <ul className="flex flex-col gap-5">
                  <li><Link to="/free-audit" className="text-bp-support hover:text-bp-cta transition-colors text-sm font-medium">Free Maps Audit</Link></li>
                  <li><Link to="/insights" className="text-bp-support hover:text-bp-cta transition-colors text-sm font-medium">Insights & Teardowns</Link></li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h4 className="text-bp-white font-bold mb-6 text-xs uppercase tracking-[0.3em] opacity-40">Connect</h4>
                <div className="flex flex-col gap-5 mb-10">
                  <Link 
                    to="/free-audit" 
                    className="inline-flex items-center gap-2 text-bp-cta font-bold text-sm group"
                  >
                    Get Your Audit
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <h4 className="text-bp-white font-bold mb-6 text-xs uppercase tracking-[0.3em] opacity-40">Contact</h4>
                <ul className="flex flex-col gap-5">
                  <li>
                    <a href="mailto:yasmim@bluepeakdemand.com" className="text-bp-support hover:text-bp-cta transition-colors text-sm font-medium">
                      yasmim@bluepeakdemand.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+15550000000" className="text-bp-support hover:text-bp-cta transition-colors text-sm font-medium">
                      +1 (555) 000-0000
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 text-[10px] font-mono text-bp-support/20 uppercase tracking-[0.4em]">
              <span>© {new Date().getFullYear()} BLUEPEAK_DEMAND</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-[10px] font-mono text-bp-support/20 hover:text-bp-support transition-colors uppercase tracking-[0.4em]">Privacy</a>
              <a href="#" className="text-[10px] font-mono text-bp-support/20 hover:text-bp-support transition-colors uppercase tracking-[0.4em]">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
