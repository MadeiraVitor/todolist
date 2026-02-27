import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

const TodoHeader = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    

  return (
    <header className="flex justify-between mb-10 pt-7 items-center">
      <h1 className="text-white text-4xl sm:text-[2.5rem] font-bold tracking-[1rem]">
        TODO
      </h1>

      <button className="cursor-pointer" onClick={toggleTheme}>
        <img className="w-8 h-8" src={`${themeConfig[theme].icon}`} alt="alternar tema" />
      </button>
    </header>
  );
};

export default TodoHeader;
