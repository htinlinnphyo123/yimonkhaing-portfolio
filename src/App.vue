<template>
  <div>


<nav class="bg-gray-50 shadow-lg py-4 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yi Mon Khaing</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li @click="currentPage = 'home'">Home</li>
        <li @click="currentPage = 'about'">About</li>
        <li @click="currentPage = 'career'">Career</li>
      </ul>
    </div>
  </div>
</nav>
<transition name="fade" mode="out-in">
      <div :key="currentPage" class="page">
    <div v-if="currentPage === 'home'">
      <!-- Home Page Component -->
      <h1>Welcome to My Portfolio</h1>
      <!-- Add your home page content here -->
    </div>
    
    <div v-else-if="currentPage === 'about'">
      <!-- About Page Component -->
      <h1>About Me</h1>
      <!-- Add your about page content here -->
    </div>
    
    <div v-else-if="currentPage === 'career'">
      <!-- Career Page Component -->
      <h1>Career Details</h1>
      <!-- Add your career page content here -->
    </div>
  </div>
    </transition>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const currentPage = ref('home');
  
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');
*{
  font-family: "Roboto Slab", serif;
}
li{
  cursor:pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s linear;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.page {
  position: relative;
}

</style>