import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const categories = [
    { id: "all", name: "Все категории", icon: "Grid3X3" },
    { id: "hotels", name: "Отели", icon: "Building2" },
    { id: "restaurants", name: "Рестораны", icon: "UtensilsCrossed" },
    { id: "attractions", name: "Достопримечательности", icon: "Camera" },
    { id: "activities", name: "Развлечения", icon: "Zap" },
  ];

  const regions = [
    { id: "all", name: "Все регионы" },
    // Федеральные города
    { id: "moscow-city", name: "Москва" },
    { id: "spb-city", name: "Санкт-Петербург" },
    { id: "sevastopol", name: "Севастополь" },
    // Области
    { id: "moscow-oblast", name: "Московская область" },
    { id: "leningrad", name: "Ленинградская область" },
    { id: "tver", name: "Тверская область" },
    { id: "yaroslavl", name: "Ярославская область" },
    { id: "vladimir", name: "Владимирская область" },
    { id: "ryazan", name: "Рязанская область" },
    { id: "tula", name: "Тульская область" },
    { id: "kaluga", name: "Калужская область" },
    { id: "smolensk", name: "Смоленская область" },
    { id: "bryansk", name: "Брянская область" },
    { id: "oryol", name: "Орловская область" },
    { id: "kursk", name: "Курская область" },
    { id: "belgorod", name: "Белгородская область" },
    { id: "voronezh", name: "Воронежская область" },
    { id: "lipetsk", name: "Липецкая область" },
    { id: "tambov", name: "Тамбовская область" },
    { id: "volgograd", name: "Волгоградская область" },
    { id: "rostov", name: "Ростовская область" },
    { id: "astrakhan", name: "Астраханская область" },
    { id: "saratov", name: "Саратовская область" },
    { id: "penza", name: "Пензенская область" },
    { id: "ulyanovsk", name: "Ульяновская область" },
    { id: "samara", name: "Самарская область" },
    { id: "orenburg", name: "Оренбургская область" },
    { id: "chelyabinsk", name: "Челябинская область" },
    { id: "kurgan", name: "Курганская область" },
    { id: "tyumen", name: "Тюменская область" },
    { id: "sverdlovsk", name: "Свердловская область" },
    { id: "kirov", name: "Кировская область" },
    { id: "nizhny-novgorod", name: "Нижегородская область" },
    { id: "kostroma", name: "Костромская область" },
    { id: "ivanovo", name: "Ивановская область" },
    { id: "vologda", name: "Вологодская область" },
    { id: "arkhangelsk", name: "Архангельская область" },
    { id: "murmansk", name: "Мурманская область" },
    { id: "novgorod", name: "Новгородская область" },
    { id: "pskov", name: "Псковская область" },
    { id: "kaliningrad", name: "Калининградская область" },
    { id: "novosibirsk", name: "Новосибирская область" },
    { id: "omsk", name: "Омская область" },
    { id: "tomsk", name: "Томская область" },
    { id: "kemerovo", name: "Кемеровская область" },
    { id: "irkutsk", name: "Иркутская область" },
    { id: "amur", name: "Амурская область" },
    { id: "magadan", name: "Магаданская область" },
    { id: "sakhalin", name: "Сахалинская область" },
    // Края
    { id: "krasnodar", name: "Краснодарский край" },
    { id: "stavropol", name: "Ставропольский край" },
    { id: "altai-krai", name: "Алтайский край" },
    { id: "krasnoyarsk", name: "Красноярский край" },
    { id: "irkutsk-krai", name: "Иркутский край" },
    { id: "primorsky", name: "Приморский край" },
    { id: "khabarovsk", name: "Хабаровский край" },
    { id: "kamchatka", name: "Камчатский край" },
    { id: "perm", name: "Пермский край" },
    { id: "zabaykalsky", name: "Забайкальский край" },
    // Республики
    { id: "tatarstan", name: "Республика Татарстан" },
    { id: "bashkortostan", name: "Республика Башкортостан" },
    { id: "karelia", name: "Республика Карелия" },
    { id: "komi", name: "Республика Коми" },
    { id: "udmurtia", name: "Удмуртская Республика" },
    { id: "chuvashia", name: "Чувашская Республика" },
    { id: "mari-el", name: "Республика Марий Эл" },
    { id: "mordovia", name: "Республика Мордовия" },
    { id: "dagestan", name: "Республика Дагестан" },
    { id: "chechnya", name: "Чеченская Республика" },
    { id: "ingushetia", name: "Республика Ингушетия" },
    { id: "north-ossetia", name: "Республика Северная Осетия" },
    { id: "kabardino-balkaria", name: "Кабардино-Балкарская Республика" },
    { id: "karachay-cherkessia", name: "Карачаево-Черкесская Республика" },
    { id: "adygea", name: "Республика Адыгея" },
    { id: "kalmykia", name: "Республика Калмыкия" },
    { id: "altai-republic", name: "Республика Алтай" },
    { id: "tuva", name: "Республика Тыва" },
    { id: "khakassia", name: "Республика Хакасия" },
    { id: "buryatia", name: "Республика Бурятия" },
    { id: "yakutia", name: "Республика Саха (Якутия)" },
    // Автономные округа
    { id: "yamalo-nenets", name: "Ямало-Ненецкий АО" },
    { id: "khanty-mansi", name: "Ханты-Мансийский АО" },
    { id: "nenets", name: "Ненецкий АО" },
    { id: "chukotka", name: "Чукотский АО" },
    // Автономная область
    { id: "jewish", name: "Еврейская автономная область" },
    // Страны СНГ
    { id: "belarus", name: "Беларусь" },
    { id: "kazakhstan", name: "Казахстан" },
    { id: "kyrgyzstan", name: "Кыргызстан" },
    { id: "tajikistan", name: "Таджикистан" },
    { id: "uzbekistan", name: "Узбекистан" },
    { id: "armenia", name: "Армения" },
    { id: "azerbaijan", name: "Азербайджан" },
    { id: "moldova", name: "Молдова" },
  ];

  const items = [
    {
      id: 1,
      name: "Отель Зеленый Лес",
      description:
        "Уютный отель в лесной зоне с современными номерами и спа-центром",
      category: "hotels",
      region: "moscow-oblast",
      rating: 4.5,
      price: "5000 ₽",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Ресторан У Озера",
      description:
        "Ресторан с панорамным видом на озеро, авторская кухня и свежая рыба",
      category: "restaurants",
      region: "karelia",
      rating: 4.8,
      price: "2000 ₽",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Водопад Серебряный",
      description: "Живописный водопад высотой 25 метров среди горных склонов",
      category: "attractions",
      region: "altai-republic",
      rating: 4.9,
      price: "Бесплатно",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Рафтинг по реке",
      description:
        "Экстремальный сплав по горной реке с опытными инструкторами",
      category: "activities",
      region: "krasnodar",
      rating: 4.7,
      price: "3500 ₽",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Отель Горный Воздух",
      description: "Высокогорный отель с захватывающими видами на вершины",
      category: "hotels",
      region: "altai-krai",
      rating: 4.6,
      price: "4500 ₽",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Кафе Лесная Поляна",
      description:
        "Домашняя атмосфера, блюда из местных продуктов и детская площадка",
      category: "restaurants",
      region: "spb-city",
      rating: 4.4,
      price: "1500 ₽",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Музей Казанского Кремля",
      description:
        "Историческая крепость с музеями, древними башнями и мечетью",
      category: "attractions",
      region: "tatarstan",
      rating: 4.8,
      price: "500 ₽",
      image:
        "https://images.unsplash.com/photo-1520637836862-4d197d17c92a?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Горнолыжный курорт Роза Хутор",
      description:
        "Современный курорт с трассами разной сложности и подъемниками",
      category: "activities",
      region: "krasnodar",
      rating: 4.9,
      price: "8000 ₽",
      image:
        "https://images.unsplash.com/photo-1551524164-d8b2c1ea5d14?w=400&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Отель Астана Плаза",
      description:
        "Бизнес-отель в центре города с конференц-залами и рестораном",
      category: "hotels",
      region: "kazakhstan",
      rating: 4.3,
      price: "6000 ₽",
      image:
        "https://images.unsplash.com/photo-1587473454128-dd83adafa8bf?w=400&h=300&fit=crop",
    },
    {
      id: 10,
      name: "Белорусские драники",
      description: "Традиционное кафе с аутентичными белорусскими блюдами",
      category: "restaurants",
      region: "belarus",
      rating: 4.6,
      price: "1200 ₽",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    },
  ];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesRegion =
      selectedRegion === "all" || item.region === selectedRegion;
    return matchesSearch && matchesCategory && matchesRegion;
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
                placeholder="Поиск по названию и описанию..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full lg:w-64">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите регион" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.id} value={region.id}>
                      {region.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
