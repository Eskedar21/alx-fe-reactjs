import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center'}}>
        <Link to={"/"}> Home </Link>
        <Link to={"/about"}> About </Link>
        <Link to={"/services"}> Services </Link>
        <Link to={"/contact"}> Contacts </Link>
    </nav>
  )
}

export default Navbar