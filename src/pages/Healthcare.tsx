import { motion } from 'framer-motion';
import { Globe, BarChart3, Settings, Shield, Users } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import dataAnalyticsImage from '../assets/service-images/data-analytics.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function Healthcare() {
  return (
    <div>
      <PageHero
        title="Healthcare"
        subtitle="Healthtech solutions and patient engagement strategies for modern healthcare."
        breadcrumbs={[{ label: 'Industries' }, { label: 'Healthcare' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Technology That <span className="text-nc-orange">Cares</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Healthcare is being transformed by technology — from patient portals and telemedicine to data-driven care and operational efficiency. We build healthtech solutions that improve patient experience, streamline clinical operations, and ensure compliance with healthcare regulations.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={dataAnalyticsImage} alt="Healthcare data and analytics solutions" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-nc-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Solutions for Healthcare</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Patient Portals & Websites', desc: 'HIPAA-compliant patient portals, hospital websites, and appointment booking systems.' },
              { icon: Settings, title: 'Healthcare ERP', desc: 'Hospital management systems, resource planning, and clinical workflow automation.' },
              { icon: BarChart3, title: 'Patient Engagement', desc: 'Digital marketing strategies for patient acquisition, retention, and community building.' },
              { icon: Shield, title: 'Compliance & Security', desc: 'HIPAA compliance, data encryption, access controls, and audit trail systems.' },
              { icon: Users, title: 'Telemedicine Solutions', desc: 'Video consultation platforms, remote monitoring, and digital health integrations.' },
              { icon: BarChart3, title: 'Health Analytics', desc: 'Clinical dashboards, operational analytics, and population health insights.' },
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

      <CTASection heading="Modernize Your Healthcare" subheading="Let's build healthtech solutions that improve patient outcomes." />
    </div>
  );
}
