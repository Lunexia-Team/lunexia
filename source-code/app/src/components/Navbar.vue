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
</style>