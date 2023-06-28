import type {NextApiRequest, NextApiResponse} from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', ['nazar=nisdsdsdnja'])
    res.end('ok')
}
