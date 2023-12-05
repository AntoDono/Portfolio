<template>
    <div class="bg-secondary p-4 flex rounded-lg gap-x-4 gap-y-4 featured-card" ref="container">
        <div class="featured-card-inner-flex">
            <img :src="imageSrc" class="w-[20rem] rounded-xl">
        </div>
        <div class="flex flex-col gap-y-4 featured-card-inner-flex featuerd-card-text">
            <div>
                <h2 class="text-[3.5vmin] move-text font-uni glitch">{{ title }}</h2>
                <h3 class="font-montserrat text-white text-base">{{ date }}</h3>
            </div>
            <div>
                <p class="font-bogart text-white text-sm">{{ description }}</p>
            </div>
            <div class="featured-link">
                <a :href="link" target="_blank" aria-label="link to project" class="flex gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path
                        d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                    </svg>
                    <p class="text-white underline">Click here to visit source</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    imageSrc: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    title: {
        type: String
    },
    link: {
        type: String
    }
})

</script>

<style scoped>
.glitch {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
}

.featured-card {
    width: 45%;
    flex-direction: row;
}

.featured-link{
    width: 100%;
    display: flex;
    justify-content: left;
}

.featured-card-inner-flex {
    display: flex;
    justify-content: left;
}

.featuerd-card-text {
    text-align: left;
    width: 70%;
}

@media (max-width:1600px) {
    .featured-card {
        width: 90%
    }
}

@media (max-width:700px) {

    .featured-card {
        flex-direction: column;
        justify-content: center;
    }

    .featured-card-inner-flex {
        display: flex;
        justify-content: center;
    }

    .featuerd-card-text {
        text-align: center;
        width: 100%;
    }

    .featured-link{
        width: 100%;
        display: flex;
        justify-content: center;
    }
}
</style>

