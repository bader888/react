import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import ListPeople from "./Pages/People.page/ListPeople";
import PresonDetails from "./Components/PersonDetails/PresonDetails";
import CreatePerson from "./Pages/People.page/AddnewPerson/CreatePerson";
import PersonDetailsWithFilter from "./Components/PersonDetails/PersonCardWithFilter";

function App() {
  return (
    <div>
      <Navbar />

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
         <Route
          path="/Users"
          element={ <PersonDetailsWithFilter />}
        />
      </Routes>
    </div>
  );
}

export default App;
