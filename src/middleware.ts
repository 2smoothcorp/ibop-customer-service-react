import { NextMiddleware, NextRequest, NextResponse } from 'next/server'
import { PortalService, VerifyTokenResponse } from './services/portal-service/portal-service';
import { Constants } from './constants/constants';
import { cookies } from 'next/headers';
import { AuthService } from './services/auth-service/auth-service';
import { ironSessionService } from './services/iron-session/iron-session';
 
export async function middleware(request: NextRequest, response: NextResponse) {
  try{
    const url = request.nextUrl;
    const response = NextResponse.next();
    const accessToken: string = request.nextUrl.searchParams.get('access_token') || '';
    const user = request.cookies.get('user')?.value

    if( accessToken && !user){
      return await processLoginWithToken(accessToken, request, response);
      /*
      const url = request.nextUrl;
      console.log(`====`, url)
      const portalService = new PortalService(`${Constants.PortalUrl}`);
      const verifyToken: VerifyTokenResponse = await portalService.verifyToken(accessToken); 
      
      console.log(`verifyToken`, verifyToken)

      if( verifyToken.status === 'error' ){
        response.cookies.delete('token');
        response.cookies.delete('user');
        return Response.redirect(new URL('/login', request.url))
      }

      const authService = new AuthService('');
      const searchUserDirectoryResponse = await authService.searchUserDirectory(accessToken, verifyToken.data.employeeId)
      if( searchUserDirectoryResponse.status.toLocaleLowerCase() === 'y' ){
        const userData = await ironSessionService.setUserDataInMiddleware(response, searchUserDirectoryResponse)
        console.log(`userData`, userData)
        url.searchParams.delete('token')
        //url.searchParams.delete('refresh_token')
        
        const _response = NextResponse.redirect(url);
        _response.cookies.set("user", userData);
        return _response
      }
      */
    }

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

async function processLoginWithToken (accessToken: string, request: NextRequest, response: NextResponse) : Promise<Response | NextResponse<any>> {
  const url = request.nextUrl;

  const portalService = new PortalService(`${Constants.PortalUrl}`);
  const verifyToken: VerifyTokenResponse = await portalService.verifyToken(accessToken); 
  
  if( verifyToken.status === 'error' ){
    response.cookies.delete('access_token');
    response.cookies.delete('user');
    return Response.redirect(new URL('/login', request.url))
  }

  const authService = new AuthService('');
  const searchUserDirectoryResponse = await authService.searchUserDirectory(accessToken, verifyToken.data.employeeId)
  if( searchUserDirectoryResponse.status.toLocaleLowerCase() === 'y' ){
    const userData = await ironSessionService.setUserDataInMiddleware(response, searchUserDirectoryResponse)
    
    url.searchParams.delete('access_token')
    url.searchParams.delete('refresh_token')
    
    const _response = NextResponse.redirect(url);
    _response.cookies.set("user", userData);
    return _response
  }

  const _response = NextResponse.next();
  return _response;
}