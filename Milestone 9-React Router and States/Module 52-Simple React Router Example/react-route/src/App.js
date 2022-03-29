import "./App.css";
import Home from "./Componet/Home/Home";
import Friends from "./Componet/Friends/Friends";
import About from "./Componet/About/About";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./Componet/NotFound/NotFound";
import Header from "./Componet/Header/Header";
import FriendDetail from "./Componet/FriendDetail/FriendDetail";
import Posts from "./Componet/Posts/Posts";
import PostDetail from "./Componet/PostDetail/PostDetail";
import Countries from "./Componet/Countries/Countries";
import CountryDetail from "./Componet/CountryDetail/CountryDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend" element={<Friends />} />
        <Route path="/friend/:friendId" element={<FriendDetail />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<PostDetail />}></Route>
        </Route>
        <Route path="/countries" element={<Countries />} />
        <Route
          path="/country/:countryName"
          element={<CountryDetail></CountryDetail>}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> //must be lower down
      </Routes>
    </div>
  );
}

export default App;
