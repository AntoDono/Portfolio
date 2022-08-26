<template>
    <div class="flex justify-center flex-row items-center gap-x-4">
        <label class="text-white font-bogart order-2">{{ text }}</label>
        <div ref="flip-part">
            <nuxt-link :to="path">
                <img class="h-8 w-8 rotate-180" src="~/assets/images/pageselect.png" />
            </nuxt-link>
        </div>
    </div>
</template>

<script>

export default {
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
    mounted(){
        if (this.flip) this.$refs['flip-part'].classList.add("flip")
    }
}

</script>

<style scoped>
.flip{
    order: 2;
    transform: rotate(180deg);
}

</style>