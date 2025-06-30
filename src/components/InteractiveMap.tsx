import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CampingLocation {
  id: number;
  name: string;
  lat: number;
  lng: number;
  price: number;
  rating: number;
  type: string;
}

interface InteractiveMapProps {
  selectedLocation?: CampingLocation;
}

export default function InteractiveMap({
  selectedLocation,
}: InteractiveMapProps) {
  const [zoom, setZoom] = useState(6);

  const locations: CampingLocation[] = [
    {
      id: 1,
      name: "Sandparks Campsite",
      lat: 50.2,
      lng: -5.1,
      price: 2500,
      rating: 9.5,
      type: "camping",
    },
    {
      id: 2,
      name: "Macdonald's Farm",
      lat: 56.8,
      lng: -4.2,
      price: 1800,
      rating: 9.5,
      type: "farm",
    },
    {
      id: 3,
      name: "Forest Glamping",
      lat: 55.7,
      lng: 37.6,
      price: 3200,
      rating: 9.2,
      type: "glamping",
    },
    {
      id: 4,
      name: "Лесной кемпинг",
      lat: 55.8,
      lng: 37.8,
      price: 2800,
      rating: 8.9,
      type: "camping",
    },
    {
      id: 5,
      name: "Озерная база",
      lat: 55.9,
      lng: 38.2,
      price: 3500,
      rating: 9.1,
      type: "glamping",
    },
    {
      id: 6,
      name: "Горный лагерь",
      lat: 43.7,
      lng: 40.3,
      price: 4200,
      rating: 9.3,
      type: "camping",
    },
  ];

  return (
    <div className="relative h-full bg-gray-100">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col space-y-2">
        <Button
          size="sm"
          variant="outline"
          className="bg-white shadow-md"
          onClick={() => setZoom((prev) => Math.min(prev + 1, 18))}
        >
          <Icon name="Plus" size={16} />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="bg-white shadow-md"
          onClick={() => setZoom((prev) => Math.max(prev - 1, 1))}
        >
          <Icon name="Minus" size={16} />
        </Button>
      </div>

      {/* Search on Map Button */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000]">
        <Button
          variant="outline"
          className="bg-white shadow-md flex items-center space-x-2"
        >
          <Icon name="Search" size={16} />
          <span>Искать по карте</span>
        </Button>
      </div>

      {/* Price Legend */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white p-3 rounded-lg shadow-md">
        <div className="text-sm font-medium text-gray-700 mb-2">
          Цены за сутки:
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <span>до 3000 ₽</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span>от 3000 ₽</span>
          </div>
        </div>
      </div>

      {/* Simple Map Placeholder with Markers */}
      <div className="h-full w-full bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        {/* Map Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full">
            {Array.from({ length: 96 }, (_, i) => (
              <div key={i} className="border border-gray-300"></div>
            ))}
          </div>
        </div>

        {/* Location Markers */}
        {locations.map((location) => {
          const isSelected = selectedLocation?.id === location.id;
          const backgroundColor = isSelected
            ? "#ef4444"
            : location.price >= 3000
              ? "#ef4444"
              : "#f97316";

          // Простая формула для позиционирования маркеров на основе координат
          const x = ((location.lng + 10) / 80) * 100; // Приблизительное позиционирование
          const y = ((60 - location.lat) / 20) * 100;

          return (
            <div
              key={location.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-110"
              style={{
                left: `${Math.max(10, Math.min(90, x))}%`,
                top: `${Math.max(10, Math.min(90, y))}%`,
              }}
            >
              <div
                className="px-2 py-1 rounded-xl text-white text-xs font-semibold border-2 border-white shadow-lg"
                style={{ backgroundColor }}
              >
                {Math.floor(location.price / 1000)}
                {location.price % 1000 !== 0 &&
                  location.price >= 1000 &&
                  (location.price % 1000 < 100 ? ".0" : ".") +
                    Math.floor((location.price % 1000) / 100)}
                k ₽
              </div>

              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 hover:opacity-100 transition-opacity bg-gray-800 text-white p-2 rounded text-xs whitespace-nowrap">
                <div className="font-semibold">{location.name}</div>
                <div>Рейтинг: {location.rating}</div>
                <div>{location.price.toLocaleString()} ₽/сутки</div>
              </div>
            </div>
          );
        })}

        {/* Center Marker if location selected */}
        {selectedLocation && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}
