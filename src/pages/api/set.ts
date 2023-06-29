import type {NextApiRequest, NextApiResponse} from 'next'
import nookies from 'nookies'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const accessTokenValue = req.body.accessToken

        res.setHeader('Set-Cookie', [`accessToken=${accessTokenValue}`])
        res.end()
    } else if (req.method === 'GET') {
        res.end()
    }
}
