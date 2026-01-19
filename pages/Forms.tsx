import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';

const Forms: React.FC = () => {
  const forms = [
    { 
      title: "Consent & Patch Test", 
      desc: "Required for new color/tint clients.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSd4EYXRRsGxRRkVscmw64gtOP8rvHwg4Q-p_7kcXAxrrzlhNQ/viewform?usp=sharing&ouid=108059913434843684745"
    },
    { 
      title: "Nail Consultation", 
      desc: "For detailed nail art requests.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfgdDRrHiBhDUA_AnmCXsBTq6NIaOUnOcDLe-7_MH_IsKAXHw/viewform?usp=sharing&ouid=108059913434843684745"
    },
    // { 
    //   title: "Beauty Consultation", 
    //   desc: "Discuss your beauty goals with us.",
    //   link: "https://docs.google.com/forms/d/e/1FAIpQLSffmp_3ZJ705V6n-hmW5rcwPfBoFqpiXJBecu1MGwJ5BOgOIQ/viewform?usp=sharing&ouid=108059913434843684745"
    // },
  ];

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Client Forms</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            To ensure the best experience and safety, please complete the necessary consultation forms before your appointment.
          </p>
        </div>

        <div className="grid gap-6">
          {forms.map((form, idx) => (
            <a 
              key={idx} 
              href={form.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 border border-white/10 p-6 md:p-8 rounded-xl flex items-center justify-between group hover:border-[#D7BD9A]/50 transition-all cursor-pointer block"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-800 rounded-full text-[#D7BD9A] group-hover:bg-[#D7BD9A] group-hover:text-black transition-colors">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white group-hover:text-[#D7BD9A] transition-colors">
                    {form.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{form.desc}</p>
                </div>
              </div>
              <ChevronRight className="text-gray-600 group-hover:text-[#D7BD9A] transition-colors" />
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm italic">
                Note: Patch tests are mandatory 48 hours prior to any tinting or lifting service.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Forms;