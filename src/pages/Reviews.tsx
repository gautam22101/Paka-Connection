import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { siteReviews } from '../data/siteData';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function Reviews() {
  const [reviews, setReviews] = useState<typeof siteReviews>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setReviews(data);
          } else {
            setReviews(siteReviews);
          }
        } else {
          setReviews(siteReviews);
        }
      } catch {
        setReviews(siteReviews);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const filters = ['All', 'Web Development', 'Digital Marketing', 'ERP Solutions'];
  const filtered = activeFilter === 'All' ? reviews : reviews.filter(r => r.service === activeFilter);

  return (
    <div>
      <PageHero
        title="Client Reviews"
        subtitle="What our partners say about working with Pakaconnection."
        breadcrumbs={[{ label: 'Reviews' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div {...fadeIn()} className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === f ? 'bg-nc-orange text-white' : 'bg-nc-light text-nc-black hover:bg-nc-orange/10'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Reviews Grid */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="bg-nc-light border border-nc-border rounded-2xl p-8 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
                  <div className="h-3 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((review, i) => (
                <motion.div key={review.id} {...fadeIn(i * 0.08)} className="bg-nc-light border border-nc-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <Quote className="w-10 h-10 text-nc-orange/20 mb-4" />
                  <p className="text-gray-700 leading-relaxed">"{review.review_text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-nc-orange/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-nc-orange/40" />
                    </div>
                    <div>
                      <div className="font-semibold text-nc-black">{review.client_name}</div>
                      <div className="text-sm text-gray-500">{review.designation}, {review.company}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} className={`w-4 h-4 ${s <= review.rating ? 'text-nc-orange fill-nc-orange' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-nc-orange bg-nc-orange/10 px-2 py-1 rounded">{review.service}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection heading="Join Our Growing List of Happy Clients" subheading="Let's create your success story together." />
    </div>
  );
}
