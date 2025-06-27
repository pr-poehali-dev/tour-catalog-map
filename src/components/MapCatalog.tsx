import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showMap, setShowMap] = useState(true);

  const categories = [
    { id: "all", name: "Все", icon: "Grid3X3" },
    { id: "camping", name: "Кемпинги", icon: "Tent" },
    { id: "hotels", name: "Отели", icon: "Building2" },
    { id: "restaurants", name: "Рестораны", icon: "UtensilsCrossed" },
    { id: "attractions", name: "Достопримечательности", icon: "Camera" },
  ];

  const locations = [
    {
      id: 1,
      name: "Sandparks Campsite",
      description: "Уютный кемпинг с видом на море и современными удобствами",
      category: "camping",
      rating: 9.5,
      price: "2500 ₽",
      image:
        "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=400&h=300&fit=crop",
      photos: "1/356",
      coordinates: [55.7558, 37.6176] as [number, number], // Москва
    },
    {
      id: 2,
      name: "Macdonald's Farm Touring",
      description:
        "Фермерский кемпинг среди зеленых полей с активностями для детей",
      category: "camping",
      rating: 9.5,
      price: "2100 ₽",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
      photos: "1/279",
      coordinates: [55.8058, 37.5176] as [number, number], // Подмосковье
    },
    {
      id: 3,
      name: "Mountain View Lodge",
      description: "Отель с панорамным видом на горы и спа-центром",
      category: "hotels",
      rating: 8.7,
      price: "5500 ₽",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      photos: "1/156",
      coordinates: [55.7358, 37.6476] as [number, number], // Центр Москвы
    },
    {
      id: 4,
      name: "Forest Restaurant",
      description: "Ресторан среди леса с местной кухней и уютной атмосферой",
      category: "restaurants",
      rating: 8.9,
      price: "1800 ₽",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      photos: "1/89",
      coordinates: [55.7858, 37.5876] as [number, number], // Север Москвы
    },
  ];

  const filteredLocations = locations.filter((location) => {
    const matchesSearch = location.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || location.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex h-screen">
      {/* Left Panel - Catalog */}
      <div className="w-1/2 bg-white overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Поиск и бронирование кемпингов
            </h1>
            <p className="text-gray-600">
              {filteredLocations.length} кемпингов доступно для бронирования
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4 mb-6">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Выбранная зона карты"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-2 border-gray-200 rounded-xl"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 h-8 w-8"
                >
                  <Icon name="X" size={16} />
                </Button>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="rounded-full border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                Ферма
                <Icon name="ChevronDown" size={16} className="ml-1" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-gray-300"
                onClick={() => setSearchTerm("Выбранная зона карты")}
              >
                Выбранная зона карты
                <Icon name="ChevronDown" size={16} className="ml-1" />
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-teal-600 text-white border-teal-600 hover:bg-teal-700"
                >
                  <Icon name="Filter" size={16} />
                  Фильтр
                  <span className="ml-1 bg-white text-teal-600 px-1 rounded text-xs">
                    2
                  </span>
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Сортировать по:</span>
                <Select defaultValue="rating">
                  <SelectTrigger className="w-32 border-0 bg-transparent">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Рейтинг</SelectItem>
                    <SelectItem value="price">Цена</SelectItem>
                    <SelectItem value="name">Название</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Карта</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMap(!showMap)}
                  className={`p-2 rounded-full ${showMap ? "bg-teal-100 text-teal-600" : "bg-gray-100"}`}
                >
                  <div
                    className={`w-4 h-2 rounded-full transition-all ${showMap ? "bg-teal-600" : "bg-gray-400"}`}
                  />
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {filteredLocations.map((location) => (
              <Card
                key={location.id}
                className="hover:shadow-lg transition-all duration-200 border-0 shadow-sm"
              >
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative w-32 h-24 flex-shrink-0">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                      <div className="absolute bottom-1 left-1 bg-black/70 text-white px-1 rounded text-xs">
                        {location.photos}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-1 right-1 p-1 h-6 w-6 bg-white/90 hover:bg-white"
                      >
                        <Icon
                          name="Heart"
                          size={14}
                          className="text-gray-600"
                        />
                      </Button>
                    </div>

                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {location.name}
                        </h3>
                        <div className="flex items-center bg-teal-600 text-white px-2 py-1 rounded text-xs font-medium">
                          {location.rating}
                        </div>
                      </div>

                      <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                        {location.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">
                          {location.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Map */}
      {showMap && (
        <div className="w-1/2 relative">
          <MapContainer
            center={[55.7558, 37.6176]}
            zoom={11}
            style={{ height: "100vh", width: "100%" }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filteredLocations.map((location) => (
              <Marker key={location.id} position={location.coordinates}>
                <Popup>
                  <div className="p-2 min-w-48">
                    <div className="flex items-start gap-3">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-1">
                          {location.name}
                        </h3>
                        <p className="text-xs text-gray-600 mb-1">
                          {location.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm">
                            {location.price}
                          </span>
                          <div className="flex items-center bg-teal-600 text-white px-1.5 py-0.5 rounded text-xs">
                            {location.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Search on Map Toggle */}
          <div className="absolute top-4 left-4 z-10">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-4 py-2 text-sm shadow-lg">
              <Icon name="Search" size={16} className="mr-2" />
              Искать по карте
            </Button>
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg z-10">
            <div className="text-xs text-gray-600 mb-1">Цены от:</div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              <span className="text-xs">2000₽+</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapCatalog;
