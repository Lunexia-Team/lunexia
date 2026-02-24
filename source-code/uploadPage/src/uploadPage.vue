<template>
    <div class="navbar">
        <ul>
            <li><a href="/"><i class="fa-solid fa-house"></i> Home</a></li>
            <li><a href="/games"><i class="fa-solid fa-gamepad"></i> Games</a></li>
            <li><a href="/upload"><i class="fa-solid fa-upload"></i> Upload Game</a></li>
            <li><a href="/sign-up"><i class="fa-solid fa-user"></i> Sign Up</a></li>
        </ul>
    </div>

    <div class="hero">
        <h1>Upload Your Game</h1>
        <p>It's time to share your masterpiece with the world!</p>
    </div>

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
                        <td>Game File (.zip):</td>
                        <td>
                            <input type="file" accept=".zip" @change="handleFileChange">
                            <a class="info-link" id="pdfAcBtn" @click="openGuide">
                                <i class="fa-solid fa-circle-info"></i> How to upload? View Guide (PDF)
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Cover Image:</td>
                        <td><input type="file" accept="image/*" @change="handleImageChange"></td>
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

    <div class="footer">
        <p>&copy; 2026 Lunexia - All rights reserved.</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const gameTitle = ref('');
    const category = ref('');
    const gameFile = ref(null);
    const coverImage = ref(null);
    const description = ref('');

    const handleFileChange = (event) => {
        gameFile.value = event.target.files[0];
    };

    const handleImageChange = (event) => {
        coverImage.value = event.target.files[0];
    };

    const openGuide = () => {
        window.open('./lunexiagameupload.pdf', '_blank');
    };

    const handleUpload = () => {

        if (!gameTitle.value || !category.value || !gameFile.value || !coverImage.value) {
            alert('Please fill in the required fields (Title, Category, File, Cover Image)!');
            return;
        }

        const formData = new FormData();
        formData.append('title', gameTitle.value);
        formData.append('category', category.value);
        formData.append('file', gameFile.value);
        formData.append('image', coverImage.value);
        formData.append('description', description.value);
        alert('The game has been successfully delivered!\nThe game has been successfully delivered! You will be contacted via email within 1-7 days.');
    };
</script>

<style src="./uploadPage.css"></style>