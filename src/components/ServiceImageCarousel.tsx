import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import webDevelopmentImage from '../assets/service-images/web-development.jpg';
import digitalMarketingImage from '../assets/service-images/digital-marketing.jpg';
import erpSolutionsImage from '../assets/service-images/erp-solutions.jpg';
import businessStrategyImage from '../assets/service-images/business-strategy.jpg';
import dataAnalyticsImage from '../assets/service-images/data-analytics.jpg';
import growthPartnershipImage from '../assets/service-images/growth-partnership.jpg';

const serviceImages = [
  { title: 'Web Development', image: webDevelopmentImage },
  { title: 'Digital Marketing', image: digitalMarketingImage },
  { title: 'ERP Solutions', image: erpSolutionsImage },
  { title: 'Business Strategy', image: businessStrategyImage },
  { title: 'Data Analytics', image: dataAnalyticsImage },
  { title: 'Growth Partnership', image: growthPartnershipImage },
];

export default function ServiceImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % serviceImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="service-carousel" aria-label="Our services slideshow">
      {serviceImages.map((service, index) => (
        <motion.div
          key={service.title}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: index === activeIndex ? 1 : 0, scale: index === activeIndex ? 1 : 1.04 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          aria-hidden={index !== activeIndex}
        >
          <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
        </motion.div>
      ))}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{serviceImages[activeIndex].title}</p>
        <div className="mt-3 flex gap-1.5" aria-hidden="true">
          {serviceImages.map((service, index) => (
            <span key={service.title} className={`h-1 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-nc-orange' : 'w-2 bg-white/50'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
