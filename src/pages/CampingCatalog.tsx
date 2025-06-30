import { useState } from "react";
import Header from "@/components/Header";
import SearchFilters from "@/components/SearchFilters";
import CatalogList from "@/components/CatalogList";
import InteractiveMap from "@/components/InteractiveMap";

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

export default function CampingCatalog() {
  const [selectedLocation, setSelectedLocation] = useState<
    CampingItem | undefined
  >();
  const [filters, setFilters] = useState({});

  const handleLocationSelect = (camping: CampingItem) => {
    setSelectedLocation(camping);
  };

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto">
        <SearchFilters onFiltersChange={handleFiltersChange} />

        <div className="flex h-[calc(100vh-200px)]">
          {/* Left Panel - Camping List */}
          <div className="w-1/2 overflow-y-auto border-r">
            <CampingList onLocationSelect={handleLocationSelect} />
          </div>

          {/* Right Panel - Interactive Map */}
          <div className="w-1/2">
            <InteractiveMap selectedLocation={selectedLocation} />
          </div>
        </div>
      </div>
    </div>
  );
}
