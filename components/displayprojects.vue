<template>
    <div class="bg-primary flex flex-col justify-center items-center gap-y-20 pt-28 pb-20">
        <glitch text="Projects" size="15vmin"/>
        <project-right image="botsitivity.png" image_name="BOTISITIVTY Website Preview" title="BOTISITIVTY INC."
            description="A 501c3 and presidential service award certified non profit organization that aims to better mental health through artifical intelligence."
            :tags="['react', 'typescript', 'mongodb', 'nginx']" link="https://botsitivity.org"
            status="Featured Project" />
        <project-left image="privacysavior.png" image_name="PrivacySavior Website Preview" title="PrivacySavior LLC."
            description="A Patent Pending product and Limited Liability Company that provides privacy protection for its users' computer devices. Product is demonstrated on the National Saunders Competition."
            :tags="['vue', 'nuxt2', 'mongodb', 'gsap', 'cloudinary']" link="https://privacysavior.com" status="Featured Project" />
        <project-right image="meridian.png" image_name="Meridian Prep Summer Program Database Website"
            title="Meridian Prep Summer Program Database"
            description="An online sortable cloud database for Summer and Internship Programs, which is sponsored by Meridian Prep."
            :tags="['vue', 'nuxt3', 'mongodb', 'nginx', 'serverless']" link="https://meridian-prep.netlify.app/"
            status="Featured Project" />
        <project-left image="techtimes.png" image_name="SITechtimes Website" title="SITechtimes"
            description="Staten Island Technical High School's newspaper website. Features a fully working publish and static site generation system."
            :tags="['vue', 'nuxt2', 'mongodb', 'typescript', 'serverless']" link="https://www.sitechtimes.com/"
            status="Featured Project" />
        <project-right image="susseum.png" image_name="Susseum Website Preview" title="Susseum"
            description="A fun side project to demonstrate three.js's capabilites through the popular video game character Amongus."
            :tags="['vue', 'nuxt3', 'threejs', 'mongodb', 'nginx']" link="https://susseum.com" status="Featured Project" />
    </div>
</template>

<script>
export default {
    name: "displayprojects",
}
</script>
