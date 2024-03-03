<template>
  <table
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
        v-for="(session, index) in 5"
        :key="session.id"
        :class="index % 2 === 0 ? 'bg-slate-700' : 'bg-slate-800'"
      >
        <td class="items-center px-6 py-4 font-semibold">
          <div class="w-36 h-2 bg-slate-500 rounded-full animate-pulse"></div>
        </td>
        <td class="items-center px-6 py-4 italic">
          <div class="w-64 h-2 bg-slate-500 rounded-full animate-pulse"></div>
        </td>
        <td class="items-center px-6 py-4 italic">
          <div class="w-64 h-2 bg-slate-500 rounded-full animate-pulse"></div>
        </td>
        <td class="items-center px-6 py-4">
          <div class="flex -space-x-2 rtl:space-x-reverse animate-pulse">
            <svg
              class="w-8 h-8 text-slate-500 border-2 rounded-full"
              :class="index % 2 === 0 ? 'border-slate-700' : 'border-slate-800'"
              v-for="i in 3"
              :key="i"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
              />
            </svg>
          </div>
        </td>
        <td class="flex items-center px-6 py-4">
          <div class="flex items-center mt-4 animate-pulse">
            <svg
              class="w-10 h-10 me-3 text-slate-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
              />
            </svg>
            <div>
              <div class="h-2.5 rounded-full bg-slate-500 w-32 mb-2"></div>
              <div class="w-48 h-2 rounded-full bg-slate-500"></div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>
