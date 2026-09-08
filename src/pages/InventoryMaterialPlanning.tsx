import { motion } from 'framer-motion';
import { Package, Warehouse, Calculator, Truck, AlertTriangle, RefreshCw, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import erpSolutionsImage from '../assets/service-images/erp-solutions.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function InventoryMaterialPlanning() {
  return (
    <div>
      <PageHero
        title="Inventory & Material Planning"
        subtitle="Stock optimization, procurement automation, and material requirement planning."
        breadcrumbs={[{ label: 'What We Do', path: '/what-we-do' }, { label: 'ERP', path: '/what-we-do/erp' }, { label: 'Inventory & Material Planning' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Smart <span className="text-nc-orange">Inventory</span>, Precise <span className="text-nc-orange">Planning</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                The right materials, in the right quantities, at the right time. Our Inventory & Material Planning module combines real-time stock tracking with intelligent material requirement planning (MRP). Automatically calculate what you need, when you need it, and generate purchase orders before stockouts happen.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Connected to sales orders and production planning, it ensures your supply chain is always in sync with demand — reducing carrying costs while preventing stockouts.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={erpSolutionsImage} alt="Inventory and material planning operations" className="h-full w-full object-cover" />
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
              { icon: Warehouse, title: 'Real-Time Inventory', desc: 'Live stock levels across warehouses with automated tracking and updates.' },
              { icon: Calculator, title: 'MRP Engine', desc: 'Material requirement planning based on production schedules, BOMs, and lead times.' },
              { icon: AlertTriangle, title: 'Reorder Management', desc: 'Automated reorder points, safety stock calculations, and purchase triggers.' },
              { icon: Truck, title: 'Procurement', desc: 'Automated purchase order generation, vendor management, and order tracking.' },
              { icon: RefreshCw, title: 'Stock Transfers', desc: 'Inter-warehouse transfers, stock adjustments, and movement tracking.' },
              { icon: Package, title: 'Batch & Serial Tracking', desc: 'Full traceability with batch numbers, serial numbers, and expiry management.' },
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
            <h2 className="text-3xl md:text-4xl font-bold">Material Planning Flow</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Demand Input', 'BOM Explosion', 'Net Requirements', 'Purchase Requisition', 'PO Generation', 'Goods Receipt', 'Stock Update'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-4 py-2 bg-nc-dark border border-nc-orange/30 rounded-lg text-sm font-medium">{step}</span>
                {i < 6 && <ArrowRight className="w-4 h-4 text-nc-orange" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Optimize Your Supply Chain" subheading="Let's build an inventory system that keeps you in control." />
    </div>
  );
}
