import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';

// Extended type interface to include subcategories, duration, and description
interface ExtendedServiceItem extends ServiceItem {
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
  image: string;
}

const Services: React.FC = () => {
  // State for the modal
  const [selectedService, setSelectedService] = useState<ExtendedServiceItem | null>(null);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  // --- DATA DEFINITIONS ---

  const hairData: SubCategory[] = [
    {
      title: "Women Services",
      items: [
        { name: "Wash, Haircut & Blow Dry (Short)", price: "£35", duration: "1 hour" },
        { name: "Wash, Haircut & Blow Dry (Medium)", price: "£40", duration: "1 hour" },
        { name: "Wash, Haircut & Blow Dry (Long)", price: "£45", duration: "1 hour" },
        { name: "Fringe Cut", price: "£10", duration: "15 mins" },
        { name: "Girls Cut", price: "£25", duration: "45 mins" },
        { name: "Wash & Blow Dry (Short)", price: "£25", duration: "45 mins" },
        { name: "Wash & Blow Dry (Medium)", price: "£30", duration: "45 mins" },
        { name: "Wash & Blow Dry (Long)", price: "£35", duration: "1 hour" },
      ]
    },
    {
      title: "Colour & Highlights",
      items: [
        { name: "Full Head Colour (Short)", price: "£60", duration: "1 hr 30 mins" },
        { name: "Full Head Colour (Medium)", price: "£80", duration: "2 hours" },
        { name: "Full Head Colour (Long)", price: "£90", duration: "2 hours" },
        { name: "Root Colour (Short)", price: "£50", duration: "1.5 - 2 hours" },
        { name: "Root Colour (Medium)", price: "£50", duration: "1.5 - 2 hours" },
        { name: "Root Colour (Long)", price: "£50", duration: "1.5 - 2 hours" },
        { name: "Toner (Short)", price: "£30", duration: "30 mins" },
        { name: "Toner (Medium)", price: "£40", duration: "30 mins" },
        { name: "Toner (Long)", price: "£40", duration: "30 mins" },
        { name: "Full Head Highlights", price: "£90", duration: "2 - 4 hours" },
        { name: "Half Head Highlights", price: "£70", duration: "2 - 3 hours" },
        { name: "T Section Highlights", price: "£60", duration: "2 - 3 hours" },
        { name: "Ombre/Balayage", price: "Consultation", duration: "3 hours" },
      ]
    },
    {
      title: "Treatments",
      items: [
        { name: "Deep Conditioning", price: "Consultation", duration: "" },
        { name: "Hair Smoothening", price: "Consultation", duration: "" },
        { name: "Metal Detox", price: "£20", duration: "30 mins" },
      ]
    },
    {
      title: "Men Services",
      items: [
        { name: "Clipper Cut", price: "£14", duration: "30 mins" },
        { name: "Scissor Cut", price: "£15", duration: "30 mins" },
        { name: "Long Hair Cut", price: "£15", duration: "30 mins" },
        { name: "Skin Fade", price: "£18", duration: "30 mins" },
        { name: "Zero Fade", price: "£18", duration: "30 mins" },
        { name: "Beard Shape", price: "£10", duration: "30 mins" },
        { name: "Wash & Cut", price: "£20", duration: "35 mins" },
      ]
    },
    {
      title: "Men's Grooming",
      items: [
        { name: "Men Eyebrow Threading", price: "£8", duration: "15 mins" },
        { name: "Ear Wax", price: "£5", duration: "15 mins" },
        { name: "Nose Wax", price: "£5", duration: "15 mins" },
        { name: "Cheek Wax", price: "£5", duration: "15 mins" },
      ]
    }
  ];

  const beautyData: SubCategory[] = [
    {
      title: "Threading",
      items: [
        { name: "Eyebrow Threading", price: "£8", duration: "15 mins" },
        { name: "Men's Eyebrows", price: "£9", duration: "15 mins" },
        { name: "Upper Lip", price: "£5", duration: "15 mins" },
        { name: "Lower Lip", price: "£3", duration: "10 mins" },
        { name: "Middle of Brows", price: "£3", duration: "10 mins" },
        { name: "Chin", price: "£5", duration: "10 mins" },
        { name: "Neck", price: "£5", duration: "15 mins" },
        { name: "Chin and Neck", price: "£8", duration: "20 mins" },
        { name: "Forehead", price: "£5", duration: "15 mins" },
        { name: "Sides Face", price: "£10", duration: "15 mins" },
        { name: "Full Face (Inc. Brows)", price: "£25", duration: "30 mins" },
      ]
    },
    {
      title: "Strip Waxing (Body)",
      items: [
        { name: "Underarms", price: "£10", duration: "15 mins" },
        { name: "Full Arms", price: "£20", duration: "30 mins" },
        { name: "Half Arms", price: "£15", duration: "20 mins" },
        { name: "Full Legs", price: "£25", duration: "30 mins" },
        { name: "Half Legs", price: "£20", duration: "20 mins" },
        { name: "3/4 Legs", price: "£18", duration: "30 mins" },
        { name: "Bikini Line", price: "£25", duration: "30 mins" },
        { name: "Chest", price: "£12", duration: "30 mins" },
        { name: "Buttocks", price: "£15", duration: "30 mins" },
        { name: "Full Legs + Basic Bikini", price: "£38", duration: "45 mins" },
        { name: "Brazilian", price: "£35", duration: "30 mins" },
        { name: "Hollywood", price: "£35", duration: "30 mins" },
        { name: "Stomach", price: "£15", duration: "30 mins" },
        { name: "Back", price: "£25", duration: "30 mins" },
        { name: "Express Full Body", price: "£85", duration: "1 hr 30 mins" },
      ]
    },
    {
      title: "Hot Wax (Face & Body)",
      items: [
        { name: "Eyebrows Hot Wax", price: "£10", duration: "15 mins" },
        { name: "Full Face Hot Wax", price: "£35", duration: "30 mins" },
        { name: "Underarms Hot Wax", price: "£12", duration: "15 mins" },
        { name: "Basic Bikini Line Hot Wax", price: "£25", duration: "30 mins" },
        { name: "Brazilian Hot Wax", price: "£35", duration: "30 mins" },
        { name: "Hollywood Hot Wax", price: "£35", duration: "30 mins" },
      ]
    },
    {
      title: "Lash & Brows",
      items: [
        { name: "Eyebrow Tinting", price: "£10", duration: "15 mins" },
        { name: "Dream Lash Lift & Tint", price: "£60", duration: "1 hr 15 mins" },
        { name: "Brow Lamination", price: "£65", duration: "45 mins" },
        { name: "Eyebrow Threading & Tinting", price: "£15", duration: "20 mins" },
        { name: "Brow & Lash Tint", price: "£18", duration: "30 mins" },
      ]
    }
  ];

  const nailsData: SubCategory[] = [
    {
      title: "Manicure",
      items: [
        {
          name: "Express Manicure",
          price: "£20",
          duration: "35 mins",
          description: "Natural nails cut & shaped, cuticles prepped. Choice of Gel colour or normal polish. Finished with hydrating oil."
        },
        {
          name: "Basic Manicure",
          price: "£40",
          duration: "45 mins",
          description: "Natural nails cut & shaped, cuticles prepped/cleaned (manual tools). No polish included. Finished with hydrating oil."
        },
        {
          name: "Normal Polish Manicure",
          price: "£35",
          duration: "50 mins",
          description: "Natural nails cut & shaped, cuticles cleaned. Normal polish included. Finished with cuticle oil & moisturising cream."
        },
        {
          name: "French Manicure",
          price: "£50",
          duration: "1h 10m",
          description: "Natural nails cut & shaped, cuticles cleaned. Gel nude base colour with hand-painted French tip. Finished with oil & cream."
        },
        {
          name: "Gel Manicure",
          price: "£45",
          duration: "1 hour",
          description: "Natural nails cut & shaped, cuticles cleaned. Gel colour of choice (base & top coat). Finished with oil & cream."
        },
        {
          name: "Russian Manicure",
          price: "£50",
          duration: "1h 30m",
          description: "Thorough cuticle/skin prep using Russian method. Gel colour of choice (base & top coat). Finished with hydrating oil."
        },
        {
          name: "Luxury Manicure",
          price: "£60",
          duration: "1h 45m",
          description: "Thorough Russian prep. Gel colour of choice. Includes hand scrub & extended hand massage with moisturising cream."
        },
      ]
    },
    {
      title: "Pedicure",
      items: [
        {
          name: "Express File",
          price: "£35",
          duration: "30 mins",
          description: "Toe nails cut & shaped. Choice of normal polish. Finished with hydrating oil."
        },
        {
          name: "Basic Spa Pedicure",
          price: "£40",
          duration: "45 mins",
          description: "Nails cut/shaped. Feet soaked in relaxing bath. Cuticles cleaned. No polish included (optional Shiney/Matte)."
        },
        {
          name: "Normal Polish Spa Pedicure",
          price: "£45",
          duration: "1h 20m",
          description: "Nails cut/shaped. Feet soaked. Cuticles cleaned. Normal polish included. Finished with oil & cream."
        },
        {
          name: "French Spa Pedicure",
          price: "£55",
          duration: "1h 20m",
          description: "Nails cut/shaped. Feet soaked. Cuticles cleaned. Gel base nude colour & french tips. Finished with hydrating oil."
        },
        {
          name: "Gel Spa Pedicure",
          price: "£50",
          duration: "1 hour",
          description: "Nails cut/shaped. Feet soaked. Cuticles cleaned. Gel colour of choice. Finished with oil & cream."
        },
        {
          name: "Luxury Pedicure",
          price: "£60",
          duration: "1h 45m",
          description: "Shortened luxury Elim pedicure. Includes: Callus tonic, exfoliation, mask, cuticle removal, massage, gold spritz. (Optional gel toes £5 extra)."
        },
        {
          name: "Callus Remover",
          price: "£15",
          duration: "",
          description: "Callus tonic treatment to remove hard skin build-up using a soft scraper (no blades)."
        },
      ]
    },
    {
      title: "Nail Art & Additional Services",
      items: [
        {
          name: "Bronze Nail Art Hands",
          price: "£8",
          duration: "",
          description: "French tips, simple designs."
        },
        {
          name: "Silver Nail Art Hands",
          price: "£12",
          duration: "",
          description: "Chrome, Ombre."
        },
        {
          name: "Gold Nail Art Hands",
          price: "£20",
          duration: "",
          description: "All fingers design."
        },
        {
          name: "Nail Art Toes",
          price: "£5 - £15",
          duration: "",
          description: "Bronze: £5 (French/Simple), Silver: £10 (Chrome/Ombre), Gold: £15 (All toes)."
        },
        {
          name: "Strengthening IBX",
          price: "£15",
          duration: "20 mins",
          description: "Repair & strengthen treatment applied under polish/gel. Penetrates deep into nail surface."
        },
        {
          name: "BIAB Overlay",
          price: "£15",
          duration: "30 mins",
          description: "Builder in a bottle overlay applied structurally (short-medium length). No infills of foreign work."
        },
        {
          name: "Hard Gel Overlay",
          price: "£20",
          duration: "40 mins",
          description: "Hard gel overlay applied structurally (medium-long length). No infills of foreign work."
        },
        {
          name: "Russian Cuticle Work",
          price: "£10",
          duration: "20 mins",
          description: "Thorough dry cuticle/skin prep using Russian method (manual + e-file)."
        },
        {
          name: "Nail Fixes & Repairs",
          price: "£5",
          duration: "",
          description: "Restructuring and reshaping natural nail from breakage."
        },
      ]
    },
    {
      title: "Removals",
      items: [
        {
          name: "Gel Removal",
          price: "£15",
          duration: "30 mins",
          description: "Electric file removal of colour only. No re-application."
        },
        {
          name: "Builder Gel Removal",
          price: "£30",
          duration: "45 mins",
          description: "E-file removal of top layer, then soaked off. No re-application."
        },
        {
          name: "Hard Gel/Acrylics Removal",
          price: "£20",
          duration: "30 mins",
          description: "Soak off removal of work from another salon. No re-application."
        },
        {
          name: "Foreign BIAB Removal",
          price: "£20",
          duration: "30 mins",
          description: "Hand filing top layer & soak off. No re-application."
        },
        {
          name: "Gel Extensions Removal",
          price: "£30",
          duration: "1h 15m",
          description: "Removal of extensions from another salon. No re-application."
        },
      ]
    }
  ];

  const mainCategories: MainCategory[] = [
    {
      id: 'hair',
      title: 'Hair Services',
      description: 'Cutting • Colour • Styling',
      subCategories: hairData,
      image: ''
    },
    {
      id: 'beauty',
      title: 'Beauty & Waxing',
      description: 'Brows • Lashes • Waxing',
      subCategories: beautyData,
      image: ''
    },
    {
      id: 'nails',
      title: 'Nails',
      description: 'Manicure • Pedicure • Art',
      subCategories: nailsData,
      image: ''
    },
  ];

return (
<div className="bg-black min-h-screen">
      {/* Header Image */}
      <div className="relative h-[40vh] bg-neutral-900 overflow-hidden">
        <img
          src="/service.png"
          alt="Salon Services"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 text-center pb-12">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-2">Service Menu</h1>
          {/* REPLACED GOLD TEXT */}
          <p className="text-[#D7BD9A] uppercase tracking-widest text-sm">Luxury • Care • Style</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="space-y-12">
          {mainCategories.map((cat) => (
            <CategorySection key={cat.id} category={cat} />
          ))}
        </div>

        <div className="mt-20 text-center p-8 border border-[#D7BD9A]/20 rounded-lg bg-neutral-900/30">
          <h3 className="text-2xl font-serif text-white mb-4">Ready to Glow?</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Book your appointment today. For complex color corrections or bridal services, we recommend a consultation first.
          </p>
          <Link to="/booking" className="inline-block bg-white text-black px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#D7BD9A] hover:text-white transition-all">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

interface CategorySectionProps {
  category: MainCategory;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const previewItems = category.subCategories[0]?.items.slice(0, 4) || [];

  return (
    <div className="border border-white/10 bg-neutral-900/50 rounded-xl overflow-hidden">
      <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/5 border-b border-white/5">
        <div>
          <h2 className="text-3xl font-serif text-[#D7BD9A] mb-1">{category.title}</h2>
          <p className="text-gray-400 text-sm tracking-wide uppercase">{category.description}</p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white flex items-center gap-2 hover:text-[#D7BD9A] transition-colors text-sm uppercase tracking-widest font-semibold"
        >
          {isOpen ? 'Close' : 'View Full Menu'}
          <svg className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="p-6 md:p-8">
        {!isOpen ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {previewItems.map((item, idx) => (
              <ServiceItemRow key={idx} item={item} />
            ))}
          </div>
        ) : (
          <div className="space-y-12 animate-fade-in">
            {category.subCategories.map((sub, idx) => (
              <div key={idx}>
                <div className="flex items-center mb-8">
                  <div className="h-px bg-[#D7BD9A]/30 flex-grow max-w-[50px] mr-4"></div>
                  <h3 className="text-xl md:text-2xl font-serif text-white">{sub.title}</h3>
                  <div className="h-px bg-white/10 flex-grow ml-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                  {sub.items.map((item, itemIdx) => (
                    <ServiceItemRow key={itemIdx} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceItemRow: React.FC<{ item: ExtendedServiceItem }> = ({ item }) => (
  <div className="flex flex-col border-b border-dashed border-white/10 pb-4 group">
    <div className="flex justify-between items-baseline mb-1">
      <span className="font-light text-base md:text-lg text-gray-200 group-hover:text-[#D7BD9A] transition-colors">
        {item.name}
      </span>
      <span className="text-[#D7BD9A] font-medium whitespace-nowrap ml-4 text-sm md:text-base">
        {item.price}
      </span>
    </div>
    
    {/* Metadata and Description area */}
    <div className="space-y-1">
      {item.duration && (
        <span className="text-gray-500 text-xs uppercase tracking-wider">{item.duration}</span>
      )}
      {item.description && (
        <p className="text-gray-400 text-sm font-light leading-relaxed mt-1 italic">
          {item.description}
        </p>
      )}
    </div>
  </div>
);

export default Services;