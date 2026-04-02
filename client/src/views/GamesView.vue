<!-- Games View component -->

<!-- HTML part -->
<template>
    <HeroSection>
        <h1>Explore Games</h1>
        <p>Discover trending games or find your next favorite adventure.</p>
    </HeroSection>

    <div class="page">
        <div class="games">
            <div class="game-card">
                <div class="card-image">
                    <img src="../assets/DTL.jpg" alt="Don't Touch The Lava">
                    <div class="card-button">
                        <a href="/games/DTL" class="playButton">Play Now</a>
                    </div>
                </div>
                <div class="card-info">
                    <h3>Don't Touch The Lava!</h3>
                    <div class="card-footer">
                        <span class="stars">⭐️⭐️⭐️⭐️</span>
                        <span class="tag">Hardcore Obby</span>
                    </div>
                </div>
            </div>

            <div class="game-card">
                <div class="card-image">
                    <img src="../assets/AT.png" alt="Anti-Torenk">
                    <div class="card-button">
                        <a href="/games/AT" class="playButton">Play Now</a>
                    </div>
                </div>
                <div class="card-info">
                    <h3>Anti-Torenk</h3>
                    <div class="card-footer">
                        <span class="stars">⭐️⭐️⭐️⭐️⭐️</span>
                        <span class="tag">Minigames</span>
                    </div>
                </div>
            </div>

            <button class="upload-card" @click="$router.push('/upload')">
                <div class="upload-content">
                    <div class="plus">+</div>
                    <span>Share Your Game</span>
                </div>
            </button>
        </div>
    </div>
</template>

<!-- JavaScript part -->
<script setup>
    import HeroSection from '../components/HeroSection.vue';
</script>

<!-- CSS part -->
<style scoped>
    .page {
        padding: 50px 0;
        background: radial-gradient(circle at center, #111827 50%, #030712 100%);
    }

    .games {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 30px;
        max-width: 1600px;
        margin: auto;
    }

    .game-card {
        font-family: 'Poppins', sans-serif;
        background: rgba(31, 41, 55, 0.7);
        border-radius: 25px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .game-card:hover {
        transform: translateY(-12px);
        box-shadow: 0 20px 50px rgba(74, 141, 183, 0.3);
        border-color: rgba(74, 141, 183, 0.6);
    }

    .card-image {
        position: relative;
        height: 300px;
        overflow: hidden;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .game-card:hover .card-image img {
        transform: scale(1.1);
    }

    .card-button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(30, 41, 59, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .game-card:hover .card-button {
        opacity: 1;
    }

    .playButton {
        background: #4A8DB7;
        color: white;
        text-decoration: none;
        padding: 12px 25px;
        border-radius: 30px;
        font-weight: bold;
        transform: translateY(20px);
        transition: all 0.4s ease;
    }

    .game-card:hover .playButton {
        transform: translateY(0);
    }

    .card-info {
        padding: 20px;
    }

    .card-info h3 {
        margin: 0 0 15px 0;
        color: #f1f5f9;
        font-size: 25px;
        letter-spacing: 0.5px;
    }

    .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .tag {
        background: rgba(74, 141, 183, 0.2);
        color: #60a5fa;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        border: 1px solid rgba(74, 141, 183, 0.3);
    }

    .upload-card {
        background: rgba(255, 255, 255, 0.03);
        border: 2px dashed rgba(74, 141, 183, 0.4);
        border-radius: 25px;
        cursor: pointer;
        min-height: 300px;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .upload-card:hover {
        border-color: #4A8DB7;
        background: rgba(74, 141, 183, 0.1);
    }

    .upload-content {
        text-align: center;
        color: #9eaec5;
    }

    .plus {
        font-size: 100px;
        margin-bottom: 10px;
        display: block;
        color: #4A8DB7;
        transition: transform 0.5s ease;
    }

    .upload-card:hover .plus {
        transform: rotate(360deg) scale(1.3);
    }

    .upload-content span {
        font-weight: 600;
        font-size: 22px;
        color: #94a3b8;
    }

    /* Mobile responsiveness */
    @media (max-width: 1024px) {
        .games {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            padding: 0 20px;
        }
    }

    @media (max-width: 768px) {
        .page {
            padding: 30px 10px;
        }

        .games {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .game-card {
            max-width: 500px;
            margin: 0 auto;
        }

        .card-image {
            height: 250px;
        }

        .card-info h3 {
            font-size: 20px;
        }

        .plus {
            font-size: 80px;
        }

        .upload-content span {
            font-size: 18px;
        }

        .card-button {
            background: rgba(30, 41, 59, 0.4);
            opacity: 1;
        }

        .playButton {
            transform: translateY(0);
            padding: 10px 20px;
        }
    }

    @media (max-width: 480px) {
        .card-image {
            height: 200px;
        }

        .game-card {
            border-radius: 15px;
        }
    }
</style>