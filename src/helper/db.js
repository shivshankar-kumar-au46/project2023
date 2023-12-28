import mongoose from "mongoose";

export const connectDB = async () => {
try {
    const { connection } = await mongoose.connect(env.process.MONGO_DB_URL, {
        dbName: "Work_manager",
    });
console.log("DB connected successfully")
console.log(connection)
} catch (error) {
    console.log(error)
}
}