import Menu from "../components/Menu"
import '../styles/about.scss'

function About(){
    console.log(location.pathname)
    return (
        <main className="about">
            <Menu name="about" />
            <h1>About</h1>
        </main>
    )
}

export default About