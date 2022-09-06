<template>
    <div class="flex container-flex">
        <div class="h-full flex items-center z-30 description max-w-[500px]">
            <div class="font-fenix text-white relative flex flex-col gap-y-3 move">
                <p class="move-text text-accent1">{{status}}</p>
                <h2 class="text-[3.5vmin] move-text font-uni glitch">{{title}}</h2>
                <div class="description-bg p-8 rounded">
                    <p>{{description}}</p>
                </div>
                <div class="flex flex-row move-justify gap-x-3">
                    <p v-for="tag in tags" :key="tag" class="move-text font-fenix">{{tag[0].toUpperCase() + tag.substring(1, tag.length)}}</p>
                </div>
                <div class="flex w-full move-justify">
                    <a :href="link" target="_blank" aria-label="link to project">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="flex justify-center pic-container">
            <a :href="link" target="_blank" class="z-20 image">
                <div>
                    <img :src="`/projects/${image}`" class="text-white pic rounded-lg" :alt="image_name">
                </div>
            </a>
        </div>
    </div>
</template>


<script>

export default{
    name: "project-left",
    props: {
        image: {
            type: String,
            default: "Image Name"
        },
        image_name: {
            type: String,
            default: "Image Alt Name"
        },
        title: {
            type: String,
            default: "Title"
        },
        description: {
            type: String,
            default: "Description"
        },
        tags: {
            type: Array,
            default: ['Tags here']
        },
        status: {
            type: String,
            default: "Main Project"
        },
        link: {
            type: String,
            default: "/"
        },
    }
}

</script>

<style scoped>

.glitch {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
}

svg{
    fill: white;
    transition: all ease 0.2s;
}

svg:hover{
    fill: var(--hover_link);
    cursor: pointer;
}

.move{
    left: 5rem
}

.move-justify{
    justify-content: start;
}

.move-text{
    text-align: left;
}
.pic{
    transition: all ease 0.3s;
    height: 20em;
    width: 30em;
}

.pic:hover{
    transform: scale(1.05);
}

.description-bg{
    background-color: var(--secondary);
}

.container-flex{
    flex-direction: row;
}

@media (max-width: 900px){
    .move{
        left: 0%;
    }

    .move-justify{
        justify-content: start;
    }

    .move-text{
        text-align: left;
    }

    .description-bg{
        background-color: transparent;
        padding: 1rem 0 1rem 0;
    }
    .pic{
        height: 12em;
        width: 20em;
    }
    .pic-container{
        padding-bottom: 1rem;
    }

    .pic:hover{
        transform: none;
    }

    .container-flex{
        flex-direction: column;
    }

    .description {
        order: 1;
        padding: 0 2em 0 2em;
    }

}

</style>