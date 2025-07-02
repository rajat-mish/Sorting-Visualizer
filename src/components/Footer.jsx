// components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="bg-gray-200 text-center text-sm text-gray-700 py-4 border-t mt-4">
    <p>
      Made with ❤️ by <strong>Rajat Mishra</strong> |
      <a
        href="https://www.linkedin.com/in/rajat-mishra-69b473257/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline ml-1"
      >
        LinkedIn
      </a>{" "}
      |{" "}
      <a
        href="https://github.com/rajat-mish"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        GitHub
      </a>
    </p>
    <p className="mt-1">© {new Date().getFullYear()} Sorting Visualizer</p>
  </footer>
);




export default Footer;
