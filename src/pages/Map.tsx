
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Map = () => {
  const markers = [
    { id: 1, name: 'Отель Зеленый Лес', type: 'hotel', lat: 55.7558, lng: 37.6176 },
    { id: 2, name: 'Ресторан У Озера', type: 'restaurant', lat: 55.7583, lng: 37.6178 },
    { id: 3, name: 'Водопад Серебряный', type: 'attraction', lat: 55.7608, lng: 37.6180 },
    { id: 4, name: 'Рафтинг по реке', type: 'activity', lat: 55.7533, lng: 37.6174 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Интерактивная карта</h1>
          <p className="text-gray-600">Найдите объекты на карте и планируйте свой маршрут</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-96 lg:h-[600px]">
              <CardContent className="p-0 h-full">
                <div className="h-full bg-gradient-to-br from-green-200 to-green-400 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20.5V18H0v-2h20v2.5L18 20l2-.5z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                  
                  {/* Simulated markers */}
                  <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                  
                  <div className="text-center text-white">
                    <Icon name="MapPin" size={64} className="mx-auto mb-4 opacity-80" />
                    <h3 className="text-xl font-semibold mb-2">Интерактивная карта</h3>
                    <p className="text-green-100">Здесь будет отображаться реальная карта с объектами</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with markers list */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <Button size="sm" className="bg-primary hover:bg-accent">
                <Icon name="Building2" size={16} />
                Отели
              </Button>
              <Button size="sm" variant="outline">
                <Icon name="UtensilsCrossed" size={16} />
                Рестораны
              </Button>
              <Button size="sm" variant="outline">
                <Icon name="Camera" size={16} />
                Места
              </Button>
              <Button size="sm" variant="outline">
                <Icon name="Zap" size={16} />
                Активности
              </Button>
            </div>

            {markers.map((marker) => (
              <Card key={marker.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{marker.name}</h4>
                      <p className="text-sm text-gray-600 capitalize">{marker.type}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Icon name="Navigation" size={14} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Info" size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary text-white">
              <CardContent className="p-4 text-center">
                <Icon name="Route" size={32} className="mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Построить маршрут</h4>
                <p className="text-sm text-green-100 mb-3">Создайте оптимальный маршрут между выбранными объектами</p>
                <Button variant="secondary" size="sm" className="text-primary">
                  Планировщик маршрутов
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
