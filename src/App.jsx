import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import { useSelector } from "react-redux";

const App = () => {

  // bg-zinc-900
  const theme = useSelector((state) => state.theme.theme);

  const themeStyles = {
    Dark: {
      navbar: "bg-[#1c1c2a] text-[#fcfcfc]",
      button: "bg-[#1c1c2a] text-white border-gray-400 group-hover:bg-gray-700 group-hover:text-white",
      card: "bg-[#1c1c2a] text-[#fcfcfc]",
      selectMenu: "bg-[#1c1c2a]",
      background: "bg-[#121214]",
      text: "text-slate-400",
    },

    Light: {
      navbar: "bg-gray-200 text-slate-700",
      button: "bg-gray-200 hover:bg-blue-700 text-slate-700 border-slate-700 group-hover:bg-gray-700 group-hover:text-white",
      card: "bg-gray-200",
      selectMenu: "bg-gray-200",
      background: "bg-[#f7f7f5]",
    },

    Neon: {
      navbar: "bg-pink-100 text-pink-900",
      button: "bg-pink-100 hover:bg-pink-200 text-slate-700 border-pink-400 group-hover:bg-pink-200 group-hover:text-pink-400",
      card: "bg-pink-100 text-pink-950",
      selectMenu: "bg-pink-100",
      background: "bg-pink-200",
      text: "text-pink-400",
    },
  };

  return (
    <div className={`min-h-screen ${themeStyles[theme]}`}>

      
      <Navbar themeStyles={themeStyles}/>

      <Routes>
        <Route path="/" element={<Home themeStyles={themeStyles} />} />
        <Route path="/cart" element={<Cart themeStyles={themeStyles} />} />
      </Routes>

    </div>
  )
};

export default App;
