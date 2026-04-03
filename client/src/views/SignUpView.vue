<!-- Sign Up View component -->

<!-- HTML part -->
<template>
    <HeroSection>
        <h1>Claim Your Legacy</h1>
        <p>Every legend starts with a single step. Forge your account and join the Lunexia community.</p>
    </HeroSection>

    <div class="signup-page-wrapper">
        <div class="form-container">
            <div class="form-header">
                <i class="fa-solid fa-user-plus"></i>
                <h3>Create New Account</h3>
            </div>

            <form @submit.prevent="createAccount" class="signup-form">
                <div class="input-row">
                    <div class="input-group">
                        <label>First Name</label>
                        <input v-model="firstName" type="text" placeholder="John">
                    </div>
                    <div class="input-group">
                        <label>Last Name</label>
                        <input v-model="lastName" type="text" placeholder="Doe">
                    </div>
                </div>

                <div class="input-group">
                    <label>Username</label>
                    <input v-model="username" type="text" placeholder="CrazyGamer123">
                </div>

                <div class="input-group">
                    <label>Role</label>
                    <select v-model="role">
                        <option value="" disabled>Select your path...</option>
                        <option value="Gamer">Gamer</option>
                        <option value="Game Developer">Game Developer</option>
                        <option value="Both">Gamer / Game Developer</option>
                    </select>
                </div>

                <div class="input-group">
                    <label>Email Address</label>
                    <input v-model="email" type="email" placeholder="example@gmail.com">
                </div>

                <div class="input-group">
                    <label>Password</label>
                    <input v-model="password" type="password" placeholder="••••••••">
                </div>

                <div class="input-group">
                    <label>Date of Birth</label>
                    <input v-model="birthDate" type="date">
                </div>

                <div class="button-wrapper">
                    <button type="submit" class="form-button">
                        <span>Join Lunexia Now</span>
                        <i class="fa-solid fa-rocket"></i>
                    </button>
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

    const firstName = ref('');
    const lastName = ref('');
    const username = ref('');
    const role = ref('');
    const email = ref('');
    const password = ref('');
    const birthDate = ref(null);
    const router = useRouter();

    const API_URL = 'https://project-lunexia.onrender.com';

    // Function to handle account creation
    const createAccount = async () => {
        if (!firstName.value || !lastName.value || !username.value || !role.value || !email.value || !password.value || !birthDate.value) {
            alert('Please fill in all the fields!');
            return;
        }

        const userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            username: username.value,
            role: role.value,
            email: email.value,
            password: password.value,
            birthDate: birthDate.value
        };

        try {
            const response = await axios.post(`${API_URL}/api/signup`, userData);
            alert('Account created successfully!');
            router.push('/signin');
        } catch (error) {
            if (error.response) {
                console.error("Server Error:", error.response.data);
                alert(error.response.data.error || "Server error occurred. Please try again.");
            } else if (error.request) {
                console.error("Network Error:", error.request);
                alert("Unable to reach the server. Please check your internet connection or the API address.");
            } else {
                console.error("Code Error:", error.message);
                alert("Software error occurred: " + error.message);
            }
        }
    }
</script>

<!-- CSS part -->
<style scoped>
    .signup-page-wrapper {
        background: radial-gradient(circle at center, #111827 50%, #030712 100%);
        padding: 60px 20px;
        min-height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form-container {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
        border-radius: 24px;
        padding: 40px;
        width: 100%;
        max-width: 600px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .form-header {
        text-align: center;
        margin-bottom: 40px;
    }

    .form-header i {
        font-size: 50px;
        color: #4A8DB7;
        margin-bottom: 20px;
        filter: drop-shadow(0 0 10px rgba(74, 141, 183, 0.3));
        transition: all 0.3s ease;
    }

    .form-header i:hover {
        transform: scale(1.2);
        filter: drop-shadow(0 0 20px rgba(74, 141, 183, 0.5));
    }

    .form-header h3 {
        color: #ffffff;
        font-size: 25px;
        font-weight: 700;
        letter-spacing: 0.5px;
        margin: 0;
    }

    .signup-form {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .input-row {
        display: flex;
        gap: 15px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }

    .input-group label {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #f8fafc;
        font-size: 18px;
        font-weight: 500;
        margin-left: 4px;
    }

    input,
    select {
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 12px;
        padding: 12px 16px;
        color: rgb(185, 197, 214);
        font-size: 15px;
        transition: all 0.3s ease;
    }

    input:focus,
    select:focus {
        outline: none;
        border-color: #4A8DB7;
        box-shadow: 0 0 0 3px rgba(74, 141, 183, 0.1);
        background: #1e293b;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
        cursor: pointer;
    }

    .button-wrapper {
        margin-top: 15px;
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
        gap: 10px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(74, 141, 183, 0.3);
    }

    .form-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(74, 141, 183, 0.4);
        filter: brightness(1.1);
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .form-container {
            padding: 30px 20px;
            margin: 20px 10px;
            width: 95%;
        }

        .input-row {
            flex-direction: column;
            gap: 20px;
        }

        .form-header i {
            font-size: 40px;
        }

        .form-header h3 {
            font-size: 20px;
        }

        .input-group label {
            font-size: 16px;
        }

        input,
        select {
            padding: 14px;
            font-size: 16px;
        }

        .form-button {
            padding: 18px;
        }
    }

    @media (max-width: 480px) {
        .form-container {
            padding: 20px 15px;
            border-radius: 16px;
        }

        .form-header {
            margin-bottom: 25px;
        }

        .signup-form {
            gap: 18px;
        }
    }
</style>