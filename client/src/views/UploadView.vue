<!-- Upload View component -->

<!-- HTML part -->
<template>
    <HeroSection>
        <h1>Bring Your Game to Life!</h1>
        <p>Your masterpiece is ready. It's time to let the world play!</p>
    </HeroSection>
    <div class="upload-page-wrapper">
        <div class="form-container">
            <div class="form-header">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <h3>Game Details</h3>
            </div>
            <form @submit.prevent="handleUpload" class="upload-form">
                <div class="input-group">
                    <label>Game Title</label>
                    <input v-model="gameTitle" type="text" placeholder="e.g., Space Adventure">
                </div>
                <div class="input-group">
                    <label>Category</label>
                    <select v-model="category">
                        <option value="">Select a category...</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="racing">Racing</option>
                        <option value="rpg">RPG</option>
                        <option value="simulation">Simulation</option>
                        <option value="sports">Sports</option>
                        <option value="strategy">Strategy</option>
                        <option value="puzzle">Puzzle</option>
                        <option value="horror">Horror</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>Game File Link (Google Drive)</label>
                    <input v-model="gameFileLink" type="text" placeholder="Paste link here">
                    <a class="info-link" @click="openGuide">
                        <i class="fa-solid fa-circle-info"></i> How to upload? View Guide (PDF)
                    </a>
                </div>

                <div class="input-group">
                    <label>Description & Controls</label>
                    <textarea v-model="description" rows="4" placeholder="Tell players about your game..."></textarea>
                </div>

                <div class="button-wrapper">
                    <button type="submit" class="submit-button">
                        <span>Publish Game</span>
                        <i class="fa-solid fa-paper-plane"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<!-- JavaScript part -->
<script setup>
    import HeroSection from '../components/HeroSection.vue';
    import { ref } from 'vue';
    import axios from 'axios';

    const gameTitle = ref('');
    const category = ref('');
    const gameFileLink = ref('');
    const description = ref('');

    const API_URL = 'https://project-lunexia.onrender.com';

    // Function to open the PDF guide in a new tab
    const openGuide = () => {
        window.open('/lunexiagameupload.pdf', '_blank');
    };

    // Function to handle game upload
    const handleUpload = async () => {

        if (!gameTitle.value || !category.value || !gameFileLink.value) {
            alert('Please fill in the required fields!');
            return;
        }
        try {
            const gameData = {
                title: gameTitle.value,
                category: category.value,
                gameFileLink: gameFileLink.value,
                description: description.value
            };

            const response = await axios.post(`${API_URL}/api/upload`, gameData);

            if (response.status === 201 || response.status === 200) {
                alert("Upload successful!\nYour game will be published within 24-48 hours after review.");
                gameTitle.value = '';
                category.value = '';
                gameFileLink.value = '';
                description.value = '';
            }
        } catch (error) {
            console.error('Upload error: ', error);
            alert('An error occurred while uploading the game. Please try again later.');
        }
    };
</script>

<!-- CSS part -->
<style scoped>
    .upload-page-wrapper {
        background: radial-gradient(circle at center, #111827 50%, #030712 100%);
        padding: 60px 20px;
        min-height: 40vh;
        display: flex;
        justify-content: center;
    }

    .form-container {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 24px;
        padding: 40px;
        width: 100%;
        max-width: 600px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s ease;
    }

    .form-header {
        text-align: center;
        margin-bottom: 30px;
    }

    .form-header i {
        font-size: 50px;
        color: #4A8DB7;
        margin-bottom: 15px;
        filter: drop-shadow(0 0 10px rgba(74, 141, 183, 0.5));
        transition: all 0.3s ease;
    }

    .form-header i:hover {
        transform: scale(1.2);
        filter: drop-shadow(0 0 20px rgba(74, 141, 183, 0.5));
    }

    .form-header h3 {
        color: #ffffff;
        font-size: 25px;
        letter-spacing: 1px;
        margin: 0;
    }

    .upload-form {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .input-group label {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #f8fafc;
        font-size: 17px;
        font-weight: 500;
        margin-left: 4px;
    }

    input[type="text"],
    select,
    textarea {
        width: 100%;
        box-sizing: border-box;
        background-color: #0f172a;
        border: 1px solid #334155;
        border-radius: 12px;
        padding: 14px 18px;
        color: rgb(185, 197, 214);
        font-size: 16px;
        transition: all 0.3s ease;
        display: block;
    }

    textarea {
        resize: vertical;
        min-height: 120px;
    }

    input:focus,
    select:focus,
    textarea:focus {
        outline: none;
        border-color: #4A8DB7;
        box-shadow: 0 0 0 3px rgba(74, 141, 183, 0.1);
    }

    .info-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: #40a8e9;
        font-size: 16px;
        margin-top: 8px;
        margin-left: 4px;
        cursor: pointer;
        opacity: 0.8;
        text-decoration: none;
        transition: opacity 0.3s;
    }

    .info-link:hover {
        opacity: 1;
        text-decoration: underline;
    }

    .button-wrapper {
        display: flex;
        justify-content: center;
    }

    .submit-button {
        background: linear-gradient(135deg, #4A8DB7 0%, #356a8d 100%);
        color: white;
        border: none;
        border-radius: 12px;
        padding: 16px 32px;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
        box-shadow: 0 4px 15px rgba(74, 141, 183, 0.3);
        transition: all 0.3s ease;
    }

    .submit-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(74, 141, 183, 0.4);
        filter: brightness(1.1);
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .upload-page-wrapper {
            padding: 30px 15px;
        }

        .form-container {
            width: 100%;
            max-width: 100%;
            padding: 25px 20px;
            border-radius: 20px;
        }

        .form-header i {
            font-size: 32px;
        }

        .form-header h3 {
            font-size: 20px;
        }

        .input-group label {
            font-size: 15px;
        }

        input[type="text"],
        select,
        textarea {
            font-size: 16px;
            padding: 12px;
        }

        .info-link {
            font-size: 14px;
            justify-content: flex-start;
            width: 100%;
        }

        .submit-button {
            width: 100%;
            padding: 14px;
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        .form-container {
            padding: 20px 15px;
        }

        .form-header h3 {
            font-size: 18px;
        }

        textarea {
            min-height: 100px;
        }
    }
</style>