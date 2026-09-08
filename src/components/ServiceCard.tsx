import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  index?: number;
}

export default function ServiceCard({ icon: Icon, title, description, path, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={path} className="group block bg-white border border-nc-border rounded-2xl p-8 hover:shadow-xl hover:border-nc-orange/30 transition-all duration-300">
        <div className="w-14 h-14 bg-nc-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-nc-orange transition-colors duration-300">
          <Icon className="w-7 h-7 text-nc-orange group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-nc-black group-hover:text-nc-orange transition-colors">{title}</h3>
        <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-nc-orange font-semibold text-sm">
          Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}
