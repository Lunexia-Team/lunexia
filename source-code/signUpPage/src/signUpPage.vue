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
        <h1>Join Us</h1>
        <p>Create your developer account and join our community.</p>
    </div>
    <div class="form-container">
        <h3>Create New Account</h3>
        <table>
            <tbody>
                <tr>
                    <td>First Name:</td>
                    <td><input v-model="firstName" type="text" placeholder="First Name"></td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td><input v-model="lastName" type="text" placeholder="Last Name"></td>
                </tr>

                <tr>
                    <td>Username:</td>
                    <td><input v-model="username" type="text" placeholder="CrazyGamer123"></td>
                </tr>

                <tr>
                    <td>Email Address:</td>
                    <td><input v-model="email" type="email" placeholder="example@gmail.com"></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input v-model="password" type="password" placeholder="**********"></td>
                </tr>
                <tr>
                    <td>Date of Birth:</td>
                    <td><input v-model="birthDate" type="date"></td>
                </tr>
                <tr>
                    <td colspan="2" class="button-container">
                        <button @click="createAccount" type="submit" class="form-button">Sign Up</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="footer">
        <p>© 2026 Lunexia - All rights reserved.</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const firstName = ref('');
    const lastName = ref('');
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const birthDate = ref(null);

    const createAccount = () => {

        if (!firstName.value || !lastName.value || !username.value || !email.value || !password.value || !birthDate.value) {
            alert('Please fill in the required fields (First Name, Last Name, Username, Email, Password, Date of Birth)!');
            return;
        }

        const tableData = new FormData();
        tableData.append('first name', firstName.value);
        tableData.append('last name', lastName.value);
        tableData.append('username', username.value);
        tableData.append('email', email.value);
        tableData.append('password', password.value);
        tableData.append('birthDate', birthDate.value);

        alert('The account has been successfully created!')
    }

</script>

<style src="./signUpPage.css"></style>