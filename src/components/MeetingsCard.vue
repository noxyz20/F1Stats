<template>
  <div
    ref="scrollContainer"
    class="mx-2 flex space-x-2 overflow-x-auto whitespace-nowrap custom-scrollbar"
  >
    <div
      class="flex flex-col bg-slate-900 border rounded shadow-lg border-slate-700 w-[200px] p-2"
      v-for="(meeting, index) in meetings"
      :key="index"
    >
      <small>{{ meeting.country_name }}</small>
      <p class="font-bold">{{ meeting.meeting_name }}</p>
      <p class="italic">{{ meeting.circuit_short_name }}</p>
      <small class="font-semibold">{{
        parseDateGMT(meeting.date_start, meeting.gmt_offset)
      }}</small>
      <button
        v-if="meeting.meeting_key === selectedMeeting"
        @click="closeMeeting()"
        class="bg-blue-700 hover:bg-blue-800 p-1 mt-1 rounded-md font-bold"
      >
        Close
      </button>
      <button
        v-else
        @click="openMeeting(meeting.meeting_key, index)"
        class="bg-primary-700 hover:bg-primary-800 p-1 mt-1 rounded-md font-bold"
      >
        View
      </button>
    </div>
  </div>
</template>

<script>
import ApiService from "../services/api.service";
import { parseDateGMT } from "../utils/globalFunction.js";

const apiService = new ApiService();

export default {
  props: ["year"],
  data() {
    return {
      meetings: [],
      selectedMeeting: null,
    };
  },
  mounted() {
    apiService.getMeetingsByYear(this.year).then((res) => {
      this.meetings = res.data;
      this.$nextTick(() => {
        this.$refs.scrollContainer.scrollLeft =
          this.$refs.scrollContainer.scrollWidth;
      });
    });
  },
  watch: {
    year() {
      apiService.getMeetingsByYear(this.year).then((res) => {
        this.meetings = res.data;
        this.$nextTick(() => {
          this.$refs.scrollContainer.scrollLeft =
            this.$refs.scrollContainer.scrollWidth;
        });
      });
    },
  },
  methods: {
    parseDateGMT: parseDateGMT,

    openMeeting(meeting_key) {
      this.selectedMeeting = meeting_key;
      this.$emit("changeMeeting", meeting_key);
    },
    closeMeeting() {
      this.selectedMeeting = null;
      this.$emit("changeMeeting", null);
    },
  },
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 5px; /* Height of horizontal scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgb(39, 53, 76); /* Color of the scrollbar track */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgb(73, 90, 118); /* Color of the scrollbar thumb */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgb(148 32 33); /* Color of the scrollbar thumb when hovered */
}
</style>
