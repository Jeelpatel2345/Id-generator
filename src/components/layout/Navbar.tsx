import { useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScroll = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/?section=${id}`);
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Features', id: 'features' },
    { name: 'Formats', id: 'formats' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#04070D]/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <RouterLink to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="HH Goa Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
            <span className="text-xl font-heading font-bold text-white tracking-wide">
              HH Goa <span className="text-[#39FF14]">2026</span>
            </span>
          </RouterLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className="text-sm font-medium text-slate-300 hover:text-[#39FF14] transition-colors"
              >
                {link.name}
              </button>
            ))}
            <RouterLink
              to="/generator?mode=builder"
              className="text-sm font-medium text-slate-300 hover:text-[#39FF14] transition-colors"
            >
              Generator
            </RouterLink>
            
            <button
              onClick={() => navigate('/generator?mode=builder')}
              className="ml-4 px-6 py-2.5 rounded-xl bg-[#39FF14] text-black font-semibold text-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:scale-105 transition-all"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/10 bg-[#0A0F1A]"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className="text-left text-lg font-medium text-slate-300 hover:text-[#39FF14] transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <RouterLink
                to="/generator?mode=builder"
                onClick={() => setIsOpen(false)}
                className="text-left text-lg font-medium text-slate-300 hover:text-[#39FF14] transition-colors"
              >
                Generator
              </RouterLink>
              <button
                onClick={() => {
                  navigate('/generator?mode=builder');
                  setIsOpen(false);
                }}
                className="mt-4 px-6 py-3 rounded-xl bg-[#39FF14] text-black font-bold text-center w-full hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;