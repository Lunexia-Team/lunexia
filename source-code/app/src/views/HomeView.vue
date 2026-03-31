<!-- Home View component -->

<!-- HTML part -->
<template>
    <HeroSection>
        <h1>Welcome to Lunexia!</h1>
        <p>Play the best games, explore new worlds, or upload your own creation to the community.</p>
        <button class="hero-button" @click="$router.push('/signup')">Join the Community</button>
    </HeroSection>
    <div class="page">
        <router-link to="/games" class="card">
            <i class="fa-solid fa-gamepad"></i>
            <h2>Play Games</h2>
            <p>Discover and play trending games right now.</p>
        </router-link>
        <router-link to="/upload" class="card">
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <h2>Upload Game</h2>
            <p>Share your masterpiece with the world.</p>
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
        text-align: center;
        min-height: 65vh;
        align-content: center;
    }

    .card {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
        border: 4px solid #4A8DB7;
        background-color: white;
        display: inline-block;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        border-radius: 20px;
        margin: 50px 30px;
        transition: 0.4s;
        padding: 50px 0;
        width: 400px;
    }

    .card:hover {
        box-shadow: 0 15px 30px rgba(74, 141, 183, 0.4);
        background-color: #4A8DB7;
        transform: scale(1.1);
    }

    .card i {
        font-size: 80px;
        color: #4A8DB7;
        margin-bottom: 20px;
    }

    .card:hover i {
        color: white;
    }

    .card h2 {
        font-size: 32px;
        color: #2c3e50;
    }

    .card p {
        font-size: 18px;
        color: #666;
    }

    .card:hover h2,
    .card:hover p {
        color: white;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .card {
            width: 90%;
            margin: 20px auto;
            display: block;
            padding: 30px 15px;
        }

        .card i {
            font-size: 60px;
        }

        .card h2 {
            font-size: 24px;
        }
    }

    @media (max-width: 480px) {
        .page {
            margin-top: 30px;
            margin-bottom: 30px;
        }

        .card {
            width: 95%;
            margin: 15px auto;
        }
    }
</style>