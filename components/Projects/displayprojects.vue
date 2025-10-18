<template>
    <div class="bg-primary flex flex-col justify-center items-center pt-28 pb-20">
        <glitch text="Featured Projects" size="10vmin" class="mb-12" />
        
        <div class="projects-container">
            <ProjectCard 
                image="4real.jpg" 
                image_name="4Real? App Preview" 
                title="4Real?"
                subtitle="HackHarvard 2025 Project"
                description="4real is a multi-modal AI authenticity app that combats counterfeits, deepfakes, and misinformation through intelligent routing—users simply upload any image, text, or profile, and the system automatically determines whether to verify product authenticity (using computer vision, reverse image search with trust-scoring, and dynamic authentication criteria), detect AI-generated deepfakes (via a custom ResNet50 model with 89% accuracy), fact-check claims."
                :tags="['flask', 'javascript', 'lens', 'nuxt.js', 'opencv', 'python', 'pytorch', 'scikit-learn', 'serpapi', 'sqlite', 'tineye', 'typescript', 'vue.js']"
                link="https://devpost.com/software/4real" 
                status="Featured Project" />
            
            <ProjectCard 
                image="duelingo.jpg" 
                image_name="Duelingo App Preview" 
                title="Duelingo"
                subtitle="1st Place @ Cornell BigRedHacks 2025"
                description="Duelingo is a non-deterministic, AI-powered language learning game where players race in real-time multiplayer competitions to discover vocabulary by creatively combining words—with no pre-scripted paths or predetermined answers. Instead of following static, memorized content like traditional language apps, every combination is evaluated on-the-fly by AI that assesses linguistic logic and cultural understanding, requiring players to pronounce new discoveries correctly before proceeding."
                :tags="['gemini', 'dynamic-caching', 'groq', 'javascript', 'llm', 'localization', 'mongodb', 'node.js']"
                link="https://devpost.com/software/qlasses" 
                status="Featured Project"
                :reverse="true" />
            
            <ProjectCard 
                image="tempoRoll.jpg" 
                image_name="TempoRoll App Preview" 
                title="tempoRoll"
                subtitle="1st Place @ HackMIT 2025 (Cerebras Track)"
                description="tempoRoll is an AI-powered music therapy system that uses real-time EEG monitoring to help people with mental health conditions like schizophrenia, bipolar disorder, and ADHD. Our hybrid adaptation combines a real-time, in-house trained-from-scratch classification model with Cerebras's lightning-fast inference to detect brainwave imbalances and generate personalized music therapy that guides brainwaves back to baseline."
                :tags="['react', 'typescript', 'mongodb', 'nginx', 'llm', 'eeg', 'ml']" 
                link="https://botsitivity.org"
                status="Featured Project" />
            
            <ProjectCard 
                image="sammygpt.png" 
                image_name="SammyGPT Website Preview" 
                title="Project SammyGPT"
                subtitle="AI Service for Staten Island Technical High School" 
                description="Project SammyGPT provides Artificial Intelligence services for Staten Island Technical High School. It includes a Multilingual chatbot with speech recognition and synthesis that can access accurate school information in real time, and an AI Content Detection tool for teachers." 
                :tags="['nuxt', 'transformers', 'bert', 'nlp', 'vue']"
                link="https://sammygpt.netlify.app" 
                status="Featured Project"
                :reverse="true" />
            
            <ProjectCard 
                image="botsitivity.png" 
                image_name="BOTISITIVTY Website Preview" 
                title="BOTISITIVTY INC."
                subtitle="AI Therapy Non Profit Organization"
                description="A 501c3 and presidential service award certified non profit organization that aims to better mental health through artificial intelligence."
                :tags="['react', 'typescript', 'mongodb', 'nginx', 'non-profit']" 
                link="https://botsitivity.org"
                status="Featured Project" />
            
            <ProjectCard 
                image="meridian.png" 
                image_name="Meridian Prep Summer Program Database Website"
                title="Meridian Prep Summer Program Database" 
                subtitle="Online Sortable Cloud Database"
                description="An online sortable cloud database for Summer and Internship Programs, which is sponsored by Meridian Prep."
                :tags="['vue', 'nuxt3', 'mongodb', 'nginx', 'serverless']" 
                link="https://meridian-prep.netlify.app/"
                status="Featured Project"
                :reverse="true" />
            
            <ProjectCard 
                image="techtimes.png" 
                image_name="SITechtimes Website" 
                title="SITechtimes"
                subtitle="Newspaper Website"
                description="Staten Island Technical High School's newspaper website. Features a fully working publish and static site generation system."
                :tags="['vue', 'nuxt2', 'mongodb', 'typescript', 'serverless']" 
                link="https://www.sitechtimes.com/"
                status="Featured Project" />
            
            <ProjectCard 
                image="susseum.png" 
                image_name="Susseum Website Preview" 
                title="Susseum" 
                subtitle="3D Demo Website"
                description="A fun side project to demonstrate three.js's capabilities through the popular video game character Among Us."
                :tags="['vue', 'nuxt3', 'threejs', 'mongodb', 'nginx', '3d']" 
                link="https://susseum.com"
                status="Featured Project"
                :reverse="true" />
        </div>
    </div>
</template>

<script setup>
import ProjectCard from "./project-card.vue"
</script>

<style scoped>
.projects-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
</style>
