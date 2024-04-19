<template>

  <NavbarMenu />
  <h1 class="text-3xl font-bold pt-36 pb-12">Skill Related Certificates</h1>

  <div class="mx-auto mb-4 lg:mb-10 text-xl">
    <h3 class="mb-3 font-bold">Coursera</h3>
    <p class="italic font-bold text-gray-400 mb-2">
      In March 2024, I successfully completed the Management Foundation in the Hospitality Industry program from the University of North Texas. <br/> Throughout the course, I gained comprehensive knowledge of hotel management strategies, staff rights, and the function of Human Resources within the hospitality sector.
    </p>
    <img :src="Coursera" class="sm:w-1/2 lg:w-1/3 block px-4 mx-auto" />
  </div>
  <div class="mx-auto mb-4 lg:mb-10 text-xl">
    <h3 class="mb-3 font-bold">
      Language
    </h3>
    <p class="italic font-bold text-gray-400 mb-2">
      I've cultivated proficiency in three languages, including my native Myanmar and English, <br/> where I achieved an overall score of 115 on Duolingo. <br/> Additionally, I've embarked on the exciting journey of learning Korean, reaching Level 1-1. <br/>These language skills not only enrich my personal experiences but also open doors to diverse cultural exchanges and opportunities in the tourism and hospitality industry.
    </p>
    <div class="lg:flex justify-center mt-4">
      <img :src="Korea" class="sm:w-1/2 lg:w-1/3 block px-4 mx-auto border-2 border-gray-800" />
      <img :src="Duolingo" class="sm:w-1/2 lg:w-1/3 block px-4 mx-auto border-2 border-gray-800" />
    </div>
  </div>

</template>
<script setup>


import {initFlowbite} from "flowbite";
import {onMounted} from "vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import Coursera from '../img/couseracerti.jpg'
import Korea from '../img/koreacerti.jpg'
import Duolingo from '../img/duolingo.png'

onMounted(()=>{
  initFlowbite();
  window.scrollTo(0, 0)
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