import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'post') {
        res.status(401).end()
    }
    res.status(200).end()
}