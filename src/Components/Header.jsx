function Header () {

    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src="src/assets/Screenshot 2024-03-29 at 9.08.29 PM.png" alt="header__logo" />
            </div>
        <   div className="header__right-">
                <h1 className="header__right-text">Cold Storage Warehouse Inventory</h1>
                <nav className="header__right-navbar">
                    <span className="header__right-navbar-about">About</span>
                    <span className="header__right-navbar-how">How To Use</span>
                    <span className="header__right-navbar-help">Get Help</span>
                    <span className="header__right-navbar-user">Switch User</span>
                    <span className="header__right-navbar-log">Log in</span>
                </nav>
            </div>
        </header>

    )
}

export default Header