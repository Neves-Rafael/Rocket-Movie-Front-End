import { Routes, Route } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { Preview } from "../pages/Preview";
import { Films } from "../pages/Films";
import { CreateMovie } from "../pages/CreateMovie";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Films />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/create" element={<CreateMovie />} />
    </Routes>
  );
}
