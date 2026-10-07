import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kancharanan8_db_user:Aqm6j8IdeRnCnrqF@cluster0.bluxee7.mongodb.net/QuizApp')
    .then(() => {
        console.log('Database connected')
    })
}