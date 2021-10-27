import "../styles/apresentacao.scss"

import Typewriter from 'typewriter-effect';


function Apresentacao() {

    return (
        <div className="header__apresentacao">
            <div className="apresentacao__bio">

                <p>É um prazer ter a sua visita, espero que goste! Meu nome é</p>

                <Typewriter
                    options={{
                        strings: ['Darlley Brasil de Brito Furtado'],
                        autoStart: true,
                        loop: true,
                    }}
                />  
                
                <p>Sou desenvolvedor web, que tal formarmos uma parceria e construir websites e apps juntos?</p>
          
            </div>
        </div>
    );
}

export default Apresentacao;