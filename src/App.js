import { Route, Routes } from "react-router-dom";
import ListPeople from "./Pages/People.page/ListPeople";
import PresonDetails from "./Components/PersonDetails/PresonDetails";
import CreatePerson from "./Pages/People.page/AddnewPerson/CreatePerson";
import ListUsersPage from "./Pages/User.page/ListUsers/ListUsersPage";
import UserInfoPage from "./Pages/User.page/UserInfo/UserInfoPage";
import CreateUser from "./Pages/User.page/AddUser/CreateUser";
import LoginPage from "./Pages/Login.page/Login.page";
import ChangePasswordPage from "./Pages/User.page/ChnagePassword/ChangePassword.page";
import HomePage from "./Pages/Home.page/HomePage";
import MainHeader from "./Components/MainHeader/MainHeader";
import ListApplicationTypesPage from "./Pages/ApplicationsType.page/ListApplicationTypes.page/ListApplicationTypes.page";
import ApplicationTypeInfoPage from "./Pages/ApplicationsType.page/ApplicationTypeInfo.page/ApplicationTypeInfo.page";
import CreateUpdateApplicationTypePage from "./Pages/ApplicationsType.page/CreateUpdateApplicationType.page/CreateUpdateApplicationTypePage";
import ListApplications from "./Pages/Applications.page/ListApplicationPage/ListApplications";
import CreateUpdateApplication from "./Pages/Applications.page/CreateApplicationPage/CreateUpdateApplication";
import ApplicationInfo from "./Pages/Applications.page/ApplicationInfoPage/ApplicationInfo";
import ListTypePage from "./Pages/TestType.page/ListTestTypePage/ListTypePage";
import UpdateTestTypePage from "./Pages/TestType.page/UpdateTestTypePage/UpdateTestTypePage";
import clsNavigator from "./Urls/Navgator";  

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        {<Route path="/" element={<HomePage />} />}
        {<Route path="/login" element={<LoginPage />} />}

        <Route path={clsNavigator.PeopleNavgate.ListPeoplePage}>
          <Route index element={<ListPeople />} />
          <Route
            path={clsNavigator.PeopleNavgate.ShowUserDetailsPage}
            element={<PresonDetails />}
          />
          <Route
            path={clsNavigator.PeopleNavgate.CreatePersonPage}
            element={<CreatePerson Mode={"Create"} />}
          />
          <Route
            path={clsNavigator.PeopleNavgate.UpdatePersonPage}
            element={<CreatePerson Mode={"Update"} />}
          />
        </Route>

        <Route path={clsNavigator.UserNavgate.UsersPage}>
          <Route index element={<ListUsersPage />} />
          <Route
            path={clsNavigator.UserNavgate.UserDetailsPage}
            element={<UserInfoPage />}
          />
          <Route
            path="ChangePassword/:UserID"
            element={<ChangePasswordPage />}
          />
          <Route path="Create" element={<CreateUser Mode={"create"} />} />
          <Route
            path="Update/:UserID"
            element={<CreateUser Mode={"update"} />}
          />
        </Route>

        <Route path="/ApplicationTypes">
          <Route index element={<ListApplicationTypesPage />} />
          <Route path="Details/:ID" element={<ApplicationTypeInfoPage />} />
          <Route
            path="CreateApplicationType"
            element={<CreateUpdateApplicationTypePage mode={"create"} />}
          />
        </Route>
        <Route
          path="UpdateApplicationType/:ID"
          element={<CreateUpdateApplicationTypePage mode={"update"} />}
        />

        <Route path="/Applications">
          <Route index element={<ListApplications />} />
          <Route path="ApplicationDetails/:ID" element={<ApplicationInfo />} />
          <Route
            path="Create"
            element={<CreateUpdateApplication mode={"create"} />}
          />
        </Route>
        <Route
          path="UpdateApplication/:ID"
          element={<CreateUpdateApplication mode={"update"} />}
        />

        <Route path="/TestTypes">
          <Route index element={<ListTypePage />} />
          <Route path="update/:ID" element={<UpdateTestTypePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
