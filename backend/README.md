# Registration Backend

Backend API для регистрации пользователей с использованием Node.js, Express и MongoDB.

## Технологии

- **Node.js** - JavaScript runtime
- **Express** - Веб-фреймворк
- **MongoDB** - База данных
- **Mongoose** - ODM для MongoDB
- **bcrypt** - Хеширование паролей
- **express-validator** - Валидация данных
- **helmet** - Безопасность
- **cors** - Cross-Origin Resource Sharing
- **express-rate-limit** - Ограничение запросов

## Установка и запуск

### 1. Установка зависимостей

```bash
cd backend
npm install
```

### 2. Настройка окружения

Создайте файл `.env` на основе `.env.example`:

```bash
cp .env.example .env
```

Настройте переменные окружения:

```env
MONGODB_URI=mongodb://localhost:27017/registration_db
PORT=3001
NODE_ENV=development
BCRYPT_SALT_ROUNDS=12
```

### 3. Запуск MongoDB

Убедитесь, что MongoDB запущена локально или используйте MongoDB Atlas.

### 4. Запуск сервера

```bash
# Разработка
npm run dev

# Продакшн
npm start
```

## API Endpoints

### Регистрация пользователя

**POST** `/api/auth/register`

**Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "confirmPassword": "SecurePass123!"
}
```

**Response Success (201):**
```json
{
  "success": true,
  "message": "Пользователь успешно зарегистрирован",
  "data": {
    "id": "64f1b2c3d4e5f6a7b8c9d0e1",
    "email": "user@example.com",
    "isActivated": false,
    "createdAt": "2023-09-01T12:00:00.000Z"
  }
}
```

**Response Error (400/409):**
```json
{
  "success": false,
  "message": "Ошибка валидации",
  "errors": [
    {
      "field": "email",
      "message": "Неверный формат email"
    }
  ]
}
```

### Проверка существования email

**GET** `/api/auth/check-email/:email`

**Response:**
```json
{
  "success": true,
  "exists": true
}
```

### Health Check

**GET** `/api/health`

**Response:**
```json
{
  "success": true,
  "message": "Сервер работает",
  "timestamp": "2023-09-01T12:00:00.000Z",
  "environment": "development"
}
```

## Модель пользователя

```javascript
{
  email: String,        // Уникальный email
  passwordHash: String, // Хешированный пароль
  isActivated: Boolean, // Статус активации (по умолчанию false)
  createdAt: Date,      // Дата создания
  updatedAt: Date       // Дата обновления
}
```

## Безопасность

- Хеширование паролей с помощью bcrypt (12 раундов)
- Валидация входных данных
- Rate limiting для предотвращения спама
- CORS настройки
- Helmet для базовой безопасности
- Обработка ошибок без раскрытия системной информации

## Требования к паролю

- Минимум 8 символов
- Хотя бы одна заглавная буква (A-Z)
- Хотя бы одна строчная буква (a-z)
- Хотя бы одна цифра (0-9)
- Хотя бы один специальный символ (!@#$%^&*(),.?":{}|<>)