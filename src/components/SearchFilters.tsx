import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";

interface SearchFiltersProps {
  onFiltersChange: (filters: any) => void;
}

export default function SearchFilters({ onFiltersChange }: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [showMap, setShowMap] = useState(true);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onFiltersChange({ searchQuery: value, selectedRegion, selectedType });
  };

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
    onFiltersChange({ searchQuery, selectedRegion: value, selectedType });
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    onFiltersChange({ searchQuery, selectedRegion, selectedType: value });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRegion("");
    setSelectedType("");
    setAppliedFilters([]);
    onFiltersChange({ searchQuery: "", selectedRegion: "", selectedType: "" });
  };

  return (
    <div className="bg-white p-4 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Input
          placeholder="Выбранная зона карты"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10 py-3 rounded-full border-2 border-blue-200 focus:border-blue-400"
        />
        <Icon
          name="Search"
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleSearch("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1"
          >
            <Icon name="X" size={16} className="text-gray-400" />
          </Button>
        )}
      </div>

      {/* Secondary Search */}
      <div className="flex space-x-2">
        <Input
          placeholder=""
          className="flex-1 rounded-full border-2 border-orange-200 focus:border-orange-400"
        />
        <Input
          placeholder=""
          className="flex-1 rounded-full border-2 border-gray-200 focus:border-gray-400"
        />
        <Input
          placeholder=""
          className="flex-1 rounded-full border-2 border-gray-200 focus:border-gray-400"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="flex items-center space-x-2 bg-blue-600 text-white hover:bg-blue-700 rounded-full px-4 py-2"
          >
            <Icon name="Filter" size={16} />
            <span>Фильтр</span>
            <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
              2
            </span>
          </Button>

          <Select value={selectedType} onValueChange={handleTypeChange}>
            <SelectTrigger className="w-40 rounded-full">
              <SelectValue placeholder="Ферма" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="farm">Ферма</SelectItem>
              <SelectItem value="camping">Кемпинг</SelectItem>
              <SelectItem value="glamping">Глэмпинг</SelectItem>
              <SelectItem value="caravan">Автодом</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedRegion} onValueChange={handleRegionChange}>
            <SelectTrigger className="w-48 rounded-full">
              <SelectValue placeholder="Выбранная зона карты" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="moscow">Московская область</SelectItem>
              <SelectItem value="spb">Ленинградская область</SelectItem>
              <SelectItem value="krasnodar">Краснодарский край</SelectItem>
              <SelectItem value="crimea">Крым</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Карта</span>
          <Switch
            checked={showMap}
            onCheckedChange={setShowMap}
            className="data-[state=checked]:bg-green-500"
          />
        </div>
      </div>

      {/* Applied Filters */}
      {appliedFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {appliedFilters.map((filter, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              <span>{filter}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setAppliedFilters(
                    appliedFilters.filter((_, i) => i !== index),
                  )
                }
                className="p-0 h-auto"
              >
                <Icon name="X" size={12} />
              </Button>
            </div>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-blue-600 hover:text-blue-800"
          >
            Очистить все
          </Button>
        </div>
      )}
    </div>
  );
}
