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
                    <td><input type="text" placeholder="First Name"></td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td><input type="text" placeholder="Last Name"></td>
                </tr>

                <tr>
                    <td>Username:</td>
                    <td><input type="text" placeholder="CrazyGamer123"></td>
                </tr>

                <tr>
                    <td>Email Address:</td>
                    <td><input type="email" placeholder="example@gmail.com"></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" placeholder="**********"></td>
                </tr>
                <tr>
                    <td>Date of Birth:</td>
                    <td><input type="date"></td>
                </tr>
                <tr>
                    <td colspan="2" class="button-container">
                        <input type="submit" value="Sign Up" class="form-button">
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

</script>

<style src="./signUpPage.css"></style>