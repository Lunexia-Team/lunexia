<!-- Hero Section component -->

<!-- HTML part -->
<template>
    <div class="hero">
        <div class="hero-inner">
            <slot>
                <h1>Title</h1>
                <p>Description</p>
                <button class="hero-button">Button</button>
            </slot>
        </div>
    </div>
</template>

<!-- JavaScript part -->
<script setup></script>

<!-- CSS part -->
<style>
    .hero {
        background: linear-gradient(to bottom, #1e293b 0%, #111827 100%);
        padding: 30px 0;
        text-align: center;
        color: white;
        position: relative;
        border-bottom: 1px solid rgba(74, 141, 183, 0.3);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .hero h1 {
        font-size: 42px;
        font-weight: 800;
        margin-bottom: 20px;
        letter-spacing: -0.5px;
    }

    .hero p {
        color: #b8c4d6;
        font-size: 20px;
        line-height: 1.6;
        margin-bottom: 30px;
    }

    .hero-button {
        background: linear-gradient(135deg, #348fc7 0%, #297fb3 100%);
        color: white;
        font-weight: 700;
        padding: 16px 36px;
        border-radius: 14px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 8px 20px -6px rgba(52, 143, 199, 0.5);
        position: relative;
        overflow: hidden;
    }

    .hero-button:hover {
        background: linear-gradient(135deg, #009ffc 0%, #348fc7 100%);
        transform: translateY(-4px);
        box-shadow: 0 12px 25px -5px rgba(0, 159, 252, 0.4);
    }

    .hero-button::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: 0.75s;
    }

    .hero-button:hover::before {
        left: 100%;
    }

    .hero-button:active {
        transform: translateY(-1px) scale(0.97);
        box-shadow: 0 4px 10px -3px rgba(52, 143, 199, 0.4);
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .hero {
            padding: 40px 15px;
        }

        .hero h1 {
            font-size: 28px;
            margin-bottom: 15px;
            line-height: 1.2;
        }

        .hero p {
            font-size: 16px;
            margin-bottom: 25px;
            padding: 0 10px;
        }

        .hero-button {
            padding: 12px 28px;
            font-size: 15px;
            width: 80%;
            max-width: 300px;
            justify-content: center;
        }
    }

    @media (max-width: 480px) {
        .hero {
            padding: 30px 10px;
        }

        .hero h1 {
            font-size: 24px;
        }

        .hero p {
            font-size: 14px;
        }
    }
</style>