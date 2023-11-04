<template>
    <div class="z-20 relative bg-primary pt-10 pb-10 overflow-x-hidden">
        <Titles class="pt-48 pb-48" />
        <div class="flex justify-center items-center">
            <div class="w-[80vw] max-w-[1920px]">
                <sectionHeader text="About Me" />
                <introduction />
            </div>
        </div>
    </div>
</template>

<script>
import Titles from "./titles.vue"
import Introduction from "./Introduction.vue";

export default {
    name: "about",
    components:{
        Titles,
        Introduction
    }
}
</script>