<template>
    <div class="project-card w-full max-w-6xl mx-auto">
        <div class="project-content" :class="{ 'reverse': reverse }">
            <!-- Header Section -->
            <div class="project-header mobile-top">
                <p class="project-status">{{status}}</p>
                <h2 class="project-title">{{title}}</h2>
                <h3 class="project-subtitle">{{subtitle}}</h3>
            </div>

            <!-- Image Section -->
            <div class="project-image-section mobile-middle">
                <div class="project-image-wrapper">
                    <img :src="`/projects/${image}`" class="project-image" :alt="image_name">
                </div>
                <div class="project-link">
                    <a :href="link" target="_blank" class="link-button">
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Description Section -->
            <div class="project-details mobile-bottom">
                <div class="project-description">
                    <p>{{description}}</p>
                </div>

                <div class="project-tags">
                    <span v-for="(tag, index) in tags" :key="tag" class="tag" :class="getTagClass(index)">
                        {{tag[0].toUpperCase() + tag.substring(1, tag.length)}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "project-card",
    props: {
        image: {
            type: String,
            default: "Image Name"
        },
        image_name: {
            type: String,
            default: "Image Alt Name"
        },
        title: {
            type: String,
            default: "Title"
        },
        subtitle: {
            type: String,
            default: "Subtitle"
        },
        description: {
            type: String,
            default: "Description"
        },
        tags: {
            type: Array,
            default: () => ['Tags here']
        },
        status: {
            type: String,
            default: "Side Project"
        },
        link: {
            type: String,
            default: "/"
        },
        reverse: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        getTagClass(index) {
            const classes = ['tag-blue', 'tag-purple', 'tag-cyan', 'tag-orange', 'tag-teal', 'tag-pink'];
            return classes[index % classes.length];
        }
    }
}
</script>

<style scoped>
.project-card {
    padding: 2rem 1.5rem;
}

.project-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 3rem;
    align-items: start;
}

/* Default layout: Image on left */
.project-header {
    grid-column: 2;
    grid-row: 1;
}

.project-image-section {
    grid-column: 1;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project-details {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Reversed layout: Image on right */
.project-content.reverse .project-header {
    grid-column: 1;
}

.project-content.reverse .project-image-section {
    grid-column: 2;
}

.project-content.reverse .project-details {
    grid-column: 1;
}

.project-image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    aspect-ratio: 16 / 10;
    cursor: pointer;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    border-radius: 12px;
}

.project-image-wrapper:hover .project-image {
    transform: scale(1.05);
}

.project-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.project-status {
    color: var(--hover_link);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.project-title {
    font-family: UniSans, sans-serif;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    color: white;
    font-weight: 700;
    line-height: 1.2;
}

.project-subtitle {
    color: rgba(255, 255, 255, 0.8);
    font-family: Fenix, serif;
    font-size: 1rem;
    font-weight: 600;
}

.project-description {
    background: var(--secondary);
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 3px solid var(--hover_link);
}

.project-description p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    font-family: Fenix, serif;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    padding: 0.25rem 0.6rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-family: Fenix, serif;
    font-weight: 500;
    border: 1.5px solid;
    transition: all 0.2s ease;
    cursor: default;
}

.tag-blue {
    background: rgba(60, 106, 190, 0.15);
    border-color: rgb(60, 106, 190);
    color: rgb(120, 156, 230);
}

.tag-blue:hover {
    background: rgba(60, 106, 190, 0.25);
    transform: translateY(-2px);
}

.tag-purple {
    background: rgba(138, 43, 226, 0.15);
    border-color: rgb(138, 43, 226);
    color: rgb(178, 103, 255);
}

.tag-purple:hover {
    background: rgba(138, 43, 226, 0.25);
    transform: translateY(-2px);
}

.tag-cyan {
    background: rgba(0, 187, 255, 0.15);
    border-color: rgb(0, 187, 255);
    color: rgb(100, 217, 255);
}

.tag-cyan:hover {
    background: rgba(0, 187, 255, 0.25);
    transform: translateY(-2px);
}

.tag-orange {
    background: rgba(255, 140, 0, 0.15);
    border-color: rgb(255, 140, 0);
    color: rgb(255, 180, 80);
}

.tag-orange:hover {
    background: rgba(255, 140, 0, 0.25);
    transform: translateY(-2px);
}

.tag-teal {
    background: rgba(0, 206, 201, 0.15);
    border-color: rgb(0, 206, 201);
    color: rgb(80, 236, 231);
}

.tag-teal:hover {
    background: rgba(0, 206, 201, 0.25);
    transform: translateY(-2px);
}

.tag-pink {
    background: rgba(255, 20, 147, 0.15);
    border-color: rgb(255, 20, 147);
    color: rgb(255, 100, 187);
}

.tag-pink:hover {
    background: rgba(255, 20, 147, 0.25);
    transform: translateY(-2px);
}

.project-link {
    width: 100%;
}

.link-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.85rem 1.5rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 8px;
    font-family: UniSans, sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
}

.link-button:hover {
    background: white;
    color: var(--primary);
}

.link-button svg {
    transition: transform 0.3s ease;
}

.link-button:hover svg {
    transform: translateX(6px);
}

@media (max-width: 1024px) {
    .project-content,
    .project-content.reverse {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .project-header,
    .project-image-section,
    .project-details,
    .project-content.reverse .project-header,
    .project-content.reverse .project-image-section,
    .project-content.reverse .project-details {
        grid-column: unset;
        grid-row: unset;
    }

    .mobile-top {
        order: 1;
    }

    .mobile-middle {
        order: 2;
    }

    .mobile-bottom {
        order: 3;
    }

    .project-card {
        padding: 1.5rem 1rem;
    }

    .project-description {
        padding: 1.25rem;
    }
}

@media (max-width: 768px) {
    .project-title {
        font-size: 1.5rem;
    }

    .project-tags {
        gap: 0.4rem;
    }

    .tag {
        padding: 0.2rem 0.5rem;
        font-size: 0.7rem;
    }
    
    .link-button {
        padding: 0.75rem 1.25rem;
        font-size: 0.85rem;
    }
}
</style>

