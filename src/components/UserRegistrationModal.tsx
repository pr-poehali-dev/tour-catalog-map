import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const UserRegistrationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const errors = [];
    if (password.length < 8) {
      errors.push("минимум 8 символов");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("одна заглавная буква");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("одна строчная буква");
    }
    if (!/\d/.test(password)) {
      errors.push("одна цифра");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("один специальный символ");
    }
    return errors;
  };

  const getPasswordStrength = (password: string) => {
    const passwordErrors = validatePassword(password);
    if (password.length === 0) return { strength: 0, label: "", color: "" };

    const strength = Math.max(0, 5 - passwordErrors.length);

    if (strength <= 2)
      return { strength, label: "Слабый", color: "text-red-500" };
    if (strength <= 3)
      return { strength, label: "Средний", color: "text-yellow-500" };
    if (strength <= 4)
      return { strength, label: "Хороший", color: "text-blue-500" };
    return { strength, label: "Отличный", color: "text-green-500" };
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Валидация email
    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Неверный формат email";
    }

    // Валидация пароля
    if (!formData.password) {
      newErrors.password = "Пароль обязателен";
    } else {
      const passwordErrors = validatePassword(formData.password);
      if (passwordErrors.length > 0) {
        newErrors.password = `Пароль должен содержать: ${passwordErrors.join(", ")}`;
      }
    }

    // Валидация подтверждения пароля
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Подтвердите пароль";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Имитация регистрации
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsRegistered(true);
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setIsRegistered(false);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(resetForm, 300); // Даем время для закрытия анимации
  };

  const passwordStrength = getPasswordStrength(formData.password);

  if (isRegistered) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white px-8 py-3 text-lg"
          >
            <Icon name="UserPlus" size={20} className="mr-2" />
            Регистрация
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Регистрация успешна!
            </h3>
            <p className="text-gray-600 mb-6">
              На ваш email отправлено письмо с подтверждением. Проверьте почту и
              следуйте инструкциям.
            </p>
            <div className="flex gap-2">
              <Button onClick={handleClose} className="flex-1">
                Закрыть
              </Button>
              <Button
                onClick={() => setIsRegistered(false)}
                variant="outline"
                className="flex-1"
              >
                Новая регистрация
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-primary hover:bg-accent text-white px-8 py-3 text-lg"
        >
          <Icon name="UserPlus" size={20} className="mr-2" />
          Регистрация
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Icon name="UserPlus" size={20} className="mr-2" />
            Регистрация аккаунта
          </DialogTitle>
        </DialogHeader>

        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Введите пароль"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className={errors.password ? "border-red-500" : ""}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Icon
                      name={showPassword ? "EyeOff" : "Eye"}
                      size={16}
                      className="text-gray-500"
                    />
                  </Button>
                </div>

                {/* Индикатор сложности пароля */}
                {formData.password && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Сложность:</span>
                      <span
                        className={`text-sm font-medium ${passwordStrength.color}`}
                      >
                        {passwordStrength.label}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          passwordStrength.strength <= 2
                            ? "bg-red-500"
                            : passwordStrength.strength <= 3
                              ? "bg-yellow-500"
                              : passwordStrength.strength <= 4
                                ? "bg-blue-500"
                                : "bg-green-500"
                        }`}
                        style={{
                          width: `${(passwordStrength.strength / 5) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                )}

                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Подтверждение пароля *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Повторите пароль"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className={errors.confirmPassword ? "border-red-500" : ""}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Icon
                      name={showConfirmPassword ? "EyeOff" : "Eye"}
                      size={16}
                      className="text-gray-500"
                    />
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Отмена
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-accent"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon
                        name="Loader2"
                        size={16}
                        className="mr-2 animate-spin"
                      />
                      Регистрация...
                    </>
                  ) : (
                    <>
                      <Icon name="UserPlus" size={16} className="mr-2" />
                      Зарегистрироваться
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default UserRegistrationModal;
