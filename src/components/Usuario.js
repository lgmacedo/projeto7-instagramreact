import { useState } from "react";

export default function Usuario(props) {
    const [nome, setNome] = useState(props.userName);
    const [foto, setFoto] = useState(props.userPic);
    return (
        <div class="usuario">
            <img src={foto} alt="imagem de perfil" onClick={()=>{
                let novaFoto = prompt("Insira o link da nova image de perfil:");
                if (novaFoto)
                    setFoto(novaFoto);
            }}/>
            <div class="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon name="pencil" onClick={() => {
                        let novoNome = prompt("Insira o novo nome de usuário:");
                        if (novoNome)
                            setNome(novoNome);
                    }}></ion-icon>
                </span>
            </div>
        </div>
    );
}