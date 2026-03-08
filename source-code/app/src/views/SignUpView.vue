<template>
    <HeroSection>
        <h1>Join Us</h1>
        <p>Create your developer account and join our community.</p>
    </HeroSection>
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
</template>

<script setup>
    import HeroSection from '@/components/HeroSection.vue';
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

<style>
    .form-container {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        border: 2px solid #4A8DB7;
        border-radius: 20px;
        margin: 70px auto;
        padding: 40px;
        width: 400px;
    }

    td {
        padding: 8px;
        font-weight: bold;
        color: #555;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="date"] {
        width: 100%;
        padding: 8px;
        border: 2px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        max-width: 400px;
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

    @media (max-width: 768px) {

        .form-container {
            width: 85%;
            max-width: 500px;
            margin: 50px auto;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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
            text-align: left;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="date"] {
            margin-bottom: 10px;
        }

        .button-container {
            padding-top: 15px;
        }
    }

    @media (max-width: 480px) {

        .form-container h3 {
            font-size: 18px;
            text-align: center;
        }
    }
</style>