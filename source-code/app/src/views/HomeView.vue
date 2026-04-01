<!-- Home View component -->

<!-- HTML part -->
<template>
    <HeroSection>
        <h1>Welcome to the World of Lunexia</h1>
        <p>The place where gamers meet and creators grow. Play, share, and build your legend with us.</p>
        <button class="hero-button" @click="$router.push('/signup')">Join Lunexia Now</button>
    </HeroSection>
    <div class="page">
        <router-link to="/games" class="card">
            <i class="fa-solid fa-gamepad"></i>
            <h2>Play on Lunexia</h2>
            <p>Find the best indie games and start playing instantly.</p>
        </router-link>
        <router-link to="/upload" class="card">
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <h2>Build with Lunexia</h2>
            <p>Upload your game and share it with thousands of players.</p>
        </router-link>
    </div>
</template>

<!-- JavaScript part -->
<script setup>
    import HeroSection from '@/components/HeroSection.vue';
</script>

<!-- CSS part -->
<style scoped>
    .page {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        flex-wrap: wrap;
        min-height: 70vh;
        background: radial-gradient(circle at center, #111827 50%, #030712 100%);
        padding: 50px 20px;
    }

    .card {
        will-change: transform;
        position: relative;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        text-align: center;
        border-radius: 32px;
        padding: 60px 30px;
        width: 500px;
        transition: 0.5s;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        overflow: hidden;
    }

    .card:hover {
        transform: translateY(-12px);
        border-color: rgba(74, 141, 183, 0.5);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    }

    .card i {
        font-size: 100px;
        color: #4A8DB7;
        margin-bottom: 25px;
        transition: all 0.4s ease;
        filter: drop-shadow(0 0 8px rgba(74, 141, 183, 0.2));
    }

    .card:hover i {
        color: #60a5fa;
        transform: scale(1.1) rotate(-3deg);
        filter: drop-shadow(0 0 15px rgba(74, 141, 183, 0.6));
    }

    .card h2 {
        font-size: 30px;
        color: #f8fafc;
        margin-bottom: 15px;
        font-weight: 700;
        letter-spacing: 0.5px;
        transition: 0.3s;
    }

    .card p {
        font-size: 16px;
        color: #b8c6da;
        transition: 0.3s;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .card {
            width: 100%;
            max-width: 400px;
            padding: 40px 20px;
            border-radius: 24px;
        }

        .card i {
            font-size: 55px;
        }

        .card h2 {
            font-size: 24px;
        }
    }
</style>