export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.userPic} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{props.userName}</strong>
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}