<!-- Navbar component -->

<!-- HTML part -->
<template>
    <div class="navbar">
        <ul>
            <li><router-link to="/"><i class="fa-solid fa-house"></i> Home</router-link></li>
            <li><router-link to="/games"><i class="fa-solid fa-gamepad"></i> Games</router-link></li>
            <li><router-link to="/upload"><i class="fa-solid fa-upload"></i> Upload Game</router-link></li>
            <li><router-link to="/signup"><i class="fa-solid fa-user"></i> Sign Up</router-link></li>
            <li><router-link to="/signin"><i class="fa-solid fa-user"></i> Sign In</router-link></li>
        </ul>
    </div>
</template>

<!-- JavaScript part -->
<script setup></script>

<!-- CSS part -->
<style scoped>
    .navbar {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        background-color: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(5px);
        text-align: center;
        font-weight: bold;
        position: sticky;
        z-index: 1000;
        top: 0;
    }

    .navbar ul {
        list-style: none;
        margin: 0;
        padding: 25px 0;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .navbar li {
        display: inline-block;
        margin: 0 15px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 30px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        background: rgba(255, 255, 255, 0.03);
    }

    .navbar li:hover {
        background-color: #255783;
        border-color: #3498db;
        box-shadow: 0 4px 12px rgba(52, 143, 199, 0.3);
    }

    .navbar li a {
        text-decoration: none;
        color: white;
        font-size: 25px;
        font-weight: 600;
        padding: 10px 20px;
        display: inline-block;
    }

    .navbar li a::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        transition: 0.4s;
    }

    .navbar li a:hover::after {
        width: 100%;
        background-color: #3498db;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .navbar ul {
            flex-direction: column;
            gap: 8px;
            padding: 10px 0;
        }

        .navbar li {
            margin: 0 40px;
            border-radius: 15px;
        }

        .navbar li a {
            font-size: 18px;
            padding: 6px 12px;
            display: block;
        }
    }

    @media (max-width: 480px) {
        .navbar ul {
            padding: 8px 0;
            gap: 5px;
        }

        .navbar li a {
            font-size: 16px;
            padding: 5px 10px;
        }

        .navbar li {
            margin: 0 20px;
            border-width: 1px;
        }

        .navbar li a i {
            font-size: 14px;
            margin-right: 5px;
        }
    }
</style>