import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import MapCatalog from "@/components/MapCatalog";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900">TravelMap</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск мест..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10"
                />
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                />
              </div>
              <Button variant="outline">
                <Icon name="User" className="h-4 w-4 mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Откройте для себя 🌍
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Найдите идеальные места для отдыха, кемпинги, отели и
            достопримечательности на интерактивной карте
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Icon name="Map" className="h-5 w-5 mr-2" />
              Открыть карту
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              <Icon name="List" className="h-5 w-5 mr-2" />
              Каталог мест
            </Button>
          </div>
        </div>
      </section>

      {/* Map Catalog */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MapCatalog />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="MapPin" className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">TravelMap</span>
              </div>
              <p className="text-gray-400">
                Ваш гид по лучшим местам для путешествий и отдыха
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Категории</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Кемпинги</li>
                <li>Отели</li>
                <li>Рестораны</li>
                <li>Достопримечательности</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Помощь</li>
                <li>Контакты</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Icon
                  name="Facebook"
                  className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer"
                />
                <Icon
                  name="Twitter"
                  className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer"
                />
                <Icon
                  name="Instagram"
                  className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TravelMap. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
