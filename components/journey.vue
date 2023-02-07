<template>
    <div class="h-auto bg-primary flex justify-center items-start z-30 relative overflow-x-hidden"
        id="about">
        <div class="flex justify-between items-center w-[80vw] flex-wrap border-2 border-white pt-10 pb-10">
            <div class="w-[500px] basis-auto" ref="description">
                <h2 class="text-white text-[3rem] font-bogart text-left">My Journey.</h2>
                <p class="text-white font-montserrat">
                    Over the years, I had experience creating websites and programs for businesses, nonprofits or for
                    fun.
                </p>
                <p class="text-white font-montserrat pt-4">
                    I have acquired a lot of knowledge on the different languages and applications of
                    modern programming and web developing.
                    A majority of those skills are for web development and competitive programming, but I have also
                    dabbled in the fields of machine learning and artificial intelligence.
                </p>
                <p class="text-white font-montserrat pt-4">
                    Here is a list of all the languages and applications that I currently know:
                </p>
                <div class="flex justify-around w-full">
                    <ul class="text-white font-montserrat list-disc columns-2 gap-x-24 pt-10">
                        <li>Python</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>C#</li>
                        <li>C++</li>
                        <li>R</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Vue.js</li>
                        <li>Nuxt.js</li>
                        <li>React.js</li>
                        <li>MongoDB</li>
                        <li>Nginx</li>
                        <li>Typescript</li>
                        <li>Graphql</li>
                        <li>Ubuntu</li>
                        <li>Linux</li>
                        <li>Git/Github</li>
                        <li>Docker</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "journey",
    }
</script>

<style scoped>
.mobile {
    justify-content: space-between;
}

@media (max-width:800px) {
    .mobile {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>