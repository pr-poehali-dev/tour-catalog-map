import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="Tent" size={16} className="text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-green-600">
                PITCHUP
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600"
                onClick={() =>
                  setActiveMenu(activeMenu === "view" ? null : "view")
                }
              >
                <span>Смотреть</span>
                <Icon name="ChevronDown" size={16} />
              </Button>
            </div>

            <Button
              variant="ghost"
              className="text-gray-700 hover:text-green-600"
            >
              О нас
            </Button>

            <Button
              variant="ghost"
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600"
            >
              <Icon name="Heart" size={16} />
              <span>Избранное</span>
            </Button>
          </nav>

          {/* Login */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600"
              onClick={() =>
                setActiveMenu(activeMenu === "login" ? null : "login")
              }
            >
              <Icon name="User" size={16} />
              <span>Вход</span>
              <Icon name="ChevronDown" size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-2 text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Начало
            </a>
            <Icon name="ChevronRight" size={14} className="text-gray-400" />
            <span className="text-gray-600">Кемпинги</span>
          </div>
        </div>
      </div>
    </header>
  );
}
