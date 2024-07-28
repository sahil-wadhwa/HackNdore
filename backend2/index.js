import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Item from "./Item.js";

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://kundansingh023230:Wau17LYadtnI5ULJ@cluster0.sfj0rte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));

// Populate database function
async function populateDatabase() {
  try {
    const count = await Item.countDocuments();
    if (count === 0) {
      await Item.create([
        { name: "Item 1", quantity: 10 },
        { name: "Item 2", quantity: 15 },
        { name: "Item 3", quantity: 20 }
      ]);
      console.log("Database populated with sample items");
    }
  } catch (error) {
    console.error("Error populating database:", error);
  }
}

// Endpoint to decrease quantity
app.post("/decrease-quantity-by-name/:itemName", async (req, res) => {
  try {
    const item = await Item.findOne({ name: req.params.itemName });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    if (item.quantity > 0) {
      item.quantity -= 1;
      await item.save();
      res.json({ message: "Quantity decreased", newQuantity: item.quantity });
    } else {
      res.status(400).json({ message: "Quantity already at 0" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  populateDatabase();
});
