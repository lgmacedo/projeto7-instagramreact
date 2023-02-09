import Story from "./Story";

export default function Stories() {
    let stories = [
        {
            storyUser: "9gag", storyPic: "./assets/img/9gag.svg"
        },
        {
            storyUser: "meowed", storyPic: "./assets/img/meowed.svg"
        },
        {   
            storyUser: "barked", storyPic: "./assets/img/barked.svg"
        },
        {   
            storyUser: "nathanwpylestrangeplanet", storyPic: "./assets/img/nathanwpylestrangeplanet.svg"
        },
        {   
            storyUser: "wawawicomics", storyPic: "./assets/img/wawawicomics.svg"
        },
        {   
            storyUser: "respondeai", storyPic: "./assets/img/respondeai.svg"
        },
        {   
            storyUser: "filomoderna", storyPic: "./assets/img/filomoderna.svg"
        },
        {   
            storyUser: "memeriagourmet", storyPic: "./assets/img/memeriagourmet.svg"
        }
    ]
    return (
        <div class="stories">
            {stories.map(story=>
                <Story storyUser={story.storyUser} storyPic={story.storyPic} />
            )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}