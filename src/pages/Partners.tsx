import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Partners = () => {
  const benefits = [
    {
      icon: "TrendingUp",
      title: "Увеличение продаж",
      description:
        "В среднем наши партнеры увеличивают продажи на 40% в первые 3 месяца",
    },
    {
      icon: "Users",
      title: "Новые клиенты",
      description: "Доступ к базе из 100,000+ активных пользователей платформы",
    },
    {
      icon: "BarChart",
      title: "Аналитика",
      description: "Подробная статистика просмотров, бронирований и отзывов",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description:
        "Персональный менеджер поможет настроить и оптимизировать профиль",
    },
  ];

  const successStories = [
    {
      name: 'Отель "Лесная Сказка"',
      result: "+60% бронирований",
      quote:
        "Благодаря ТурКаталогу мы смогли привлечь туристов из других регионов",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
    },
    {
      name: 'Ресторан "Домашний Очаг"',
      result: "+45% посещений",
      quote:
        "Платформа помогла нам значительно увеличить поток клиентов в будние дни",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
    },
    {
      name: 'Турбаза "Горный Воздух"',
      result: "+80% загрузки",
      quote: "Теперь у нас почти нет свободных мест в летний сезон!",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Станьте нашим партнером
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Присоединяйтесь к крупнейшей туристической платформе и увеличьте
            свои продажи. Мы поможем вам привлечь новых клиентов и развить
            бизнес.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-white px-8 py-3 text-lg"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Добавить объект
            </Button>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={benefit.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Истории успеха
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {story.result}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {story.name}
                    </h3>
                    <p className="text-gray-600 italic">"{story.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Подайте заявку
            </h2>
            <p className="text-gray-600 mb-8">
              Заполните форму, и наш менеджер свяжется с вами в течение 24 часов
              для обсуждения условий сотрудничества.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Форма регистрации партнера</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Название организации" />
                  <Input placeholder="Тип бизнеса" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Контактное лицо" />
                  <Input placeholder="Телефон" type="tel" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Адрес объекта" />
                <Textarea
                  placeholder="Расскажите о вашем бизнесе"
                  className="min-h-32"
                />
                <Button className="w-full bg-primary hover:bg-accent">
                  <Icon name="Send" size={16} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">Есть вопросы?</h3>
                <p className="text-green-100 mb-4">
                  Свяжитесь с нашим менеджером по партнерству
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon name="Phone" size={16} className="mr-2" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={16} className="mr-2" />
                    <span>partners@turkatalog.ru</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Условия партнерства
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-primary mr-2 mt-0.5"
                    />
                    <span>Размещение бесплатно первые 3 месяца</span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-primary mr-2 mt-0.5"
                    />
                    <span>Комиссия от 5% с каждого бронирования</span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-primary mr-2 mt-0.5"
                    />
                    <span>Персональный менеджер</span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-primary mr-2 mt-0.5"
                    />
                    <span>Еженедельные отчеты</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
