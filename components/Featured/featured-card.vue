<template>
    <article class="featured-card" ref="container">
        <a :href="link" target="_blank" class="featured-card-link" rel="noopener noreferrer">
            <div class="featured-image-wrapper">
                <img :src="imageSrc" class="featured-image" :alt="title">
            </div>
            <div class="featured-content">
                <div class="featured-header">
                    <h3 class="featured-title">{{ title }}</h3>
                    <time class="featured-date" :datetime="date">{{ date }}</time>
                </div>
                <p class="featured-description">{{ description }}</p>
            </div>
        </a>
    </article>
</template>

<script setup>

const props = defineProps({
    imageSrc: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    title: {
        type: String
    },
    link: {
        type: String
    }
})

</script>

<style scoped>
.featured-card {
    background: var(--secondary);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-width: 350px;
    max-width: 400px;
    height: 100%;
}

.featured-card-link {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
}

.featured-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 187, 255, 0.2);
}

.featured-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    display: block;
}

.featured-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.featured-card:hover .featured-image {
    transform: scale(1.05);
}

.featured-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}

.featured-header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.featured-title {
    font-family: UniSans, sans-serif;
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    color: white;
    font-weight: 700;
    line-height: 1.2;
    min-height: 3.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.featured-date {
    font-family: Montserrat, sans-serif;
    color: var(--hover_link);
    font-size: 0.875rem;
    font-weight: 600;
}

.featured-description {
    font-family: Fenix, serif;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.9rem;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 5.4rem;
}

@media (max-width: 768px) {
    .featured-card {
        min-width: 300px;
        max-width: 350px;
    }

    .featured-content {
        padding: 1.25rem;
    }

    .featured-title {
        font-size: 1.15rem;
    }

    .featured-description {
        font-size: 0.85rem;
    }
}
</style>

