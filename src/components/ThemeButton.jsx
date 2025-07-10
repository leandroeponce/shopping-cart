import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { LuSun, LuMoon } from "react-icons/lu"


const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("Tema actual:", theme)

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white  px-4 py-2 rounded hover:cursor-pointer"
    >
      {theme === "light" ? <LuMoon size={20}/> : <LuSun size={20}/>}
    </button>
  );
}; 

export default ThemeButton;
