<template>
  <h1 id="about" class="text-center font-bold text-2xl lg:text-4xl py-10 lg:py-16 font-serif">
    <sup>
      <i class="fa-solid fa-quote-left" style="font-size:16px;"></i>
    </sup>
    About Me
    <sup>
      <i class="fa-solid fa-quote-right" style="font-size:16px;"></i>
    </sup>
  </h1>
  <div class="lg:grid lg:grid-cols-2 px-4 md:px-10 lg:px-16  mb-20  max-w-screen overflow-x-hidden">
    <div class="flex justify-center items-center lg:tracking-wide lg:leading-10 mb-8 lg:mb-0 about">
      Since childhood, I've harbored a fervent dream of studying management. During the difficulties of Covid-19 and the Myanmar coup, I had to explore new paths for my future education and discovered my passion for hospitality. With my father's unwavering support and shared aspirations, I confidently selected Bangkok University for its inviting campus, modern facilities, and promising post-graduation opportunities. Excited to dive into the lively BU community, I'm ready to begin my journey in hospitality management with enthusiasm.
    </div>
    <div class="hobby lg:px-10">
      <div class="my-4 lg:my-6 ps-4 border-l-4 border-blue-600">
        <h2 class="text-lg lg:text-xl font-bold">Hobbies</h2>
        <p class="text-md lg:text-lg italic">Listening to Music, Sketching, watching productive vlogs</p>
      </div>
      <div class="my-4 lg:my-6 ps-4 border-l-4 border-red-600">
        <h2 class="text-lg lg:text-xl font-bold">Ambition</h2>
        <p class="text-md lg:text-lg italic">To be a hotel manager </p>
      </div>
      <div class="my-4 lg:my-6 ps-4 border-l-4 border-yellow-600">
        <h2 class="text-lg lg:text-xl font-bold">Strong and Weak points</h2>
        <p class="text-md lg:text-lg italic">
          <span class="font-semibold">Strong</span> - time management <br/>
          <span class="font-semibold">Weak</span> - being too detail-oriented and losing sight of the big picture</p>
      </div>
    </div>
  </div>
</template>
<script setup>

import {onMounted} from "vue";

onMounted(()=>{
  window.addEventListener('scroll',function(){
    if(document.querySelector('.hobby')!==null && document.querySelector('.about')!==null){
      if(window.scrollY>300 && window.scrollY<1500){
        document.querySelector('.about').classList.add("active");
        document.querySelector('.hobby').classList.add('active');
      }else{
        document.querySelector('.about').classList.remove("active");
        document.querySelector('.hobby').classList.remove('active');
      }
    }
  })

})

</script>
<style>
h2,.hobby p{
  text-align: start;
}
.hobby h2{
  margin-bottom: 10px;
}
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