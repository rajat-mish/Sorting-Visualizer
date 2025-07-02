import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "HOME", icon: "🏠" },
  { path: "/bubble", label: "Bubble Sort" },
  { path: "/selection", label: "Selection Sort" },
  { path: "/insertion", label: "Insertion Sort" },
  { path: "/merge", label: "Merge Sort" },
  { path: "/quick", label: "Quick Sort" },
  { path: "/shell", label: "Shell Sort" },
];

const Sidebar = () => {
  return (
    <aside className="w-48 bg-gray-200 py-6 px-4 space-y-2">
      {links.map(({ path, label, icon }) => (
       <NavLink
  key={path}
  to={path}
  end={path === "/"}
  className={({ isActive }) =>
    `block px-2 py-2 rounded transition duration-200 ease-in-out
     ${isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-600 hover:text-white"}`
  }
>
  {icon && <span className="mr-2">{icon}</span>}
  {label}
</NavLink>

      ))}
    </aside>
  );
};

export default Sidebar;