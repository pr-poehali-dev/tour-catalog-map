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

interface CampingItem {
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
  type: string;
}

interface CampingListProps {
  onLocationSelect: (camping: CampingItem) => void;
}

export default function CampingList({ onLocationSelect }: CampingListProps) {
  const [sortBy, setSortBy] = useState("default");

  const campings: CampingItem[] = [
    {
      id: 1,
      name: "Sandparks Campsite",
      location: "Корнуолл, Англия",
      price: 2500,
      rating: 9.5,
      images: 1,
      totalImages: 356,
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
      lat: 50.2,
      lng: -5.1,
      type: "camping",
    },
    {
      id: 2,
      name: "Macdonald's Farm Touring and Camping Park",
      location: "Шотландия",
      price: 1800,
      rating: 9.5,
      images: 1,
      totalImages: 279,
      image:
        "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=400&h=300&fit=crop",
      lat: 56.8,
      lng: -4.2,
      type: "farm",
    },
    {
      id: 3,
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
      type: "glamping",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Поиск и бронирование кемпингов
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          {campings.length} кемпингов доступно для бронирования
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

      {/* Camping Cards */}
      <div className="p-4 space-y-4">
        {campings.map((camping) => (
          <div
            key={camping.id}
            className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onLocationSelect(camping)}
          >
            <div className="relative">
              <img
                src={camping.image}
                alt={camping.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-sm font-medium">
                {camping.images}/{camping.totalImages}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              >
                <Icon name="Heart" size={16} />
              </Button>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {camping.name}
                </h3>
                <div className="flex items-center space-x-1 bg-blue-600 text-white px-2 py-1 rounded text-sm">
                  <span>{camping.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3">{camping.location}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">от</span>
                  <span className="text-lg font-semibold">
                    {camping.price.toLocaleString()} ₽
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
    </div>
  );
}
