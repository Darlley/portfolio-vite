import Menu from "./Menu"
import "./../styles/header.scss"
import Apresentacao from "./Apresentacao"

function Header(){
    return (
        <header className="home__header">
            <div className="home__header--filter">

                <Menu />
                <Apresentacao />
                
            </div>
        </header>
    )
}

export default Header