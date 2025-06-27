
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Главный офис',
      details: ['г. Москва, ул. Тверская, 15', 'БЦ "Центральный", офис 501']
    },
    {
      icon: 'Phone',
      title: 'Телефоны',
      details: ['+7 (495) 123-45-67', '+7 (800) 555-0123 (бесплатно)']
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['info@turkatalog.ru', 'support@turkatalog.ru']
    },
    {
      icon: 'Clock',
      title: 'Время работы',
      details: ['Пн-Пт: 9:00 - 18:00', 'Сб-Вс: 10:00 - 16:00']
    }
  ];

  const socialLinks = [
    { icon: 'MessageCircle', name: 'Telegram', handle: '@turkatalog' },
    { icon: 'Instagram', name: 'Instagram', handle: '@turkatalog_official' },
    { icon: 'Facebook', name: 'Facebook', handle: 'TurKatalog' },
    { icon: 'Twitter', name: 'Twitter', handle: '@turkatalog' }
  ];

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Тверская, 15',
      phone: '+7 (495) 123-45-67',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop'
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский пр., 28',
      phone: '+7 (812) 987-65-43',
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c52a?w=300&h=200&fit=crop'
    },
    {
      city: 'Сочи',
      address: 'ул. Курортный пр., 105',
      phone: '+7 (862) 555-01-23',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь и ответить на ваши вопросы.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={info.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageSquare" size={24} className="mr-2 text-primary" />
                  Напишите нам
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" type="tel" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Тема обращения" />
                <Textarea placeholder="Ваше сообщение" className="min-h-32" />
                <Button className="w-full bg-primary hover:bg-accent">
                  <Icon name="Send" size={16} />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div>
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <div className="h-full min-h-80 bg-gradient-to-br from-green-200 to-green-400 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20.5V18H0v-2h20v2.5L18 20l2-.5z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                  <div className="text-center text-white">
                    <Icon name="MapPin" size={64} className="mx-auto mb-4 opacity-80" />
                    <h3 className="text-xl font-semibold mb-2">Наш офис на карте</h3>
                    <p className="text-green-100">г. Москва, ул. Тверская, 15</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regional Offices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наши офисы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src={office.image} 
                    alt={office.city}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{office.city}</h3>
                    <p className="text-gray-600 mb-2 flex items-center">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      {office.address}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Icon name="Phone" size={16} className="mr-2" />
                      {office.phone}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Следите за нами</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer p-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Icon name={social.icon as any} size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{social.name}</h4>
                  <p className="text-sm text-gray-600">{social.handle}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Banner */}
        <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
          <Icon name="Headphones" size={48} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Нужна помощь?</h2>
          <p className="text-green-100 mb-6">
            Наша служба поддержки работает 24/7 и готова помочь вам в любое время
          </p>
          <Button variant="secondary" size="lg" className="text-primary">
            <Icon name="MessageCircle" size={20} />
            Чат с поддержкой
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
