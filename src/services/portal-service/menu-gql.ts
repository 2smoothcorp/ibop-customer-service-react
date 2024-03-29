import { Constants } from "@/constants/constants"

export const menuGQL = {
    query: `query menus($skip: Int, $take: Int, $where: MenuFilterInput, $order: [MenuSortInput!]) {
        menus(skip: $skip, take: $take, where: $where, order: $order) {
            totalCount
            items {
                id
                actions
                applicationId
                application { name }
                url
                code
                menuName
                parentId
                sequence
                showNewTab
                visible
                permissionActions
                subMenus {
                    id
                    actions
                    applicationId
                    code
                    menuName
                    parentId
                    sequence
                    showNewTab
                    url
                    visible
                    permissionActions
                    subMenus {
                        id
                        actions
                        applicationId
                        code
                        menuName
                        parentId
                        sequence
                        showNewTab
                        url
                        visible
                        permissionActions
                        subMenus {
                            id
                            actions
                            applicationId
                            code
                            menuName
                            parentId
                            sequence
                            showNewTab
                            url
                            visible
                            permissionActions
                        }
                    }
                }
            }
        }
    }`,
    variable: {
        "skip": 0,
        "take": 999,
        "where": {
            "and": [
                { "application": { "code": { "eq": Constants.AppCode } } },
                { "parentId": { "eq": null } },
                { "actions": { "contains": "view" } }
            ]
        },
        "order": [{ "sequence": "ASC" }]
    }
}
