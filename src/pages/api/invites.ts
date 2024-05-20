/* eslint-disable import/no-extraneous-dependencies */
import clientPromise from 'lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { setTimeout } from 'timers';

const DB_NAME = 'invitation';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await clientPromise;
  const db = client.db(DB_NAME);

  setTimeout(() => {}, 1000);

  switch (req.method) {
    case 'POST': {
      const bodyObject = req.body;
      const invitee = await db.collection('invitees').insertOne(bodyObject);
      res.status(201).json({
        acknowledged: invitee.acknowledged,
      });
      break;
    }
    case 'GET': {
      const allInvitees = await db.collection('invitees').find({}).toArray();
      res.status(200).json(allInvitees);
      break;
    }
    default: {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
    }
  }
}
