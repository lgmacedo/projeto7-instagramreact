import { useState } from "react";

export default function Usuario(props) {
    const [nome, setNome] = useState(props.userName);
    const [foto, setFoto] = useState(props.userPic);
    return (
        <div className="usuario">
            <img src={foto} alt="imagem de perfil" data-test="profile-image" onClick={()=>{
                let novaFoto = prompt("Insira o link da nova imagem de perfil:");
                if (novaFoto)
                    setFoto(novaFoto);
            }}/>
            <div className="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon name="pencil" data-test="edit-name" onClick={() => {
                        let novoNome = prompt("Insira o novo nome de usuário:");
                        if (novoNome)
                            setNome(novoNome);
                    }}></ion-icon>
                </span>
            </div>
        </div>
    );
}