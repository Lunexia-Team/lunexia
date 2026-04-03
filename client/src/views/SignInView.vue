<!-- Sign In View component -->

<!-- HTML part -->
<template>
    <HeroSection>
        <h1>Welcome <span>Back</span></h1>
        <p>The arena is waiting. Log in to continue your journey.</p>
    </HeroSection>

    <div class="signin-page-wrapper">
        <div class="form-container">
            <div class="form-header">
                <i class="fa-solid fa-user"></i>
                <h3>Sign In</h3>
            </div>

            <form @submit.prevent="handleLogin" class="signin-form">
                <div class="input-group">
                    <label>Email Address</label>
                    <input v-model="email" type="email" placeholder="example@gmail.com" required>
                </div>

                <div class="input-group">
                    <label>Password</label>
                    <input v-model="password" type="password" placeholder="••••••••" required>
                </div>

                <div class="button-wrapper">
                    <button type="submit" class="form-button">
                        <span>Enter the World</span>
                        <i class="fa-solid fa-rocket"></i>
                    </button>
                </div>

                <div class="form-footer">
                    <p>Don't have an account? <router-link to="/signup">Join now</router-link></p>
                </div>
            </form>
        </div>
    </div>
</template>

<!-- JavaScript part -->
<script setup>
    import HeroSection from '../components/HeroSection.vue';
    import axios from 'axios';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const API_URL = 'https://project-lunexia.onrender.com';

    // Function to handle login
    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}/api/signin`, {
                email: email.value,
                password: password.value
            });

            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('activeUsername', response.data.user.username);
                router.push('/profile');
            }
        } catch (error) {
            alert(error.response?.data?.error || 'Login failed. Please check your information.');
        }
    };
</script>

<!-- CSS part -->
<style scoped>
    .signin-page-wrapper {
        background: radial-gradient(circle at center, #111827 50%, #030712 100%);
        padding: 80px 20px;
        min-height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form-container {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(15px);
        border-radius: 24px;
        padding: 40px;
        width: 100%;
        max-width: 450px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    }

    .form-header {
        text-align: center;
        margin-bottom: 35px;
        font-size: 25px;
    }

    .form-header i {
        font-size: 50px;
        color: #4A8DB7;
        margin-bottom: 15px;
        filter: drop-shadow(0 0 10px rgba(74, 141, 183, 0.4));
        transition: all 0.3s ease;
    }

    .form-header i:hover {
        transform: scale(1.2);
        filter: drop-shadow(0 0 20px rgba(74, 141, 183, 0.5));
    }

    .form-header h3 {
        color: #ffffff;
        font-size: 26px;
        font-weight: 700;
        letter-spacing: 1px;
        margin: 0;
    }

    .signin-form {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .input-group label {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #f8fafc;
        font-size: 18px;
        font-weight: 500;
        margin-left: 5px;
    }

    input {
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 12px;
        padding: 14px 18px;
        color: rgb(185, 197, 214);
        font-size: 16px;
        transition: all 0.3s ease;
    }

    input:focus {
        outline: none;
        border-color: #4A8DB7;
        box-shadow: 0 0 0 4px rgba(74, 141, 183, 0.15);
        background: #1e293b;
    }

    .form-button {
        width: 100%;
        background: linear-gradient(135deg, #4A8DB7 0%, #356a8d 100%);
        color: white;
        border: none;
        border-radius: 12px;
        padding: 16px;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(74, 141, 183, 0.4);
        margin-top: 10px;
    }

    .form-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(74, 141, 183, 0.5);
        filter: brightness(1.1);
    }

    .form-footer {
        text-align: center;
        margin-top: 10px;
    }

    .form-footer p {
        color: #64748b;
        font-size: 17px;
    }

    .form-footer a {
        color: #4A8DB7;
        text-decoration: none;
        font-weight: 700;
        transition: 0.3s;
    }

    .form-footer a:hover {
        text-shadow: 0 0 12px rgba(74, 141, 183, 0.6);
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .signin-page-wrapper {
            padding: 40px 15px;
            min-height: auto;
        }

        .form-container {
            padding: 30px 20px;
            width: 90%;
            max-width: 400px;
            border-radius: 20px;
        }

        .form-header i {
            font-size: 40px;
        }

        .form-header h3 {
            font-size: 22px;
        }

        .input-group label {
            font-size: 16px;
        }

        input {
            padding: 12px 15px;
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        .signin-page-wrapper {
            padding: 20px 10px;
        }

        .form-container {
            padding: 25px 15px;
            width: 100%;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
        }

        .form-header {
            margin-bottom: 25px;
        }

        .signin-form {
            gap: 20px;
        }

        .form-button {
            padding: 14px;
            font-size: 15px;
        }

        .form-footer p {
            font-size: 14px;
        }
    }
</style>