import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

export const initializeMongoConnection = async () => {
  const mongoConnection = await mongoose.connect(MONGO_URI as string);

  mongoose.set('debug', true);

  mongoConnection.connection.on('error', (err) => {
    console.error(err);
    process.exit(1);
  });

  return mongoConnection;
};
