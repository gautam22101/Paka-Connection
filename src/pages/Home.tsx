import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, BarChart3, Settings, Zap, Target, Users, TrendingUp, ChevronRight, Star, Quote } from 'lucide-react';
import ConnectionVisual from '../components/ConnectionVisual';
import CTASection from '../components/CTASection';
import ServiceImageCarousel from '../components/ServiceImageCarousel';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

const coreServices = [
  { icon: Globe, title: 'Web Development', desc: 'Custom websites, web applications, e-commerce platforms, and progressive web apps built with cutting-edge technology.', path: '/what-we-do/web-development' },
  { icon: BarChart3, title: 'Digital Marketing', desc: 'SEO, PPC, social media marketing, content strategy, and data-driven campaigns that deliver measurable ROI.', path: '/what-we-do/digital-marketing' },
  { icon: Settings, title: 'ERP Solutions', desc: 'Enterprise resource planning systems that streamline operations from sales to production to delivery.', path: '/what-we-do/erp' },
];

const whyUs = [
  { icon: Target, title: 'Strategy-First Approach', desc: 'We don\'t just execute—we understand your business goals and craft solutions that drive real growth.' },
  { icon: Zap, title: 'Technology + Marketing Fusion', desc: 'Unique combination of technical expertise and marketing intelligence under one roof.' },
  { icon: Users, title: 'Dedicated Partnership', desc: 'We become an extension of your team, committed to your long-term success.' },
  { icon: TrendingUp, title: 'Measurable Results', desc: 'Every solution is designed with KPIs and analytics to track impact and optimize performance.' },
];

const industries = [
  { name: 'Food Industry', path: '/industries/food', desc: 'Digital transformation for F&B businesses' },
  { name: 'MNCs', path: '/industries/mncs', desc: 'Enterprise-grade global solutions' },
  { name: 'Healthcare', path: '/industries/healthcare', desc: 'Healthtech & patient engagement' },
  { name: 'Manufacturing', path: '/industries/manufacturing', desc: 'Smart factory & Industry 4.0' },
  { name: 'Lifestyle', path: '/industries/lifestyle', desc: 'Brand experience & retail growth' },
];

const howWeConnect = [
  { step: '01', title: 'Understand', desc: 'Deep dive into your business, market, and objectives.' },
  { step: '02', title: 'Connect', desc: 'Bridge technology, marketing, and strategy.' },
  { step: '03', title: 'Build', desc: 'Execute with precision, quality, and speed.' },
  { step: '04', title: 'Grow', desc: 'Scale results with continuous optimization.' },
];

const featuredWork = [
  { title: 'Aarav Foods – Digital Transformation', category: 'Web + Marketing', desc: 'Reimagined the online ordering journey and campaign engine for a multi-city food distribution brand, increasing online revenue by 42% and reducing cart abandonment by 24%.', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80' },
  { title: 'KhetiCare Logistics – ERP Implementation', category: 'ERP Solution', desc: 'Built a connected planning and warehouse performance system that unified procurement, inventory, and dispatch decisions across 5 regional hubs.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80' },
  { title: 'TriStar Health – Growth Campaign', category: 'Digital Marketing', desc: 'Ran a conversion-focused acquisition strategy across search and social channels, driving a 61% lift in qualified leads and a 33% drop in cost per acquisition.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' },
];

const clientTestimonials = [
  { name: 'Srinivasan R.', role: 'Operations Head, Aarav Foods', quote: 'Pakaconnection transformed our digital presence completely. Their strategic approach and technical execution exceeded our expectations.' },
  { name: 'Ananya Kulkarni', role: 'Director, KhetiCare Logistics', quote: 'The ERP solution they built streamlined our entire operation. We saw measurable improvements within the first quarter.' },
  { name: 'Vikram Rao', role: 'Marketing Manager, TriStar Health', quote: 'Their marketing campaigns don’t just look great—they deliver real business results. ROI we can actually measure.' },
];

const stats = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '65+', label: 'Happy Clients' },
  { value: '12+', label: 'Industries Served' },
  { value: '8+', label: 'Years of Excellence' },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative bg-nc-black text-white min-h-[90vh] flex items-center overflow-hidden">
        <ConnectionVisual variant="dense" className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nc-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-nc-orange/10 border border-nc-orange/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-nc-orange rounded-full animate-pulse-orange" />
                <span className="text-nc-orange text-sm font-medium">Connecting Technology, Marketing & Business Growth</span>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Connect Your Business to{' '}
              <span className="text-gradient">What's Next.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              We bridge the gap between technology, marketing, and business strategy to help you grow faster, smarter, and stronger.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/get-in-touch" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-nc-orange text-white font-semibold rounded-lg hover:bg-nc-orange-dark transition-colors text-lg">
                Start a Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/what-we-do" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-nc-orange hover:text-nc-orange transition-colors text-lg">
                Explore Services
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="service-carousel-frame"
          >
            <ServiceImageCarousel />
          </motion.div>
          </div>
        </div>
      </section>

      {/* ===== BRAND INTRO ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nc-black">
              Where <span className="text-nc-orange">Technology</span> Meets <span className="text-nc-orange">Strategy</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Pakaconnection is a full-service technology and digital growth agency. We don't just build websites or run campaigns—we connect every piece of your business into a unified growth engine. From web development and digital marketing to ERP solutions, we ensure every system, every strategy, and every touchpoint works together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CORE SERVICES ===== */}
      <section className="bg-nc-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nc-black">What We Do</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Three pillars. One connected growth strategy.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, i) => (
              <motion.div key={service.title} {...fadeIn(i * 0.1)}>
                <Link to={service.path} className="group block bg-white border border-nc-border rounded-2xl p-8 lg:p-10 hover:shadow-2xl hover:border-nc-orange/30 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-nc-orange/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-nc-orange transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-nc-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-nc-black group-hover:text-nc-orange transition-colors">{service.title}</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">{service.desc}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-nc-orange font-semibold">
                    Explore <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY NEXTCONNECTION ===== */}
      <section className="bg-nc-black text-white py-20 lg:py-28 overflow-hidden">
        <ConnectionVisual variant="default" className="opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Why <span className="text-nc-orange">Pakaconnection</span>?</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">We don't just deliver projects. We deliver transformation.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <motion.div key={item.title} {...fadeIn(i * 0.1)} className="text-center">
                <div className="w-16 h-16 bg-nc-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-nc-orange" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY: Understand → Connect → Build → Grow ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nc-black">How We Connect</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Our four-step philosophy drives every engagement.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {howWeConnect.map((item, i) => (
              <motion.div key={item.title} {...fadeIn(i * 0.15)} className="relative">
                <div className="bg-nc-light border border-nc-border rounded-2xl p-8 text-center hover:border-nc-orange/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-5xl font-bold text-nc-orange/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-nc-black">{item.title}</h3>
                  <p className="mt-3 text-gray-600">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-nc-orange" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeIn()} className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-nc-orange/5 border border-nc-orange/20 rounded-full">
              <span className="text-nc-orange font-bold">Understand</span>
              <ChevronRight className="w-4 h-4 text-nc-orange" />
              <span className="text-nc-orange font-bold">Connect</span>
              <ChevronRight className="w-4 h-4 text-nc-orange" />
              <span className="text-nc-orange font-bold">Build</span>
              <ChevronRight className="w-4 h-4 text-nc-orange" />
              <span className="text-nc-orange font-bold">Grow</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="bg-nc-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nc-black">Industries We Serve</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Deep domain expertise across sectors that matter.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} {...fadeIn(i * 0.1)}>
                <Link to={ind.path} className="group block bg-white border border-nc-border rounded-xl p-6 text-center hover:shadow-lg hover:border-nc-orange/30 transition-all duration-300">
                  <h3 className="text-lg font-bold text-nc-black group-hover:text-nc-orange transition-colors">{ind.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{ind.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-nc-orange text-sm font-medium">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nc-black">Featured Work</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Real solutions. Real impact. Real growth stories.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((cs, i) => (
              <motion.div key={cs.title} {...fadeIn(i * 0.1)}>
                <div className="group bg-nc-light border border-nc-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-nc-dark to-nc-black">
                    <img src={cs.image} alt={cs.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-nc-orange/10 text-nc-orange text-xs font-semibold rounded-full">{cs.category}</span>
                    <h3 className="mt-3 text-lg font-bold text-nc-black group-hover:text-nc-orange transition-colors">{cs.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{cs.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="bg-nc-black text-white py-20 lg:py-28 overflow-hidden">
        <ConnectionVisual variant="minimal" className="opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Trusted partnerships. Proven results.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((review, i) => (
              <motion.div key={review.name} {...fadeIn(i * 0.1)} className="bg-nc-dark border border-nc-gray rounded-2xl p-8">
                <Quote className="w-10 h-10 text-nc-orange/30 mb-4" />
                <p className="text-gray-300 leading-relaxed">"{review.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-nc-orange/20 rounded-full flex items-center justify-center">
                    <span className="text-nc-orange font-bold">{review.name.charAt(1)}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.role}</div>
                  </div>
                </div>
                <div className="mt-3 flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-nc-orange fill-nc-orange" />)}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeIn()} className="mt-12 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-nc-orange font-semibold hover:underline">
              Read More Reviews <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} {...fadeIn(i * 0.1)} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-nc-orange">{stat.value}</div>
                <div className="mt-2 text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTASection
        heading="Ready to Connect Your Business to What's Next?"
        subheading="Let's discuss how we can transform your technology, marketing, and operations into a unified growth engine."
      />
    </div>
  );
}
