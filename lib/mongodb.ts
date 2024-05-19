// eslint-disable-next-line import/no-extraneous-dependencies
import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URL) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri.toString());
const clientPromise = client.connect();

export default clientPromise;
