import { NextResponse } from 'next/server'

// // This function can be marked `async` if using `await` inside
export function middleware(request) {
      let token=request.cookies.get("token")
      // console.log(token)
      if(!token){  
        return NextResponse.redirect(new URL('/Login&Signup', request.url))  
      }
}
 
// // See "Matching Paths" below to learn more
export const config = {
  matcher: ['/blogs','/blogs/:path*'],
}



