import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Type interfaces
interface ExtendedServiceItem {
  name: string;
  price: string;
  duration?: string;
  description?: string;
}

interface MainCategory {
  id: string;
  title: string;
  services: ExtendedServiceItem[];
}

const Services: React.FC = () => {
  const booksyUrl = "https://booksy.com/en-gb/dl/show-business/170549";
  const [openCategory, setOpenCategory] = useState<string | null>('hair');

  const mainCategories: MainCategory[] = [
    {
      id: 'nails',
      title: 'Nail Services',
      services: [
        { name: "Basic Manicure", price: "£30.00", duration: "45min", description: "Suitable for women & men. This service includes where your natural nails are cut & shaped, the cuticle's are prepped and cleaned thoroughly. Manual tools used to clean up dead skin around the fingers carefully. No nail polish or gel polish is included in this treatment, optional Shiney/Matte Finish. This service is finished with hydrating cuticle oil." },
        { name: "Express Manicure", price: "£20.00", duration: "30min", description: "This service includes where your natural nails are cut & shaped, the..." },
        { name: "Normal Polish Manicure", price: "£18.00", duration: "1h", description: "This service includes where your natural nails are cut & shaped, the..." },
        { name: "Gel Manicure", price: "£38.00", duration: "1h 10 min", description: "This service includes where your natural nails are cut & shaped, the..." },
        { name: "French Manicure", price: "£45.00", duration: "1h 15min", description: "This service includes where your natural nails are cut & shaped, the..." },
        { name: "Russian Manicure", price: "£50.00", duration: "2h", description: "This service includes thorough cuticle and skin prep using a Russian..." },
        { name: "Luxury Manicure", price: "£50.00", duration: "2h 10 min", description: "This service includes thorough cuticle and skin prep using a Russia..." },
        { name: "Normal Polish Manicure & Pedicure", price: "£45.00", duration: "2h 5min" },
        { name: "Gel Manicure & Pedicure", price: "£65.00", duration: "2h 5min" },
        { name: "Luxury Manicure & Luxury Pedicure", price: "£90.00", duration: "4h 5min", description: "This package includes luxury manicure & luxury pedicure with Gel..." },
        { name: "French Finish", price: "£8.00", duration: "15 min", description: "French tip finish chosen thickness & style & colour." },
        { name: "Chrome Finish", price: "£10.00", duration: "20min", description: "Chrome finish range of chrome powders to pick from" },
        { name: "Bronze Nail Art Hands", price: "£8.00", duration: "15min", description: "Nail art on hands includes french tips & 1 or 2 simple design stars, hearts &..." },
        { name: "Silver Nail Art Hands", price: "£12.00", duration: "25 min", description: "Nail art on hands includes chrome, ombre etc" },
        { name: "Gold Nail Art Hands", price: "£20.00", duration: "30min", description: "Nail art on hands for all fingers, please show picture for according..." },
        { name: "Russian Cuticle Work", price: "£10.00", duration: "20 min", description: "This service includes thorough cuticle and skin prep using a Russian..." },
        { name: "Extended Hand Massage", price: "£10.00", duration: "15min", description: "This service includes an extended hand massage with a moisturising..." },
        { name: "BIAB Overlay", price: "£15.00", duration: "35min", description: "This services includes a builder in a bottle overlay structural applied for..." },
        { name: "Hard Gel Overlay", price: "£20.00", duration: "40 min", description: "This services includes a hard gel overlay structurally applied for..." },
        { name: "Strengthening IBX Treatment", price: "£15.00", duration: "20min", description: "IBX strengthening treatment can be included with any manicure treatmen..." },
        { name: "Express File Basic Toes Gel", price: "£28.00", duration: "40 min" },
        { name: "Express File Basic Toes Normal Polish", price: "£25.00", duration: "40min" },
        { name: "Basic Spa Pedicure", price: "£25.00", duration: "45min" },
        { name: "Gel Spa Pedicure", price: "£40.00", duration: "1h 5min" },
        { name: "Normal Polish Spa Pedicure", price: "£30.00", duration: "1h 10 min" },
        { name: "French Spa Pedicure", price: "£45.00", duration: "1h 20min" },
        { name: "Luxury Pedicure", price: "£50.00", duration: "1h 30min", description: "This is a shortened verision of the luxury Elim pedicure this includes:" },
        { name: "Extended Foot Massage", price: "£18.00", duration: "20min" },
        { name: "Callus Remover", price: "£15.00", duration: "20min", description: "This service includes a callus tonic treatment which is used to remove..." },
        { name: "Bronze Nail Art Toes", price: "£5.00", duration: "15 min", description: "Nail art on toes includes french tips & 1 simple design stars, hearts & lines" },
        { name: "Silver Nail Art Toes", price: "£10.00", duration: "20 min", description: "Nail art on toes includes chrome, ombre etc" },
        { name: "Gold Nail Art Toes", price: "£15.00", duration: "30min", description: "Nail art on all toenails" },
        { name: "Gel Removal", price: "£10.00", duration: "20min", description: "This service includes removal of gel colour only using an electric file...." },
        { name: "Builder Gel Removal", price: "£15.00", duration: "30min", description: "This service includes removal of builder gel only using an electric file..." },
        { name: "Foreign BIAB Removal", price: "£20.00", duration: "30min", description: "This service includes removal of guilder gel only using an electric file..." },
        { name: "Soak off Removal", price: "£20.00", duration: "30min", description: "This service includes hand filing method to remove top layer of gel o..." },
        { name: "Hard Gel/Acrylics Removal", price: "£30.00", duration: "45min", description: "This services includes of hard gel and acrylics from another salon not our..." }
      ]
    },
    {
      id: 'women-hair',
      title: 'Women Hair Services',
      services: [
        { name: "Wash, Haircut & Blow Dry for Short Hair", price: "£35.00+", duration: "1h" },
        { name: "Wash, Haircut & Blow Dry for Medium Hair", price: "£40.00+", duration: "1h" },
        { name: "Wash, Haircut & Blow Dry for Long Hair", price: "£45.00+", duration: "1h" },
        { name: "Wash & Blow Dry for Short Hair", price: "£25.00+", duration: "45min" },
        { name: "Wash & Blow Dry for Medium Hair", price: "£30.00+", duration: "45min" },
        { name: "Wash & Blow Dry for Long Hair", price: "£35.00+", duration: "1h" },
        { name: "Girls cut", price: "£25.00+", duration: "45min", description: "This service varies on length of child's hair and age, price starts at." },
        { name: "Fringe Cut", price: "£10.00", duration: "15min" },
        { name: "K18 Molecular Repair Treatment", price: "£40.00", duration: "1h", description: "This treatment includes wash & blow dry." },
        { name: "Molecular Hair Repair Treatment", price: "£40.00", duration: "1h" },
        { name: "Metal Detox Treatment", price: "£40.00", duration: "1h" },
        { name: "Hair Up", price: "£60.00+", duration: "1h" },
        { name: "Standard Curls", price: "£40.00", duration: "1h", description: "This is normal curls after blow-dry" },
        { name: "Hair Up Curls", price: "£60.00+", duration: "1h 30min", description: "Please choose this option if you require curls for an occasion" },
        { name: "Hollywood Waves", price: "£65.00+", duration: "2h" },
        { name: "Finger Waves", price: "£50.00+", duration: "1h" },
        { name: "Half Hair Up", price: "£40.00+", duration: "1h" },
        { name: "French Braid", price: "£30.00+", duration: "1h" },
        { name: "Bridal Hairstyle", price: "£100.00+", duration: "2h" },
        { name: "Consulting", price: "-", duration: "15min", description: "Consulting required for Highlights, Balayage & Ombre" }
      ]
    },
    {
      id: 'women-colour',
      title: 'Women Colour & Highlights',
      services: [
        { name: "Half Head Highlights Short Hair", price: "£35.00", duration: "2h" },
        { name: "Half Head Highlights Medium Hair", price: "£40.00", duration: "3h" },
        { name: "Half Head Highlights Long Hair", price: "£45.00", duration: "3h 30min" },
        { name: "Full Head Highlights Short Hair", price: "£45.00", duration: "2h" },
        { name: "Full Head Highlights Medium Hair", price: "£60.00", duration: "3h" },
        { name: "Full Head Highlights Long Hair", price: "£70.00", duration: "4h" },
        { name: "Balayage with Toner Medium Hair", price: "£65.00", duration: "3h" },
        { name: "Balayage with Toner Long Hair", price: "£190.00", duration: "4h 30min" },
        { name: "T Section Highlights Short Hair", price: "£30.00", duration: "2h 30min" },
        { name: "T Section Highlights Medium Hair", price: "£70.00", duration: "2h 30min" },
        { name: "T Section Highlights Long Hair", price: "£80.00", duration: "2h 30min" },
        { name: "Money Piece Face Framing", price: "£20.00", duration: "1h" },
        { name: "Full Head Colour for Short Hair", price: "£30.00+", duration: "1h 30min" },
        { name: "Full Head Colour for Medium Hair", price: "£40.00+", duration: "2h" },
        { name: "Full Head Colour for Long Hair", price: "£45.00+", duration: "2h" },
        { name: "Root Colour for Short Hair", price: "£50.00+", duration: "2h" },
        { name: "Root Colour for Medium Hair", price: "£50.00+", duration: "2h" },
        { name: "Root Colour for Long Hair", price: "£50.00+", duration: "2h 30min" }
      ]
    },
    {
      id: 'toner',
      title: 'Women Toner Hair Treatments',
      services: [
        { name: "Toner for Short Hair", price: "£30.00", duration: "1h 30min" },
        { name: "Toner for Medium Hair", price: "£40.00", duration: "30min" },
        { name: "Toner for Long Hair", price: "£40.00", duration: "30min" }
      ]
    },
    {
      id: 'makeup',
      title: 'Women Make Up Services',
      services: [
        { name: "Natural Soft Glam Make Up", price: "£70.00+", duration: "1h" },
        { name: "Full Glow Up Make Up", price: "£80.00+", duration: "1h 30min" },
        { name: "Bridal Make Up", price: "£200.00+", duration: "Varies", description: "Consultation required before please enquiry in the salon" }
      ]
    },
    {
      id: 'men-hair',
      title: 'Men Hair Services',
      services: [
        { name: "Scissor Cut", price: "£15.00", duration: "30min" },
        { name: "Clipper Cut", price: "£14.00", duration: "30min" },
        { name: "Royal Beard Shape", price: "£15.00", duration: "30min" },
        { name: "Men's Hair Wash & Cut", price: "£20.00", duration: "40min" },
        { name: "Long Hair Male Cut", price: "£20.00", duration: "30min" },
        { name: "Skin Fade", price: "£18.00", duration: "30min" },
        { name: "Zero Fade", price: "£18.00", duration: "30min" },
        { name: "Boys Cut", price: "£14.00", duration: "30min" }
      ]
    },
    {
      id: 'men-beauty',
      title: 'Men Beauty Treatments',
      services: [
        { name: "Men Eyebrow Threading", price: "£9.00", duration: "15min" },
        { name: "Ear Waxing", price: "£5.00", duration: "15min" },
        { name: "Nose Waxing", price: "£5.00", duration: "15min" },
        { name: "Cheek Waxing", price: "£5.00", duration: "15min" },
        { name: "Men Face Waxing", price: "£25.00", duration: "30min" }
      ]
    },
    {
      id: 'women-beauty',
      title: 'Women Beauty Services',
      services: [
        { name: "Lash Lift & Tint", price: "£60.00", duration: "45min", description: "Patch is required 48 hours prior to appointment." },
        { name: "Brow Lamination & Tint", price: "£65.00", duration: "1h 30min", description: "Patch testing required 48 hours before treatment" },
        { name: "Lash Lift & Brow Lamination", price: "£110.00", duration: "1h", description: "Includes tinting and shaping." },
        { name: "Ladies Eyebrow Threading", price: "£8.00", duration: "15min" },
        { name: "Upper Lip Threading", price: "£5.00", duration: "15 min" },
        { name: "Eyebrow & Upper Lip Threading", price: "£10.00", duration: "20min" },
        { name: "Lower Lip Threading", price: "£3.00", duration: "10 min" },
        { name: "Middle of Brows Threading", price: "£3.00", duration: "10 min" },
        { name: "Chin Threading", price: "£5.00", duration: "10 min" },
        { name: "Neck Threading", price: "£5.00", duration: "15min" },
        { name: "Chin & Neck Threading", price: "£8.00", duration: "20min" },
        { name: "Forehead Threading", price: "£5.00", duration: "15min" },
        { name: "Sides Face Threading", price: "£10.00", duration: "15min" },
        { name: "Full Face Threading including Eyebrows", price: "£25.00", duration: "30min" },
        { name: "Underarms Strip Wax", price: "£10.00", duration: "15min" },
        { name: "Half Arms Strip Wax", price: "£15.00", duration: "20min" },
        { name: "Half Legs Strip Wax", price: "£20.00", duration: "20 min" },
        { name: "3/4 Legs Strip Wax", price: "£18.00", duration: "30min" },
        { name: "Full Legs Strip Wax", price: "£25.00", duration: "30min" },
        { name: "Bikini Line Strip Wax", price: "£25.00", duration: "30min" },
        { name: "Chest Strip Wax", price: "£12.00", duration: "30min" },
        { name: "Full Legs Strip Wax & Basic Bikini", price: "£38.00", duration: "45min" },
        { name: "Buttocks Strip Wax", price: "£15.00", duration: "30 min" },
        { name: "Stomach Strip Wax", price: "£15.00", duration: "30min" },
        { name: "Back Strip Wax", price: "£25.00", duration: "30 min" },
        { name: "Express Full Body Strip Wax", price: "£85.00", duration: "1h 30min" },
        { name: "Eyebrows Hot Wax", price: "£10.00", duration: "15min" },
        { name: "Upper Lip Hot Wax", price: "£7.00", duration: "15min" },
        { name: "Lower Lip Hot Wax", price: "£3.00", duration: "15 min" },
        { name: "Chin Hot Wax", price: "£7.00", duration: "15 min" },
        { name: "Nose Hot Wax", price: "£10.00", duration: "15min" },
        { name: "Neck Hot Wax", price: "£10.00", duration: "15 min" },
        { name: "Chin & Neck Hot Wax", price: "£15.00", duration: "20min" },
        { name: "Sides Face Hot Wax", price: "£7.00", duration: "15min" },
        { name: "Full Face Hot Wax", price: "£35.00", duration: "30min" },
        { name: "Underarms Hot Wax", price: "£12.00", duration: "15 min" },
        { name: "Basic Bikini Line Hot Wax", price: "£25.00", duration: "30min" },
        { name: "Hollywood Hot Wax", price: "£35.00", duration: "30min" },
        { name: "Brazilian Hot Wax", price: "£40.00", duration: "30 min", description: "This covers your full intimate area." },
        { name: "Eyebrow Tinting", price: "£10.00", duration: "15 min" },
        { name: "Eyelash Tinting", price: "£10.00", duration: "15min" },
        { name: "Eyebrow Threading & Eyebrow Tinting", price: "£15.00", duration: "20min" },
        { name: "Eyebrow Tint & Eyelash Tint", price: "£18.00", duration: "30min" }
      ]
    }
  ];

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Header Image */}
      <div className="relative h-[40vh] bg-neutral-900 overflow-hidden">
        <img src="/service.png" alt="Salon Services" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-center pb-12">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-2">Service Menu</h1>
          <p className="text-[#D7BD9A] uppercase tracking-widest text-sm">Luxury • Care • Style</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-4">
          {mainCategories.map((cat) => (
            <div key={cat.id} className="border border-white/10 bg-neutral-900/50 rounded-xl overflow-hidden">
              {/* Accordion Header */}
              <button 
                onClick={() => toggleCategory(cat.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-left">
                  <h2 className="text-xl md:text-2xl font-serif text-[#D7BD9A]">{cat.title}</h2>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">{cat.services.length} Services</p>
                </div>
                {openCategory === cat.id ? <ChevronUp className="text-[#D7BD9A]" /> : <ChevronDown className="text-gray-400" />}
              </button>

              {/* Accordion Content */}
              {openCategory === cat.id && (
                <div className="p-6 md:p-8 space-y-8 animate-fade-in-down">
                  <div className="grid grid-cols-1 gap-y-8">
                    {cat.services.map((item, idx) => (
                      <div key={idx} className="flex flex-col border-b border-dashed border-white/10 pb-6 group">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <div className="flex-grow">
                            <h4 className="text-gray-200 font-medium text-lg group-hover:text-[#D7BD9A] transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-gray-500 text-xs uppercase tracking-tighter mb-1">{item.duration}</p>
                            {item.description && (
                              <p className="text-gray-400 text-sm font-light italic leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col items-end gap-3">
                            <span className="text-[#D7BD9A] font-bold text-lg whitespace-nowrap">
                              {item.price}
                            </span>
                            <a 
                              href={booksyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-4 py-1 rounded-full border border-[#D7BD9A] text-[#D7BD9A] text-[10px] uppercase font-bold hover:bg-[#D7BD9A] hover:text-black transition-all"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-20 text-center p-12 border border-[#D7BD9A]/20 rounded-3xl bg-neutral-900/30">
          <h3 className="text-3xl font-serif text-white mb-4">Ready to Glow?</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Book your appointment today. For complex color corrections or bridal services, we recommend a consultation first.
          </p>
          <a 
            href={booksyUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-[#D7BD9A] text-black px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl"
          >
            Book Full Experience
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;