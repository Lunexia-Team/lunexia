<template>
    <div class="navbar">
        <ul>
            <li><router-link to="/"><i class="fa-solid fa-house"></i> Home</router-link></li>
            <li><router-link to="/games"><i class="fa-solid fa-gamepad"></i> Games</router-link></li>
            <li><router-link to="/upload"><i class="fa-solid fa-upload"></i> Upload Game</router-link></li>
            <li><router-link to="/signup"><i class="fa-solid fa-user"></i> Sign Up</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
    .navbar {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        border-bottom: 4px solid #1a252f;
        background-color: #2c3e50;
        text-align: center;
        font-weight: bold;
        position: sticky;
        font-size: 16px;
        padding: 10px 20px;
        z-index: 1000;
        margin: 0;
        top: 0;
    }

    .navbar li {
        display: inline-block;
        padding: 0 30px;
    }

    .navbar li a {
        text-decoration: none;
        color: white;
    }

    .navbar li a:hover {
        color: #4A8DB7;
        transition: 0.4s;
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
    }
</style>