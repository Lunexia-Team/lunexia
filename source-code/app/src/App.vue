<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f7f6;
    margin: 0;
    padding: 0;
  }
</style>