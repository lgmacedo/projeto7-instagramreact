import Sugestao from "./Sugestao";

export default function Sugestoes() {
    let sugestoes = [
        {
            userSuggestion: "bad.vibes.memes",
            userSuggestionPic: "./assets/img/bad.vibes.memes.svg",
            reasonSuggestion: "Segue você"
        },
        {
            userSuggestion: "chibirdart",
            userSuggestionPic: "./assets/img/chibirdart.svg",
            reasonSuggestion: "Segue você"
        },
        {
            userSuggestion: "razoesparaacreditar",
            userSuggestionPic: "./assets/img/razoesparaacreditar.svg",
            reasonSuggestion: "Novo no Instagram"
        },
        {
            userSuggestion: "adorable_animals",
            userSuggestionPic: "./assets/img/adorable_animals.svg",
            reasonSuggestion: "Segue você"
        },
        {
            userSuggestion: "smallcutecats",
            userSuggestionPic: "./assets/img/smallcutecats.svg",
            reasonSuggestion: "Segue você"
        }
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map(sugestao =>
                <Sugestao
                    userSuggestion={sugestao.userSuggestion}
                    userSuggestionPic={sugestao.userSuggestionPic}
                    reasonSuggestion={sugestao.reasonSuggestion}
                />
            )}
        </div>
    );
}