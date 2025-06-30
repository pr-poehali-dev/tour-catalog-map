import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Fix для иконок Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

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
  const mapRef = useRef<any>(null);

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
    {
      id: 7,
      name: "Морской берег",
      lat: 44.6,
      lng: 33.5,
      price: 5800,
      rating: 9.6,
      type: "glamping",
    },
    {
      id: 8,
      name: "Фермерский дом",
      lat: 50.8,
      lng: 36.2,
      price: 1900,
      rating: 8.7,
      type: "farm",
    },
  ];

  // Создаем кастомную иконку с ценой
  const createPriceIcon = (price: number, isSelected = false) => {
    const backgroundColor = isSelected ? "#ef4444" : "#f97316";
    const textColor = "white";

    return L.divIcon({
      className: "custom-price-marker",
      html: `
        <div style="
          background-color: ${backgroundColor};
          color: ${textColor};
          padding: 4px 8px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 600;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          white-space: nowrap;
          text-align: center;
          min-width: 40px;
        ">
          ${Math.floor(price / 1000)} ${price >= 1000 ? (price % 1000 === 0 ? "" : (price % 1000 < 100 ? "0" : "") + (price % 1000)) : price} ₽
        </div>
      `,
      iconSize: [60, 24],
      iconAnchor: [30, 24],
      popupAnchor: [0, -24],
    });
  };

  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      mapRef.current.setView([selectedLocation.lat, selectedLocation.lng], 12);
    }
  }, [selectedLocation]);

  return (
    <div className="relative h-full bg-white">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col space-y-2">
        <Button
          size="sm"
          variant="outline"
          className="bg-white shadow-md"
          onClick={() => mapRef.current?.zoomIn()}
        >
          <Icon name="Plus" size={16} />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="bg-white shadow-md"
          onClick={() => mapRef.current?.zoomOut()}
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

      <MapContainer
        ref={mapRef}
        center={[55.7558, 37.6176]}
        zoom={6}
        className="h-full w-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={createPriceIcon(
              location.price,
              selectedLocation?.id === location.id,
            )}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-sm">{location.name}</h3>
                <p className="text-xs text-gray-600 mb-2">
                  Рейтинг: {location.rating}
                </p>
                <p className="font-bold text-orange-600">
                  {location.price.toLocaleString()} ₽/сутки
                </p>
                <Button
                  size="sm"
                  className="mt-2 bg-blue-600 hover:bg-blue-700"
                >
                  Подробнее
                </Button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
