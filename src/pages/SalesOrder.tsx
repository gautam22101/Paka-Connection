import { motion } from 'framer-motion';
import { FileText, Calculator, CheckCircle, ArrowRight, CreditCard, User, Package } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import erpSolutionsImage from '../assets/service-images/erp-solutions.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function SalesOrder() {
  return (
    <div>
      <PageHero
        title="Sales Order Management"
        subtitle="Streamlined order processing from inquiry to invoice."
        breadcrumbs={[{ label: 'What We Do', path: '/what-we-do' }, { label: 'ERP', path: '/what-we-do/erp' }, { label: 'Sales Order' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">From <span className="text-nc-orange">Inquiry</span> to <span className="text-nc-orange">Invoice</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Our Sales Order module captures, processes, and manages every customer order with precision. Automated pricing, approval workflows, and real-time status tracking ensure nothing falls through the cracks. From the moment an inquiry comes in to the final invoice, every step is connected and transparent.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={erpSolutionsImage} alt="Sales order management workflow" className="h-full w-full object-cover" />
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
              { icon: FileText, title: 'Order Capture & Entry', desc: 'Quick order entry with customer lookup, product catalog, and automated pricing.' },
              { icon: Calculator, title: 'Pricing & Quotation', desc: 'Dynamic pricing rules, discount management, and professional quotation generation.' },
              { icon: CheckCircle, title: 'Approval Workflows', desc: 'Configurable multi-level approval processes for orders, discounts, and credit limits.' },
              { icon: CreditCard, title: 'Payment Processing', desc: 'Integrated payment collection, invoicing, and accounts receivable tracking.' },
              { icon: User, title: 'Customer Management', desc: 'Complete customer profiles with order history, credit status, and communication logs.' },
              { icon: Package, title: 'Order Fulfillment', desc: 'Real-time order status tracking, backorder management, and delivery scheduling.' },
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
            <h2 className="text-3xl md:text-4xl font-bold">Sales Order Workflow</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Inquiry', 'Quotation', 'Order Confirmation', 'Processing', 'Fulfillment', 'Invoicing', 'Payment'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-4 py-2 bg-nc-dark border border-nc-orange/30 rounded-lg text-sm font-medium">{step}</span>
                {i < 6 && <ArrowRight className="w-4 h-4 text-nc-orange" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Optimize Your Sales Process" subheading="Let's build a sales order system that accelerates your revenue cycle." />
    </div>
  );
}
