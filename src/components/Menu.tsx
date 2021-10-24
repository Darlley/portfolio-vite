import '../styles/menu.scss'

function Menu(){
    return (
        <nav className="header_navigator">

            <div className="components-left">
                <div className="navigator_logo">
                    <a href="/">
                        <i className='bx bxl-react' ></i>
                        <span>Darlley</span>
                    </a>
                </div>
                <ul className="navigator_menu">
                    <li className="menu_item">
                        <div>
                            <a href="#">
                                <span>Pages</span>
                                <i className='bx bxs-chevron-down'></i>
                            </a>
                        </div>
                        <ul className="navigator_submenu">
                            <li className="submenu_item"><a href="#">About</a></li>
                            <li className="submenu_item"><a href="#">Certifications</a></li>
                            <li className="submenu_item"><a href="#">Professional experiences</a></li>
                        </ul>
                    </li>
                    <li className="menu_item">
                        <div>
                            <a href="#">
                                <span>Personal notes</span>
                                <i className='bx bxs-chevron-down'></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div className="components-rigth">
                <a href="">
                    <i className='bx bxl-linkedin-square' ></i>
                    <span>Linkedin</span>
                </a>
            </div>
        </nav>
    )
}

export default Menu