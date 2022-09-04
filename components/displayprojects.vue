<template>
    <div class="bg-primary flex flex-col justify-center items-center gap-y-20 pt-20 pb-20">
        <project-right 
                class="mt-20"
                image="privacysavior.png" 
                image_name="PrivacySavior Website Preview"
                title="PrivacySavior LLC."
                description="A Patent Pending product and Limited Liability Company that provides privacy protection for its users."
                :tags="['vue','nuxt3','mongodb','nginx']"
                link="https://privacysavior.com"
            />
            <project-left 
                image="botsitivity.png" 
                image_name="BOTISITIVTY Website Preview"
                title="BOTISITIVTY INC."
                description="A 501c3 and presidential service award certified non profit organization that aims to better mental health through artifical intelligence."
                :tags="['vue','nuxt3','mongodb','nginx']"
                link="https://botsitivity.org"
            />
            <project-right 
                image="susseum.png" 
                image_name="Susseum Website Preview"
                title="Susseum"
                description="Sussy Amongus? The new and right way to live. Change your lifestyle now!"
                :tags="['vue','nuxt3','mongodb','nginx']"
                link="https://susseum.com"
            />
    </div>
</template>

<script>
    export default {
        name: "displayprojects",
    }
</script>
