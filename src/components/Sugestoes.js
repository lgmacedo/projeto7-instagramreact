import Sugestao from "./Sugestao";

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Sugestao 
                userSuggestion = "bad.vibes.memes" 
                userSuggestionPic = "./assets/img/bad.vibes.memes.svg"
                reasonSuggestion = "Segue você"    
            />

            <Sugestao 
                userSuggestion = "chibirdart" 
                userSuggestionPic = "./assets/img/chibirdart.svg"
                reasonSuggestion = "Segue você"    
            />

            <Sugestao 
                userSuggestion = "razoesparaacreditar" 
                userSuggestionPic = "./assets/img/razoesparaacreditar.svg"
                reasonSuggestion = "Novo no Instagram"    
            />

            <Sugestao 
                userSuggestion = "adorable_animals" 
                userSuggestionPic = "./assets/img/adorable_animals.svg"
                reasonSuggestion = "Segue você"    
            />

            <Sugestao 
                userSuggestion = "smallcutecats" 
                userSuggestionPic = "./assets/img/smallcutecats.svg"
                reasonSuggestion = "Segue você"    
            />

        </div>
    );
}