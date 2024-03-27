<template>
  <div id="home" class="min-h-screen flex justify-center items-center">
    <div class="absolute top-0 left-0 w-screen h-screen flex flex-col lg:flex-row justify-around items-center">
      <div class="flex justify-center items-center">
        <img :src="image" class="w-80 h-80 rounded-full object-cover shadow-lg"/>
      </div>
      <div class="flex justify-center items-center">
        <p class="text-2xl font-bold text-white">I am yi Mon Khine. <br/> I live in pyinmana </p>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script setup>
  import image from '@/img/my-pic.jpg'
</script>
<style>
  #home{
    background-color: #182685; /* For browsers that do not support gradients */
    //background-image: linear-gradient(to right, #7F7FD5 , );

  }
</style>