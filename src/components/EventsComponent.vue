<template>
  <div class="border border-slate-600 rounded-lg p-2">
    <div class="flex flex-row-reverse items-center">
      <SeasonPicker @changeYears="SwitchSeason" />
      <p class="mr-2">Season :</p>
    </div>
    <MeetingsCard :year="selectedSeason" @changeMeeting="SwitchMeeting" />
    <SessionsTable :meetingKey="meetingKey ?? null" :meetingName="meetingName" />
  </div>
</template>

<script>
import MeetingsCard from "./MeetingsCard.vue";
import SeasonPicker from "./SeasonPicker.vue";
import SessionsTable from "./SessionsTable.vue";

export default {
  components: {
    MeetingsCard,
    SeasonPicker,
    SessionsTable,
  },
  data() {
    return {
      selectedSeason: "",
      meetingKey: null,
      meetingName: "",
    };
  },
  methods: {
    SwitchSeason(season) {
      this.selectedSeason = season;
    },

    SwitchMeeting(meeting_key, meeting_name) {
      this.meetingKey = meeting_key;
      this.meetingName = meeting_name;
    },
  },
};
</script>

<style></style>
./MeetingsCard.vue
