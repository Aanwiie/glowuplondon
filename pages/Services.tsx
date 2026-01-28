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

// --- Helper Component for the "Read More" functionality ---
const ExpandableDescription = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 90; // Adjusted slightly for better mobile flow

  // If text is short, just render it normally
  if (!text || text.length <= characterLimit) {
    return (
      <p className="text-gray-400 text-sm font-light italic leading-relaxed mt-2">
        {text}
      </p>
    );
  }

  return (
    <div 
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent closing the accordion when clicking description
        setIsExpanded(!isExpanded);
      }}
      className="cursor-pointer group/desc mt-2"
    >
      <p className="text-gray-400 text-sm font-light italic leading-relaxed inline">
        {isExpanded ? text : `${text.substring(0, characterLimit)}`}
      </p>
      
      {!isExpanded ? (
        <span className="text-[#D7BD9A] font-bold ml-1 text-lg leading-none animate-pulse hover:scale-110 inline-block transition-transform">
          ...
        </span>
      ) : (
        <span className="text-[#D7BD9A] text-xs font-bold ml-2 hover:underline">
          (Show Less)
        </span>
      )}
    </div>
  );
};
// -----------------------------------------------------------

const Services: React.FC = () => {
  const booksyUrl = "https://booksy.com/en-gb/dl/show-business/170549";
  const [openCategory, setOpenCategory] = useState<string | null>('nails');

  const mainCategories: MainCategory[] = [
    {
      id: 'nails',
      title: 'Nail Services',
      services: [
        { 
          name: "Basic Manicure", 
          price: "£30.00", 
          duration: "45min", 
          description: "Suitable for women & men. Your natural nails are cut & shaped to your preference, and cuticles are prepped and cleaned thoroughly using manual tools to remove dead skin. No polish is included, but we finish with a buff for a Shiney or Matte natural finish and hydrating cuticle oil." 
        },
        { 
          name: "Express Manicure", 
          price: "£20.00", 
          duration: "30min", 
          description: "Perfect for those on the go. This service includes a quick shape of your natural nails, light cuticle tidying, and a finish with hydrating oil. Ideal for maintaining nails between deeper treatments." 
        },
        { 
          name: "Normal Polish Manicure", 
          price: "£18.00", 
          duration: "1h", 
          description: "This service includes full nail prep where your natural nails are cut & shaped, and cuticles are tidied. Finished with a high-quality traditional nail polish in a colour of your choice and a high-shine top coat." 
        },
        { 
          name: "Gel Manicure", 
          price: "£38.00", 
          duration: "1h 10 min", 
          description: "A long-lasting solution. Includes precision cutting and shaping of natural nails and thorough cuticle care. Finished with a premium gel polish application that is cured under UV/LED light for instant dryness and chip-free wear for up to 2-3 weeks." 
        },
        { 
          name: "French Manicure", 
          price: "£45.00", 
          duration: "1h 15min", 
          description: "The classic, elegant look. Includes full nail and cuticle preparation followed by a sheer pink or nude base with crisp, hand-painted white tips (or a colour of your choice). Sealed with a glossy gel top coat." 
        },
        { 
          name: "Russian Manicure", 
          price: "£50.00", 
          duration: "2h", 
          description: "Also known as an 'E-File Manicure'. This advanced technique uses an electronic file to safely and gently remove excess skin surrounding the nail bed. This allows polish to be applied deeper under the proximal fold for a flawless, 'photoshopped' look that lasts longer than standard manicures." 
        },
        { 
          name: "Luxury Manicure", 
          price: "£50.00", 
          duration: "2h 10 min", 
          description: "The ultimate indulgence for your hands. Includes the thorough cuticle and skin prep of a Russian Manicure, followed by an exfoliation scrub, a nourishing hand mask, and a relaxing hand massage to restore moisture and softness." 
        },
        { 
          name: "Normal Polish Manicure & Pedicure", 
          price: "£45.00", 
          duration: "2h 5min",
          description: "A combo package refreshing both hands and feet. Includes shaping, cuticle work, and traditional polish application for both fingernails and toenails."
        },
        { 
          name: "Gel Manicure & Pedicure", 
          price: "£65.00", 
          duration: "2h 5min",
          description: "Our most popular combo. Complete care for hands and feet including shaping and cuticle work, finished with long-lasting, chip-resistant gel polish on both."
        },
        { 
          name: "Luxury Manicure & Luxury Pedicure", 
          price: "£90.00", 
          duration: "4h 5min", 
          description: "The full spa experience. This comprehensive package includes our Luxury Manicure and Luxury Pedicure with Gel Polish. Expect exfoliation, masks, massage, and impeccable detail work for total relaxation and rejuvenation." 
        },
        { 
          name: "French Finish", 
          price: "£8.00", 
          duration: "15 min", 
          description: "Add-on service. A French tip finish added to your manicure or pedicure. You can choose the thickness, style (classic, deep smile, or micro), and colour of the tip." 
        },
        { 
          name: "Chrome Finish", 
          price: "£10.00", 
          duration: "20min", 
          description: "Add a mirror-like or iridescent shine to your nails. We offer a wide range of chrome powders, from glazed donut effects to metallic gold and silvers." 
        },
        { 
          name: "Bronze Nail Art Hands", 
          price: "£8.00", 
          duration: "15min", 
          description: "Simple but effective nail art. Includes French tips or 1-2 simple accent designs such as stars, hearts, dots, or minimal lines on select fingers." 
        },
        { 
          name: "Silver Nail Art Hands", 
          price: "£12.00", 
          duration: "25 min", 
          description: "Intermediate nail art. Includes chrome powders, ombre effects, encapsulation, or swirls on multiple fingers." 
        },
        { 
          name: "Gold Nail Art Hands", 
          price: "£20.00", 
          duration: "30min", 
          description: "Intricate nail art on all fingers. Please bring a reference picture! This tier covers complex hand-painted designs, character art, or heavy embellishments." 
        },
        { 
          name: "Russian Cuticle Work", 
          price: "£10.00", 
          duration: "20 min", 
          description: "An add-on service focused purely on 'High Definition' cuticle cleaning using an e-file. Perfect if you want cleaner, deeper nail beds without a full colour application." 
        },
        { 
          name: "Extended Hand Massage", 
          price: "£10.00", 
          duration: "15min", 
          description: "Relax and unwind. An extended 15-minute hand and forearm massage using rich, moisturising lotions to relieve tension and hydrate dry skin." 
        },
        { 
          name: "BIAB Overlay", 
          price: "£15.00", 
          duration: "35min", 
          description: "Builder In A Bottle (BIAB). A structural gel applied as an overlay on natural nails to add strength and prevent breaking. Ideal for growing out natural nails." 
        },
        { 
          name: "Hard Gel Overlay", 
          price: "£20.00", 
          duration: "40 min", 
          description: "A robust hard gel overlay structurally applied for maximum durability. Perfect for weak or brittle nails that need significant reinforcement." 
        },
        { 
          name: "Strengthening IBX Treatment", 
          price: "£15.00", 
          duration: "20min", 
          description: "A revolutionary two-part system that penetrates the nail plate to repair damage from within. Can be used under gel polish or on natural nails to fuse layers together and prevent peeling." 
        },
        { 
          name: "Express File Basic Toes Gel", 
          price: "£28.00", 
          duration: "40 min",
          description: "Quick refresh for toes. Includes cutting, filing, light cuticle work and application of long-lasting gel polish."
        },
        { 
          name: "Express File Basic Toes Normal Polish", 
          price: "£25.00", 
          duration: "40min",
          description: "Quick refresh for toes. Includes cutting, filing, light cuticle work and application of traditional nail polish."
        },
        { 
          name: "Basic Spa Pedicure", 
          price: "£25.00", 
          duration: "45min",
          description: "A refreshing foot treatment involving a foot soak, nail shaping, cuticle care, and foot filing to smooth roughness. Finished with lotion (Polish not included)."
        },
        { 
          name: "Gel Spa Pedicure", 
          price: "£40.00", 
          duration: "1h 5min",
          description: "Includes a foot soak, hard skin filing, cuticle work, and nail shaping. Finished with a gel polish application that dries instantly."
        },
        { 
          name: "Normal Polish Spa Pedicure", 
          price: "£30.00", 
          duration: "1h 10 min",
          description: "Includes a relaxing foot soak, hard skin removal, cuticle work, and nail shaping. Finished with traditional polish application."
        },
        { 
          name: "French Spa Pedicure", 
          price: "£45.00", 
          duration: "1h 20min",
          description: "Our Gel Spa Pedicure finished with a classic white French tip for a clean, sophisticated look on your toes."
        },
        { 
          name: "Luxury Pedicure", 
          price: "£50.00", 
          duration: "1h 30min", 
          description: "A shortened version of the luxury Elim pedicure. Includes callus peel, exfoliation, foot mask, heated booties, and an extended foot massage alongside standard nail prep and polish." 
        },
        { 
          name: "Extended Foot Massage", 
          price: "£18.00", 
          duration: "20min",
          description: "Add 20 minutes of pure relaxation to your pedicure. Focuses on pressure points and relieving tension in the feet and calves."
        },
        { 
          name: "Callus Remover", 
          price: "£15.00", 
          duration: "20min", 
          description: "An intensive treatment for dry, cracked heels. We use a specialist callus tonic patch that softens hard skin, which is then scraped and buffed away, leaving feet baby soft." 
        },
        { 
          name: "Bronze Nail Art Toes", 
          price: "£5.00", 
          duration: "15 min", 
          description: "Nail art on big toes only, or simple French tips. Includes basic lines, dots, or a simple accent." 
        },
        { 
          name: "Silver Nail Art Toes", 
          price: "£10.00", 
          duration: "20 min", 
          description: "Intermediate art on toes, including chrome powder finish, ombre effects, or glitter fades." 
        },
        { 
          name: "Gold Nail Art Toes", 
          price: "£15.00", 
          duration: "30min", 
          description: "Complex nail art designs on all toenails. Perfect for holidays or special occasions." 
        },
        { 
          name: "Gel Removal", 
          price: "£10.00", 
          duration: "20min", 
          description: "Safe removal of gel colour using an electric file (or soak off if preferred). Includes a quick buff of the natural nail." 
        },
        { 
          name: "Builder Gel Removal", 
          price: "£15.00", 
          duration: "30min", 
          description: "Safe removal of Builder Gel (BIAB). The bulk of the product is debulked carefully, followed by soaking or fine filing to preserve natural nail health." 
        },
        { 
          name: "Foreign BIAB Removal", 
          price: "£20.00", 
          duration: "30min", 
          description: "Removal of product applied at a different salon. This takes longer as we assess the product type to ensure safe removal without damaging your nails." 
        },
        { 
          name: "Soak off Removal", 
          price: "£20.00", 
          duration: "30min", 
          description: "Traditional removal method. Top coat is filed off, and nails are wrapped in acetone-soaked foil to gently dissolve the product." 
        },
        { 
          name: "Hard Gel/Acrylics Removal", 
          price: "£30.00", 
          duration: "45min", 
          description: "Heavy-duty removal of hard gel or acrylics applied at another salon. Requires extensive filing and care to remove thick product safely." 
        }
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
        { name: "Girls cut", price: "£25.00+", duration: "45min", description: "This service varies on length of child's hair and age. Price starts at £25.00 and includes a dry trim or spray down." },
        { name: "Fringe Cut", price: "£10.00", duration: "15min" },
        { name: "K18 Molecular Repair Treatment", price: "£40.00", duration: "1h", description: "This treatment includes wash & blow dry. K18 travels into the innermost layers of hair to renew strength and elasticity." },
        { name: "Molecular Hair Repair Treatment", price: "£40.00", duration: "1h" },
        { name: "Metal Detox Treatment", price: "£40.00", duration: "1h" },
        { name: "Hair Up", price: "£60.00+", duration: "1h" },
        { name: "Standard Curls", price: "£40.00", duration: "1h", description: "This includes styling with tongs or straighteners to create standard curls after a blow-dry." },
        { name: "Hair Up Curls", price: "£60.00+", duration: "1h 30min", description: "Please choose this option if you require intricate pinned curls for an occasion or event." },
        { name: "Hollywood Waves", price: "£65.00+", duration: "2h" },
        { name: "Finger Waves", price: "£50.00+", duration: "1h" },
        { name: "Half Hair Up", price: "£40.00+", duration: "1h" },
        { name: "French Braid", price: "£30.00+", duration: "1h" },
        { name: "Bridal Hairstyle", price: "£100.00+", duration: "2h" },
        { name: "Consulting", price: "-", duration: "15min", description: "Consulting required for Highlights, Balayage & Ombre to assess hair health and pricing." }
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
        { name: "Bridal Make Up", price: "£200.00+", duration: "Varies", description: "Consultation required before appointment. Please enquire in the salon for trials and dates." }
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
        { name: "Lash Lift & Tint", price: "£60.00", duration: "45min", description: "Enhances your natural lashes by lifting them at the root and tinting them dark. Patch test is required 48 hours prior to appointment." },
        { name: "Brow Lamination & Tint", price: "£65.00", duration: "1h 30min", description: "Smooths and straightens brow hairs to create a fuller, fluffier look. Patch testing required 48 hours before treatment." },
        { name: "Lash Lift & Brow Lamination", price: "£110.00", duration: "1h", description: "The ultimate eye combo. Includes lash lifting, tinting, and brow lamination/shaping." },
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
        { name: "Brazilian Hot Wax", price: "£40.00", duration: "30 min", description: "This covers your full intimate area, leaving a strip or triangle if desired. Hot wax is used for minimal discomfort." },
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
                            
                            {/* Expandable description helper used here */}
                            {item.description && (
                              <ExpandableDescription text={item.description} />
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