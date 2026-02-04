<template>
    <div class="bg-primary flex flex-col justify-center items-center pt-28 pb-20">
        <glitch text="Featured Projects" size="10vmin" class="mb-12" />
        
        <div class="projects-container">

            <ProjectCard 
                image="scale.png" 
                image_name="Scale Diffusion 3D City Preview" 
                title="Scale Diffusion"
                subtitle="Winner Best Use of Solana @ Hack@Brown 2026 Project"
                description="Scale Diffusion transforms AI training data collection into a game. Users navigate a 3D Manhattan metropolis rendered in Three.js while watching their world transform in real-time through streaming diffusion model at 30fps—every frame pair and input feeds autonomous driving training data. Connect a Solana wallet and get paid for quality-validated data through blockchain-native rewards."
                :tags="['aws', 'decart', 'langgraph', 'langsmith', 'solana', 'three.js', 'webrtc', 'websockets']"
                link="https://devpost.com/software/scale-diffusion" 
                status="Featured Project"
                :reverse="true" />

            <ProjectCard 
                image="mirrai.jpeg" 
                image_name="MIRR.AI Virtual Try-On Preview" 
                title="MIRR.AI"
                subtitle="Winner Best Use of MongoDB Atlas @ McHacks 13"
                description="MIRR.AI is a Chrome extension that lets you virtually try on any clothing item from any online store, see yourself from 7 different angles, and get AI-powered outfit recommendations—all from a single photo. Using Gumloop's distributed inference pipeline with 7 parallel Gemini workers, we achieved 5x faster multi-view generation (21s → 4s) for real-time virtual try-on."
                :tags="['flask', 'gemini', 'google-cloud', 'mongodb', 'node.js', 'plasmo', 'react', 'typescript', 'vertex-ai']"
                link="https://devpost.com/software/fashion-mxr7e3" 
                status="Featured Project" />

            <ProjectCard 
                image="edgecart.png" 
                image_name="EdgeCart Dashboard Preview" 
                title="EdgeCart"
                subtitle="4x Winner @ HackPrinceton 2025"
                description="EdgeCart is a predictive waste intelligence system that stops food waste before it happens. Using real-time computer vision to monitor produce freshness and AI to match expiring items with customers who actually buy them, we project 19.5% reduction in grocery emissions. Won 1st Place Capital One, 1st Place Knot API, Y Combinator runner-up, and Best Use of Google Gemini API."
                :tags="['python', 'flask', 'yolo', 'pytorch', 'react', 'typescript', 'opencv', 'gemini', 'knot-api', 'xai-grok', 'websocket', 'resnet']"
                link="https://devpost.com/software/edgecart" 
                status="Featured Project"
                :reverse="true" />

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
                subtitle="2nd Place @ Cornell BigRedHacks 2025"
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
                link="https://www.linkedin.com/posts/youwei-zhen-a8b662213_just-won-1st-place-in-the-cerebras-sponsor-activity-7373426633367654400-NAPw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADYGMYsB79hwIxSdH0wKsVQ-TTrxjUW93nk"
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
