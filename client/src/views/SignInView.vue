<!-- Sign In View component -->

<!-- HTML part -->
<template>
    <HeroSection>
        <h1>Sign In</h1>
        <p>Welcome!</p>
    </HeroSection>
    <div class="form-container">
        <h3>Sign In</h3>
        <table>
            <tbody>
                <tr>
                    <td>Email:</td>
                    <td><input v-model="email" type="email" placeholder="example@gmail.com"></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input v-model="password" type="password" placeholder="**********"></td>
                </tr>
                <tr>
                    <td colspan="2" class="button-container">
                        <button @click="handleLogin" class="form-button">Sign In</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<!-- JavaScript part -->
<script setup>
    import HeroSection from '../components/HeroSection.vue';
    import { ref } from 'vue';
    import axios from 'axios';
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
    .form-container {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        border: 2px solid #4A8DB7;
        border-radius: 20px;
        margin: 120px auto;
        padding: 40px;
        width: 400px;
    }

    .form-container h3 {
        text-align: center;
        color: #4A8DB7;
        margin-bottom: 20px;
    }

    td {
        padding: 8px;
        font-weight: bold;
        color: #555;
    }

    input[type="email"],
    input[type="password"] {
        width: 100%;
        padding: 8px;
        border: 2px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .form-button {
        background-color: #4A8DB7;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        border: none;
        color: white;
        transition: 0.3s;
    }

    .form-button:hover {
        background-color: #356a8d;
    }

    .button-container {
        text-align: center;
        padding-top: 20px;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .form-container {
            width: 85%;
            padding: 30px;
        }

        table,
        tbody,
        tr,
        td {
            display: block;
            width: 100%;
        }

        td {
            padding: 5px 0;
        }
    }
</style>