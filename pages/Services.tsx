import React from 'react';

// Type interfaces
interface ExtendedServiceItem {
  name: string;
  price: string;
  duration?: string;
  description?: string;
}

interface SubCategory {
  title: string;
  items: ExtendedServiceItem[];
}

interface MainCategory {
  id: string;
  title: string;
  description: string;
  subCategories: SubCategory[];
}

const Services: React.FC = () => {
  const booksyUrl = "https://booksy.com/en-gb/dl/show-business/170549";

  // --- HAIR DATA ---
  const hairData: SubCategory[] = [
    {
      title: "Women Services",
      items: [
        { name: "Wash, Haircut & Blow Dry (Short)", price: "£35", duration: "1 hour" },
        { name: "Wash, Haircut & Blow Dry (Medium)", price: "£40+", duration: "1 hour" },
        { name: "Wash, Haircut & Blow Dry (Long)", price: "£45+", duration: "1 hour" },
        { name: "Wash & Blow Dry (Short)", price: "£25", duration: "45 mins" },
        { name: "Wash & Blow Dry (Medium)", price: "£30", duration: "45 mins" },
        { name: "Wash & Blow Dry (Long)", price: "£35", duration: "1 hour" },
        { name: "Fringe Cut", price: "£10+", duration: "15 mins" },
        { name: "Girls Cut", price: "£25+", duration: "45 mins" },
      ]
    },
    {
      title: "Styling & Up-Dos",
      items: [
        { name: "Hair Up", price: "£45+", duration: "1 hour" },
        { name: "Curls", price: "£30+", duration: "45 mins" },
        { name: "Hollywood Waves", price: "£50+", duration: "1 hr 15 mins" },
        { name: "Finger Waves", price: "£40+", duration: "1 hour" },
        { name: "High Hair Up", price: "£55+", duration: "1 hr 15 mins" },
        { name: "French Braid", price: "£20+", duration: "30 mins" },
        { name: "Bridal Hairstyle", price: "Consultation+", duration: "2 hours" },
      ]
    },
    {
      title: "Colour & Highlights",
      items: [
        { name: "Full Head Colour (Short)", price: "£60+", duration: "1 hr 30 mins" },
        { name: "Full Head Colour (Medium)", price: "£80+", duration: "2 hours" },
        { name: "Full Head Colour (Long)", price: "£90+", duration: "2 hours" },
        { name: "Root Colour (Short)", price: "£50+", duration: "1.5 - 2 hours" },
        { name: "Root Colour (Medium)", price: "£50+", duration: "1.5 - 2 hours" },
        { name: "Root Colour (Long)", price: "£50+", duration: "1.5 - 2 hours" },
        { name: "Toner (Short)", price: "£30+", duration: "30 mins" },
        { name: "Toner (Medium)", price: "£40+", duration: "30 mins" },
        { name: "Toner (Long)", price: "£40+", duration: "30 mins" },
        { name: "Full Head Highlights", price: "£90+", duration: "2 - 4 hours" },
        { name: "Half Head Highlights", price: "£70+", duration: "2 - 3 hours" },
        { name: "T Section Highlights", price: "£60+", duration: "2 - 3 hours" },
        { name: "Ombre/Balayage", price: "Consultation+", duration: "3 hours" },
      ]
    }
  ];

  // --- NAILS DATA ---
  const nailsData: SubCategory[] = [
    {
      title: "Manicure & Additional Services",
      items: [
        { name: "Basic Manicure", price: "£30.00", duration: "45min", description: "Suitable for women & men. This service includes where your natural nails are cut..." },
        { name: "Express Manicure", price: "£20.00", duration: "30min", description: "This service includes where your natural nails are cut & shaped, the cuticle's are..." },
        { name: "Normal Polish Manicure", price: "£18.00", duration: "1h", description: "This service includes where your natural nails are cut & shaped, the cuticle's are..." },
        { name: "Gel Manicure", price: "£38.00", duration: "1hr 10 mins", description: "This service includes where your natural® nails are cut & shaped, the cuticle's are..." },
        { name: "French Manicure", price: "£45.00", duration: "1h 15min", description: "This service includes where your natural nails are cut & shaped, the cuticle's are..." },
        { name: "Russian Manicure", price: "£50.00", duration: "2h", description: "This service includes thorough cuticle and skin prep using a Russian manicure..." },
        { name: "Luxury Manicure", price: "£50.00", duration: "2h 10min", description: "This service includes thorough cuticle and skin prep using a Russian manicure..." },
        { name: "Normal Polish Manicure & Pedicure", price: "£45", duration: "2h 5 min" },
        { name: "Gel Manicure & Pedicure", price: "£65", duration: "2h 5 min" },
      ]
    },
    {
      title: "Pedicure & Additional Services",
      items: [
        { name: "Basic Spa Pedicure", price: "£25.00", duration: "45min", description: "This service includes where your natural toe nails are cut & shaped. Your feet are..." },
        { name: "Gel Spa Pedicure", price: "£40.00", duration: "1h 5min", description: "This service includes where your natural toe nails are cut & shaped. Your feet are..." },
        { name: "Normal Polish Spa Pedicure", price: "£30.00", duration: "1h 10min", description: "This service includes where your natural toe nails are cut & shaped. Your feet are..." },
        { name: "French Spa Pedicure", price: "£45.00", duration: "1h 20min", description: "This service includes where your natural toe nails are cut & shaped. Your feet are..." },
        { name: "Luxury Pedicure", price: "£50.00", duration: "1h 30min", description: "This is a shortened version of the luxury Elim pedicure..." },
        { name: "Extended Foot Massage", price: "£18.00", duration: "20 mins", description: "This service includes an extended foot massage with a moisturising foot balm." },
      ]
    },
    {
      title: "Nail Art",
      items: [
        { name: "Bronze Nail Art Hands", price: "£8+", description: "French tips, simple designs." },
        { name: "Silver Nail Art Hands", price: "£12+", description: "Chrome, Ombre." },
        { name: "Gold Nail Art Hands", price: "£20+", description: "All fingers design." },
        { name: "Bronze Nail Art Toes", price: "£5.00", duration: "15min", description: "Nail art on toes includes french tips & 1 simple design stars, hearts & lines" },
        { name: "Silver Nail Art Toes", price: "£10.00", duration: "20min", description: "Nail art on toes includes chrome, ombre eTc" },
        { name: "Gold Nail Art Toes", price: "£15.00", duration: "30min", description: "Nail art on all toenails" },
        { name: "Strengthening IBX", price: "£15+", duration: "20 mins" },
        { name: "BIAB Overlay", price: "£15+", duration: "30 mins" },
      ]
    },
    {
      title: "Removals",
      items: [
        { name: "Gel Removal", price: "£15+", duration: "30 mins" },
        { name: "Builder Gel Removal", price: "£30+", duration: "45 mins" },
        { name: "Foreign BIAB Removal", price: "£20.00", duration: "30min", description: "This service includes removal of builder gel only using an electric file to remove..." },
        { name: "Soak off Removal", price: "£20.00", duration: "30min", description: "This service includes hand filing method to remove top layer of gel or builder gel..." },
        { name: "Hard Gel/Acrylics Removal", price: "£30.00", duration: "45min", description: "This services includes of hard gel and acrylics from another salon not our work...." },
        { name: "Gel Extensions Removal", price: "£30+", duration: "1h 15m" },
      ]
    }
  ];

  // --- BEAUTY DATA ---
  const beautyData: SubCategory[] = [
    {
      title: "Threading & Waxing",
      items: [
        { name: "Eyebrow Threading", price: "£8+", duration: "15 mins" },
        { name: "Full Face (Inc. Brows)", price: "£25+", duration: "30 mins" },
        { name: "Hollywood Hot Wax", price: "£35+", duration: "30 mins" },
        { name: "Express Full Body", price: "£85+", duration: "1 hr 30 mins" },
      ]
    }
  ];

  const mainCategories: MainCategory[] = [
    { id: 'hair', title: 'Hair Services', description: 'Cutting • Colour • Styling', subCategories: hairData },
    { id: 'nails', title: 'Nails', description: 'Manicure • Pedicure • Art', subCategories: nailsData },
    { id: 'beauty', title: 'Beauty & Waxing', description: 'Brows • Lashes • Waxing', subCategories: beautyData },
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="relative h-[40vh] bg-neutral-900 overflow-hidden">
        <img src="/service.png" alt="Salon Services" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-center pb-12">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-2">Service Menu</h1>
          <p className="text-[#D7BD9A] uppercase tracking-widest text-sm">Luxury • Care • Style</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-16">
          {mainCategories.map((cat) => (
            <div key={cat.id} className="border border-white/10 bg-neutral-900/50 rounded-xl overflow-hidden">
              <div className="p-6 md:p-8 bg-white/5 border-b border-white/5">
                <h2 className="text-3xl font-serif text-[#D7BD9A] mb-1">{cat.title}</h2>
                <p className="text-gray-400 text-sm tracking-wide uppercase">{cat.description}</p>
              </div>

              <div className="p-6 md:p-8 space-y-12">
                {cat.subCategories.map((sub, idx) => (
                  <div key={idx}>
                    <div className="flex items-center mb-8">
                      <div className="h-px bg-[#D7BD9A]/30 flex-grow max-w-[50px] mr-4"></div>
                      <h3 className="text-xl md:text-2xl font-serif text-white">{sub.title}</h3>
                      <div className="h-px bg-white/10 flex-grow ml-4"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-8">
                      {sub.items.map((item, itemIdx) => (
                        <ServiceItemRow key={itemIdx} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-8 border border-[#D7BD9A]/20 rounded-lg bg-neutral-900/30">
          <h3 className="text-2xl font-serif text-white mb-4">Ready to Glow?</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Book your appointment today. For complex color corrections or bridal services, we recommend a consultation first.
          </p>
          <a 
            href={booksyUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-black px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#D7BD9A] hover:text-white transition-all"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

const ServiceItemRow: React.FC<{ item: ExtendedServiceItem }> = ({ item }) => (
  <div className="flex flex-col border-b border-dashed border-white/10 pb-4 group">
    <div className="flex justify-between items-baseline mb-1">
      <span className="font-light text-lg md:text-xl text-gray-200 group-hover:text-[#D7BD9A] transition-colors">
        {item.name}
      </span>
      <span className="text-[#D7BD9A] font-medium whitespace-nowrap ml-4 text-base md:text-lg">
        {item.price}
      </span>
    </div>
    <div className="space-y-1">
      {item.duration && <span className="text-gray-500 text-xs uppercase tracking-wider">{item.duration}</span>}
      {item.description && <p className="text-gray-400 text-sm font-light leading-relaxed mt-1 italic">{item.description}</p>}
    </div>
  </div>
);

export default Services;