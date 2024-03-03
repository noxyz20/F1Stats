<template>
  <div class="mt-4">
    <div
      v-if="meetingKey === null"
      class="bg-slate-900 w-full border border-slate-700 rounded text-center py-16"
    >
      <h2 class="text-lg font-thi italic text-slate-700">
        No meeting selected
      </h2>
    </div>
    <table
      v-else
      class="w-full text-sm text-left rtl:text-right border-2 border-slate-700"
    >
      <thead class="text-xs text-white uppercase bg-slate-900">
        <tr>
          <th scope="col" class="p-4">Session</th>
          <th scope="col" class="p-4">Start Date</th>
          <th scope="col" class="p-4">End Date</th>
          <th scope="col" class="p-4">Top 3</th>
          <th scope="col" class="p-4">Fastest lap</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(session, index) in sessions"
          :key="session.id"
          :class="index % 2 === 0 ? 'bg-slate-700' : 'bg-slate-800'"
        >
          <td class="items-center px-6 py-4 font-semibold">
            {{ session.session_name }}
          </td>
          <td class="items-center px-6 py-4 italic">
            {{ parseDateGMT(session.date_start, session.gmt_offset) }}
          </td>
          <td class="items-center px-6 py-4 italic">
            {{ parseDateGMT(session.date_end, session.gmt_offset) }}
          </td>
          <td class="items-center px-6 py-4">
            <div class="flex -space-x-4 rtl:space-x-reverse">
              <img
                v-for="(driver, idx) in podiums[session.session_key]"
                :key="idx"
                class="w-10 h-10 rounded-full"
                :src="
                  '/images/drivers/' + driver.image + '.avif' ??
                  'https://via.placeholder.com/150'
                "
                alt="driver-image"
              />
            </div>
          </td>
          <td class="flex items-center px-6 py-4">
            <img
              class="w-10 h-10 rounded-full"
              :src="
                '/images/drivers/' +
                  fasterLaps[session.session_key]?.driver?.image +
                  '.avif' ?? 'https://via.placeholder.com/150'
              "
              alt="driver-image"
            />
            <div class="ps-3">
              <div class="text-base font-semibold">
                {{
                  fasterLaps[session.session_key]?.driver?.name ?? "No driver"
                }}
              </div>
              <div class="font-normal text-gray-500">
                {{ fasterLaps[session.session_key]?.lap_duration ?? "---" }}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiService from "../services/api.service";
import {
  parseDateGMT,
  parseSecondeToLapTime,
} from "../utils/globalFunction.js";

const apiService = new ApiService();

export default {
  props: ["meetingKey"],
  data() {
    return {
      sessions: [],
      fasterLaps: [],
      podiums: [],
    };
  },
  mounted() {
    apiService.getSessionByMeetingKey(this.meetingKey).then((res) => {
      this.sessions = res.data;
      this.sessions.forEach((session) => {
        this.getFasterLap(session.session_key);
        this.getPodium(session.session_key);
        this.podiums[session.session_key] = this.getPodium(session.session_key);
      });
    });
  },
  watch: {
    meetingKey() {
      apiService.getSessionByMeetingKey(this.meetingKey).then((res) => {
        this.sessions = res.data;
        this.sessions.forEach((session) => {
          this.getFasterLap(session.session_key);
          this.getPodium(session.session_key);
          this.podiums[session.session_key] = this.getPodium(
            session.session_key
          );
        });
      });
    },
  },
  methods: {
    parseDateGMT: parseDateGMT,
    parseSecondeToLapTime: parseSecondeToLapTime,

    getPodium(sessionKey) {
      let podium = {};
      apiService.getLatestDriverPosition(sessionKey, 3).then((drivers) => {
        drivers.forEach((res) => {
          let driverPosition = {};
          apiService
            .getDriverPage(sessionKey, res.driver_number)
            .then((driver) => {
              driverPosition.name = driver.full_name;
              driverPosition.image = driver.driver_number;
            });
          podium[res.position] = driverPosition;
        });
      });
      return podium;
    },
    getFasterLap(sessionKey) {
      apiService.getFastestLap(sessionKey).then((res) => {
        let fasterLap = {};
        fasterLap.lap_duration = this.parseSecondeToLapTime(res.lap_duration);
        apiService
          .getDriverPage(sessionKey, res.driver_number)
          .then((driver) => {
            fasterLap.driver = {
              name: driver.full_name,
              image: driver.driver_number,
            };
            this.fasterLaps = {
              ...this.fasterLaps,
              [sessionKey]: fasterLap,
            };
          });
      });
    },
  },
};
</script>

<style></style>
