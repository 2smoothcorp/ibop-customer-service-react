import { Constants } from "@/constants/constants";
import { PortalService } from "@/services/portal-service/portal-service";
import { VaultService } from "@/services/vault-service/vault-service";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Permission } from "@/services/auth-service/auth-service";

const baseUrl = Constants.APIUrl

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
    
    const permissionResp = await fetch(`${baseUrl}/api/auth/permission`, { headers: { Cookie: cookies().toString() }, cache: 'no-cache' })
    const permissionJson = await permissionResp.json();

    const portalService = new PortalService(`${Constants.PortalUrl}/graphql`);
    const portalMenu = await portalService.getPortalMenu();
    
    const menuWithFilterPermission = filterMenuByViewPermission(portalMenu, permissionJson);
    return NextResponse.json( menuWithFilterPermission );
}

const filterMenuByViewPermission = (portalMenus: any, permission: Permission[]) => {
    return portalMenus.filter( (portalMenu) => {
        const foundPermission = permission.filter( p => p.menuCode === portalMenu.code) || []
        if( foundPermission.length === 0 ) return false
        if( portalMenu.permissionActions.includes( foundPermission[0].menuAction ) ){
            
            if( portalMenu.subMenus.length > 0 ){
                portalMenu.subMenus = filterMenuByViewPermission(portalMenu.subMenus, permission)
            }
            
            return true
        }
        return false
    } )
}