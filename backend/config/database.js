import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB подключена: ${conn.connection.host}`);

    mongoose.connection.on("error", (err) => {
      console.error("Ошибка MongoDB:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB отключена");
    });

    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("MongoDB соединение закрыто из-за завершения приложения");
      process.exit(0);
    });
  } catch (error) {
    console.error("Ошибка подключения к MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
