import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const OwnerRegistrationModal = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    inn: "",
    address: "",
    countryCode: "+7",
    phone: "",
    email: "",
    website: "",
  });

  const countries = [
    { code: "+7", name: "Россия", flag: "🇷🇺" },
    { code: "+1", name: "США", flag: "🇺🇸" },
    { code: "+44", name: "Великобритания", flag: "🇬🇧" },
    { code: "+49", name: "Германия", flag: "🇩🇪" },
    { code: "+33", name: "Франция", flag: "🇫🇷" },
    { code: "+39", name: "Италия", flag: "🇮🇹" },
    { code: "+34", name: "Испания", flag: "🇪🇸" },
    { code: "+86", name: "Китай", flag: "🇨🇳" },
    { code: "+81", name: "Япония", flag: "🇯🇵" },
    { code: "+82", name: "Южная Корея", flag: "🇰🇷" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Данные формы:", formData);
    // Здесь будет логика отправки данных
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-primary hover:bg-accent text-white px-8 py-3 text-lg"
        >
          <Icon name="Plus" size={20} className="mr-2" />
          Добавить объект
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Регистрация владельца объекта
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Наименование компании */}
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-sm font-medium">
              Наименование компании *
            </Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              placeholder="ООО 'Название компании'"
              required
            />
          </div>

          {/* ИНН */}
          <div className="space-y-2">
            <Label htmlFor="inn" className="text-sm font-medium">
              ИНН *
            </Label>
            <Input
              id="inn"
              value={formData.inn}
              onChange={(e) => handleInputChange("inn", e.target.value)}
              placeholder="1234567890"
              maxLength={12}
              required
            />
          </div>

          {/* Адрес объекта */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium">
              Адрес объекта *
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="г. Москва, ул. Примерная, д. 1"
              required
            />
          </div>

          {/* Мобильный телефон */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Мобильный телефон *</Label>
            <div className="flex gap-2">
              <Select
                value={formData.countryCode}
                onValueChange={(value) =>
                  handleInputChange("countryCode", value)
                }
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <div className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.code}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="901 234-56-78"
                className="flex-1"
                required
              />
            </div>
          </div>

          {/* Электронная почта */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Электронная почта *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="example@company.ru"
              required
            />
          </div>

          {/* Сайт объекта */}
          <div className="space-y-2">
            <Label htmlFor="website" className="text-sm font-medium">
              Сайт объекта
            </Label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              placeholder="https://example.com"
            />
          </div>

          {/* Кнопки */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-primary hover:bg-accent">
              <Icon name="Send" size={16} className="mr-2" />
              Отправить заявку
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OwnerRegistrationModal;
