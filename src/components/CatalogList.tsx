import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface CatalogItem {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  images: number;
  totalImages: number;
  image: string;
  lat: number;
  lng: number;
  category: string;
}

interface CatalogListProps {
  onLocationSelect: (item: CatalogItem) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CatalogList({
  onLocationSelect,
  selectedCategory,
  onCategoryChange,
}: CatalogListProps) {
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    { id: "all", name: "Все категории", count: 24 },
    { id: "camping", name: "Кемпинги", count: 8 },
    { id: "glamping", name: "Глэмпинги", count: 5 },
    { id: "farm", name: "Фермы", count: 6 },
    { id: "hunting", name: "Охотничьи хозяйства", count: 3 },
    { id: "resort", name: "Базы отдыха", count: 2 },
  ];

  const catalogItems: CatalogItem[] = [
    // Кемпинги
    {
      id: 1,
      name: "Лесной кемпинг",
      location: "Подмосковье",
      price: 2800,
      rating: 8.9,
      images: 1,
      totalImages: 45,
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
      lat: 55.8,
      lng: 37.8,
      category: "camping",
    },
    {
      id: 2,
      name: "Sandparks Campsite",
      location: "Корнуолл, Англия",
      price: 2500,
      rating: 9.5,
      images: 1,
      totalImages: 356,
      image:
        "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=400&h=300&fit=crop",
      lat: 50.2,
      lng: -5.1,
      category: "camping",
    },
    {
      id: 3,
      name: "Горный лагерь",
      location: "Сочи",
      price: 4200,
      rating: 9.3,
      images: 1,
      totalImages: 128,
      image:
        "https://images.unsplash.com/photo-1486926756792-f0f7b4a9bf08?w=400&h=300&fit=crop",
      lat: 43.7,
      lng: 40.3,
      category: "camping",
    },

    // Глэмпинги
    {
      id: 4,
      name: "Forest Glamping Site",
      location: "Подмосковье",
      price: 3200,
      rating: 9.2,
      images: 1,
      totalImages: 124,
      image:
        "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=400&h=300&fit=crop",
      lat: 55.7,
      lng: 37.6,
      category: "glamping",
    },
    {
      id: 5,
      name: "Озерная база",
      location: "Тверская область",
      price: 3500,
      rating: 9.1,
      images: 1,
      totalImages: 89,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      lat: 55.9,
      lng: 38.2,
      category: "glamping",
    },
    {
      id: 6,
      name: "Морской берег",
      location: "Крым",
      price: 5800,
      rating: 9.6,
      images: 1,
      totalImages: 203,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      lat: 44.6,
      lng: 33.5,
      category: "glamping",
    },

    // Фермы
    {
      id: 7,
      name: "Macdonald's Farm",
      location: "Шотландия",
      price: 1800,
      rating: 9.5,
      images: 1,
      totalImages: 279,
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      lat: 56.8,
      lng: -4.2,
      category: "farm",
    },
    {
      id: 8,
      name: "Фермерский дом",
      location: "Воронежская область",
      price: 1900,
      rating: 8.7,
      images: 1,
      totalImages: 67,
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
      lat: 50.8,
      lng: 36.2,
      category: "farm",
    },
    {
      id: 9,
      name: "Экоферма Солнечная",
      location: "Краснодарский край",
      price: 2200,
      rating: 9.0,
      images: 1,
      totalImages: 156,
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      lat: 45.0,
      lng: 39.0,
      category: "farm",
    },

    // Охотничьи хозяйства
    {
      id: 10,
      name: "Лесное хозяйство",
      location: "Новгородская область",
      price: 4500,
      rating: 8.8,
      images: 1,
      totalImages: 92,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      lat: 58.5,
      lng: 31.3,
      category: "hunting",
    },
    {
      id: 11,
      name: "Охотничий домик",
      location: "Карелия",
      price: 3800,
      rating: 9.1,
      images: 1,
      totalImages: 78,
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop",
      lat: 61.8,
      lng: 34.4,
      category: "hunting",
    },

    // Базы отдыха
    {
      id: 12,
      name: "База отдыха Золотые пески",
      location: "Астраханская область",
      price: 6200,
      rating: 9.4,
      images: 1,
      totalImages: 167,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      lat: 46.3,
      lng: 48.0,
      category: "resort",
    },
    {
      id: 13,
      name: "Рыболовная база",
      location: "Волгоградская область",
      price: 4800,
      rating: 8.6,
      images: 1,
      totalImages: 134,
      image:
        "https://images.unsplash.com/photo-1516906736502-5d493157c7c2?w=400&h=300&fit=crop",
      lat: 48.7,
      lng: 44.5,
      category: "resort",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? catalogItems
      : catalogItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Каталог</h2>

        {/* Category Filters */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className={`text-xs ${
                  selectedCategory === category.id
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {category.name}
                <span className="ml-1 text-xs opacity-75">
                  ({category.count})
                </span>
              </Button>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          {filteredItems.length} объектов доступно для бронирования
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Сортировать по:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Наш выбор" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Наш выбор</SelectItem>
              <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
              <SelectItem value="price-high">Цена: по убыванию</SelectItem>
              <SelectItem value="rating">По рейтингу</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Items List */}
      <div className="p-4 space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onLocationSelect(item)}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-sm font-medium">
                {item.images}/{item.totalImages}
              </div>
              <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                {categories.find((c) => c.id === item.category)?.name}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute bottom-2 right-2 bg-white/80 hover:bg-white"
              >
                <Icon name="Heart" size={16} />
              </Button>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {item.name}
                </h3>
                <div className="flex items-center space-x-1 bg-blue-600 text-white px-2 py-1 rounded text-sm">
                  <span>{item.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3">{item.location}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">от</span>
                  <span className="text-lg font-semibold">
                    {item.price.toLocaleString()} ₽
                  </span>
                  <span className="text-sm text-gray-500">за ночь</span>
                </div>

                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Category Button */}
      <div className="p-4 border-t">
        <Button
          variant="outline"
          className="w-full border-dashed border-2 border-gray-300 hover:border-gray-400 text-gray-600"
        >
          <Icon name="Plus" size={16} />
          Добавить новую категорию
        </Button>
      </div>
    </div>
  );
}
