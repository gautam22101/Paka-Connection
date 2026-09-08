import { motion } from 'framer-motion';
import { Globe, BarChart3, Settings, ShieldCheck, Truck } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import growthPartnershipImage from '../assets/service-images/growth-partnership.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function FoodIndustry() {
  return (
    <div>
      <PageHero
        title="Food Industry"
        subtitle="Digital transformation solutions for food & beverage businesses."
        breadcrumbs={[{ label: 'Industries' }, { label: 'Food Industry' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Digital Growth for <span className="text-nc-orange">Food & Beverage</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                The food industry is evolving rapidly — from online ordering and delivery integration to supply chain transparency and regulatory compliance. We help F&B businesses build powerful digital presences, streamline operations with ERP, and reach customers through targeted digital marketing.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Whether you're a restaurant chain, food manufacturer, or D2C food brand, we understand the unique challenges of your industry and build solutions that address them.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={growthPartnershipImage} alt="Food industry growth and partnership solutions" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-nc-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Solutions for Food Industry</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Online Ordering & Delivery', desc: 'Branded ordering platforms, delivery integration, and omnichannel sales solutions.' },
              { icon: Settings, title: 'Food ERP & Operations', desc: 'Recipe management, production planning, batch tracking, and compliance automation.' },
              { icon: BarChart3, title: 'Marketing & Brand Building', desc: 'Local SEO, social media, food photography, and customer engagement strategies.' },
              { icon: ShieldCheck, title: 'Compliance & Traceability', desc: 'FSSAI compliance, HACCP tracking, expiry management, and recall readiness.' },
              { icon: Truck, title: 'Supply Chain Management', desc: 'Vendor management, procurement automation, and cold chain logistics tracking.' },
              { icon: BarChart3, title: 'Analytics & Insights', desc: 'Sales analytics, demand forecasting, and operational dashboards for data-driven decisions.' },
            ].map((s, i) => (
              <motion.div key={s.title} {...fadeIn(i * 0.1)} className="bg-white border border-nc-border rounded-xl p-6 hover:shadow-lg hover:border-nc-orange/30 transition-all duration-300">
                <div className="w-10 h-10 bg-nc-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-nc-orange" />
                </div>
                <h3 className="text-lg font-bold text-nc-black">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Transform Your Food Business" subheading="Let's discuss how we can digitize and scale your F&B operations." />
    </div>
  );
}
