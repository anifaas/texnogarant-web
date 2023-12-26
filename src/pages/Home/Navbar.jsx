import {Logo} from '../../icons/logo'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <a href="/"><Logo/></a>
                <ul className="navbar__nav">
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