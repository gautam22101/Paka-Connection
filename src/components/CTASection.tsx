import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryCTA?: string;
  primaryPath?: string;
  secondaryCTA?: string;
  secondaryPath?: string;
  dark?: boolean;
}

export default function CTASection({
  heading = "Let's Build Your Next Connection",
  subheading = "Transform your business with technology, marketing, and strategic growth.",
  primaryCTA = 'Start a Project',
  primaryPath = '/get-in-touch',
  secondaryCTA = 'Talk to an Expert',
  secondaryPath = '/get-in-touch',
  dark = true,
}: CTASectionProps) {
  return (
    <section className={`${dark ? 'bg-nc-black text-white' : 'bg-white text-nc-black'} py-20 lg:py-28`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{heading}</h2>
        <p className={`mt-4 text-lg ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryPath} className="inline-flex items-center gap-2 px-8 py-4 bg-nc-orange text-white font-semibold rounded-lg hover:bg-nc-orange-dark transition-colors">
            {primaryCTA} <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to={secondaryPath} className={`inline-flex items-center gap-2 px-8 py-4 border-2 font-semibold rounded-lg transition-colors ${
            dark ? 'border-white/20 text-white hover:border-nc-orange hover:text-nc-orange' : 'border-nc-black/20 text-nc-black hover:border-nc-orange hover:text-nc-orange'
          }`}>
            <Phone className="w-5 h-5" /> {secondaryCTA}
          </Link>
        </div>
      </div>
    </section>
  );
}
