import Link from "next/link"
import CreateButton from "./CreateButton"
import SearchBar from "./SearchBar"
import ThemeButton from "./ThemeButton"

const Navbar = () => {
 return (
  <nav className="navbar">
   <div className="navbar-start">
    <Link href={"/"} className="btn btn-ghost">Contacts</Link>
   </div>
   <div className="navbar-end">
    <ThemeButton />
   </div>
  </nav>
 )
}

export default Navbar