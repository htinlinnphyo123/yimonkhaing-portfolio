<template>
  <NavbarMenu />
  <div>
    <HomePage/>
    <div id="about" class="">
      <AboutPage/>
    </div>

    <div id="achievement" class="">
      <AchievementPage />
    </div>

    <div id="contact">
      <ContactPage />
    </div>
  </div>
</template>
<script setup>
import ContactPage from "@/components/ContactPage.vue";
import HomePage from "@/components/HomePage.vue";
import AchievementPage from "@/components/AchievementPage.vue";
import AboutPage from "@/components/AboutPage.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
</script>