import {NativeRouter, Route, Routes} from "react-router-native";
import Login from "../View/Login";
import Posts from "../View/Posts";

export const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </NativeRouter>
  );
};
