import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все категории", icon: "Grid3X3" },
    { id: "hotels", name: "Отели", icon: "Building2" },
    { id: "restaurants", name: "Рестораны", icon: "UtensilsCrossed" },
    { id: "attractions", name: "Достопримечательности", icon: "Camera" },
    { id: "activities", name: "Развлечения", icon: "Zap" },
  ];

  const items = [
    {
      id: 1,
      name: "Отель Зеленый Лес",
      category: "hotels",
      rating: 4.5,
      price: "5000 ₽",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Ресторан У Озера",
      category: "restaurants",
      rating: 4.8,
      price: "2000 ₽",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Водопад Серебряный",
      category: "attractions",
      rating: 4.9,
      price: "Бесплатно",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Рафтинг по реке",
      category: "activities",
      rating: 4.7,
      price: "3500 ₽",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Отель Горный Воздух",
      category: "hotels",
      rating: 4.6,
      price: "4500 ₽",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Кафе Лесная Поляна",
      category: "restaurants",
      rating: 4.4,
      price: "1500 ₽",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    },
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Каталог объектов
          </h1>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Поиск по названию..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Button className="bg-primary hover:bg-accent">
              <Icon name="MapPin" size={16} />
              Показать на карте
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-primary hover:bg-accent"
                    : ""
                }
              >
                <Icon name={category.icon as any} size={16} />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                    <Icon
                      name="Star"
                      size={14}
                      className="text-yellow-500 mr-1"
                    />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">
                      {item.price}
                    </span>
                    <Button size="sm" className="bg-primary hover:bg-accent">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Ничего не найдено
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
