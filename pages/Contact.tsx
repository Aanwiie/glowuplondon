import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  ArrowRight,
  MoveRight
} from 'lucide-react';


const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/danwesha488@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Service Inquiry from ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setFormStatus('sent');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Form error:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-28 pb-20 relative overflow-hidden text-white/90 font-sans selection:bg-[#D7BD9A]/30 selection:text-white">

      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#D7BD9A]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px] relative z-10">

        {/* --- HEADER SECTION --- */}
        <div className="mb-16 lg:mb-24 border-b border-white/5 pb-12 overflow-hidden">
          <div className="w-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-6">
              Get in touch <span className="text-[#D7BD9A] italic">with us.</span>
            </h1>
            {/* Subtext forced to one line */}
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed whitespace-nowrap">
              Begin your transformation with us. Visit our salon or happy to speak to you on the phone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* --- LEFT: FORM --- */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative group rounded-3xl bg-white/[0.08] border border-white/10 p-6 md:p-10 lg:p-14 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <h3 className="text-2xl md:text-3xl font-serif mb-2 text-white">Send an Enquiry</h3>
              <p className="text-neutral-400 text-sm mb-10">We usually respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10 relative z-20">
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <FloatingInput
                    label="Your Name" id="name" name="name" type="text"
                    value={formData.name} onChange={handleChange}
                  />
                  <FloatingInput
                    label="Email Address" id="email" name="email" type="email"
                    value={formData.email} onChange={handleChange}
                  />
                </div>

                <FloatingInput
                  label="Service Interested In" id="service" name="service" type="text"
                  value={formData.service} onChange={handleChange}
                />

                <div className="relative">
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                    className="block w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-[#D7BD9A] transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message" required
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-neutral-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[#D7BD9A] peer-focus:text-xs pointer-events-none">
                    How can we help you?
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    disabled={formStatus === 'sending' || formStatus === 'sent'}
                    className={`group relative overflow-hidden bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-none md:rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:bg-[#D7BD9A] ${formStatus === 'sent' ? '!bg-green-500 text-white hover:bg-green-500' : ''} ${formStatus === 'error' ? '!bg-red-500 text-white' : ''}`}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {formStatus === 'idle' && <>Send Message <ArrowRight size={16} /></>}
                      {formStatus === 'sending' && <>Sending...</>}
                      {formStatus === 'sent' && <>Sent Successfully</>}
                      {formStatus === 'error' && <>Failed. Try Again.</>}
                    </span>
                  </button>
                  <span className="hidden md:flex text-neutral-500">
                    <MoveRight className="w-16 h-4 opacity-30" />
                  </span>
                </div>
              </form>
            </div>
          </div>


          {/* --- RIGHT: CONTACT DETAILS --- */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-12">
            <div className="space-y-8">
              <ContactItem icon={<Phone size={24} />} label="Call Us" value="07494 452332" href="tel:07494452332" />
              <ContactItem icon={<Mail size={24} />} label="Email Us" value="theglowuplondon@gmail.com" href="mailto:theglowuplondon@gmail.com" />
              <ContactItem
                icon={<MapPin size={24} />}
                label="Visit Studio"
                value="115 High Street, Brentford, TW8 8AF"
                href="#"
                subValue="Unit 1, Tintern House"
                forceOneLine={true} 
              />
            </div>

            <div className="p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/20 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#D7BD9A]/10 rounded-full text-[#D7BD9A]">
                  <Clock size={18} />
                </div>
                <span className="text-white font-serif text-lg">Opening Hours</span>
              </div>
              <div className="space-y-4 text-sm font-light">
                <div className="flex justify-between border-b border-white/5 pb-3 text-neutral-300">
                  <span className="tracking-widest uppercase text-xs text-neutral-500">Mon - Fri</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-3 text-neutral-300">
                  <span className="tracking-widest uppercase text-xs text-neutral-500">Saturday</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="tracking-widest uppercase text-xs text-neutral-500">Sunday</span>
                  <span>10:00 - 17:00</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-6">Connect With Us</p>
              <div className="flex gap-4">
                <SocialButton href="https://www.instagram.com/theglowuplondon?igsh=Ym1sc2p4azNhamwx" icon={<Instagram size={20} />} label="Instagram" />
                <SocialButton href="https://www.facebook.com/share/1DRYxnZvDy/?mibextid=wwXIfr" icon={<Facebook size={20} />} label="Facebook" />
                <SocialButton 
                  href="https://www.tiktok.com/@theglowuplondon?_r=1&_t=ZS-92s77AZLEgR" 
                  icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.183 8.183 0 0 0 4.101 1.01V6.29l-.33.044a4.792 4.792 0 0 1-1.02.043Z" /></svg>} 
                  label="TikTok" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 w-full">
           <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative grayscale-[0.5] hover:grayscale-0 transition-all duration-700 bg-neutral-900">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.595167732047!2d-0.3060596!3d51.4839556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760dc264585555%3A0x696874989679634b!2s115%20High%20St%2C%20Brentford%20TW8%208AF!5e0!3m2!1sen!2suk!4v1715854890000!5m2!1sen!2suk" 
                width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps Location" className="opacity-80 hover:opacity-100 transition-opacity duration-500"
             ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
};

// -- REUSABLE COMPONENTS --

const FloatingInput: React.FC<{ label: string; id: string; name: string; type: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, id, name, type, value, onChange }) => (
  <div className="relative">
    <input
      type={type} id={id} name={name} value={value} onChange={onChange} required
      className="block w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-[#D7BD9A] transition-colors peer placeholder-transparent"
      placeholder={label}
    />
    <label htmlFor={id} className="absolute left-0 -top-3.5 text-neutral-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[#D7BD9A] peer-focus:text-xs pointer-events-none">
      {label}
    </label>
  </div>
);

const ContactItem = ({ icon, label, value, subValue, href, forceOneLine }: { icon: any, label: string, value: string, subValue?: string, href: string, forceOneLine?: boolean }) => (
  <a href={href} className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
    <div className="shrink-0 p-4 rounded-full border border-white/5 bg-white/5 text-[#D7BD9A] group-hover:bg-[#D7BD9A] group-hover:text-black transition-colors">
      {icon}
    </div>
    <div className="pt-1 overflow-hidden">
      <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1 group-hover:text-[#D7BD9A] transition-colors">{label}</p>
      <p className={`text-xl md:text-2xl font-serif text-white ${forceOneLine ? 'whitespace-nowrap' : ''}`}>{value}</p>
      {subValue && <p className="text-neutral-400 text-sm mt-1 font-light">{subValue}</p>}
    </div>
  </a>
);

const SocialButton = ({ icon, label, href }: { icon: any, label: string, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 hover:border-[#D7BD9A]/50 hover:bg-[#D7BD9A]/10 hover:text-[#D7BD9A] transition-all group">
    {icon}
    <span className="text-xs uppercase tracking-widest hidden sm:block">{label}</span>
  </a>
);

export default Contact;