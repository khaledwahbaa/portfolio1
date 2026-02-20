import { motion } from "framer-motion";
import { useState } from "react";
import { X, Menu, Sun, Moon } from "lucide-react";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "home", link: "#home" },
    { name: "about", link: "#about" },
    { name: "skills", link: "#skills" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];

  /* 🌞 Light Mode – Brown */
  const lightColors = {
    navBg: "bg-gradient-to-br from-amber-100 to-stone-50",
    textPrimary: "text-stone-900",
    textSecondary: "text-stone-600",
    textHover: "text-amber-700",
    textActive: "text-amber-800",
    indicator: "from-amber-700 to-yellow-600",
    button: "from-amber-700 to-yellow-600",
  };

  /* 🌙 Dark Mode – Coffee */
  const darkColors = {
    navBg: "bg-gradient-to-br from-stone-900 via-[#2a1f1a] to-stone-900",
    textPrimary: "text-stone-100",
    textSecondary: "text-stone-400",
    textHover: "text-amber-400",
    textActive: "text-amber-500",
    indicator: "from-amber-500 to-yellow-500",
    button: "from-amber-600 to-yellow-500",
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavItemclick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg}
        backdrop-blur-lg rounded-2xl px-4 py-2 shadow-lg`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Portfolio<span className="text-amber-700">.</span>
            </span>
          </motion.a>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavItemclick(item.name)}
                className="relative"
              >
                <motion.span
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.name
                      ? colors.textActive
                      : `${colors.textSecondary} hover:${colors.textHover}`
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>

                {activeSection === item.name && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5
                    bg-linear-to-r rounded-full ${colors.indicator}`}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* Dark mode */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-stone-800" : "bg-amber-100"
              } transition-colors`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-stone-800" />
              )}
            </motion.button>

            {/* Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full
              bg-linear-to-r ${colors.button}
              text-white shadow-md hover:shadow-lg`}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center px-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-stone-800" : "bg-amber-100"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-stone-100" />
              ) : (
                <Menu className="w-5 h-5 text-stone-800" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default NavBar;
