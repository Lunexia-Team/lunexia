<!-- Upload View component -->

<!-- HTML part -->
<template>
    <HeroSection>
        <h1>Upload Your Game</h1>
        <p>It's time to share your masterpiece with the world!</p>
    </HeroSection>
    <div class="form-container">
        <h3>Game Details</h3>
        <form @submit.prevent="handleUpload">
            <table>
                <tbody>
                    <tr>
                        <td>Game Title:</td>
                        <td><input v-model="gameTitle" type="text" placeholder="e.g., Space Adventure"></td>
                    </tr>
                    <tr>
                        <td>Category:</td>
                        <td>
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
                        </td>
                    </tr>
                    <tr>
                        <td>Game File Link (Google Drive):</td>
                        <td>
                            <input v-model="gameFileLink" type="text" placeholder="Paste Google Drive link here">
                            <a class="info-link" id="pdfAcBtn" @click="openGuide">
                                <i class="fa-solid fa-circle-info"></i> How to upload? View Guide (PDF)
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea v-model="description" rows="5"
                                placeholder="Game description and controls..."></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="button-container">
                            <button type="submit" class="form-button">Upload Game</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
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
    .form-container {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        border: 2px solid #4A8DB7;
        border-radius: 20px;
        margin: 50px auto;
        padding: 30px;
        width: 90%;
        max-width: 550px;
        background-color: white;
    }

    .form-container h3 {
        text-align: center;
        color: #4A8DB7;
        margin-bottom: 20px;
    }

    table {
        width: 100%;
    }

    td {
        padding: 12px 5px;
        font-weight: bold;
        color: #555;
        vertical-align: middle;
    }

    input[type="text"],
    input[type="file"],
    select,
    textarea {
        width: 100% !important;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 5px;
        display: block;
    }

    textarea {
        resize: vertical;
        min-height: 100px;
    }

    .info-link {
        display: block;
        font-size: 12px;
        color: #4A8DB7;
        text-decoration: none;
        margin-top: 5px;
        cursor: pointer;
    }

    .info-link:hover {
        text-decoration: underline;
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
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {

        .form-container {
            width: 95%;
            margin: 30px auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        table,
        tbody,
        tr,
        td {
            display: block;
            width: 100%;
        }

        td {
            padding: 8px 0;
            text-align: center;
        }

        input[type="text"],
        input[type="file"],
        select,
        textarea {
            width: 100% !important;
            text-align: center;
            margin: 0 auto;
        }

        .info-link {
            text-align: center;
            margin: 8px 0;
        }

        .button-container {
            padding-top: 20px;
        }

        .form-button {
            width: 80%;
            padding: 12px;
        }
    }

    @media (max-width: 480px) {

        .form-container h3 {
            font-size: 18px;
        }

        td {
            font-size: 14px;
        }
    }
</style>