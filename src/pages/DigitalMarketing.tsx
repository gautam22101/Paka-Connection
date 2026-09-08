import { motion } from 'framer-motion';
import { Search, Target, BarChart3, PenTool, Rocket, LineChart, RefreshCw, TrendingUp, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import ConnectionVisual from '../components/ConnectionVisual';
import digitalMarketingImage from '../assets/service-images/digital-marketing.jpg';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

const pipeline = [
  { icon: Search, title: 'Research', desc: 'Market analysis, competitor audit, and industry landscape assessment.' },
  { icon: Target, title: 'Audience & Keyword Analysis', desc: 'Deep audience profiling, keyword research, and search intent mapping.' },
  { icon: BarChart3, title: 'Strategy', desc: 'Custom marketing strategy aligned with business goals and budget.' },
  { icon: PenTool, title: 'Content / Campaign', desc: 'Creative content production and campaign development across channels.' },
  { icon: Rocket, title: 'Launch', desc: 'Strategic campaign deployment with tracking and attribution in place.' },
  { icon: LineChart, title: 'Measure', desc: 'Performance tracking, analytics, and ROI measurement across all channels.' },
  { icon: RefreshCw, title: 'Optimize', desc: 'Data-driven optimization — A/B testing, budget allocation, and creative iteration.' },
  { icon: TrendingUp, title: 'Scale', desc: 'Scale winning strategies, expand channels, and accelerate growth.' },
];

export default function DigitalMarketing() {
  return (
    <div>
      <PageHero
        title="Digital Marketing"
        subtitle="Data-driven strategies that connect your brand with the right audience and deliver measurable ROI."
        breadcrumbs={[{ label: 'What We Do', path: '/what-we-do' }, { label: 'Digital Marketing' }]}
      />

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Marketing That <span className="text-nc-orange">Connects</span> & <span className="text-nc-orange">Converts</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                In today's digital landscape, marketing without data is just noise. We build marketing strategies rooted in research, powered by data, and optimized for real business results. Every campaign we run is designed to generate qualified leads, reduce acquisition costs, and deliver measurable ROI.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our approach is holistic: we connect SEO, PPC, social media, content marketing, and analytics into one unified strategy — because the best results come when every channel works together.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden border border-nc-border rounded-2xl">
                <img src={digitalMarketingImage} alt="Digital marketing strategy and analytics" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="bg-nc-black text-white py-20 lg:py-28 overflow-hidden">
        <ConnectionVisual variant="default" className="opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Marketing Pipeline</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Research → Audience & Keyword Analysis → Strategy → Content/Campaign → Launch → Measure → Optimize → Scale</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipeline.map((step, i) => (
              <motion.div key={step.title} {...fadeIn(i * 0.08)} className="bg-nc-dark border border-nc-gray rounded-xl p-6 hover:border-nc-orange/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-nc-orange/10 rounded-lg flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-nc-orange" />
                  </div>
                  <span className="text-nc-orange font-bold text-sm">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeIn()} className="mt-12 flex items-center justify-center gap-2 flex-wrap">
            {pipeline.map((step, i) => (
              <span key={step.title} className="flex items-center gap-2">
                <span className="text-nc-orange font-bold text-sm">{step.title}</span>
                {i < pipeline.length - 1 && <ChevronRight className="w-4 h-4 text-nc-orange/50" />}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Marketing Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Search Engine Optimization', desc: 'Technical SEO, on-page optimization, link building, and content strategy to dominate organic search results.' },
              { title: 'Pay-Per-Click Advertising', desc: 'Google Ads, Meta Ads, LinkedIn Ads — strategically managed campaigns that maximize ROI on every dollar spent.' },
              { title: 'Social Media Marketing', desc: 'Platform-specific strategies, content creation, community management, and paid social campaigns that build brand and drive action.' },
              { title: 'Content Marketing', desc: 'Strategic content creation — blogs, whitepapers, case studies, videos — that educates, engages, and converts your target audience.' },
              { title: 'Email Marketing & Automation', desc: 'Automated email sequences, newsletters, and nurture campaigns that move leads through your funnel efficiently.' },
              { title: 'Analytics & Reporting', desc: 'Comprehensive dashboards, attribution modeling, and regular performance reports that show exactly what\'s working.' },
            ].map((s, i) => (
              <motion.div key={s.title} {...fadeIn(i * 0.1)} className="bg-nc-light border border-nc-border rounded-2xl p-8 hover:shadow-xl hover:border-nc-orange/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-nc-black">{s.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Scale Your Marketing?" subheading="Let's build a data-driven strategy that delivers real results." />
    </div>
  );
}
