<template>
    <nav class="navbar" ref="menu-container">
        <div class="navbar-content">
            <!-- Logo/Name -->
            <nuxt-link to="/" class="navbar-logo">
                <span class="logo-text">YZ</span>
            </nuxt-link>
            
            <!-- Desktop Menu -->
            <div class="navbar-menu desktop-menu">
                <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                <nuxt-link to="/#about" class="nav-link">About</nuxt-link>
                <nuxt-link to="/projects" class="nav-link">Projects</nuxt-link>
                <a href="/resume.pdf" target="_blank" class="nav-link">Resume</a>
                <a href="mailto:youwei_zhen@brown.edu" class="nav-link">Contact</a>
            </div>
            
            <!-- Mobile Hamburger -->
            <button class="hamburger" @click="activate" ref="menu-button" :class="{ 'active': active }">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        
        <!-- Mobile Menu -->
        <div class="mobile-menu" :class="{ 'active': active }" ref="mobile-menu">
            <nuxt-link to="/" class="mobile-nav-link" @click="activate">Home</nuxt-link>
            <nuxt-link to="/#about" class="mobile-nav-link" @click="activate">About</nuxt-link>
            <nuxt-link to="/projects" class="mobile-nav-link" @click="activate">Projects</nuxt-link>
            <a href="/resume.pdf" target="_blank" class="mobile-nav-link" @click="activate">Resume</a>
            <a href="mailto:youwei_zhen@brown.edu" class="mobile-nav-link" @click="activate">Contact</a>
        </div>
    </nav>
</template>

<script>
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from "gsap"

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)
}

export default {
    name: "navbar",
    data(){
        return {
            prevScrollpos: 0,
            currentScrollPos: 0,
            active: false,
        }
    },
    mounted(){
        this.prevScrollpos = window.pageYOffset;
        this.currentScrollPos = window.pageYOffset;
        window.onscroll = this.scroll
    },
    methods: {
        scroll(){
            this.currentScrollPos = window.pageYOffset;
            if (this.prevScrollpos > this.currentScrollPos) {
                this.$refs['menu-container'].style.top = "0";
            } else {
                this.$refs['menu-container'].style.top = "-80px";
            }
            this.prevScrollpos = this.currentScrollPos;
        },
        activate(){
            this.active = !this.active
            
            if (this.active) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = ''
            }
        }
    },
    beforeUnmount() {
        document.body.style.overflow = ''
    }
}

</script>

<style scoped>

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: top 0.3s ease;
}

.navbar-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-logo {
    text-decoration: none;
    display: flex;
    align-items: center;
}

.logo-text {
    font-family: bbhs, sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
}

.navbar-logo:hover .logo-text {
    color: var(--hover_link);
}

.desktop-menu {
    display: flex;
    gap: 2.5rem;
    align-items: center;
}

.nav-link {
    font-family: UniSans, sans-serif;
    font-size: 1rem;
    color: white;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;
    font-weight: 600;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--hover_link);
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: var(--hover_link);
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link-contact::after {
    display: none;
}

.nav-link-contact:hover {
    background: white;
    color: var(--primary);
}

/* Hamburger Menu */
.hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 60;
}

.hamburger span {
    width: 100%;
    height: 3px;
    background: white;
    border-radius: 3px;
    transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
    transform: translateY(8.5px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: translateY(-8.5px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    transform: translateX(-100%);
    transition: transform 0.4s ease;
    z-index: 40;
}

.mobile-menu.active {
    transform: translateX(0);
}

.mobile-nav-link {
    font-family: UniSans, sans-serif;
    font-size: 1.75rem;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 600;
}

.mobile-nav-link:hover {
    color: var(--hover_link);
    transform: translateX(10px);
}

@media (max-width: 800px) {
    .desktop-menu {
        display: none;
    }

    .hamburger {
        display: flex;
    }
    
    .navbar-content {
        padding: 1rem 1.5rem;
    }
}

@media (max-width: 480px) {
    .logo-text {
        font-size: 2rem;
    }
    
    .mobile-nav-link {
        font-size: 1.5rem;
    }
}

</style>

