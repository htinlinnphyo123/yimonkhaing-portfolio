<template>
  <h1 class="text-center font-bold text-2xl lg:text-4xl py-10 lg:py-16 font-serif">
    <sup>
      <i class="fa-solid fa-quote-left" style="font-size:16px;"></i>
    </sup>
    About Me
    <sup>
      <i class="fa-solid fa-quote-right" style="font-size:16px;"></i>
    </sup>
  </h1>
  <div class="lg:grid lg:grid-cols-2 px-4 md:px-10 lg:px-16  mb-20">
    <div class="flex justify-center items-center lg:tracking-wide lg:leading-10 mb-8 lg:mb-0 about">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <div class="flex justify-center items-center flex-col hobby">
      <div class="my-4 lg:my-6 ps-4 border-l-8 border-blue-600">
        <h2 class="text-lg lg:text-2xl font-bold">Hobby</h2>
        <p class="text-md lg:text-lg italic">Watching Movie , Listening music , Dancing</p>
      </div>
      <div class="my-4 lg:my-6 ps-4 border-l-8 border-red-600">
        <h2 class="text-lg lg:text-2xl font-bold">Hobby</h2>
        <p class="text-md lg:text-lg italic">Watching Movie , Listening music , Dancing</p>
      </div>
      <div class="my-4 lg:my-6 ps-4 border-l-8 border-yellow-600">
        <h2 class="text-lg lg:text-2xl font-bold">Hobby</h2>
        <p class="text-md lg:text-lg italic">Watching Movie , Listening music , Dancing</p>
      </div>
    </div>
  </div>
</template>
<script setup>

import {onMounted} from "vue";

onMounted(()=>{
  window.addEventListener('scroll',function(){
    if(window.scrollY>300 && window.scrollY<1500){
      document.querySelector('.about').classList.add("active");
      document.querySelector('.hobby').classList.add('active');
    }else{
      document.querySelector('.about').classList.remove("active");
      document.querySelector('.hobby').classList.remove('active');
    }
  })

})

</script>
<style>
.about{
  transform:translate(-300px);
  opacity:0.5;
  transition:all 1s ease-out;
}
.about.active{
  transform:translate(0);
}
.active{
  opacity:100;
}
.hobby{
  transform:translate(300px);
  opacity:0.5;
  transition:all 1s ease-out;
}
.hobby.active{
  transform:translate(0);
}
.active{
  opacity:1;
}

</style>