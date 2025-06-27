import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/catalog", label: "Каталог", icon: "Search" },
    { path: "/map", label: "Карта", icon: "Map" },
    { path: "/about", label: "О проекте", icon: "Info" },
    { path: "/partners", label: "Партнерам", icon: "Handshake" },
    { path: "/contacts", label: "Контакты", icon: "Phone" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3 text-primary hover:text-accent transition-colors"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <span className="font-bold text-xl text-gray-800">
                ТурКаталог
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? "text-primary bg-green-50"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}

            {/* User Actions */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-primary"
              >
                <Icon name="Heart" size={16} />
                Избранное
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 text-gray-600 hover:text-primary hover:border-primary"
              >
                <Icon name="User" size={16} />
                Вход
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icon name={isOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-gray-600 hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
