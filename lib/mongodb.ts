import { MongoClient } from 'mongodb';

const uri: any = process.env.MONGODB_URI;
const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

let client: any;
let clientPromise: any;

declare global {
  var _mongoClientPromise: any;
}

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
