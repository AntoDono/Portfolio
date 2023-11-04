<template>
    <div>
        <displayprojects />
        <!-- <ScrollProgress/> -->
    </div>
</template>

<script>
import displayprojects from '../components/Projects/displayprojects.vue';

export default {

    head() {
        return {
            htmlAttrs: {
                lang: 'en'
            },
            title: "Youwei Zhen | Projects",
            meta: [
                { name: "description", content: "Youwei Zhen - Projects" }
            ]
        }
    },
    components:{
        displayprojects
    }
}

</script>