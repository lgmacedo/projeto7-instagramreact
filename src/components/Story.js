export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.storyPic} alt={props.storyUser} />
            </div>
            <div class="usuario">
                {props.storyUser}
            </div>
        </div>
    );
}