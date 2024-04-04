import styles from "styles/header.module.css";

export default function Header() {
    return (
        <header className="header">
            <a>Okada Miki</a>
            <ul className="headernav">
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Works</a>
                </li>
                <li>
                    <a>Photos</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
            </ul>
        </header>
    );
}
