import {Logo} from '../../icons/logo'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Logo/>
                <ul className="navbar__nav">
                    <li className="navbar__nav--item">
                        <a href="/">Home</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/about">About</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/products">Products</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/services">Services</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}