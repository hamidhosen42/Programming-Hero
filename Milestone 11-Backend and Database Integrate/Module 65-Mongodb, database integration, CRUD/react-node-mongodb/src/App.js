import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddUser from "./Component/AddUser/AddUser";
import Home from "./Component/Home/Home";
import UpdateUser from "./Component/UpdateUser/UpdateUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="user/add" element={<AddUser></AddUser>}></Route>
        <Route path="/update/:id" element={<UpdateUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
