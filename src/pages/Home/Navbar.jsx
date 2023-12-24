import {Logo} from '../../icons/logo'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <a href="/"><Logo/></a>
                <ul className="navbar__nav">
                    <li className="navbar__nav--item">
                        <a href="/">Новости</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/about">Контакты</a>
                    </li>
                    <li className="navbar__nav--item">
                        <a href="/products">Дислокация</a>
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