<template>
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

<style>
    * {

        box-sizing: border-box;

    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #f4f7f6;
        margin: auto;
    }

    .hero {
        border-bottom: 6px solid #4A8DB7;
        background-color: #2c3e50;
        text-align: center;
        color: white;
        padding: 20px;
    }

    .hero p {
        color: #b0bec5;
        font-size: 15px;
    }

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

        .navbar {
            padding: 15px 5px;
        }

        .navbar li {
            display: inline-block;
            padding: 5px 10px;
        }

        .navbar li a {
            font-size: 22px;
        }

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

        .hero h1 {
            font-size: 22px;
        }

        .hero p {
            font-size: 14px;
            padding: 0 10px;
        }
    }

    @media (max-width: 480px) {

        .navbar {
            width: 100%;
            padding: 5px 0;
        }

        .navbar ul {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
            width: 100%;
        }

        .navbar li {
            display: block;
            width: 100%;
            padding: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar li a {
            display: block;
            width: 100%;
            padding: 8px 0;
            font-size: 14px;
            line-height: 1.2;
        }

        .navbar li a i {
            margin-right: 5px;
        }

        .navbar li:last-child {
            border-bottom: none;
        }

        .form-container h3 {
            font-size: 18px;
            text-align: center;
        }
    }
</style>