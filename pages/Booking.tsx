import React, { useEffect, useState } from 'react';

const Booking: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Create the Booksy Script
    const script = document.createElement('script');
    script.src = "https://booksy.com/widget/code.js?id=170549&country=gb&lang=en";
    script.async = true;
    
    // 2. Logic to auto-click the button once Booksy injects it
    const autoOpenBooksy = () => {
      const booksyBtn = document.querySelector('.booksy-widget-button') as HTMLElement;
      if (booksyBtn) {
        booksyBtn.click();
        setLoading(false);
      } else {
        // If not found yet, try again in 100ms
        setTimeout(autoOpenBooksy, 100);
      }
    };

    script.onload = () => {
      autoOpenBooksy();
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script and any widgets when leaving the page
      document.body.removeChild(script);
      const widget = document.querySelector('.booksy-widget-container');
      if (widget) widget.remove();
    };
  }, []);

  return (
    <div className="pt-32 pb-0 bg-black min-h-screen flex flex-col">
      <div className="container mx-auto px-6 flex-grow flex flex-col items-center justify-center">
        
        {loading && (
          <div className="flex flex-col items-center">
            {/* Elegant Gold Spinner */}
            <div className="w-12 h-12 border-4 border-gold-500/20 border-t-gold-500 rounded-full animate-spin mb-4"></div>
            <p className="text-white font-serif text-xl animate-pulse">
              Opening Booking Experience...
            </p>
          </div>
        )}

        {/* Hidden Container: The script needs this, but we don't want to see the button */}
        <div id="booksy-widget-holder" style={{ display: 'none' }}></div>

        <div className="text-center mt-8">
          <h1 className="text-2xl font-serif text-white opacity-50">Secure Booking Portal</h1>
          <p className="text-gray-500 text-xs mt-2">
            If the window didn't open, <button onClick={() => window.location.reload()} className="text-gold-500 underline">click here to retry</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
