import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Search",
      title: "Удобный поиск",
      description:
        "Находите нужные объекты быстро и легко с помощью умного поиска и фильтров",
    },
    {
      icon: "Map",
      title: "Интерактивная карта",
      description: "Визуализируйте расположение объектов и планируйте маршруты",
    },
    {
      icon: "Star",
      title: "Проверенные отзывы",
      description: "Читайте честные отзывы от реальных посетителей",
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Все объекты проходят проверку качества нашими экспертами",
    },
  ];

  const team = [
    {
      name: "Анна Смирнова",
      role: "Основатель и CEO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b152213c?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Михаил Петров",
      role: "Директор по развитию",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Елена Козлова",
      role: "Менеджер по партнерству",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            О проекте ТурКаталог
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаем крупнейшую платформу для поиска и бронирования
            туристических объектов, помогая путешественникам открывать
            удивительные места, а бизнесу — находить новых клиентов.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Наша миссия
            </h2>
            <p className="text-gray-600 mb-6">
              Мы верим, что каждое путешествие должно быть особенным. Наша цель
              — сделать поиск и планирование поездок максимально простым и
              удобным, предоставляя путешественникам доступ к лучшим местам и
              услугам.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon
                  name="CheckCircle"
                  size={20}
                  className="text-primary mr-3"
                />
                <span>Более 1000 проверенных объектов</span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="CheckCircle"
                  size={20}
                  className="text-primary mr-3"
                />
                <span>50+ регионов России</span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="CheckCircle"
                  size={20}
                  className="text-primary mr-3"
                />
                <span>100,000+ довольных туристов</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
              alt="Природа России"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon as any}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-8">ТурКаталог в цифрах</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-green-200">Объектов в каталоге</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-200">Регионов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-green-200">Пользователей</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-green-200">Средний рейтинг</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
