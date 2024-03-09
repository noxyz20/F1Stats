<template>
  <div>
    <select
      class="border-0 bg-baltic rounded-lg p-2 focus:outline-none"
      v-model="selectedSeason"
      @change="getMeetings"
    >
      <option v-for="season in seasons" :key="season" :value="season">
        {{ season }}
      </option>
    </select>
  </div>
</template>

<script>
import ApiService from "../services/api.service";
const apiService = new ApiService();
export default {
  data() {
    return {
      selectedSeason: "",
      seasons: [],
    };
  },
  async mounted() {
    let res = await apiService.getSeasons()
    this.seasons = res;
    this.selectedSeason = res[res.length - 1];
    this.getMeetings();
  },
  methods: {
    getMeetings() {
      this.$emit("changeYears", this.selectedSeason);
    },
  },
};
</script>
