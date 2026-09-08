import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, TrendingUp, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import ConnectionVisual from '../components/ConnectionVisual';
import { companyProfile, teamMembers } from '../data/siteData';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function AboutUs() {
  return (
    <div>
      <PageHero
        title={`About ${companyProfile.name}`}
        subtitle={`${companyProfile.tagline} — built for measurable business growth.`}
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn()}>
              <h2 className="text-3xl md:text-4xl font-bold text-nc-black">Our <span className="text-nc-orange">Story</span></h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                {companyProfile.name} was founded on a simple belief: businesses grow fastest when their technology, marketing, and operations move in sync. We saw too many companies operating in silos — marketing teams driving campaigns without system visibility, operations managing workflows manually, and digital experiences failing to support business goals.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We built a partner model that connects strategy with execution. Our team brings together expertise in web development, digital marketing, and ERP implementation so organizations can streamline operations, strengthen their market presence, and make decisions with confidence.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Today, we work with businesses across F&B, healthcare, manufacturing, retail, and service sectors, helping them turn complexity into clarity and ambition into sustainable growth.
              </p>
            </motion.div>
            <motion.div {...fadeIn(0.2)} className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-nc-light to-white border border-nc-border rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Pakaconnection team discussion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nc-orange/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-nc-black text-white py-20 lg:py-28 overflow-hidden">
        <ConnectionVisual variant="default" className="opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Core Philosophy</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">The framework that drives every engagement.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Understand', desc: 'We start by deeply understanding your business, market, challenges, and objectives before proposing any solution.' },
              { icon: Users, title: 'Connect', desc: 'We bridge technology, marketing, and business strategy into one cohesive, interconnected growth plan.' },
              { icon: TrendingUp, title: 'Build', desc: 'We execute with precision — building solutions that are robust, scalable, and designed for real-world impact.' },
              { icon: Award, title: 'Grow', desc: 'We stay invested in your growth, continuously optimizing and scaling results over time.' },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeIn(i * 0.1)} className="text-center">
                <div className="w-16 h-16 bg-nc-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-nc-orange" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeIn()} className="mt-12 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-nc-orange font-bold text-lg">Understand</span>
            <ChevronRight className="w-5 h-5 text-nc-orange" />
            <span className="text-nc-orange font-bold text-lg">Connect</span>
            <ChevronRight className="w-5 h-5 text-nc-orange" />
            <span className="text-nc-orange font-bold text-lg">Build</span>
            <ChevronRight className="w-5 h-5 text-nc-orange" />
            <span className="text-nc-orange font-bold text-lg">Grow</span>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To empower businesses with connected technology and marketing solutions that drive sustainable growth, operational excellence, and market leadership.' },
              { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted technology and growth partner for businesses worldwide, known for connecting strategy to execution and ambition to achievement.' },
              { icon: Heart, title: 'Our Values', desc: 'Innovation, integrity, collaboration, results-obsession, and client-first thinking. We believe in doing right by our clients and their customers.' },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeIn(i * 0.1)} className="bg-nc-light border border-nc-border rounded-2xl p-8 lg:p-10 hover:shadow-lg hover:border-nc-orange/30 transition-all duration-300">
                <div className="w-14 h-14 bg-nc-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-nc-orange" />
                </div>
                <h3 className="text-2xl font-bold text-nc-black">{item.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-nc-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn()} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nc-black">Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">The people behind the connections.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div key={member.name} {...fadeIn(i * 0.1)} className="bg-white border border-nc-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 overflow-hidden">
                {member.image ? (
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-nc-orange/20 bg-nc-orange/10">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-nc-orange/20 bg-nc-orange/10 flex items-center justify-center text-3xl font-bold text-nc-orange">
                    {member.name.split(' ').map(part => part[0]).slice(0, 2).join('')}
                  </div>
                )}
                <h3 className="text-lg font-bold text-nc-black">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Want to Work With Us?" subheading="Let's connect and discuss how we can drive your business forward." />
    </div>
  );
}
