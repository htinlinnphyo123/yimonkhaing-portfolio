<template>
    <nav class="z-40 fixed top-0 left-0 py-2 md:py-4 border-gray-200 dark:bg-gray-900 flex justify-center items-center">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4 w-screen lg:px-16">
        <div class="hidden lg:block">
          <h1 class="text-white text-xl font-bold">My Portfolio</h1>
        </div>
        <div class="w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-row justify-center items-center text-white p-4 md:p-0 mt-4 rounded-lg bg-transparent space-x-4 md:space-x-8 lg:space-x-16 md:mt-0 md:border-0 font-bold mx-auto">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#achievement">Achievement</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
<script setup>

</script>
<style>
  nav{
    max-width: 100vw;
    background-color: #01257D; /* For browsers that do not support gradients */
  }
</style>