import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <NavLink className="text-lg font-semibold mr-3" to="/">Home</NavLink>

        <NavLink className="text-lg font-semibold mr-3" to="/register">Register</NavLink>

        <NavLink className="text-lg font-semibold mr-3" to="/login">Login</NavLink>
    </>

    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl hidden md:block">Login Authentication</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Explore</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;