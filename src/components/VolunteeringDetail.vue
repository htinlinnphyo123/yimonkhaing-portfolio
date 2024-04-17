<template>

  <NavbarMenu />
  <h1 class="text-3xl font-bold pt-36 pb-12">Volunteering Experiences</h1>

  <div class="mx-auto mb-4 lg:mb-10 text-xl">
    <h3 class="mb-3 font-bold">
      Working Under HR Department and Community Health Center
    </h3>
    <p class="italic font-bold text-gray-400 mb-2">
      Currently, I engage in two rewarding volunteer roles that not only enrich my skill set but also nourish my passion for community service. <br/> In one position, I manage patient records and medication lists, including access to injection schedules, on Tuesdays and Sundays.<br/> The warm atmosphere and supportive network at this medical facility make every visit a delight, fostering valuable connections and personal growth. <br/> Simultaneously, I serve as a Training and Development Officer for an online volunteering organization, where I coordinate schedules, projects, and interdepartmental meetings. <br/>These experiences have honed my communication skills and reinforced the importance of effective collaboration, preparing me for future endeavors in the vibrant tourism and hospitality industry.
    </p>
    <img :src="Clinic" class="sm:w-1/2 lg:w-1/3 block px-4 mx-auto border-2 border-gray-800" />
    <div class="mb-8 mt-2">
      <a class="text-blue-500 underline" target="_blank" href="https://www.facebook.com/profile.php?id=100064933050222&mibextid=ZbWKwL">Community Health Center Facebook Page.</a>
    </div>
    <img :src="HrPhoto" class="sm:w-1/2 lg:w-1/3 block px-4 mx-auto border-2 border-gray-800" />
    <div class="mb-8">
      <a class="text-blue-500 underline" target="_blank" href="https://www.facebook.com/share/6VbEeABd2z6ujTnk/?mibextid=LQQJ4d">The Article Facebook Link</a>
    </div>

  </div>

</template>
<script setup>


import {initFlowbite} from "flowbite";
import {onMounted} from "vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import HrPhoto from '../img/hrdepartment.jpg';
import Clinic from '../img/saykhan.jpg'

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