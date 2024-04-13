<template>
  <div id="home" class="min-h-screen flex justify-center items-center">
    <div class="absolute top-0 left-0 w-screen h-screen flex flex-col lg:flex-row justify-around items-center">
      <div id="img-wrapper" class="w-80 h-80 flex justify-end items-center">
        <img :src="image" class="w-80 h-80 mt-24 lg:mt-0 object-cover shadow-lg z-100 absolute top-0 left-0"/>
      </div>
      <div class="flex justify-center text-start items-center pb-12 lg:pb-0">
        <p style="line-height: 50px;" class="text-2xl font-bold text-white tracking-wider"> Hello ! <br/>
           I am Yi Mon Khaing from Myanmar <br/>
          and i have a strong passion <br/> for pursuing studies in Hospitality
        </p>
      </div>
    </div>
  </div>
</template>
<style>
#img-wrapper{
  position: relative;
}
#img-wrapper:before{
  content: '';
  width:320px;
  height:320px;
  border:1px solid white;
  position: absolute;
  top:-20px;
  right:-20px;
}
</style>
<script setup>
  import image from '@/img/my-pic.jpg'
</script>
<style>
  #home{
    background-color: #01257D; /* For browsers that do not support gradients */
  }
</style>