<template>
  <h1 class="text-center font-bold text-2xl lg:text-3xl pt-8 lg:my-16 font-serif">
      Contact Me
  </h1>

  <div class="flex justify-center items-center gap-4">
    <a href="https://www.facebook.com/share/mdYhsmJt8VEYzKie/?mibextid=LQQJ4d">
      <img :src="facebook" class="w-12"/>
    </a>
    <a href="mailto:yimonkhaing.pma@gmail.com">
      <img :src="gmail" class="w-10"/>
    </a>
    <a href="tel:09940992313">
      <img :src="phone" class="w-12"/>
    </a>
    <a href="https://t.me/autumn_y23">
      <img :src="telegram" class="w-8"/>
    </a>
  </div>

  <div class="text-center italic mt-8 mb-20">
    <p>
      Thank for reviewing my portfolio
    </p>
    <p>
      Yi Mon Khaing
    </p>
  </div>




</template>
<style>

</style>
<script setup>

  import facebook from '../../src/img/facebook.png';
  import gmail from '../../src/img/gmail.webp'
  import phone from '../../src/img/phone.avif'
  import telegram from '../../src/img/telegram.webp'



</script>