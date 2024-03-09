<template>
  <header>
    <div class="w-full">
      <div class="w-full">
        <navbar />
        <div class="w-full text-center mt-[100px]">
          <p class="text-xl">
            Open source web ressources for results and stats for Formula One.
          </p>
          <p class="text-xl italic">Official F1 data powered by openf1 api.</p>
        </div>
      </div>
      
      
    </div>
  </header>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "header-app",
  components: {
    Navbar,
  },
};
</script>
