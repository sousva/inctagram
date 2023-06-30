import type {NextApiRequest, NextApiResponse} from 'next'
import {serverAuthAPI} from 'lib/server-api/server-api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const accessTokenValue = req.body.accessToken

        res.setHeader('Set-Cookie', [`accessToken=${accessTokenValue}`])
        res.end()
    } else if (req.method === 'GET') {
        console.log('api/set')

        try {
            return await serverAuthAPI.login({email: 'sevoyo7702@soremap.com', password: '123456'}, res)
        } catch (e) {
            console.log(e)
        }
        // res.end()
    }
}
