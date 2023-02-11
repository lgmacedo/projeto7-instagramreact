export default function Sugestao(props) {
    let imageDescription = props.userSuggestion + "'s profile image"
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.userSuggestionPic} alt={imageDescription} />
                <div className="texto">
                    <div className="nome">{props.userSuggestion}</div>
                    <div className="razao">{props.reasonSuggestion}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}