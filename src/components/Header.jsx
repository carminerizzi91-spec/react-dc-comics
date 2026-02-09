import logo from '../assets/dc-logo.png'

export default function Header() {
    return (
        <header className="dc-header">
            <div className="container">
                <img src={logo} alt="DC Logo" className="dc-logo" />

                <nav>
                    <ul className="dc-menu">
                        <li>CHARACTERS</li>
                        <li>COMICS</li>
                        <li>MOVIES</li>
                        <li>TV</li>
                        <li>GAMES</li>
                        <li>COLLECTIBLES</li>
                        <li>VIDEOS</li>
                        <li>FANS</li>
                        <li>NEWS</li>
                        <li>SHOP</li>
                    </ul>
                </nav>
            </div>
        </header>

    )

}