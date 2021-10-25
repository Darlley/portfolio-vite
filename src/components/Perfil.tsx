
import '../styles/perfil.scss'
const imgPerfil = new URL('../assets/perfil.jpg', import.meta.url).href

function Perfil(){
    return (
        <div className="header__apresentacao">

            <div className="apresentacao__img">
                <img src={imgPerfil} alt="" />
            </div>
            <div className="apresentacao__bio">
                <p><span className="text-filter">É um prazer ter a sua visita</span>, espero que goste!</p>
                <p>Meu nome é Darlley e sou desenvolvedor web júnior. Que tal formarmos uma parceria e construir websites e apps juntos?</p>
            </div>
        </div>
    )
}

export default Perfil