export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.storyPic} alt={props.storyUser} />
            </div>
            <div className="usuario">
                {props.storyUser}
            </div>
        </div>
    );
}