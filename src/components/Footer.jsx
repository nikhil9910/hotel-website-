import { Mail, MapPin, Phone } from "lucide-react";
import abb from "../assets/logo remove.png";

const Footer = () => {
  return (
    <footer className="bg-[#00A877] text-blue-800 py-10 text-center">
      <div className="max-w-5xl mx-auto px-4">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={abb}
            alt="Jee Ri Haveli Logo"
            className="h-24 w-auto mx-auto mb-2"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider font-serif uppercase">
            Jee Ri Haveli
          </h2>
          <span className="text-xs font-semibold tracking-widest text-emerald-100 uppercase mt-1">
            prototype
          </span>
        </div>

        {/* Contact Info Section */}
        <div className="grid gap-8 text-sm text-center justify-center">
          {/* Location */}
          <div className="flex flex-col items-center font-bold text-white">
            <MapPin className="w-6 h-6 mb-2 text-white" />
            <p><strong>Jee Ri Haveli</strong></p>
            <p>Near Gulab Sagar, Jodhpur, Rajasthan, India</p>
            <p>Postal Code: 342001</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center font-bold text-white">
            <Mail className="w-6 h-6 mb-2 text-white" />
            <a
              href="mailto:dhulikhelboutiquehotel@gmail.com"
              className="hover:underline break-words"
            >
              info@jeerihaveli.com
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col items-center font-bold text-white">
            <Phone className="w-6 h-6 mb-2 text-white" />
            <a href="tel:+9779851096133" className="block hover:underline">
              +977 9851096133
            </a>
            <a href="tel:+9779765997452" className="block hover:underline">
              +977 9765997452
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white opacity-50 my-6" />

        {/* Copyright */}
        <p className="text-sm font-semibold text-emerald-100">
          © {new Date().getFullYear()} Jee Ri Haveli (Prototype). All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
