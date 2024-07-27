import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import{ masterModel as Master} from "./models/masterModel";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb+srv://kundansingh023230:fIQmPe4wUaikjgbK@cluster0.d4okzyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("db connected");
  })
  .catch(error => {
    console.error("Error connecting to database:", error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});


const User = mongoose.model("User", userSchema);

const SECRET_KEY = "mZ8KcP3xR9yJ2vF6qL7tN4wX5bA1hG0sE";

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email: email }).exec();
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: "Login Successful", user: user, token: token });
      } else {
        res.status(400).json({ message: "Password didn't match" });
      }
    } else {
      res.status(400).json({ message: "User not registered" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: "Successfully registered" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer TOKEN
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

app.get("/protected", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/master", verifyToken, async (req, res) => {
  try {
    const master = await Master.findById(req._id).exec();
    res.json(master);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(9002, () => {
  console.log("Server started at port 9002");
});