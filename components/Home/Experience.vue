<template>
    <section class="z-20 relative bg-primary pt-10 pb-20 overflow-x-hidden" id="experience" aria-labelledby="experience-heading">
        <div class="flex justify-center items-center">
            <div class="w-[80vw]">
                <h2 id="experience-heading" class="sr-only">Experience</h2>
                <sectionHeader text="Experience" />
                <div class="flex mobile-layout justify-between items-center">
                    <journey />
                    <ClientOnly>
                        <skills />
                    </ClientOnly>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import journey from "./journey.vue"
import skills from "./skills.vue"

export default {
    name: "Experience",
    components:{
        journey,
        skills
    }
}
</script>

<style scoped>
.width-section {
    width: 80vw;
}

.mobile-layout {
    flex-direction: row;
}

@media (max-width: 820px) {
    .width-section {
        width: auto;
    }

    .mobile-layout {
        flex-direction: column;
    }
}
</style>
