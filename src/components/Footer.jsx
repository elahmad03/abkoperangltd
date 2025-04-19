import { useEffect, useState } from 'react';
import { FaFacebook, FaXTwitter, FaWhatsapp, FaLinkedin, FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 relative w-full">
      <div className="w-full px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Column */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Abk Opera Global Nigeria Ltd
          </h3>
          <p className="text-gray-300">
            At Abk Opera Global Nigeria Ltd, we are your go-to destination for comprehensive mobile solutions.
            Whether you're in need of phone repairs, phone flashing services, or top-quality
            phone accessories, crypto-related projects, or software development, we've got you covered.
          </p>
        </div>

        {/* Right Column - Follow Us */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Follow Us</h3>
          <div className="flex gap-3 sm:gap-4 text-xl sm:text-2xl">
            <a 
              href="https://www.fb.com/profile.php?id=100021496521892" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-1 hover:text-blue-500 transition-colors"
            >
              <FaFacebook />
            </a>
            <a 
              href="http://www.x.com/Abubaka36533120" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-1 hover:text-white transition-colors"
            >
              <FaXTwitter />
            </a>
            <a 
              href="https://wa.me/+2348138804305" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-1 hover:text-green-500 transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a 
              href="http://www.linkedin.com/in/abubakar-mohammed-158822228" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1 hover:text-blue-300 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="text-center text-sm sm:text-sm text-gray-400 mt-8 sm:mt-10 px-4">
        Developed & Designed by{' '}
        <a
          href="https://www.facebook.com/el.ahmed5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          AhmadGlobe
        </a>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gray-700 hover:bg-gray-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaArrowUp className="text-lg sm:text-xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
