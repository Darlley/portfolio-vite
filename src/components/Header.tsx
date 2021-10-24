import Menu from "./Menu"
import "./../styles/header.scss"

function Header(){
    return (
        <header className="home__header">
            <div className="home__header--filter">

                <Menu />
                <p>Header</p>
            </div>
        </header>
    )
}

export default Header