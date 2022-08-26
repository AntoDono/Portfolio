<template>
    <div class="bg-primary z-20 relative flex flex-row gap-x-8 justify-center items-center">
        <div v-if="back" class="flex justify-center flex-row items-center gap-x-4">
            <a :href="pages[index-1]">
                <img class="h-8 w-8 rotate-180" src="~/assets/images/pageselect.png"/>
            </a>
            <label class="text-white font-bogart">Main</label>
        </div>
        <div v-if="forward" class="flex justify-center flex-row items-center gap-x-4">
            <label class="text-white font-bogart">Projects</label>
            <a :href="pages[index+1]">
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
                '/projects'
            ],
            back: true,
            forward: true,
            index: 0
        }
    },
    mounted(){
        this.index = this.pages.indexOf(window.location.pathname.toLocaleLowerCase())
        if (this.index==-1){
            this.forward = false
            this.index = 0
        }
        else if (this.index == 0) this.back = false
        else if (this.index == this.pages.length - 1) this.forward = false
    }
}

</script>
