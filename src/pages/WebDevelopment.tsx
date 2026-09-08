import { motion } from 'framer-motion';
import { Globe, Code2, Smartphone, ShoppingCart, Gauge, Shield } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import webDevelopmentImage from '../assets/service-images/web-development.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function WebDevelopment() {
  const services = [
    { icon: Globe, title: 'Custom Website Development', desc: 'Bespoke websites designed and built from the ground up to reflect your brand, engage your audience, and convert visitors into customers.' },
    { icon: Code2, title: 'Web Application Development', desc: 'Complex web applications with robust architecture, seamless user experiences, and scalable backends built for real business logic.' },
    { icon: ShoppingCart, title: 'E-Commerce Solutions', desc: 'Full-featured online stores with product management, payment integration, inventory sync, and conversion-optimized checkout flows.' },
    { icon: Smartphone, title: 'Progressive Web Apps', desc: 'App-like experiences on the web — fast, offline-capable, and installable. Reach users everywhere without app store friction.' },
    { icon: Gauge, title: 'Performance Optimization', desc: 'Core Web Vitals optimization, caching strategies, CDN configuration, and code splitting for blazing-fast load times.' },
    { icon: Shield, title: 'Security & Maintenance', desc: 'Ongoing security patches, updates, monitoring, and support to keep your digital assets safe and running smoothly.' },
  ];

  const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'WordPress', 'Shopify', 'AWS', 'Vercel'];

  return (
    <div>
      <PageHero
        title="Web Development"
        subtitle="High-performance digital experiences that drive business results."
        breadcrumbs={[{ label: 'What We Do', path: '/what-we-do' }, { label: 'Web Development' }]}
      />

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Build Digital Experiences That <span className="text-nc-orange">Perform</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Your website is more than a digital brochure — it's your hardest-working salesperson, your brand's first impression, and the foundation of your entire digital strategy. We build websites and web applications that don't just look exceptional; they deliver measurable business results.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Every project starts with strategy: understanding your audience, your goals, and your competitive landscape. Then we design and develop with precision — optimized for speed, accessibility, SEO, and conversion from day one.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={webDevelopmentImage} alt="Web development team working on a digital interface" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-nc-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Our Web Development Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title} {...fadeIn(i * 0.1)} className="bg-white border border-nc-border rounded-2xl p-8 hover:shadow-xl hover:border-nc-orange/30 transition-all duration-300">
                <div className="w-12 h-12 bg-nc-orange/10 rounded-xl flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-nc-orange" />
                </div>
                <h3 className="text-xl font-bold text-nc-black">{s.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-nc-black text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Development Process</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Discovery & Strategy', 'Design & Prototype', 'Development & Testing', 'Launch & Optimize'].map((step, i) => (
              <motion.div key={step} {...fadeIn(i * 0.1)} className="text-center">
                <div className="w-14 h-14 bg-nc-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">{i + 1}</div>
                <h3 className="text-lg font-bold">{step}</h3>
                <p className="mt-2 text-gray-400 text-sm">{['Research, requirements, and strategic planning', 'UI/UX design, wireframes, and interactive prototypes', 'Clean code, QA testing, and performance optimization', 'Deployment, monitoring, and continuous improvement'][i]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-nc-black">Technologies We Work With</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-5 py-2.5 bg-nc-light border border-nc-border rounded-full text-sm font-medium text-nc-black hover:border-nc-orange hover:text-nc-orange transition-colors cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Let's Build Your Digital Presence" subheading="From concept to launch, we deliver web experiences that work." />
    </div>
  );
}
