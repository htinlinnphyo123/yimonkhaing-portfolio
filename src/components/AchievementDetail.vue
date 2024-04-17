<template>

  <NavbarMenu />
  <h1 class="text-3xl font-bold pt-36 pb-12">Academic Achievement</h1>

  <div class="mx-auto mb-4 lg:mb-10 text-xl">
    <h3 class="mb-3 font-bold">Primary Prize</h3>
    <p class="italic font-bold text-gray-400 mb-2">I've been an active and outstanding student since my primary school <br/> and i also got some prizes as shown in the picture.</p>
    <img :src="PrimaryPrice" class="sm:w-1/2 lg:w-1/3 block px-4 mx-auto" />
  </div>
  <div class="mx-auto mb-4 lg:mb-10 text-xl">
    <h3 class="mb-3 font-bold">GED Certificate</h3>
    <p class="italic font-bold text-gray-400 mb-2">For my high school diploma, i took my GED exam in Feb,2024. I got 1 credit and also 1 college ready.
      <br/>The last two are 160 and above. My overall score is 671.</p>
    <div class="lg:flex lg:justify-center gap-4">
      <img :src="GedCerti" class="sm:w-1/2 lg:w-1/3 block px-4 mx-auto lg:mx-0" />
      <img :src="GedCerti2" class="sm:w-1/2 lg:w-1/3 block px-4 mx-auto lg:mx-0" />
    </div>
  </div>
  <div class="mx-auto mb-8 lg:mb-10 text-xl">
    <h3 class="mb-3 font-bold">General English Class</h3>
    <p class="italic font-bold text-gray-400 mb-2">
      I actively participated and excelled in my General English Class as well. I got certificates not only for my academic but also for debates, projects and being proficient in managing time effectively.
    </p>
    <img :src="SuThree" class="sm:w-1/2 lg:w-1/3 block px-4 mx-auto"/>
    <div id="collection" class="grid md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 lg:gap-10 lg:mx-20">
      <img :src="SuOne" />
      <img :src="SuTwo" />
      <img :src="SuFour" />
      <img :src="SuFive" />
      <img :src="SuSix" />
      <img :src="SuSeven" />
      <img :src="SuEight" />
      <img :src="SuNine" />
      <img :src="SuTen" />
      <img :src="SuEleven" class="no-border" />
      <img :src="SuTwelve" class="no-border" />
    </div>
  </div>

</template>
<script setup>
import PrimaryPrice from '../img/primaryprize.jpg';
import GedCerti from '../img/gedcerti.jpg';
import GedCerti2 from '../img/gedcertitwo.jpg';
import NavbarMenu from '@/components/NavbarMenu.vue';
import SuOne from '../img/su1.jpg'
import SuTwo from '../img/su2.jpg'
import SuThree from '../img/su3.jpg'
import SuFour from '../img/su4.jpg'
import SuFive from '../img/su5.jpg'
import SuSix from '../img/su6.jpg'
import SuSeven from '../img/su7.jpg'
import SuEight from '../img/su8.jpg'
import SuNine from '../img/su9.jpg'
import SuTen from '../img/su10.jpg'
import SuEleven from '../img/su11.jpg'
import SuTwelve from '../img/su12.jpg'

import {initFlowbite} from "flowbite";
import {onMounted} from "vue";

onMounted(()=>{
  initFlowbite();

})

</script>
<style scoped>
  img{
    padding:5px;
  }
  #collection img{
    border:1px solid #000;
  }
  .no-border{
    border:none !important;
  }
</style>