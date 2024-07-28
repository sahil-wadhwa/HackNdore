import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getMasterRoutes from './routes/getMaster';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect("mongodb+srv://kundansingh023230:M8eCPbimEQxTdvYn@cluster0.x9cidaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("db connected");
  })
  .catch(error => {
    console.error("Error connecting to database:", error);
  });

app.use('/api/v1', getMasterRoutes);

app.listen(9002, () => {
  console.log("Server started at port 9002");
});
