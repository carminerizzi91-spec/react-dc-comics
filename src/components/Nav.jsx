import logo from '../assets/dc-logo.png'

export const menuItems = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP"
];


export default function Nav() {
    return (
        <header className="dc-header">
            <div className="container">
                <img src={logo} alt="DC Logo" className="dc-logo" />

                <nav>
                    <ul className="dc-menu">
                        {menuItems.map(item =>(
                            <li key={item}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>

    )

}