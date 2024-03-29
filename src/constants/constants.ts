export class Constants{
    public static AppCode: string = 'CustomerService';
    public static AppName: string = 'Customer Service';
    public static readonly APIUrl: string = process.env.BASE_URL || '';
    public static readonly VaultUrl: string = process.env.VAULT_URL || '';
    public static readonly VaultUsername: string = process.env.VAULT_USERNAME || '';
    public static readonly VaultPassword: string = process.env.VAULT_PASSWORD || '';
    public static readonly PortalUrl: string = process.env.PORTAL_URL || '';
}