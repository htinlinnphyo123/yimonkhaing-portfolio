<template>
  <div id="home" class="min-h-screen flex justify-center items-center">
    <div class="absolute top-0 left-0 w-screen h-screen flex flex-col lg:flex-row justify-around items-center">
      <div class="flex justify-center items-center">
        <img :src="image" class="w-60 h-60 lg:w-80 lg:h-80 rounded-full mt-24 lg:mt-0 object-cover shadow-lg"/>
      </div>
      <div class="flex justify-center items-center pb-12 lg:pb-0">
        <p class="text-2xl font-bold text-white">Hello Everyone &#128519; <br/>
          <span class="block my-4">I am Ma Yi Mon Khaing</span>
          <span class="block">who is passionate in Hospitality</span>
        </p>
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