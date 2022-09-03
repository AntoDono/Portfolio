<template>
    <div class="z-20 relative bg-primary pt-10 pb-20 overflow-x-hidden">
        <div class="flex justify-center items-center">
            <div class="w-[80vw] max-w-[1920px]">
                <sectionHeader text="Experience"/>
                <div class="flex mobile-layout justify-between items-center">
                    <journey/>
                    <skills/>
                </div>
            </div>
            <!-- <div class="width-section max-w-[1920px]">
                <div class="w-[80vw]">
                    <sectionHeader text="About Me"/>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style scoped>

.width-section{
    width: 80vw;
}

.mobile-layout{
    flex-direction: row;
}

@media (max-width: 800px){
    .width-section{
        width: auto;
    }

    .mobile-layout{
        flex-direction: column;
    }
}

</style>
