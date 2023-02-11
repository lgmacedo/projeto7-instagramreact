import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function SideBar() {
    let User = {userName: "catanacomics", userPic: "./assets/img/catanacomics.svg"}
    return (
        <div className="sidebar">
            <Usuario userName={User.userName} userPic={User.userPic} />
            <Sugestoes />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}