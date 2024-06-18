
// const Table = require("./models/tableModel")

// const createInitialTables = async () => {
//     for (let i = 1; i <= 50; i++) {
//       const seats = Array.from({ length: 10 }, (_, idx) => ({
//         seatNumber: idx + 1,
//       }));
//       const table = new Table({ tableNumber: i, seats });
//       await table.save();
//     }
//   };
  
//   createInitialTables();

  

const asyncRetry = require('async-retry');
const mongoose = require('mongoose');
const Table = require('./models/tableModel');

// MongoDB connection setup
mongoose.connect("mongodb+srv://joof:joof@cluster0.algyjvn.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
})
  .then(() => {
    console.log('MongoDB connected');
    createInitialTables();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const createInitialTables = async () => {
  try {
    await asyncRetry(
      async () => {
        let tables = [];

        for (let i = 1; i <= 50; i++) {
          const seats = Array.from({ length: 10 }, (_, idx) => ({
            seatNumber: idx + 1,
          }));

          tables.push({ tableNumber: i, seats });
        }

        await Table.insertMany(tables);
        console.log('Initial tables created successfully!');
      },
      { retries: 3, minTimeout: 1000, maxTimeout: 3000 }
    );

    mongoose.connection.close(); // Close MongoDB connection after successful insertion
  } catch (error) {
    console.error('Error creating initial tables:', error);
  }
};
