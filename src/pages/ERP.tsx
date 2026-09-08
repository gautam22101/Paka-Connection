import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Factory, Package, Truck, ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import ConnectionVisual from '../components/ConnectionVisual';
import erpSolutionsImage from '../assets/service-images/erp-solutions.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

const workflow = [
  { icon: ShoppingCart, title: 'Sales Order', desc: 'Capture and manage customer orders with automated processing, pricing, and approval workflows.', path: '/what-we-do/erp/sales-order' },
  { icon: Factory, title: 'Production Planning', desc: 'Plan production schedules, allocate resources, and manage manufacturing orders efficiently.', path: '/what-we-do/erp/production-order' },
  { icon: Package, title: 'Material Planning', desc: 'Calculate material requirements, generate purchase orders, and optimize procurement timing.', path: '/what-we-do/erp/inventory-material-planning' },
  { icon: Package, title: 'Inventory Management', desc: 'Real-time stock tracking, warehouse management, and automated reorder point monitoring.', path: '/what-we-do/erp/inventory-material-planning' },
  { icon: Factory, title: 'Production', desc: 'Execute production orders, track work-in-progress, and manage quality control processes.', path: '/what-we-do/erp/production-order' },
  { icon: Truck, title: 'Delivery', desc: 'Manage shipments, track deliveries, and integrate with logistics partners for seamless fulfillment.', path: '/what-we-do/erp/sales-order' },
];

export default function ERP() {
  return (
    <div>
      <PageHero
        title="ERP Solutions"
        subtitle="Enterprise resource planning that connects every department and drives operational excellence."
        breadcrumbs={[{ label: 'What We Do', path: '/what-we-do' }, { label: 'ERP Solutions' }]}
      />

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">One System. <span className="text-nc-orange">Connected Operations.</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Your business isn't a collection of disconnected departments — and your software shouldn't be either. Our ERP solutions connect sales, production, inventory, and delivery into one seamless system. Real-time data flows between modules, eliminating manual handoffs, reducing errors, and giving you complete visibility into your operations.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Whether you're a growing manufacturer or an established enterprise, we build ERP systems that scale with you — not against you.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={erpSolutionsImage} alt="ERP operations dashboard and connected business processes" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ERP Workflow */}
      <section className="bg-nc-black text-white py-20 lg:py-28 overflow-hidden">
        <ConnectionVisual variant="dense" className="opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">The ERP Workflow</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Sales Order → Production Planning → Material Planning → Inventory → Production → Delivery</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((step, i) => (
              <motion.div key={step.title} {...fadeIn(i * 0.1)}>
                <Link to={step.path} className="group block bg-nc-dark border border-nc-gray rounded-xl p-6 hover:border-nc-orange/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-nc-orange/10 rounded-lg flex items-center justify-center group-hover:bg-nc-orange transition-colors">
                      <step.icon className="w-6 h-6 text-nc-orange group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-nc-orange font-bold">0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-nc-orange text-sm font-medium">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeIn()} className="mt-12 flex items-center justify-center gap-2 flex-wrap">
            {workflow.map((step, i) => (
              <span key={step.title} className="flex items-center gap-2">
                <span className="text-nc-orange font-bold text-sm">{step.title}</span>
                {i < workflow.length - 1 && <ChevronRight className="w-4 h-4 text-nc-orange/50" />}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Why Our ERP Solutions</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'End-to-end process automation from order to delivery',
              'Real-time data visibility across all departments',
              'Elimination of manual data entry and errors',
              'Scalable architecture that grows with your business',
              'Custom modules tailored to your specific workflows',
              'Seamless integration with existing tools and systems',
              'Comprehensive reporting and business intelligence',
              'Dedicated support and continuous optimization',
            ].map((benefit, i) => (
              <motion.div key={i} {...fadeIn(i * 0.05)} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-nc-orange flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Streamline Your Operations" subheading="Let's discuss how our ERP solutions can transform your business." />
    </div>
  );
}
