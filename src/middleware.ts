import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {PATH} from 'common/constant/PATH'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/')) {
        return NextResponse.redirect(new URL(PATH.LOGIN, request.url))
    }
}
export const config = {matcher: ['/']}
