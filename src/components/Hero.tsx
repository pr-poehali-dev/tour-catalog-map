import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Hero = () => {
  const categories = [
    {
      title: "Отели",
      description: "Комфортное проживание",
      icon: "Building2",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
      count: "150+",
    },
    {
      title: "Рестораны",
      description: "Местная кухня",
      icon: "UtensilsCrossed",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
      count: "200+",
    },
    {
      title: "Достопримечательности",
      description: "Уникальные места",
      icon: "Camera",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop",
      count: "300+",
    },
    {
      title: "Развлечения",
      description: "Активный отдых",
      icon: "Zap",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&h=200&fit=crop",
      count: "100+",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Откройте для себя
            <span className="block text-green-200">удивительные места</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Исследуйте тысячи объектов по всей России и СНГ: от уютных отелей до
            экстремальных развлечений, от исторических достопримечательностей до
            современных ресторанов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-green-50"
            >
              <Link to="/catalog">
                <Icon name="Search" size={20} />
                Исследовать каталог
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/map">
                <Icon name="Map" size={20} />
                Открыть карту
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные категории
            </h2>
            <p className="text-lg text-gray-600">Найдите то, что ищете</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-primary">
                      {category.count}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        <Icon
                          name={category.icon as any}
                          size={24}
                          className="text-primary"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action for Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Присоединяйтесь к нам!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Станьте частью крупнейшего туристического каталога региона и
            привлекайте больше клиентов
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-accent">
            <Link to="/partners">
              <Icon name="Star" size={20} />
              Стать партнером
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
