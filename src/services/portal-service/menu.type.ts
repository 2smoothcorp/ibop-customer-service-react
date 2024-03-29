export interface MenuGQL{
    id: number
    actions: string[]
    applicationId: number
    application: {
        name: string
    }
    url: string
    code: string
    menuName: string
    parentId?: number
    sequence: number
    showNewTab: boolean
    visible: boolean
    permissionActions: string[]
    subMenus: MenuGQL[]
}

/*
{
    "id": 701,
    "actions": [
        "view",
        "edit",
        "delete"
    ],
    "applicationId": 126,
    "application": {
        "name": "Customer Service"
    },
    "url": "",
    "code": "CustomerProfile",
    "menuName": "Customer Profile",
    "parentId": null,
    "sequence": 1,
    "showNewTab": false,
    "visible": true,
    "permissionActions": [
        "delete",
        "edit",
        "view"
    ],
    "subMenus": []
}
*/