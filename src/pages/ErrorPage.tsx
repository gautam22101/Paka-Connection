import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, Home, RefreshCw, ServerCrash, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

type ErrorPageProps = {
  code: '404' | '500' | '503';
};

const errorContent = {
  '404': {
    icon: AlertTriangle,
    title: 'Page not found',
    description: "The page you're looking for may have moved, been removed, or never existed.",
    action: 'Back to home',
  },
  '500': {
    icon: ServerCrash,
    title: 'Internal server error',
    description: 'Something went wrong on our side. Please try again in a moment.',
    action: 'Try again',
  },
  '503': {
    icon: Wrench,
    title: 'Service unavailable',
    description: 'We are making a few improvements. Please check back shortly.',
    action: 'Refresh page',
  },
} as const;

export default function ErrorPage({ code }: ErrorPageProps) {
  const content = errorContent[code];
  const Icon = content.icon;

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-nc-black text-white flex items-center">
      <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-nc-orange/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-nc-orange/10 blur-3xl" />
      <div className="relative max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-nc-orange/15 text-nc-orange"
        >
          <Icon className="h-10 w-10" />
        </motion.div>
        <p className="mt-8 text-8xl sm:text-9xl font-bold tracking-tight text-nc-orange">{code}</p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold">{content.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-gray-400">{content.description}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {code === '404' ? (
            <Link to="/" className="inline-flex items-center gap-2 rounded-lg bg-nc-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-nc-orange-dark">
              <Home className="h-5 w-5" /> {content.action}
            </Link>
          ) : (
            <button onClick={() => window.location.reload()} className="inline-flex items-center gap-2 rounded-lg bg-nc-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-nc-orange-dark">
              <RefreshCw className="h-5 w-5" /> {content.action}
            </button>
          )}
          <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:border-nc-orange hover:text-nc-orange">
            <ArrowLeft className="h-5 w-5" /> Go back
          </button>
        </div>
      </div>
    </section>
  );
}
