// populate.js
import mongoose from 'mongoose';
import Supply from './models/Supply.js'; 

mongoose.connect('mongodb+srv://kundansingh023230:M8eCPbimEQxTdvYn@cluster0.x9cidaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB');

  // Clear the existing data
  await Supply.deleteMany();

  // Create new supplies
  const supply = new Supply({
    supply_name: 'paint',
    department: 'Finance',
    batch_no: '742-74',
    quantity: 114,
    shelf_life: 16,
    reorder_level: 42,
    reorder_quantity: 93,
    cost: 397.37
  });

  // Save the supply to the database
  await supply.save();
  console.log('Data populated');

  // Close the connection
  mongoose.connection.close();
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});
