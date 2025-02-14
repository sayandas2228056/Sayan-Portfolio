import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-6 text-center">
      <div className="container mx-auto px-6">
        <p className="text-lg">&copy; {new Date().getFullYear()} Made by Sayan Das.</p>
        <p className="text-sm text-gray-400 mt-2">
          Built using React , Tailwind CSS , Framer Motion, React Icons.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
