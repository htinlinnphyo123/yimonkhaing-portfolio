<template>
  <div id="home" class="min-h-screen flex justify-center items-center">
    <div class="w-screen h-screen flex flex-col lg:flex-row justify-around items-center">
      <div id="img-wrapper" class="w-80 h-80 flex justify-end items-center my-40">
        <img :src="image" class="w-80 h-80 lg:mt-0 object-cover shadow-lg z-100 absolute top-0 left-0"/>
      </div>
      <div id="head-text" class="flex justify-center text-start items-center pb-12 lg:pb-0">
        <p style="line-height: 50px;" class="text-lg xl:text-2xl font-bold text-white tracking-wider"> Hello ! <br/>
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
  animation: show 2s ease-out;
  animation-delay: 0.3s;
}
#head-text{
  animation: show 2s ease-out;
  animation-delay: 0.3s;
}
@keyframes show {
  from{
    opacity:0;
  }
  to {
    opacity: 1;
  }
}
#img-wrapper:before{
  content: '';
  width:320px;
  height:320px;
  border:1px solid white;
  position: absolute;
  top:0;
  left:0;
  transform: translate(20px,-20px);
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