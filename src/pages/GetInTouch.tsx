import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import { companyProfile } from '../data/siteData';

const fadeIn = (delay = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6, delay } });

export default function GetInTouch() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '', budget: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    setErrors({});
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '', budget: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) => `w-full px-4 py-3 border rounded-lg text-nc-black focus:outline-none focus:ring-2 focus:ring-nc-orange/50 transition-colors ${errors[field] ? 'border-red-500 bg-red-50' : 'border-nc-border bg-white'}`;

  return (
    <div>
      <PageHero
        title="Get in Touch"
        subtitle="Let's discuss how we can connect your business to what's next."
        breadcrumbs={[{ label: 'Get in Touch' }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeIn()} className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-nc-black">Let's <span className="text-nc-orange">Connect</span></h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Whether you have a project in mind, need a consultation, or just want to explore possibilities — we're here to help.
              </p>
              <div className="mt-8 space-y-6">
                {[
                 { icon: MapPin, label: 'Office', value: companyProfile.address },
                 { icon: Phone, label: 'Phone', value: companyProfile.phone },
                 { icon: Mail, label: 'Email', value: companyProfile.email },
                 { icon: Clock, label: 'Business Hours', value: companyProfile.businessHours },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-nc-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-nc-orange" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                      <div className="text-nc-black font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-nc-orange/5 border border-nc-orange/20 rounded-xl">
                <h3 className="font-bold text-nc-black">Quick Connect</h3>
                <p className="mt-1 text-sm text-gray-600">Prefer messaging? Reach us on WhatsApp for a faster response.</p>
                <a
                  href={`https://wa.me/${companyProfile.whatsappNumber}?text=${encodeURIComponent("Hi Pakaconnection, I'd like to discuss a project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-nc-orange font-semibold text-sm hover:underline"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeIn(0.2)} className="lg:col-span-3">
              <div className="bg-nc-light border border-nc-border rounded-2xl p-8 lg:p-10">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-nc-orange mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-nc-black">Message Sent!</h3>
                    <p className="mt-2 text-gray-600">We'll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-nc-orange font-semibold hover:underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-nc-black mb-2">Start a Project</h3>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-nc-black mb-1.5">Full Name *</label>
                        <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={inputClass('name')} placeholder="Your name" />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-nc-black mb-1.5">Email *</label>
                        <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={inputClass('email')} placeholder="your@email.com" />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-nc-black mb-1.5">Phone</label>
                        <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={inputClass('phone')} placeholder="Your phone number" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-nc-black mb-1.5">Company</label>
                        <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className={inputClass('company')} placeholder="Your company" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-nc-black mb-1.5">Service Interested In</label>
                        <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className={inputClass('service')}>
                          <option value="">Select a service</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="ERP Solutions">ERP Solutions</option>
                          <option value="Multiple Services">Multiple Services</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-nc-black mb-1.5">Budget Range</label>
                        <select value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className={inputClass('budget')}>
                          <option value="">Select budget</option>
                          <option value="Under $5K">Under $5K</option>
                          <option value="$5K - $15K">$5K - $15K</option>
                          <option value="$15K - $50K">$15K - $50K</option>
                          <option value="$50K+">$50K+</option>
                          <option value="Let's Discuss">Let's Discuss</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-nc-black mb-1.5">Message *</label>
                      <textarea rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className={inputClass('message')} placeholder="Tell us about your project..." />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>
                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto px-8 py-3.5 bg-nc-orange text-white font-semibold rounded-lg hover:bg-nc-orange-dark transition-colors disabled:opacity-50 flex items-center gap-2"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
