import type { NextApiRequest, NextApiResponse } from "next";
import { Users } from "@/types";

const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Users>
) {
  // Get data from your database
  res.status(200).json(users);
}
