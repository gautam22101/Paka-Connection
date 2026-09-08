import { motion } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';
import ConnectionVisual from './ConnectionVisual';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; path?: string }[];
  dark?: boolean;
}

export default function PageHero({ title, subtitle, breadcrumbs, dark = true }: PageHeroProps) {
  return (
    <section className={`relative ${dark ? 'bg-nc-black text-white' : 'bg-white text-nc-black'} pt-20 lg:pt-24 pb-16 lg:pb-20 overflow-hidden`}>
      <ConnectionVisual variant="default" className="opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">{title}</h1>
          {subtitle && <p className={`mt-4 text-lg md:text-xl max-w-2xl ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
