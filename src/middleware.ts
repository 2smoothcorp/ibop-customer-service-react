import { NextRequest, NextResponse } from 'next/server'
import { PortalService, VerifyTokenResponse } from './services/portal-service/portal-service';
import { Constants } from './constants/constants';
import { cookies } from 'next/headers';
 
export async function middleware(request: NextRequest, response: NextResponse) {
  try{
    /*
    console.log(`getAll`, cookies().getAll())
    console.log(`cookies().get(user)`, cookies().get('user')?.value)
    console.log(`request.cookies.get('user')?.value`, request.cookies.get('user')?.value)
    */

    const _token: string = request.nextUrl.searchParams.get('token') || '';
    //console.log(`_token`, _token)
    if( _token ){

      const portalService = new PortalService(`${Constants.PortalUrl}`);
      const verifyToken: VerifyTokenResponse = await portalService.verifyToken(_token);
      //console.log(`verifyToken`, verifyToken)
      if( verifyToken.status === 'error' ){
        return Response.redirect(new URL('/login', request.url))
      }

      const response = NextResponse.next();
      response.cookies.set({ name: "token", value: _token });
      response.cookies.set({ name: "user", value: verifyToken.data.employeeId });
      //cookies().set('user', verifyToken.data.employeeId)

      return response;
    }

    const user = request.cookies.get('user')?.value
    if (!user && !request.nextUrl.pathname.startsWith('/login')) {
      return Response.redirect(new URL('/login', request.url))
    }
    
  }catch(e){
    console.error(e)
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}