import { Routes, Route } from "react-router-dom";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Home from "./page/Home/Home";
import ListEpisode from "./page/ListEpisode/ListEpisode";
import { useEffect, useState } from "react";
import WatchFilm from "./page/WatchFilm/WatchFilm";

function App() {
  const [user, setUser] = useState();
  const [isSignUp, setIsSignUp] = useState(false);
  const signUp = () => {
    const user = {
      userId: localStorage.getItem("userId"),
      userName: localStorage.getItem("userName"),
      avatar: localStorage.getItem("avatar"),
    }
    setUser(user);
  }
  useEffect(() => {
    signUp();
  }, [isSignUp]);
  return (
    <Routes>
      <Route path="/" element={<Home user={user} setIsSignUp={setIsSignUp} />} />
      <Route path="/:page" element={<Home user={user} setIsSignUp={setIsSignUp} />} />
      <Route path="/ListEpisode" element={<ListEpisode user={user} setIsSignUp={setIsSignUp} />} />
      <Route path="/ListEpisode/:filmName" element={<ListEpisode user={user} setIsSignUp={setIsSignUp} />} />
      <Route path="/WatchFilm/:filmName" element={<WatchFilm user={user} setIsSignUp={setIsSignUp} />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login setIsSignUp={setIsSignUp} />} />
    </Routes>
  );
}

export default App;
