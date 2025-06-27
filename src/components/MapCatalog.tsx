import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const MapCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Все", icon: "Grid3X3" },
    { id: "camping", label: "Кемпинги", icon: "Tent" },
    { id: "hotels", label: "Отели", icon: "Building" },
    { id: "restaurants", label: "Рестораны", icon: "UtensilsCrossed" },
    { id: "attractions", label: "Достопримечательности", icon: "Camera" },
  ];

  const places = [
    {
      id: 1,
      name: "Кемпинг у озера Байкал",
      category: "camping",
      rating: 4.8,
      price: "от 1500 ₽/сутки",
      image:
        "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400",
      description: "Уютный кемпинг на берегу священного озера",
      location: "Иркутская область",
    },
    {
      id: 2,
      name: "Гранд Отель Москва",
      category: "hotels",
      rating: 4.9,
      price: "от 8500 ₽/ночь",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      description: "Роскошный отель в центре столицы",
      location: "Москва",
    },
    {
      id: 3,
      name: "Ресторан Русская Тройка",
      category: "restaurants",
      rating: 4.7,
      price: "₽₽₽",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
      description: "Традиционная русская кухня",
      location: "Санкт-Петербург",
    },
    {
      id: 4,
      name: "Красная площадь",
      category: "attractions",
      rating: 4.9,
      price: "Бесплатно",
      image:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400",
      description: "Главная площадь России",
      location: "Москва",
    },
  ];

  const filteredPlaces =
    activeCategory === "all"
      ? places
      : places.filter((place) => place.category === activeCategory);

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Каталог мест для отдыха
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Откройте для себя лучшие места России - от уютных кемпингов до
          роскошных отелей
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="flex items-center space-x-2"
          >
            <Icon name={category.icon as any} size={16} />
            <span>{category.label}</span>
          </Button>
        ))}
      </div>

      {/* Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPlaces.map((place) => (
          <Card
            key={place.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-white text-gray-900">
                <Icon
                  name="Star"
                  size={14}
                  className="mr-1 fill-yellow-400 text-yellow-400"
                />
                {place.rating}
              </Badge>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg line-clamp-1">
                {place.name}
              </CardTitle>
              <div className="flex items-center text-sm text-gray-500">
                <Icon name="MapPin" size={14} className="mr-1" />
                {place.location}
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {place.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-primary">
                  {place.price}
                </span>
                <Button size="sm" variant="outline">
                  <Icon name="Eye" size={14} className="mr-1" />
                  Подробнее
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPlaces.length === 0 && (
        <div className="text-center py-12">
          <Icon
            name="Search"
            size={48}
            className="mx-auto text-gray-400 mb-4"
          />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Места не найдены
          </h3>
          <p className="text-gray-500">Попробуйте выбрать другую категорию</p>
        </div>
      )}
    </div>
  );
};

export default MapCatalog;
