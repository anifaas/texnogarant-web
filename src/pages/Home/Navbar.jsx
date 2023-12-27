import {Logo} from '../../icons/logo'
import { useState } from 'react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        
        <nav className={`navbar  ${isOpen ? 'open' : ''}`}>
            <div className="navbar-container container">
                <a href="/"><Logo/></a>
                <button className='hamburger' onClick={toggleNav}>
                    nav
                </button>
                <ul className={`navbar__nav ${isOpen ? 'open' : ''}`}>
                    <li className="navbar__nav--item">
                        <a href="/news">Новости</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/offices">Контакты</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/dislocation">Дислокация</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/products">Продукция</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/contact">Easy guide</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}