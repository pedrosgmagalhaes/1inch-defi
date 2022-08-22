import type { NextApiRequest, NextApiResponse } from 'next'
import useSWR from 'swr'
import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import API from "../../utils/services/api"

type Data = {
    Message: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const body = JSON.parse(req.body.body)
    const { tokenIn, tokenOut, amount, slippage } = body;
    res.status(200).json({ Message: {tokenIn, tokenOut, amount, slippage} })
}
