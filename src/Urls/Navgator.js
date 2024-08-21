export default class clsNavigator
{
    static UserNavgate = {
        UsersPage:"/Users",
        CreateUserPage:"Create",
        UpdateUserPage:"Update/:UserID",
        UserDetailsPage:"Details/:UserID",
        ChangePassword:"ChangePassword/:UserID",
        UpdateUserPageWithID(ID)
        {
            return `Update/${ID}`;
        },
        UserDetailsPageWithID(ID)
        {
            return `Details/${ID}`;
        }
    }
} 