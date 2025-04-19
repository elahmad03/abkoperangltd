import { useState, useEffect } from 'react';

export default function MissionCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: "Our Vision",
      content: "To revolutionize blockchain accessibility through decentralized solutions that empower users and redefine digital ownership."
    },
    {
      title: "Our Mission",
      content: "We build secure, scalable Web3 infrastructure with developer-first tools that accelerate blockchain adoption worldwide."
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (slides.length <= 1) return;
    
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div 
      className="relative w-full mx-auto overflow-hidden rounded-xl shadow-sm bg-white border border-gray-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="w-full flex-shrink-0 px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12"
          >
            <div className="text-center space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  {slide.title}
                </span>
              </h2>
              <p className="text-gray-700 text-base sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                {slide.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center space-x-2 mb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${activeSlide === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation arrows - Desktop only */}
      <div className="hidden sm:block">
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-blue-600 p-2 rounded-full shadow-sm hover:bg-blue-50 transition-all backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-blue-600 p-2 rounded-full shadow-sm hover:bg-blue-50 transition-all backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}