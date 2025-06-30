import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

interface FormData {
  companyName: string;
  businessType: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  website: string;
  description: string;
  agreeToTerms: boolean;
}

const PartnerRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    businessType: "",
    contactPerson: "",
    phone: "",
    email: "",
    address: "",
    website: "",
    description: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const businessTypes = [
    "Отель",
    "Гостиница",
    "Хостел",
    "Ресторан",
    "Кафе",
    "Турбаза",
    "Санаторий",
    "Spa-центр",
    "Развлекательный центр",
    "Музей",
    "Экскурсионное бюро",
    "Другое",
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Обязательное поле";
    }

    if (!formData.businessType) {
      newErrors.businessType = "Выберите тип бизнеса";
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Обязательное поле";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Обязательное поле";
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Неверный формат телефона";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Обязательное поле";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Неверный формат email";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Обязательное поле";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "Необходимо согласие с условиями";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Очищаем ошибку при изменении поля
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Заявка отправлена!
          </h3>
          <p className="text-gray-600 mb-6">
            Мы свяжемся с вами в течение 24 часов для обсуждения условий
            сотрудничества.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                companyName: "",
                businessType: "",
                contactPerson: "",
                phone: "",
                email: "",
                address: "",
                website: "",
                description: "",
                agreeToTerms: false,
              });
            }}
            variant="outline"
          >
            Отправить еще одну заявку
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon name="Building" size={20} className="mr-2" />
          Форма регистрации партнера
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Название организации *"
                value={formData.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
                className={errors.companyName ? "border-red-500" : ""}
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName}
                </p>
              )}
            </div>

            <div>
              <Select
                value={formData.businessType}
                onValueChange={(value) =>
                  handleInputChange("businessType", value)
                }
              >
                <SelectTrigger
                  className={errors.businessType ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Тип бизнеса *" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.businessType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.businessType}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Контактное лицо *"
                value={formData.contactPerson}
                onChange={(e) =>
                  handleInputChange("contactPerson", e.target.value)
                }
                className={errors.contactPerson ? "border-red-500" : ""}
              />
              {errors.contactPerson && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactPerson}
                </p>
              )}
            </div>

            <div>
              <Input
                placeholder="Телефон *"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <Input
              placeholder="Email *"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Адрес объекта *"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Сайт (необязательно)"
              type="url"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
            />
          </div>

          <div>
            <Textarea
              placeholder="Расскажите о вашем бизнесе"
              className="min-h-32"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) =>
                handleInputChange("agreeToTerms", checked as boolean)
              }
              className={errors.agreeToTerms ? "border-red-500" : ""}
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Я согласен с{" "}
              <a href="#" className="text-primary underline">
                условиями сотрудничества
              </a>{" "}
              и{" "}
              <a href="#" className="text-primary underline">
                политикой конфиденциальности
              </a>
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
          )}

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-accent"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                Отправляем заявку...
              </>
            ) : (
              <>
                <Icon name="Send" size={16} className="mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PartnerRegistrationForm;
