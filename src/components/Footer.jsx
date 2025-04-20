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
    <>
      {/* Main Footer */}
      <footer className="bg-teal-200 text-black dark:bg-cyan-900 dark:text-white py-12 px-6 sm:px-8 w-full ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              ABK Opera Global NG LTD
            </h3>
            <p className="text-black text-base sm:text-lg leading-relaxed">
              is a tech-driven company focused on empowering individuals and businesses through innovation. We specialize in SIM card registration, custom software development, phone and accessories sales, blockchain education, and professional phone repair services. Our mission is to bridge the digital gap and deliver quality tech solutions that improve lives.
            </p>
          </div>

          {/* Right Column - Follow Us */}
          <div className="flex flex-col items-start md:items-end space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Connect With Us</h3>
            <div className="flex gap-5">
              <a 
                href="https://www.fb.com/opera" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="text-3xl p-3 bg-cyan-800 hover:bg-cyan-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaFacebook className="text-white" />
              </a>
              <a 
                href="http://www.x.com/opera" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter" 
                className="text-3xl p-3 bg-cyan-800 hover:bg-cyan-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaXTwitter className="text-white" />
              </a>
              <a 
                href="https://chat.whatsapp.com/I0B55abIyTgEogdwBk34Yq" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="text-3xl p-3 bg-cyan-800 hover:bg-cyan-700 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="bg-teal-400 dark:bg-cyan-950 text-black dark:text-gray-300 py-6 px-6 flex flex-col sm:flex-row items-center justify-between relative rounded-b-3xl">
        {/* Left - Copyright */}
        <p className="text-sm sm:text-base mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Abk Opera Global NIG LTD. All rights reserved.
        </p>

        {/* Scroll to Top Button - Centered */}
        {showButton && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-cyan-900 text-white p-3 rounded-full shadow-xl hover:bg-cyan-850 transition-all duration-300 hover:scale-110 border-2 border-white z-50"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}

        {/* Right - Developed by */}
        <p className="text-sm sm:text-base">
          Crafted with ❤️ by{' '}
          <a
            href="https://www.facebook.com/el.ahmed5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 underline underline-offset-4 transition-colors"
          >
            AhmadGlobe
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;