import { ResetTvRounded } from "@mui/icons-material";
import LocalDriverLicenseApplicationPage from "../Pages/Applications.page/ManageLocalDriverLicenseApplications.Page/LocalDriverLicenseApplicationDetails/LocalDriverLicenseApplicationPage";

export default class clsNavigator {
  static UserNavgate = {
    UsersPage: "/Users",
    CreateUserPage: "Create",
    UpdateUserPage: "Update/:UserID",
    UserDetailsPage: "Details/:UserID",
    ChangePassword: "ChangePassword/:UserID",
    UpdateUserPageWithID(ID) {
      return `Update/${ID}`;
    },
    UserDetailsPageWithID(ID) {
      return `Details/${ID}`;
    },
  };

  static PeopleNavgate = {
    ListPeoplePage: "People",
    CreatePersonPage: "Create",
    UpdatePersonPage: "Update/:PersonID",
    ShowUserDetailsPage: "Details/:PersonID",
    UpdatePersonPageWithID(PersonID) {
      return `Update/${PersonID}`;
    },
    ShowPersonDetailsWithID(PersonID) {
      return `Details/${PersonID}`;
    },
  };

  static Applications = {
    Applications: "Applications",
    DriverLicenseServices: "DriverLicenseServices",
    ManageLocalDriverLicenseApplications:
      "ManageLocalDriverLicenseApplications",
    LocalDriverLicenseApplicationDetails: "localDriverLicenseAppDetails",
    LocalDriverLicenseApplicationPageWithID(ldaID) {
      return `localDriverLicenseAppDetails/${ldaID}`;
    },
  };
}
