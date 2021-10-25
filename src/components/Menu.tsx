import React, { useState } from 'react';
import '../styles/menu.scss';

function Menu(){
    const [openDropdownPages, setOpenDropDownPages] = useState(false);
    const [openDropdownNotes, setOpenDropDownNotes] = useState(false);

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
                    <li className={openDropdownPages ? 'menu_item open' : 'menu_item' } >
                        <div>
                            <a href="#" onClick={() => setOpenDropDownPages(!openDropdownPages)}>
                                <span>Pages</span>
                                <i className='bx bxs-chevron-down'></i>
                            </a>
                        </div>
                        <ul className={openDropdownPages ? 'navigator_submenu dropdown' : 'navigator_submenu'}>
                            <li className="submenu_item"><a href="#">About</a></li>
                            <li className="submenu_item"><a href="#">Certifications</a></li>
                            <li className="submenu_item"><a href="#">Professional experiences</a></li>
                        </ul>
                    </li>
                    <li className={openDropdownNotes ? 'menu_item open' : 'menu_item'}>
                        <div>
                            <a href="#" onClick={() => setOpenDropDownNotes(!openDropdownNotes)}>
                                <span>Personal notes</span>
                                <i className='bx bxs-chevron-down'></i>
                            </a>
                        </div>
                        <ul className={openDropdownNotes ? 'navigator_submenu dropdown' : 'navigator_submenu'}>
                            <li className="submenu_item submenu_item--disable">Evernote</li>
                            <li className="submenu_item"><a href="#">Plano de leitura filosofia</a></li>
                            <li className="submenu_item submenu_item--disable">Notion</li>
                            <li className="submenu_item"><a href="#">Cursos de Desenvolvimento Web Fullstack</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div className="components-rigth">
                <a href="https://www.linkedin.com/in/darlleybrito/" target="_blank">
                    <i className='bx bxl-linkedin-square' ></i>
                    <span>Linkedin</span>
                </a>
                <a href="https://github.com/Darlley" target="_blank">
                    <i className='bx bxl-github'></i>
                    <span>Github</span>
                </a>
                <a href="https://github.com/Darlley" target="_blank">
                    <i className='bx bxs-file-pdf bx-tada' ></i>
                    <span>Curriculo</span>
                </a>

            </div>
        </nav>
    )
}

export default Menu