import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-16 absolute bottom-0 w-full flex justify-between items-center mt-0">
      <p className="text-sm">&copy; 2023, AirBus Ticket Reservation System</p>
      <div className="flex">
        <a href="/" className="mr-4 hover:text-blue-500 text-sm">
          Privacy Policy
        </a>
        <a href="/" className="hover:text-blue-500 text-sm">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
