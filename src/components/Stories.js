import Story from "./Story";

export default function Stories() {
    return (
        <div class="stories">
            <Story storyUser="9gag" storyPic="./assets/img/9gag.svg" />

            <Story storyUser="meowed" storyPic="./assets/img/meowed.svg" />

            <Story storyUser="barked" storyPic="./assets/img/barked.svg" />

            <Story storyUser="nathanwpylestrangeplanet" storyPic="./assets/img/nathanwpylestrangeplanet.svg" />

            <Story storyUser="wawawicomics" storyPic="./assets/img/wawawicomics.svg" />

            <Story storyUser="respondeai" storyPic="./assets/img/respondeai.svg" />

            <Story storyUser="filomoderna" storyPic="./assets/img/filomoderna.svg" />

            <Story storyUser="memeriagourmet" storyPic="./assets/img/memeriagourmet.svg" />

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}