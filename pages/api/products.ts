// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const data = req.body;
  // const client = await MongoClient.connect('mongodb+srv://DanielaArgumanis:daniela296@cluster0.hlpeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  res.status(200).json({ name: 'John Doe' })
}
