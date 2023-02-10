import Post from "./Post";

export default function Posts() {
    let posts = [
        {
            postUser: "atletico",
            postUserPic: "./assets/img/user-galo.jpg",
            postImg: "./assets/img/post-ronaldinho.jpeg",
            likedBy: "ronaldinho",
            likedByPic: "./assets/img/user-ronaldinho.jpg",
            likedNumber: 13922013
        },
        {
            postUser: "meowed",
            postUserPic: "./assets/img/meowed.svg",
            postImg: "./assets/img/gato-telefone.svg",
            likedBy: "respondeai",
            likedByPic: "./assets/img/respondeai.svg",
            likedNumber: 101523
        },
        {
            postUser: "barked",
            postUserPic: "./assets/img/barked.svg",
            postImg: "./assets/img/dog.svg",
            likedBy: "adorable_animals",
            likedByPic: "./assets/img/adorable_animals.svg",
            likedNumber: 99159
        }

    ];
    return (
        <div class="posts">
            {posts.map(post => (
                <Post postUser={post.postUser}
                    postUserPic={post.postUserPic}
                    postImg={post.postImg}
                    likedBy={post.likedBy}
                    likedByPic={post.likedByPic}
                    likedNumber={post.likedNumber} />
            ))}
        </div>
    );
}