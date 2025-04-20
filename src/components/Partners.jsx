import React from 'react';
import kawazaminLogo from '/img/kawazamin.png';
import ahmadglobeLogo from '/img/ahmadglobe.png';
import haswazLogo from '/img/haswaz.png';
import shabulkhairLogo from '/img/shababulkhair.png';

const partners = [
  {
    name: 'Kawazamin',
    logo: kawazaminLogo,
    link: 'https://kawazamin.com.ng',
  },
  {
    name: 'AhmadGlobe',
    logo: ahmadglobeLogo,
    link: 'https://ahmadglobe.com.ng',
  },
  {
    name: 'Haswaz',
    logo: haswazLogo,
    link: 'https://haswaz.com.ng',
  },
  {
    name: 'Shababulkhair',
    logo: shabulkhairLogo,
    link: 'https://chat.whatsapp.com/EWtojfct2xd8zzPaxnZwE2',
  },
];

const Partners = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{partner.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
