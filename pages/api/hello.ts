import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "../../types/next";

const helloRequest = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === "GET") {
    res.status(201).json('Hello World');
  }
};

export default helloRequest;
