<template>
    <div class="z-20 relative bg-primary pt-10 pb-20 overflow-x-hidden" id="experience">
        <div class="flex justify-center items-center">
            <div class="w-[80vw]">
                <sectionHeader text="Experience" />
                <div class="flex mobile-layout justify-between items-center">
                    <journey />
                    <ClientOnly>
                        <skills />
                    </ClientOnly>
                </div>
            </div>
        </div>
    </div>
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
