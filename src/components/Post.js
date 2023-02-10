import { useState } from "react";

export default function Post(props) {
    let imageDescription = props.postUser + "'s post image";
    const [salvo, setSalvo] = useState("bookmark-outline");
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.postUserPic} alt={props.postUser} />
                    {props.postUser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImg} alt={imageDescription} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvo} onClick={()=>{
                            if(salvo === "bookmark-outline"){
                                setSalvo("bookmark");
                            }else{
                                setSalvo("bookmark-outline");
                            }
                        }}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likedByPic} alt={props.likedBy} />
                    <div class="texto">
                        Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.likedNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}