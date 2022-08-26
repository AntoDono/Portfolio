<template>
    <div class="bg-primary z-20 relative flex flex-row gap-x-8 justify-center items-center">
        <div v-if="back" class="flex justify-center flex-row items-center gap-x-4">
            <a href="something">
                <img class="h-8 w-8 rotate-180" src="~/assets/images/pageselect.png"/>
            </a>
            <label class="text-white font-bogart">Main</label>
        </div>
        <div v-if="forward" class="flex justify-center flex-row items-center gap-x-4">
            <label class="text-white font-bogart">Projects</label>
            <a href="something">
                <img class="h-8 w-8" src="~/assets/images/pageselect.png"/>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            pages: [
                '/',
                'projects'
            ],
            back: true,
            forward: true
        }
    },
    mounted(){
        let path = window.location.pathname
        if (this.pages.indexOf(path.toLowerCase()) == 0) this.back = false
        else if (this.pages.indexOf(path.toLowerCase()) == this.pages.length) this.forward = false
    }
}

</script>
