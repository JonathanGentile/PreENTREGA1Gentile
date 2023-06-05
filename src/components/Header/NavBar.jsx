import "./NavBar.scss"

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src="./images/logo.png" alt="logo" />

                <nav className="header__nav">
                    <a className="header__link" href="#">Inicio</a>
                    <a className="header__link" href="#">Comercio</a>
                    <a className="header__link" href="#">Hogar</a>
                </nav>
            </div>
        </header>
    )
}

export default Header