import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/mainpage/mainpage";
import PublishingPage from "./components/publishingpage/publishingpage";
import ViewingPage from "./components/viewingpage/viewingpage";
import SignIn from "./components/signin/signin";
import LogIn from "./components/login/login";
import LogOut from "./components/logout/logout";
import Header from "./components/header/header";
import SignUp from "./components/signup/signup";
import CreatePost from "./components/createpost/createpost";
import CreateAccount from "./components/createaccount/createaccount";
import { Route, Routes } from "react-router-dom";

function App() {
  // wake me up when its all over
  // when im wiser and im older
  return (
    <div>
      <Routes>
        <Route path="/" element={<ViewingPage />} />
        <Route path="/viewing" element={<ViewingPage />} />
        <Route path="/seeposts" element={<PublishingPage />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </div>
  );
}

export default App;
