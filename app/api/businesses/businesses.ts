import { NextApiRequest, NextApiResponse } from "next";
import businesses from "../../data/businesses";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(businesses);
}
