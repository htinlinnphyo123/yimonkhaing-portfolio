<template>
  <div>
    <Navbar></Navbar>

    <transition name="fade" mode="out-in">
      <div>
          <HomePage/>
        
        <div id="about" class="min-h-screen ">
          <h1>About Me</h1>
        </div>

        <div id="achievement" class="min-h-screen ">
          <h1>Career Details</h1>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { initFlowbite } from 'flowbite';
  import Navbar from '@/components/NavbarMenu.vue'
  import HomePage from "@/components/HomePage.vue";

  onMounted(()=>{
    initFlowbite();
  })


</script>

<style>
  body{
    overflow-x:hidden;
  }
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');
  *{
    font-family: "Roboto Slab", serif;
  }
  li{
    cursor:pointer;
  }

  .page div{
    font-size:20px;
    font-weight:800;
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .page {
    position: relative;
  }

</style>