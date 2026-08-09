import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#04070D] relative border-t border-white/5">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14] to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="HH Goa Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-heading font-bold text-white tracking-wide">
                HH Goa <span className="text-[#39FF14]">2026</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Build your identity for Hacker House Goa 2026. Create, customize, and share your builder card with the community.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-[#39FF14] transition-colors text-sm">Home</a>
              </li>
              <li>
                <Link to="/generator?mode=builder" className="text-slate-400 hover:text-[#39FF14] transition-colors text-sm">Generator</Link>
              </li>
              <li>
                <Link to="/generator?mode=builder" className="text-slate-400 hover:text-[#39FF14] transition-colors text-sm">Builder Card</Link>
              </li>
              <li>
                <Link to="/generator?mode=frame" className="text-slate-400 hover:text-[#39FF14] transition-colors text-sm">PFP Frame</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg">Built With</h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]"></span> React 19
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]"></span> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]"></span> Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]"></span> Framer Motion
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            Made with <span className="text-[#39FF14]">💚</span> for HH Goa 2026
          </p>
          <p className="text-sm text-slate-500">
            © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
