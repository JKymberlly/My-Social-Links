import github from "./img/github.png"
import instagram from "./img/instagram.png"
import linkedin from "./img/linkedin.png"
import gmail from "./img/gmail.png"
import "./Links.css"
function Links(){
    return(
        <div>
            <div className="container2">
                <a href="https://github.com/JKymberlly" target="_blank" rel="noreferrer"><img src={github} alt="github"/></a>
                <a href="https://www.instagram.com/eajhenny._" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/></a>
                <a href="https://www.linkedin.com/in/jhennyfer-kymberlly/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>
                <a href="mailto:jhenniferkymberllysilva@gmail.com" target="_blank" rel="noreferrer"><img src={gmail} alt="gmail" href/></a>
            </div>
        </div>
    );
}
export default Links