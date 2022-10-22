import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="border-b-2 border-black text-center text-3xl font-bold">
      <NavLink to="/" className="mr-5 hover:text-teal-800">
        首頁
      </NavLink>
      <NavLink to="/about" className="hover:text-teal-800">
        關於
      </NavLink>
    </div>
  )
}
export default Header
