import clientPromise from '../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'bson';

interface MetadataType {
  _id: ObjectId;
  name: string;
  length: number;
  license: string;
  updatedAt: string;
}

interface ProviderType {
  _id: ObjectId;
  shorthand: string;
  provider: string;
  license: string;
  project: string;
  website: string;
  available_icon_types: string[];
}

interface IconType {
  _id: ObjectId;
  name: string;
  type: string;
  svg: string;
  shorthand: string;
  updatedAt: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const type: any = req.query.type;
  const pagination: any = req.query.pagination ? req.query.pagination : 100;
  const pageNumber: any = req.query.page ? req.query.page : 1;

  try {
    const client: any = await clientPromise;

    switch (type.toLowerCase()) {
      case 'metadata':
        const metadata: MetadataType[] = await client
          .db()
          .collection('metadata')
          .find()
          .toArray();

        return res.status(200).json({ success: true, ...metadata[0] });

      case 'providers':
        const providers: ProviderType = await client
          .db()
          .collection('providers')
          .find()
          .toArray();

        return res.status(200).json({ success: true, ...providers });

      case 'icons':
        const icons: IconType = await client
          .db()
          .collection('icons')
          .find()
          .sort({ id: 1 })
          .skip((parseInt(pageNumber) - 1) * parseInt(pagination))
          .limit(parseInt(pagination))
          .toArray();

        return res.status(200).json({ success: true, icons });

      default:
        return res
          .status(404)
          .json({ success: false, message: 'Enter a valid type' });
    }
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
}
