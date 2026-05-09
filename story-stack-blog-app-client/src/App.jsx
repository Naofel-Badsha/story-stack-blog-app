import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


function App() {
const [darkMode, setDarkMode] = useState(true);

useEffect(() => {
  const saved = localStorage.getItem("theme");

  if (saved === "light") {
    document.documentElement.classList.remove("dark");
    setDarkMode(false);
  } else {
    document.documentElement.classList.add("dark");
    setDarkMode(true);
  }
}, []);

const toggleTheme = () => {
  const html = document.documentElement;

  if (darkMode) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setDarkMode(false);
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setDarkMode(true);
  }
};

  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white">
      <nav className="flex justify-between p-6 border-b dark:border-slate-700">
        <h1 className="text-2xl font-bold">Portfolio</h1>

        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-gray-200 dark:bg-slate-700 cursor-pointer"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </nav>

      <div className="p-10">
        <h2 className="text-5xl font-bold">Hello Preo 👋</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Tailwind v4 Dark Mode Working
        </p>
      </div>
    </div>
  );
}

export default App;