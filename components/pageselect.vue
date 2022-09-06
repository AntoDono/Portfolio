<template>
    <div class="bg-primary z-40 relative flex flex-row gap-x-8 justify-center items-center">
        <!-- <div v-if="back" class="flex justify-center flex-row items-center gap-x-4">
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
        </div> -->
        <navigatebutton v-if="back" :flip="false" :text="'Main'" :path="pages[index - 1]" id="left"/>
        <navigatebutton v-if="forward" :flip="true" :text="'Projects'" :path="pages[index + 1]" id="right"/>
    </div>
</template>

<script>

export default {
    name: "pageselect",
    props:{
        route: {
            default: "/",
            type: String
        }
    },
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
    methods: {
        init() {
            this.back = true
            this.forward = true
            this.index = 0
            
            this.index = this.pages.indexOf(window.location.pathname.toLocaleLowerCase())
            if (this.index == -1) {
                this.forward = false
                this.index = 0
            }
            else if (this.index == 0) this.back = false
            else if (this.index == this.pages.length - 1) this.forward = false
        }
    },
    watch: {
        route(to, from) {
            this.init()
        }
    },
    mounted() {
        this.init()
    }
}

</script>
