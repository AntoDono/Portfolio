<template>
    <div class="flex justify-center flex-row items-center gap-x-4 highlight">
        <label class="text-white text-2xl font-bogart order-2">{{ text }}</label>
        <div ref="flip-part">
            <nuxt-link :to="path">
                <img class="h-8 w-8 rotate-180" src="~/assets/images/pageselect.png" alt="select arrow"/>
            </nuxt-link>
        </div>
    </div>
</template>

<script>

export default {
    name: "navigatebutton",
    props: {
        path: {
            type: String,
            default: "/"
        },
        text: {
            type: String,
            default: "Default Placeholder"
        },
        flip: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        update(){
            if (this.flip) this.$refs['flip-part'].classList.add("flip")
            else if (!this.flip) this.$refs['flip-part'].classList.remove("flip")
        }
    },
    watch:{
        flip(){
            this.update()
        }
    },
    mounted(){
        this.update()
    }
}

</script>

<style scoped>
.flip{
    order: 2;
    transform: rotate(180deg);
}

.highlight{
    animation: 1.5s enlarge infinite ease-in-out;
}

@keyframes enlarge{
  0%{
    transform: scale(115%);
  }
  50%{
    transform: scale(100%);
  }
  100%{
    transform: scale(115%);
  }
}

</style>