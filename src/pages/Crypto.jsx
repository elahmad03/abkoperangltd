import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Example social icons
import imgLogo from "../assets/img/logo.png";

const Crypto = () => {
  const companyData = {
    name: "ABK OPERA GLOBAL NIGERIA LIMITED",
    tagline: "Unlocking the Next Big Crypto Opportunities",
    logo: imgLogo,
    about: `We are dedicated to empowering the crypto community with timely and actionable intelligence. Our focus lies in identifying and analyzing emerging trends, high-potential airdrops, and promising projects within the dynamic cryptocurrency landscape. We strive to cut through the noise and deliver clear, concise insights to help you navigate the exciting world of crypto.`,
    ourFocus: [
      {
        title: "Airdrop Discoveries",
        description:
          "We meticulously research and curate upcoming airdrops, providing you with essential details and participation guides to maximize your potential rewards.",
      },
      {
        title: "Trending Project Analysis",
        description:
          "Our team dives deep into trending and innovative crypto projects, offering unbiased analysis on their technology, team, roadmap, and community sentiment.",
      },
      {
        title: "Market Trend Spotting",
        description:
          "We keep our finger on the pulse of the crypto market, identifying key trends and narratives that could shape future opportunities.",
      },
      {
        title: "Educational Content",
        description:
          "Beyond specific opportunities, we provide educational resources to enhance your understanding of blockchain technology, DeFi, NFTs, and other crucial aspects of the crypto space.",
      },
    ],
    whatsappGroupLink: "https://wa.me/your-whatsapp-group-invite-link", // Replace with your actual WhatsApp group invite link
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans antialiased">
      <div className="max-w-full sm:max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Company Header */}
        <header className="text-center mb-10">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto shadow-md">
            <img
              src={companyData.logo}
              alt={companyData.name}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
            {companyData.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            {companyData.tagline}
          </p>
        </header>

        {/* About Section */}
        <section className="mb-10 bg-white dark:bg-gray-800 rounded-md shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">About Us</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{companyData.about}</p>
        </section>

        {/* Our Focus Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Focus</h2>
          {companyData.ourFocus.map((focus, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-md shadow-sm p-6 mb-4"
            >
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {focus.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{focus.description}</p>
            </div>
          ))}
        </section>

        {/* WhatsApp Group Link */}
        <section className="text-center mt-8">
          <h2 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
            Join Our Community for Real-Time Updates!
          </h2>
          <a
            href={companyData.whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-200 shadow-md"
          >
            <FaWhatsapp className="inline mr-2" size={20} /> Join Our WhatsApp Group
          </a>
        </section>
      </div>
    </div>
  );
};

export default Crypto;
