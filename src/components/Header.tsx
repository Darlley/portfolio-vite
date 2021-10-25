import Menu from "./Menu"
import "./../styles/header.scss"
import Perfil from "./Perfil"

function Header(){
    return (
        <header className="home__header">
            <div className="home__header--filter">

                <Menu />
                <Perfil />
                
            </div>
        </header>
    )
}

export default Header