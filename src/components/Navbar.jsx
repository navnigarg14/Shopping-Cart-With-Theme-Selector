import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from "../redux/Slices/ThemeSlice";

const Navbar = ({themeStyles}) => {

  const {cart} = useSelector((state) => state);
  const theme = useSelector((state) => state.theme.theme);
  const styles = themeStyles[theme];
  const dispatch = useDispatch();

  const handleThemeSelector = (event) => {
    dispatch(setTheme(event.target.value));
  }

  return (
    <div className={`${styles.navbar}`}>
      <nav className={`flex justify-between items-center h-20 max-w-6xl mx-auto ${styles.navbar}`}>

        <NavLink to="/">
          <div className='ml-5'>
            <img src='../logo.png' alt="" className='h-14'/>
          </div>
        </NavLink>

        <div className='flex items-center font-medium mr-5 space-x-6'>

          <div>
            <select 
            name="Themes" 
            className={`${styles.selectMenu}`}
            value={theme}
            onChange={handleThemeSelector}
            >
              <option disabled>Theme</option>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
              <option value="Neon">Neon</option>
            </select>
          </div>

          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          
          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl'/>
              {
                cart.length > 0 &&
                <span
                class="absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full text-white"
                >{cart.length}</span>
              }
            </div>
          </NavLink>

        </div>
        
      </nav>
    </div>
  )
}

export default Navbar;
