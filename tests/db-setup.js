import mongoose from "mongoose";

// Connect to test database before all tests
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

// Clean up all collections after all tests
afterAll(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
  await mongoose.connection.close();
});
