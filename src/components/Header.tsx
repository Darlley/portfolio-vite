import Menu from "./Menu"
import "./../styles/header.scss"

function Header(){
    return (
        <header className="home__header">
            <div className="home__header--filter">

                <Menu />
                
            </div>
        </header>
    )
}

export default Header