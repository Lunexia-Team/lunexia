<template>
    <HeroSection>
        <h1>Games Collection</h1>
        <p>Discover trending games or find your next favorite adventure.</p>
    </HeroSection>
    <div class="game-title">
        <h2>Games</h2>
    </div>
    <div class="game-card-container">
        <div class="game-card">
            <div class="card-image">
                <img width="300px" height="160px" src="../assets/DTL.jpg" alt="Don't Touch The Lava">
            </div>
            <div class="card-content">
                <h3>Don't Touch The Lava!</h3>
                <p>Rating: ⭐️⭐️⭐️⭐️</p>
                <a href="/games/DTL" class="button">Play Now</a>
            </div>
        </div>
        <div class="game-card">
            <div class="card-image">
                <img width="300px" height="160px" src="../assets/AT.png" alt="Anti-Torenk">
            </div>
            <div class="card-content">
                <h3>Anti-Torenk</h3>
                <p>Rating: ⭐️⭐️⭐️⭐️⭐️</p>
                <a href="/games/AT" class="button">Play Now</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import HeroSection from '@/components/HeroSection.vue';
</script>

<style scoped>
    .game-title {
        text-align: center;
        font-size: 20px;
        margin: 30px 0;
    }

    .game-title h2 {
        border-bottom: 3px solid #4A8DB7;
        color: #2c3e50;
        display: inline-block;
    }

    .game-card-container {
        text-align: center;
    }

    .game-card {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
        border: 2px solid #2c3e50;
        display: inline-block;
        border-radius: 15px;
        transition: 0.4s;
        overflow: hidden;
        width: 300px;
        margin: 20px 30px 120px 30px;
    }

    .game-card:hover {
        box-shadow: 0 10px 25px rgba(74, 141, 183, 0.3);
        border-color: #4A8DB7;
        transform: scale(1.1);
    }

    .card-image {
        border-bottom: 3px solid #2c3e50;
        background-color: #3b5998;
        height: 160px;
    }

    .card-image i {
        font-size: 75px;
        color: white;
        margin-top: 40px;
    }

    .card-content {
        padding: 25px;
    }

    .card-content h3 {
        color: #1e3d5c;
        font-size: 23px;
    }

    .card-content p {
        font-weight: bold;
        color: #666;
    }

    .button {
        border: 2px solid #4A8DB7;
        background-color: white;
        text-decoration: none;
        display: inline-block;
        padding: 10px 20px;
        border-radius: 6px;
        font-weight: bold;
        color: #4A8DB7;
        transition: 0.3s;
    }

    .button:hover {
        background-color: #4A8DB7;
        color: white;
    }

    @media (max-width: 768px) {

        .game-card {
            width: 90%;
            margin: 20px auto;
            display: block;
            max-width: 350px;
        }

        .game-card:hover {
            transform: scale(1.05);
        }

        .card-image img {
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 480px) {

        .game-title h2 {
            font-size: 1.2rem;
        }

        .card-content h3 {
            font-size: 18px;
        }
    }
</style>