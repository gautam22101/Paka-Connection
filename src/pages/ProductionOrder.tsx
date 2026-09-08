import { motion } from 'framer-motion';
import { Factory, Cog, Clock, CheckCircle, BarChart3, Wrench, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import erpSolutionsImage from '../assets/service-images/erp-solutions.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function ProductionOrder() {
  return (
    <div>
      <PageHero
        title="Production Order Management"
        subtitle="Manufacturing execution control with real-time planning and monitoring."
        breadcrumbs={[{ label: 'What We Do', path: '/what-we-do' }, { label: 'ERP', path: '/what-we-do/erp' }, { label: 'Production Order' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Precision <span className="text-nc-orange">Production</span> Control</h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Our Production Order module gives you complete control over manufacturing execution. Plan production schedules, allocate resources, track work-in-progress, and manage quality — all in real time. Connected to sales orders and inventory, it ensures you produce what's needed, when it's needed, with zero waste.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={erpSolutionsImage} alt="Production order planning and operations" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-nc-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Key Features</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cog, title: 'Production Planning', desc: 'Schedule production runs based on demand, capacity, and material availability.' },
              { icon: Clock, title: 'Work Order Management', desc: 'Create, assign, and track work orders with routing and operation details.' },
              { icon: BarChart3, title: 'Capacity Planning', desc: 'Optimize machine and labor utilization across production lines.' },
              { icon: Wrench, title: 'Quality Control', desc: 'In-process inspections, quality checkpoints, and compliance documentation.' },
              { icon: CheckCircle, title: 'WIP Tracking', desc: 'Real-time work-in-progress visibility across all production stages.' },
              { icon: Factory, title: 'Cost Tracking', desc: 'Monitor production costs, material consumption, and overhead allocation in real time.' },
            ].map((f, i) => (
              <motion.div key={f.title} {...fadeIn(i * 0.1)} className="bg-white border border-nc-border rounded-xl p-6 hover:shadow-lg hover:border-nc-orange/30 transition-all duration-300">
                <div className="w-10 h-10 bg-nc-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-nc-orange" />
                </div>
                <h3 className="text-lg font-bold text-nc-black">{f.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nc-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Production Workflow</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Sales Order', 'Production Plan', 'Material Check', 'Work Order', 'Production', 'Quality Check', 'Completion'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-4 py-2 bg-nc-dark border border-nc-orange/30 rounded-lg text-sm font-medium">{step}</span>
                {i < 6 && <ArrowRight className="w-4 h-4 text-nc-orange" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Take Control of Production" subheading="Let's build a production management system that maximizes efficiency." />
    </div>
  );
}
