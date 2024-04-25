import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-400 text-white text-center py-4">
      <p>© ectest {currentYear} Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
