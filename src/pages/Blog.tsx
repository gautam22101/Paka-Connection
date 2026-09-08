import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, Tag } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

const categories = ['All', 'Technology', 'Marketing', 'ERP', 'Industry Insights', 'Company News'];

const posts = [
  { id: 1, title: 'How Connected Systems Drive Business Growth', category: 'Technology', excerpt: 'Discover why businesses that connect their technology, marketing, and operations outperform those that operate in silos.', date: 'June 18, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80' },
  { id: 2, title: 'The Complete Guide to ERP Implementation', category: 'ERP', excerpt: 'Everything you need to know about implementing an ERP system — from planning to go-live and beyond.', date: 'May 30, 2025', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1558494949-b6a2d4d5f90d?auto=format&fit=crop&w=1200&q=80' },
  { id: 3, title: 'Digital Marketing Strategies That Actually Work', category: 'Marketing', excerpt: 'Cut through the noise with proven digital marketing strategies that deliver measurable ROI for businesses.', date: 'May 14, 2025', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80' },
  { id: 4, title: 'Industry 4.0: The Future of Manufacturing', category: 'Industry Insights', excerpt: 'How smart factories and connected systems are transforming the manufacturing landscape globally.', date: 'April 22, 2025', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80' },
  { id: 5, title: 'Why Your Website Needs to Be More Than a Brochure', category: 'Technology', excerpt: 'Your website should be your hardest-working salesperson. Here\'s how to make it one.', date: 'April 08, 2025', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
  { id: 6, title: 'Pakaconnection: Our Journey and Vision', category: 'Company News', excerpt: 'A look at where we started, where we are, and where we\'re headed — connecting businesses to what\'s next.', date: 'March 25, 2025', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80' },
];

export default function Blog() {
  return (
    <div>
      <PageHero
        title="Blog & Insights"
        subtitle="Strategies, insights, and ideas to help your business grow."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <motion.div {...fadeIn()} className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} className="px-4 py-2 bg-nc-light border border-nc-border rounded-lg text-sm font-medium text-nc-black hover:bg-nc-orange hover:text-white hover:border-nc-orange transition-colors">
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article key={post.id} {...fadeIn(i * 0.1)} className="group bg-nc-light border border-nc-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-nc-orange/30 transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-nc-dark to-nc-black">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-nc-orange/10 text-nc-orange text-xs font-semibold rounded-full">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-nc-black group-hover:text-nc-orange transition-colors leading-snug">{post.title}</h2>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <span className="text-nc-orange font-medium text-sm inline-flex items-center gap-1 group-hover:underline">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div {...fadeIn()} className="mt-12 text-center">
            <button className="px-8 py-3 border-2 border-nc-orange text-nc-orange font-semibold rounded-lg hover:bg-nc-orange hover:text-white transition-colors">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-nc-black text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn()}>
            <h2 className="text-2xl md:text-3xl font-bold">Stay Connected</h2>
            <p className="mt-2 text-gray-400">Get insights, strategies, and updates delivered to your inbox.</p>
            <form onSubmit={(e) => { e.preventDefault(); }} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 bg-nc-dark border border-nc-gray rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nc-orange/50" />
              <button type="submit" className="px-6 py-3 bg-nc-orange text-white font-semibold rounded-lg hover:bg-nc-orange-dark transition-colors">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>

      <CTASection heading="Want to Discuss an Idea?" subheading="We love turning ideas into connected solutions." dark={false} />
    </div>
  );
}
