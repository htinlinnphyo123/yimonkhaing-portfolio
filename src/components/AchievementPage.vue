<template>

  <h1 class="text-center font-bold text-2xl lg:text-4xl py-10 pt-8 lg:py-12 font-serif bg-gray-50">
    <sup>
      <i class="fa-solid fa-quote-left" style="font-size:16px;"></i>
    </sup>
    Achievement
    <sup>
      <i class="fa-solid fa-quote-right" style="font-size:16px;"></i>
    </sup>
  </h1>

  <div class="lg:flex justify-around items-center bg-gray-50 py-8">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 mx-4 sm:mx-auto mb-6 card">
      <img class="rounded-t-lg object-cover" :src="AchievementCard" alt="" />
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Academic Achievements</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Prizes from Primary School,High School Diploma and Other Certificates
        </p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          See More
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 mx-4 sm:mx-auto mb-6 card">
      <img class="rounded-t-lg object-cover" :src="CertificateCard" alt="" />
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Skills Related Majors</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Certificates related to Hospitality and Language Skill</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 mx-4 sm:mx-auto mb-6 card">
      <img class="rounded-t-lg object-cover" :src="VolunteerCard" alt="" />
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Volunteering Experiences</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Training and Development Officer, <br/> Volunteer at Community Health Center</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>


  </div>

</template>
<style>
  .card{
    transform:translateY(-50px);
    opacity: 0.5;
    transition: all 0.5s linear;
  }
  .card.active{
    opacity: 1;
    transform:translate(0);
  }
</style>
<script setup>

  import {onMounted} from "vue";
  import AchievementCard from '../img/achievementcard.png'
  import CertificateCard from '../img/certificate.jpg'
  import VolunteerCard from '../img/volunteering.jpg'

  onMounted(()=>{
    const cards = document.querySelectorAll('.card');
    window.addEventListener('scroll',function(){
      if(window.scrollY>900){
        cards.forEach(function(card){
          card.classList.add('active');
        })
      }else{
        cards.forEach(function(card){
          card.classList.remove('active');
        })
      }
    })
  })


</script>