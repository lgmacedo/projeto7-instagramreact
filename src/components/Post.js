import { useState } from "react";

export default function Post(props) {
    let imageDescription = props.postUser + "'s post image";
    const [salvo, setSalvo] = useState("bookmark-outline");
    const [likedPost, setLikedPost] = useState("heart-outline");
    const [likedColor, setLikedColor] = useState("");
    const [likedNumber, setLikedNumber] = useState(props.likedNumber);
    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.postUserPic} alt={props.postUser} />
                    {props.postUser}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.postImg} alt={imageDescription} data-test="post-image" onDoubleClick={() => {
                    if (likedPost === "heart-outline") {
                        setLikedPost("heart");
                        setLikedColor("vermelho");
                        setLikedNumber(likedNumber + 1);
                    }
                }} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={likedPost} class={likedColor} data-test="like-post" onClick={() => {
                            if (likedPost === "heart-outline") {
                                setLikedPost("heart");
                                setLikedColor("vermelho");
                                setLikedNumber(likedNumber + 1);
                            } else {
                                setLikedPost("heart-outline");
                                setLikedColor("");
                                setLikedNumber(likedNumber - 1);
                            }
                        }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvo} data-test="save-post" onClick={() => {
                            if (salvo === "bookmark-outline") {
                                setSalvo("bookmark");
                            } else {
                                setSalvo("bookmark-outline");
                            }
                        }}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likedByPic} alt={props.likedBy} />
                    <div className="texto">
                        Curtido por <strong>{props.likedBy}</strong> e <strong>outras <span data-test="likes-number">{likedNumber}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}