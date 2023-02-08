import Post from "./Post";

export default function Posts() {
    return (
        <div class="posts">
            <Post
                postUser="meowed"
                postUserPic="./assets/img/meowed.svg"
                postImg="./assets/img/gato-telefone.svg"
                likedBy="respondeai"
                likedByPic="./assets/img/respondeai.svg"
                likedNumber="101.523"
            />
            <Post
                postUser="barked"
                postUserPic="./assets/img/barked.svg"
                postImg="./assets/img/dog.svg"
                likedBy="adorable_animals"
                likedByPic="./assets/img/adorable_animals.svg"
                likedNumber="99.159"
            />
        </div>
    );
}