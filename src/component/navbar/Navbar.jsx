

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            {/* Navbar Start */}
            <div className="navbar-start w-8/12 mx-auto">
                {/* Mobile Menu Button */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {/* Mobile Dropdown Menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <details>
                                <summary>Solutions</summary>
                                <ul className="p-2">
                                    <li><a href="#">AnyCaaS</a></li>
                                    <li><a href="#">AnyBaaS</a></li>
                                    <li><a href="#">AnyPaaS</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li>
                            <details>
                                <summary>Language</summary>
                                <ul className="p-2">
                                    <li><a href="#">EN (English)</a></li>
                                    <li><a href="#">TH (Thai)</a></li>
                                    <li><a href="#">ID (Bahasa Indonesia)</a></li>
                                    <li><a href="#">TW (Traditional Chinese)</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            {/* Navbar Center (Desktop) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Solutions</summary>
                            <ul className="p-2">
                                <li><a href="#">AnyCaaS</a></li>
                                <li><a href="#">AnyBaaS</a></li>
                                <li><a href="#">AnyPaaS</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About Us</a></li>
                    <li>
                        <details>
                            <summary>Language</summary>
                            <ul className="p-2">
                                <li><a href="#">EN (English)</a></li>
                                <li><a href="#">TH (Thai)</a></li>
                                <li><a href="#">ID (Bahasa Indonesia)</a></li>
                                <li><a href="#">TW (Traditional Chinese)</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                <a className="btn">Contact Us</a>
            </div>
        </div>
    );
};

export default Navbar;
