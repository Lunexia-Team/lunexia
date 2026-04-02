<!-- Footer component -->

<!-- HTML part -->
<template>
    <footer class="footer">
        <h3 class="footer-title">Project Owners</h3>
        <div class="footer-team">
            <div class="member">
                <span>Güray Topağaç</span>
                <a href="https://github.com/guraytopagac" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
            <div class="member">
                <span>Mehmet Emin Yıldırım</span>
                <a href="https://github.com/MehmetEmin61" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
        <div class="footer-copy">
            <p>© 2026 Lunexia - All rights reserved.</p>
        </div>
    </footer>
</template>

<!-- JavaScript part -->
<script setup></script>

<!-- CSS part -->
<style scoped>
    .footer {
        background-color: #0f172a;
        padding: 10px 0 20px 0;
        text-align: center;
        border-top: 1px solid rgba(52, 143, 199, 0.2);
        box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
    }

    .footer-title {
        color: #3498db;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 4px;
        margin-bottom: 25px;
        font-weight: 800;
    }

    .footer-team {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        margin-bottom: 30px;
    }

    .member {
        display: flex;
        align-items: center;
        gap: 15px;
        color: #f8fafc;
        background: rgba(255, 255, 255, 0.03);
        padding: 8px 20px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.3s ease;
    }

    .member:hover {
        background: rgba(52, 143, 199, 0.1);
        border-color: rgba(52, 143, 199, 0.3);
        transform: translateY(-2px);
    }

    .member span {
        font-size: 20px;
        font-weight: 600;
        min-width: 160px;
        letter-spacing: 0.5px;
    }

    .member a {
        color: #3498db;
        font-size: 25px;
        transition: all 0.3s ease;
        display: flex;
        text-decoration: none;
    }

    .member a:hover {
        color: #009ffc;
        filter: drop-shadow(0 0 8px rgba(0, 159, 252, 0.6));
        transform: scale(1.1);
    }

    .footer-copy {
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 20px;
        max-width: 80%;
        margin: 0 auto;
    }

    .footer-copy p {
        font-size: 16px;
        color: #64748b;
        margin: 0;
        font-weight: 500;
        letter-spacing: 1px;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .footer-title {
            font-size: 13px;
            letter-spacing: 3px;
        }

        .member span {
            font-size: 15px;
            min-width: 160px;
        }
    }

    @media (max-width: 480px) {
        .footer {
            padding: 20px 0 15px 0;
        }

        .footer-team {
            gap: 12px;
        }

        .member span {
            font-size: 14px;
            min-width: 140px;
            text-align: right;
        }

        .member a {
            font-size: 18px;
        }

        .footer-copy p {
            font-size: 10px;
            letter-spacing: 0.5px;
        }
    }
</style>