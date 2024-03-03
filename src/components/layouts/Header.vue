<template>
  <header>
    <div class="w-full">
      <div class="p-2 w-full">
        <div class="flex w-full items-center">
          <div class="w-5/6">
            <p class="text-4xl font-bold uppercase">
              F1<small class="italic">Stats</small>
            </p>
          </div>
          <div class="w-1/6">
            <a
              class="flex space-x-2 hover:underline"
              href="https://github.com/noxyz20/F1Stats"
              target="_blank"
            >
              <GithubIcon />
              <p>Contribute on github</p>
            </a>
          </div>
        </div>
        <div class="w-full text-center mt-8">
          <p class="text-xl">
            Open source web ressources for results and stats for Formula One.
          </p>
          <p class="text-xl italic">Official F1 data powered by openf1 api.</p>
        </div>
      </div>
      <!--<nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link
      </nav>>-->
    </div>
  </header>
</template>

<script>
import GithubIcon from "../icons/Github.vue";

export default {
  name: "header-app",
  components: {
    GithubIcon,
  },
};
</script>
