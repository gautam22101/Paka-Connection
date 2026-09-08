import { motion } from 'framer-motion';
import { Globe, BarChart3, Settings, Palette, ShoppingBag } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import digitalMarketingImage from '../assets/service-images/digital-marketing.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function Lifestyle() {
  return (
    <div>
      <PageHero
        title="Lifestyle"
        subtitle="Brand experience and retail growth solutions for lifestyle businesses."
        breadcrumbs={[{ label: 'Industries' }, { label: 'Lifestyle' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Where <span className="text-nc-orange">Brand</span> Meets <span className="text-nc-orange">Experience</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Lifestyle brands live and die by experience — every touchpoint matters. We help fashion, beauty, hospitality, and retail brands create exceptional digital experiences, build loyal communities, and drive both online and offline growth through connected technology and marketing.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={digitalMarketingImage} alt="Lifestyle brand marketing and growth solutions" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-nc-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Solutions for Lifestyle Brands</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, title: 'E-Commerce & Retail', desc: 'Beautiful online stores, omnichannel integration, and conversion-optimized shopping experiences.' },
              { icon: Palette, title: 'Brand Identity & Design', desc: 'Visual identity systems, brand guidelines, and immersive digital brand experiences.' },
              { icon: BarChart3, title: 'Social & Influencer Marketing', desc: 'Influencer strategy, social content creation, and community building campaigns.' },
              { icon: Globe, title: 'Immersive Web Experiences', desc: 'Interactive websites, AR/VR experiences, and digital lookbooks that captivate.' },
              { icon: Settings, title: 'Retail ERP & POS', desc: 'Point of sale systems, inventory management, and retail operation automation.' },
              { icon: BarChart3, title: 'Customer Analytics', desc: 'Customer journey mapping, lifetime value analysis, and personalization strategies.' },
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

      <CTASection heading="Elevate Your Brand" subheading="Let's create digital experiences that captivate and convert." />
    </div>
  );
}
