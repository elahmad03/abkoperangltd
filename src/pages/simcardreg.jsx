import React from 'react';
import simcardregBg from '../assets/img/simcardreg.jpg'; // Replace this with a SIM registration relevant image if available

const SimcardReg = () => {
  const whatsappNumber = '+2348138804305';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello,%20I%20want%20to%20register%20or%20swap%20my%20SIM.%20Please%20assist.`;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-full pt-10 md:pt-20">
      <div className="w-full mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        
        {/* Header Banner */}
        <div
          className="relative bg-cover bg-center text-white text-center px-4 py-20 sm:px-8"
          style={{
            backgroundImage: `url(${simcardregBg})`,
          }}
        >
          <div className="absolute inset-0 bg-indigo-700 bg-opacity-80 dark:bg-indigo-900"></div>
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Simcard Registration & Swap</h1>
            <p className="text-base sm:text-lg">We register and swap MTN, GLO, Airtel & Etisalat SIMs</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-5 sm:p-8">
          {/* Intro */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              Whether you’re getting a new line or replacing a damaged one, we provide quick and secure SIM registration and swap services for all major networks in Nigeria.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li><strong>MTN SIM Registration & Swap</strong></li>
              <li><strong>GLO SIM Registration & Swap</strong></li>
              <li><strong>Airtel SIM Registration & Swap</strong></li>
              <li><strong>Etisalat/9mobile SIM Registration & Swap</strong></li>
            </ul>
          </section>

          {/* Requirements */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">New SIM Registration</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>National Identification Number (NIN)</li>
                  <li>Biometric Capture</li>
                  <li>Personal Information (Name, Address, etc.)</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">SIM Swap</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Previous SIM details</li>
                  <li>Valid ID & NIN</li>
                  <li>Proof of Ownership (last recharge, call history, etc.)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-8 border-t border-gray-300 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Tap below to chat with our agent on WhatsApp for quick support.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Chat With Us on WhatsApp
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SimcardReg;
