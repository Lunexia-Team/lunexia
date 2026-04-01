<!-- Profile View component -->

<!-- HTML part -->
<template>
    <HeroSection>
        <h1>My Profile</h1>
        <p>You can manage your developer account and games from here.</p>
    </HeroSection>
    <div class="page">
        <div v-if="loading" class="status-msg">Loading Profile...</div>
        <div class="profile-card" v-else-if="userData">
            <img class="profile-picture" src="../assets/profile.jpg" alt="Profile Picture">

            <div class="profile-info">
                <h2 class="full-name"> Full Name: {{ fullName }}</h2>
                <h2 class="username"> Username: {{ userData.username }}</h2>
                <h2 class="role"> Role: {{ userData.role }}</h2>
                <h2 class="email"> Email: {{ userData.email }} </h2>

                <button @click="logout" class="logout-btn">Log Out</button>
            </div>
        </div>
        <div v-else class="status-msg error">User not found.</div>
    </div>
</template>

<!-- JavaScript part -->
<script setup>
    import { ref, onMounted, computed } from 'vue';
    import axios from 'axios';
    import { useRouter } from 'vue-router';
    import HeroSection from '@/components/HeroSection.vue';

    const router = useRouter();
    const userData = ref(null);
    const loading = ref(true);

    const API_URL = 'https://project-lunexia.onrender.com';

    const currentUsername = localStorage.getItem('activeUsername');

    const fullName = computed(() => {
        return userData.value ? `${userData.value.firstName} ${userData.value.lastName}` : '';
    });

    const fetchProfile = async () => {
        if (!currentUsername) {
            alert('No active user found. Please sign in.');
            router.push('/signin');
            return;
        }

        try {
            const response = await axios.get(`${API_URL}/api/users/${currentUsername}`);
            userData.value = response.data;
        } catch (err) {
            console.error("Profile could not be loaded: ", err);
            if (err.response?.status === 404) {
                localStorage.removeItem('activeUsername');
                router.push('/signin');
            }
        } finally {
            loading.value = false;
        }
    };

    const logout = () => {
        localStorage.removeItem("activeUsername");
        localStorage.removeItem("user");
        router.push("/signin");
    };

    onMounted(fetchProfile);
</script>

<!-- CSS part -->
<style scoped>
    .page {
        padding: 80px 20px;
        background: radial-gradient(circle at center, #111827 50%, #030712 100%);
        min-height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .status-msg {
        color: #4A8DB7;
        font-size: 20px;
        margin-top: 50px;
    }

    .logout-btn {
        margin-top: 20px;
        background: transparent;
        color: #ef4444;
        border: 1px solid #ef4444;
        padding: 10px 20px;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        width: fit-content;
    }

    .logout-btn:hover {
        background: #ef4444;
        color: white;
        box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
    }

    .profile-card {
        display: flex;
        align-items: center;
        gap: 40px;
        background: rgba(31, 41, 55, 0.6);
        backdrop-filter: blur(12px);
        padding: 50px;
        border-radius: 30px;
        width: 100%;
        max-width: 900px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    }

    .profile-picture {
        width: 180px;
        height: 180px;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid #4A8DB7;
    }

    .full-name {
        font-size: 28px !important;
        font-weight: 800;
        color: #fff;
    }

    .username {
        color: #4A8DB7 !important;
        font-family: monospace;
        font-size: 18px !important;
    }

    .role {
        background: rgba(74, 141, 183, 0.15);
        color: #60a5fa;
        padding: 6px 15px;
        border-radius: 10px;
        border: 1px solid rgba(74, 141, 183, 0.3);
        width: fit-content;
    }

    .email {
        font-size: 14px;
        color: #94a3b8;
        margin-top: 5px;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .page {
            padding: 20px 15px;
        }

        .profile-card {
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
            gap: 20px;
        }

        .profile-info {
            align-items: center;
        }

        .profile-picture {
            width: 140px;
            height: 140px;
        }

        .full-name {
            font-size: 22px !important;
        }

        .logout-btn {
            width: 100%;
            max-width: 200px;
        }
    }
</style>