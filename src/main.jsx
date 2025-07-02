import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Bubble from "./pages/Bubble.jsx";
import Selection from "./pages/Selection.jsx";
import Insertion from "./pages/Insertion.jsx";
import Merge from "./pages/Merge.jsx";
import Quick from "./pages/Quick.jsx";
import Shell from "./pages/Shell.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> {/* shared sidebar / topbar */}
          <Route index element={<Home />} />
          <Route path="bubble" element={<Bubble />} />
          <Route path="selection" element={<Selection />} />
          <Route path="insertion" element={<Insertion />} />
          <Route path="merge" element={<Merge />} />
          <Route path="quick" element={<Quick />} />
          <Route path="shell" element={<Shell />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);