import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-8 right-8 z-40 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="group relative flex items-center justify-center w-12 h-12 bg-black/60 backdrop-blur-md border border-hero-gold/30 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-hero-gold hover:border-hero-gold transition-all duration-300 overflow-hidden"
                aria-label="Scroll to top"
            >
                <div className="absolute inset-0 bg-hero-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <svg
                    className="w-6 h-6 text-hero-gold group-hover:text-black transition-colors duration-300 transform group-hover:-translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.3)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
        </div>
    );
};

export default ScrollToTop;
