<template>
  <nav>
    <div
      class="
        flex
        justify-between
        items-center
        border
        px-5
        py-2
        rounded-full
        mt-3
        mx-4
        shadow-lg
        animate__animated animate__backInLeft
      "
    >
      <div class="flex">
        <i class="mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </i>
        <p>Destination</p>
      </div>

      <i class="rounded-full border-solid border-2 px-1 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </i>
    </div>

    <hr class="mt-4 hidden md:block" />
    <div class="border-5"></div>
  </nav>
</template>

<script>
export default {
  name: "nav-menu",
};
</script>