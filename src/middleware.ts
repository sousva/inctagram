import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {PATH} from 'app/path'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/')) {
        return NextResponse.redirect(new URL(PATH.LOGIN, request.url))
    }

    // if (request.nextUrl.pathname.startsWith('/dashboard')) {
    //     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
    // }
}
export const config = {matcher: ['/']}
