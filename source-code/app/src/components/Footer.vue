<template>
    <footer class="footer">
        <h3 class="footer-title">Project Owners</h3>

        <div class="footer-team">
            <div class="member">
                <span>Güray Topağaç</span>
                <a href="https://www.instagram.com/guraytopagac/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>

            <div class="member">
                <span>Mehmet Emin Yıldırım</span>
                <a href="https://www.instagram.com/mehmet.emin_yldrm/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>

        <div class="footer-copy">
            <p>© 2026 Lunexia - All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        background-color: #1a252f;
        padding: 5px 0 20px 0;
        text-align: center;
        border-top: 2px solid rgba(255, 255, 255, 0.1);
    }

    .footer-title {
        color: #4A8DB7;
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 5px;
        margin-bottom: 20px;
        font-weight: bold;
        opacity: 0.9;
    }

    .footer-team {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin: 10px;
    }

    .member {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #ecf0f1;
        transition: transform 0.3s ease;
    }

    .member span {
        font-size: 16px;
        font-weight: 500;
        min-width: 180px;
    }

    .member a {
        color: #bdc3c7;
        font-size: 20px;
        transition: all 0.3s ease;
        display: flex;
        text-decoration: none;
    }

    .member a:hover {
        color: #4A8DB7;
        transform: scale(1.2);
    }

    .footer-copy {
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 20px;
        margin: 0 auto;
    }

    .footer-copy p {
        font-size: 11px;
        color: #5d6d7e;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

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