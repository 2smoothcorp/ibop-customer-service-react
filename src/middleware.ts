import { NextRequest, NextResponse } from 'next/server'
import { PortalService } from './services/portal-service/portal-service';
import { Constants } from './constants/constants';
 
export async function middleware(request: NextRequest, response: NextResponse) {
  try{

    const _token: string = request.nextUrl.searchParams.get('token') || '';
    console.log(`_token`, _token)
    if( _token ){

      const portalService = new PortalService(`${Constants.PortalUrl}`);
      const verifyToken = await portalService.verifyToken(_token);

      const response = NextResponse.next();
      

      response.cookies.set({ name: "user", value: _token });
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