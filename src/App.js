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
function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        {<Route path="/" element={<HomePage />} />}
        {<Route path="/login" element={<LoginPage />} />}

        <Route path="/People">
          <Route index element={<ListPeople />} />
          <Route path=":PersonID" element={<PresonDetails />} />
          <Route path="Create" element={<CreatePerson Mode={"Create"} />} />
        </Route>

        <Route
          path="update/:PersonID"
          element={<CreatePerson Mode={"Update"} />}
        />

        <Route path="/Users">
          <Route index element={<ListUsersPage />} />
          <Route path=":UserID" element={<UserInfoPage />} />
          <Route
            path="ChangePassword/:UserID"
            element={<ChangePasswordPage />}
          />
          <Route path="Create" element={<CreateUser Mode={"create"} />} />
        </Route>
        <Route
          path="UpdateUser/:UserID"
          element={<CreateUser Mode={"update"} />}
        />

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
      </Routes>
    </div>
  );
}

export default App;
