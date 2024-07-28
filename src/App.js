import { Route, Routes } from "react-router-dom";
import ListPeople from "./Pages/People.page/ListPeople";
import PresonDetails from "./Components/PersonDetails/PresonDetails";
import CreatePerson from "./Pages/People.page/AddnewPerson/CreatePerson";
import MainHeader from "./Components/MainHeader/MainHeader";
import ListUsersPage from "./Pages/User.page/ListUsers/ListUsersPage"; 
import UserInfoPage from "./Pages/User.page/UserInfo/UserInfoPage"; 
function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
