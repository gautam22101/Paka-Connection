import { motion } from 'framer-motion';
import { Globe, BarChart3, Settings, Cog, Package } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import erpSolutionsImage from '../assets/service-images/erp-solutions.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function Manufacturing() {
  return (
    <div>
      <PageHero
        title="Manufacturing"
        subtitle="Smart factory solutions and Industry 4.0 transformation."
        breadcrumbs={[{ label: 'Industries' }, { label: 'Manufacturing' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Smart <span className="text-nc-orange">Factory</span>, Connected <span className="text-nc-orange">Future</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Manufacturing is undergoing its biggest transformation since the assembly line. Industry 4.0 demands connected systems, real-time data, and intelligent automation. We help manufacturers build smart factories with ERP systems, IoT integration, and digital marketing strategies that drive B2B growth.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={erpSolutionsImage} alt="Manufacturing operations and ERP solutions" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-nc-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Solutions for Manufacturing</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Settings, title: 'Manufacturing ERP', desc: 'Production planning, shop floor control, quality management, and maintenance systems.' },
              { icon: Cog, title: 'IoT & Automation', desc: 'Sensor integration, machine monitoring, predictive maintenance, and SCADA systems.' },
              { icon: Package, title: 'Supply Chain Digitization', desc: 'End-to-end supply chain visibility, vendor portals, and logistics optimization.' },
              { icon: Globe, title: 'B2B Digital Presence', desc: 'Corporate websites, product catalogs, and lead generation for manufacturing companies.' },
              { icon: BarChart3, title: 'B2B Marketing', desc: 'LinkedIn marketing, trade show strategies, and account-based marketing campaigns.' },
              { icon: BarChart3, title: 'Operational Analytics', desc: 'OEE tracking, production dashboards, and real-time KPI monitoring systems.' },
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

      <CTASection heading="Build Your Smart Factory" subheading="Let's connect your manufacturing operations to Industry 4.0." />
    </div>
  );
}
