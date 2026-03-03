<template>
    <div class="hero">
        <h1>Games Collection</h1>
        <p>Discover trending games or find your next favorite adventure.</p>
    </div>
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
                <p>Rating: ⭐️⭐️⭐️⭐️⭐️</p>
                <a href="/games/DTL" class="button">Play Now</a>
            </div>
        </div>
        <div class="game-card">
            <div class="card-image">
                <i class="fa-solid fa-chess-knight"></i>
            </div>
            <div class="card-content">
                <h3>Empire Strategy</h3>
                <p>Rating: ⭐️⭐️⭐️⭐️</p>
                <a href="/games/ES" class="button">Play Now</a>
            </div>
        </div>
    </div>
</template>

<style>
    * {
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f4f7f6;
        margin: 0;
        padding: 0;
    }

    .hero {
        border-bottom: 6px solid #4A8DB7;
        background-color: #2c3e50;
        text-align: center;
        color: white;
        padding: 20px;
    }

    .hero p {
        color: #b0bec5;
        font-size: 15px;
    }

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

        .navbar {
            padding: 15px 5px;
        }

        .navbar li {
            display: inline-block;
            padding: 5px 10px;
        }

        .navbar li a {
            font-size: 22px;
        }

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

        .hero h1 {
            font-size: 22px;
        }

        .hero p {
            font-size: 14px;
            padding: 0 10px;
        }
    }

    @media (max-width: 480px) {
        .navbar {
            width: 100%;
            padding: 5px 0;
        }

        .navbar ul {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
            width: 100%;
        }

        .navbar li {
            display: block;
            width: 100%;
            padding: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar li a {
            display: block;
            width: 100%;
            padding: 8px 0;
            font-size: 14px;
            line-height: 1.2;
        }

        .navbar li a i {
            margin-right: 5px;
        }

        .navbar li:last-child {
            border-bottom: none;
        }

        .game-title h2 {
            font-size: 1.2rem;
        }

        .card-content h3 {
            font-size: 18px;
        }
    }
</style>