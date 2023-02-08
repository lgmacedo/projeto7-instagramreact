export default function Sugestao(props) {
    let imageDescription = props.userSuggestion + "'s profile image"
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userSuggestionPic} alt={imageDescription} />
                <div class="texto">
                    <div class="nome">{props.userSuggestion}</div>
                    <div class="razao">{props.reasonSuggestion}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}