import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FlowStepProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  total: number;
}

export default function FlowStep({ step, icon: Icon, title, description, total }: FlowStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
      className="relative flex items-start gap-6"
    >
      {/* Connector Line */}
      {step < total && (
        <div className="absolute left-[27px] top-14 w-0.5 h-[calc(100%-20px)] bg-gradient-to-b from-nc-orange to-nc-orange/20" />
      )}
      {/* Step Circle */}
      <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-nc-orange rounded-full flex items-center justify-center shadow-lg shadow-nc-orange/20">
        <span className="text-white font-bold text-lg">{step}</span>
      </div>
      {/* Content */}
      <div className="pb-12">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-5 h-5 text-nc-orange" />
          <h3 className="text-xl font-bold text-nc-black">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
