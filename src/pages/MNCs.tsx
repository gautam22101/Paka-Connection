import { motion } from 'framer-motion';
import { Globe, BarChart3, Settings, Shield, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import businessStrategyImage from '../assets/service-images/business-strategy.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function MNCs() {
  return (
    <div>
      <PageHero
        title="MNCs"
        subtitle="Enterprise-grade digital solutions for multinational corporations."
        breadcrumbs={[{ label: 'Industries' }, { label: 'MNCs' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Global Scale. <span className="text-nc-orange">Connected Execution.</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Multinational corporations face unique challenges: complex organizational structures, multi-region operations, diverse compliance requirements, and the need for consistent brand experience across markets. We build enterprise solutions that address all of these — with the scalability and security that global organizations demand.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={businessStrategyImage} alt="Enterprise business strategy and consulting" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-nc-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Solutions for MNCs</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Multi-Region Web Platforms', desc: 'Localized websites with consistent brand governance across markets and languages.' },
              { icon: Settings, title: 'Enterprise ERP Systems', desc: 'Scalable ERP solutions supporting multi-entity, multi-currency, and multi-region operations.' },
              { icon: BarChart3, title: 'Global Marketing Strategy', desc: 'Coordinated marketing across regions with local market adaptation and centralized reporting.' },
              { icon: Shield, title: 'Security & Compliance', desc: 'Enterprise-grade security, GDPR compliance, data governance, and audit readiness.' },
              { icon: Users, title: 'Digital Transformation', desc: 'End-to-end digital transformation strategy and execution for legacy modernization.' },
              { icon: BarChart3, title: 'Business Intelligence', desc: 'Unified dashboards, cross-region analytics, and executive reporting systems.' },
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

      <CTASection heading="Scale Your Enterprise" subheading="Let's discuss enterprise solutions that match your global ambitions." />
    </div>
  );
}
