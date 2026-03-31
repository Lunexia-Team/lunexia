<!-- Hero Section component -->

<!-- HTML part -->
<template>
    <div class="hero">
        <slot>
            <h1>Title</h1>
            <p>Description</p>
            <button class="hero-button">Button</button>
        </slot>
    </div>
</template>

<!-- JavaScript part -->
<script setup></script>

<!-- CSS part -->
<style>
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

    .hero-button {
        background-color: #4A8DB7;
        color: white;
        font-weight: bold;
        margin: 10px;
        padding: 10px 25px;
        border-radius: 5px;
        font-size: 13px;

        border: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .hero-button:hover {
        background-color: white;
        background-color: #3b7aa0;
        transition: 0.3s;
    }

    .hero-button:active {
        transform: scale(0.97);
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {

        .hero h1 {
            font-size: 22px;
        }

        .hero p {
            font-size: 14px;
            padding: 0 10px;
        }
    }
</style>