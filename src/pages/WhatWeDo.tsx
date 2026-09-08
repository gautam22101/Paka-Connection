import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, BarChart3, Settings, ArrowRight, ShoppingCart, Factory, Package, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import ConnectionVisual from '../components/ConnectionVisual';
import webDevelopmentImage from '../assets/service-images/web-development.jpg';
import digitalMarketingImage from '../assets/service-images/digital-marketing.jpg';
import erpSolutionsImage from '../assets/service-images/erp-solutions.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function WhatWeDo() {
  return (
    <div>
      <PageHero
        title="What We Do"
        subtitle="Three pillars of connected growth — Web Development, Digital Marketing, and ERP Solutions."
        breadcrumbs={[{ label: 'What We Do' }]}
      />

      {/* Core Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Core Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Each service is powerful on its own. Together, they're unstoppable.</p>
          </motion.div>
          <div className="space-y-12">
            {[
              { icon: Globe, title: 'Web Development', image: webDevelopmentImage, desc: "We design and develop high-performance websites, web applications, e-commerce platforms, and progressive web apps. Every build is optimized for speed, SEO, accessibility, and conversion — because a beautiful site that doesn't perform is just a digital brochure.", path: '/what-we-do/web-development', features: ['Custom Website Design & Development', 'Web Application Development', 'E-Commerce Solutions', 'Progressive Web Apps (PWA)', 'CMS Development & Integration', 'API Development & Integration'] },
              { icon: BarChart3, title: 'Digital Marketing', image: digitalMarketingImage, desc: 'Data-driven marketing strategies that connect your brand with the right audience at the right time. From SEO and PPC to content marketing and social media, we build campaigns that generate qualified leads and measurable ROI.', path: '/what-we-do/digital-marketing', features: ['Search Engine Optimization (SEO)', 'Pay-Per-Click Advertising (PPC)', 'Social Media Marketing', 'Content Strategy & Marketing', 'Email Marketing & Automation', 'Analytics & Performance Optimization'] },
              { icon: Settings, title: 'ERP Solutions', image: erpSolutionsImage, desc: 'Enterprise resource planning systems that connect every department and process in your organization. From sales orders to production planning, inventory management to delivery tracking — we build ERP solutions that eliminate silos and drive efficiency.', path: '/what-we-do/erp', features: ['Sales Order Management', 'Production Planning & Control', 'Inventory & Material Planning', 'Delivery & Logistics Tracking', 'Custom Module Development', 'Integration & Training'] },
            ].map((service, i) => (
              <motion.div key={service.title} {...fadeIn(i * 0.1)}>
                <div className="grid lg:grid-cols-2 gap-8 items-center bg-nc-light border border-nc-border rounded-2xl p-8 lg:p-12 hover:shadow-xl transition-all duration-300">
                  <div>
                    <img src={service.image} alt={`${service.title} service`} className="mb-8 h-48 w-full rounded-xl object-cover lg:hidden" />
                    <div className="w-16 h-16 bg-nc-orange/10 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-nc-orange" />
                    </div>
                    <h3 className="text-3xl font-bold text-nc-black">{service.title}</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">{service.desc}</p>
                    <Link to={service.path} className="mt-6 inline-flex items-center gap-2 text-nc-orange font-semibold hover:underline">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <div>
                    <img src={service.image} alt={`${service.title} service`} className="mb-8 hidden h-64 w-full rounded-xl object-cover lg:block" />
                    <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-nc-orange rounded-full mt-2 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Modules */}
      <section className="bg-nc-black text-white py-20 lg:py-28 overflow-hidden">
        <ConnectionVisual variant="default" className="opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">ERP Modules</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Connected modules that power your entire operation.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingCart, title: 'Sales Order', desc: 'Streamlined order processing, tracking, and fulfillment from inquiry to invoice.', path: '/what-we-do/erp/sales-order' },
              { icon: Factory, title: 'Production Order', desc: 'Manufacturing execution control with real-time production planning and monitoring.', path: '/what-we-do/erp/production-order' },
              { icon: Package, title: 'Inventory & Material Planning', desc: 'Stock optimization, procurement automation, and material requirement planning.', path: '/what-we-do/erp/inventory-material-planning' },
            ].map((mod, i) => (
              <motion.div key={mod.title} {...fadeIn(i * 0.1)}>
                <Link to={mod.path} className="group block bg-nc-dark border border-nc-gray rounded-2xl p-8 hover:border-nc-orange/30 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-nc-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-nc-orange transition-colors">
                    <mod.icon className="w-7 h-7 text-nc-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold">{mod.title}</h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">{mod.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-nc-orange font-semibold text-sm">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeIn()} className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 flex-wrap justify-center">
              <span className="text-nc-orange font-bold">Sales Order</span>
              <ChevronRight className="w-4 h-4 text-nc-orange" />
              <span className="text-nc-orange font-bold">Production Planning</span>
              <ChevronRight className="w-4 h-4 text-nc-orange" />
              <span className="text-nc-orange font-bold">Material Planning</span>
              <ChevronRight className="w-4 h-4 text-nc-orange" />
              <span className="text-nc-orange font-bold">Inventory</span>
              <ChevronRight className="w-4 h-4 text-nc-orange" />
              <span className="text-nc-orange font-bold">Production</span>
              <ChevronRight className="w-4 h-4 text-nc-orange" />
              <span className="text-nc-orange font-bold">Delivery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Industries We Serve</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'Food Industry', path: '/industries/food' },
              { name: 'MNCs', path: '/industries/mncs' },
              { name: 'Healthcare', path: '/industries/healthcare' },
              { name: 'Manufacturing', path: '/industries/manufacturing' },
              { name: 'Lifestyle', path: '/industries/lifestyle' },
            ].map((ind, i) => (
              <motion.div key={ind.name} {...fadeIn(i * 0.1)}>
                <Link to={ind.path} className="block text-center p-6 border border-nc-border rounded-xl hover:border-nc-orange/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-bold text-nc-black hover:text-nc-orange transition-colors">{ind.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Need a Custom Solution?" subheading="Let's discuss your unique business requirements." />
    </div>
  );
}
