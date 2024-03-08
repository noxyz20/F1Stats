<template>
  <div
    ref="scrollContainer"
    class="mx-2 flex space-x-2 overflow-x-auto whitespace-nowrap custom-scrollbar"
  >
    <div v-if="(meetings.length != 0)" class="flex flex-row space-x-2">
      <div
        class="flex flex-col bg-slate-900 border rounded shadow-lg border-slate-700 w-[200px] p-2"
        v-for="(meeting, index) in meetings"
        :key="index"
      >
        <small>{{ meeting.country_name }}</small>
        <p :id="'meeting_name-'+ index" class="font-bold">{{ meeting.meeting_name }}</p>
        <p class="italic">{{ meeting.circuit_short_name }}</p>
        <small class="font-semibold">{{
          parseDateGMT(meeting.date_start, meeting.gmt_offset)
        }}</small>
        <button
          v-if="meeting.meeting_key === selectedMeeting"
          :id="'button_meeting-'+ index"
          @click="closeMeeting()"
          class="bg-blue-700 hover:bg-blue-800 p-1 mt-1 rounded-md font-bold"
        >
          Close
        </button>
        <button
          v-else
          :id="'button_meeting-'+ index"
          @click="openMeeting(meeting.meeting_key, meeting.meeting_name)"
          class="bg-primary-700 hover:bg-primary-800 p-1 mt-1 rounded-md font-bold"
        >
          View
        </button>
      </div>
    </div>
    <div v-else class="flex flex-row space-x-2">
      <div
        class="flex flex-col bg-slate-900 border rounded shadow-lg border-slate-700 w-[200px] p-2"
        v-for="(meeting, index) in 4"
        :key="index"
      >
        <div class="animate-pulse">
          <div
            class="h-1 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px] my-2"
          ></div>
          <div
            class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full my-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[50px] my-3"
          ></div>
          <div
            class="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full my-2.5"
          ></div>
          <div
            class="h-[32px] bg-gray-200 rounded dark:bg-gray-700 w-full my-3"
          ></div>
        </div>
      </div>
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
  watch: {
    year() {
      this.getMeetings()
      this.$nextTick(() => {
          this.$refs.scrollContainer.scrollLeft =
          this.$refs.scrollContainer.scrollWidth;
      });
    },
  },
  methods: {
    parseDateGMT: parseDateGMT,

    openMeeting(meeting_key, meeting_name) {
      this.selectedMeeting = meeting_key;
      this.$emit("changeMeeting", meeting_key, meeting_name);
    },
    closeMeeting() {
      this.selectedMeeting = null;
      this.$emit("changeMeeting", null);
    },
    getMeetings() {
      apiService.getMeetingsByYear(this.year).then((res) => {
        this.meetings = res.data;
      });
    }
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
