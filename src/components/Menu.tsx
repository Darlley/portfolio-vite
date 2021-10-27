import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/menu.scss";
import About from "../pages/About";

function Menu() {
  const [openDropdownPages, setOpenDropDownPages] = useState(false);
  const [openDropdownNotes, setOpenDropDownNotes] = useState(false);

  return (
    <nav className="header_navigator">
      <div className="components-left">
        <div className="navigator_logo">
          <Link to="/">
            <i className="bx bxl-react"></i>
            <span>Darlley</span>
          </Link>
        </div>
        <ul className="navigator_menu">
          <li className={openDropdownPages ? "menu_item open" : "menu_item"}>
            <div>
              <a
                href="#"
                onClick={() => setOpenDropDownPages(!openDropdownPages)}
              >
                <span>Pages</span>
                <i className="bx bxs-chevron-down"></i>
              </a>
            </div>

            <ul
              className={
                openDropdownPages
                  ? "navigator_submenu dropdown"
                  : "navigator_submenu"
              }
            >
              <li className="submenu_item">
                <Link to="/about">About</Link>
              </li>
              <li className="submenu_item">
                <a href="#">Certifications</a>
              </li>
              <li className="submenu_item">
                <a href="#">Professional experiences</a>
              </li>
            </ul>
          </li>
          <li className={openDropdownNotes ? "menu_item open" : "menu_item"}>
            <div>
              <a
                href="#"
                onClick={() => setOpenDropDownNotes(!openDropdownNotes)}
              >
                <span>Personal notes</span>
                <i className="bx bxs-chevron-down"></i>
              </a>
            </div>
            <ul
              className={
                openDropdownNotes
                  ? "navigator_submenu dropdown"
                  : "navigator_submenu"
              }
            >
              <li className="submenu_item submenu_item--disable">Notion</li>
              <li className="submenu_item">
                <a
                  href="https://www.notion.so/PROGRAMA-O-WEB-FULLSTACK-f2ab9d0f039f4965871c42f32adc9d1b"
                  target="_blank"
                >
                  Cursos de Desenvolvimento Web Fullstack
                </a>
              </li>
              <li className="submenu_item">
                <a
                  href="https://www.notion.so/DI-LOGOS-PLAT-NICOS-48e947e0c73b4d518145a4b83ab332e3"
                  target="_blank"
                >
                  Diálogos platônicos
                </a>
              </li>
              <li className="submenu_item submenu_item--disable">Evernote</li>
              <li className="submenu_item">
                <a
                  href="https://www.evernote.com/shard/s513/client/snv?noteGuid=d73e3f67-0a8f-67ae-d2ba-fa74c4e9fd15&noteKey=8bf937abec1186e7380680fb59801cae&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs513%2Fsh%2Fd73e3f67-0a8f-67ae-d2ba-fa74c4e9fd15%2F8bf937abec1186e7380680fb59801cae&title=META%2BDE%2BLEITURA"
                  target="_blank"
                >
                  Leitura ordenada de filosofia
                </a>
              </li>
              <li className="submenu_item submenu_item--disable">Outros</li>
              <li className="submenu_item">
                <a
                  href="https://github.com/Darlley/ExerciciosLivros#readme"
                  target="_blank"
                >
                  Exercícios respondidos
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="components-rigth">
        <a href="https://www.linkedin.com/in/darlleybrito/" target="_blank">
          <i className="bx bxl-linkedin-square"></i>
          <span>Linkedin</span>
        </a>
        <a href="https://github.com/Darlley" target="_blank">
          <i className="bx bxl-github"></i>
          <span>Github</span>
        </a>
        <a href="https://github.com/Darlley" target="_blank">
          <i className="bx bxs-file-pdf bx-tada"></i>
          <span>Curriculo</span>
        </a>
      </div>
    </nav>
  );
}

export default Menu;
