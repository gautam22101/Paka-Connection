import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const services = {
  core: [
    { name: 'Web Development', path: '/what-we-do/web-development', desc: 'Custom websites, web apps & e-commerce solutions' },
    { name: 'Digital Marketing', path: '/what-we-do/digital-marketing', desc: 'SEO, PPC, social media & content strategy' },
    { name: 'ERP Solutions', path: '/what-we-do/erp', desc: 'Enterprise resource planning & automation' },
  ],
  erp: [
    { name: 'Sales Order', path: '/what-we-do/erp/sales-order', desc: 'Streamlined order processing' },
    { name: 'Production Order', path: '/what-we-do/erp/production-order', desc: 'Manufacturing execution control' },
    { name: 'Inventory & Material Planning', path: '/what-we-do/erp/inventory-material-planning', desc: 'Stock optimization & procurement' },
  ],
  industries: [
    { name: 'Food Industry', path: '/industries/food', desc: 'F&B digital transformation' },
    { name: 'MNCs', path: '/industries/mncs', desc: 'Global enterprise solutions' },
    { name: 'Healthcare', path: '/industries/healthcare', desc: 'Healthtech & patient engagement' },
    { name: 'Manufacturing', path: '/industries/manufacturing', desc: 'Smart factory & Industry 4.0' },
    { name: 'Lifestyle', path: '/industries/lifestyle', desc: 'Brand experience & retail growth' },
  ],
};

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'What We Do', path: '/what-we-do', mega: true },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Get in Touch', path: '/get-in-touch' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileErpOpen, setMobileErpOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMobileOpen(false);
      setMegaOpen(false);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Pakaconnection Home">
            <img
              src="/pakaconnection-logo.svg"
              alt="Pakaconnection logo"
              className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.mega ? (
                  <button
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                    className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive(item.path) ? 'text-nc-orange' : 'text-nc-black hover:text-nc-orange'
                    }`}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(item.path) ? 'text-nc-orange' : 'text-nc-black hover:text-nc-orange'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mega Menu */}
                {item.mega && (
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        ref={megaRef}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setMegaOpen(true)}
                        onMouseLeave={() => setMegaOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white rounded-2xl shadow-2xl border border-nc-border overflow-hidden"
                      >
                        <div className="grid grid-cols-3 gap-0">
                          {/* Core Services */}
                          <div className="p-6 border-r border-nc-border">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-nc-orange mb-4">Core Services</h3>
                            <div className="space-y-3">
                              {services.core.map((s) => (
                                <Link key={s.path} to={s.path} className="block group/item">
                                  <div className="text-sm font-semibold text-nc-black group-hover/item:text-nc-orange transition-colors">{s.name}</div>
                                  <div className="text-xs text-gray-500 mt-0.5">{s.desc}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          {/* ERP Modules */}
                          <div className="p-6 border-r border-nc-border">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-nc-orange mb-4">ERP Modules</h3>
                            <div className="space-y-3">
                              {services.erp.map((s) => (
                                <Link key={s.path} to={s.path} className="block group/item">
                                  <div className="text-sm font-semibold text-nc-black group-hover/item:text-nc-orange transition-colors">{s.name}</div>
                                  <div className="text-xs text-gray-500 mt-0.5">{s.desc}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          {/* Industries */}
                          <div className="p-6">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-nc-orange mb-4">Industries</h3>
                            <div className="space-y-3">
                              {services.industries.map((s) => (
                                <Link key={s.path} to={s.path} className="block group/item">
                                  <div className="text-sm font-semibold text-nc-black group-hover/item:text-nc-orange transition-colors">{s.name}</div>
                                  <div className="text-xs text-gray-500 mt-0.5">{s.desc}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="bg-nc-light px-6 py-4 flex items-center justify-between">
                          <span className="text-sm text-gray-600">Explore all services &rarr;</span>
                          <Link to="/what-we-do" className="inline-flex items-center gap-2 text-sm font-semibold text-nc-orange hover:text-nc-orange-dark transition-colors">
                            View Full Portfolio <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link
              to="/get-in-touch"
              className="ml-4 px-5 py-2.5 bg-nc-orange text-white text-sm font-semibold rounded-lg hover:bg-nc-orange-dark transition-colors"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-nc-black"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
          >
            <nav className="px-4 py-6 space-y-1" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.mega ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-nc-black"
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pl-4 space-y-1">
                              <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-nc-orange">Core Services</p>
                              {services.core.map((s) => (
                                <Link key={s.path} to={s.path} className="block px-4 py-2 text-sm text-nc-dark hover:text-nc-orange">{s.name}</Link>
                              ))}
                              <button onClick={() => setMobileErpOpen(!mobileErpOpen)} className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold uppercase tracking-wider text-nc-orange">
                                ERP Modules <ChevronDown className={`w-4 h-4 transition-transform ${mobileErpOpen ? 'rotate-180' : ''}`} />
                              </button>
                              <AnimatePresence>
                                {mobileErpOpen && (
                                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden pl-4">
                                    {services.erp.map((s) => (
                                      <Link key={s.path} to={s.path} className="block px-4 py-2 text-sm text-nc-dark hover:text-nc-orange">{s.name}</Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <button onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold uppercase tracking-wider text-nc-orange">
                                Industries <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                              </button>
                              <AnimatePresence>
                                {mobileIndustriesOpen && (
                                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden pl-4">
                                    {services.industries.map((s) => (
                                      <Link key={s.path} to={s.path} className="block px-4 py-2 text-sm text-nc-dark hover:text-nc-orange">{s.name}</Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 text-base font-medium ${
                        isActive(item.path) ? 'text-nc-orange' : 'text-nc-black'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link to="/get-in-touch" className="block w-full text-center px-5 py-3 bg-nc-orange text-white font-semibold rounded-lg">
                  Start a Project
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
