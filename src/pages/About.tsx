import Menu from "../components/Menu";
import TituloPagina from "../components/TituloPágina";
import '../styles/about.scss';

function About(){
    console.log(location.pathname)
    return (
        <div className="about">
            <div>
                <Menu name="about" />
            </div>
            <TituloPagina />
        </div>
    )
}

export default About