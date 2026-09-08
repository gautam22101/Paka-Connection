import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { companyProfile } from '../data/siteData';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${companyProfile.whatsappNumber}?text=${encodeURIComponent("Hi Pakaconnection, I'd like to discuss a project.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" fill="white" />
    </motion.a>
  );
}
