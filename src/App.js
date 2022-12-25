import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./feature/auth/login/Login";
import NotFound from "./feature/notfound/NotFound";
import DetailTask from "./components/detailTask/DetailTask";
import PrivateRoutes from "./config/utils/PrivateRoutes";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/listtask" element={<Dashboard />} />
          <Route path="/detailtask" element={<DetailTask />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
