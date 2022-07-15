<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav>
    <div
      class="
        flex
        justify-between
        items-center
        border-solid border-1/5
        px-5
        py-3
        rounded-full
        mt-3
        mx-4
        shadow-xl
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
  </nav>

  <div class="flex justify-around mt-4 px-5 max-w-full overflow-x-scroll">
    <div class="flex text-sm">
      <button class="py-2 leading-5">
        <span class="flex flex-col items-center">
          <svg
            class="inline-block w-5 h-5 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
          <div class="block relative whitespace-nowrap">
            <span class="inline-block">Maison super</span>
          </div>
        </span>
      </button>

      <button class="py-2 leading-5">
        <span class="flex flex-col items-center">
          <svg
            class="inline-block w-5 h-5 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
          <div class="block relative whitespace-nowrap">
            <span class="inline-block">Maison super</span>
          </div>
        </span>
      </button>

      <button class="py-2 leading-5">
        <span class="flex flex-col items-center">
          <svg
            class="inline-block w-5 h-5 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
          <div class="block relative whitespace-nowrap">
            <span class="inline-block">Maison super</span>
          </div>
        </span>
      </button>

      <button class="py-2 leading-5">
        <span class="flex flex-col items-center">
          <svg
            class="inline-block w-5 h-5 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
          <div class="block relative whitespace-nowrap">
            <span class="inline-block">Maison super</span>
          </div>
        </span>
      </button>

      <button class="py-2 leading-5">
        <span class="flex flex-col items-center">
          <svg
            class="inline-block w-5 h-5 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
          <div class="block relative whitespace-nowrap">
            <span class="inline-block">Maison super</span>
          </div>
        </span>
      </button>

      <button class="py-2 leading-5">
        <span class="flex flex-col items-center">
          <svg
            class="inline-block w-5 h-5 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
          <div class="block relative whitespace-nowrap">
            <span class="inline-block">Maison super</span>
          </div>
        </span>
      </button>

      <button class="py-2 leading-5">
        <span class="flex flex-col items-center">
          <svg
            class="inline-block w-5 h-5 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
          <div class="block relative whitespace-nowrap">
            <span class="inline-block">Maison super</span>
          </div>
        </span>
      </button>
      <button class="py-2 leading-5">
        <span class="flex flex-col items-center">
          <svg
            class="inline-block w-5 h-5 mr-1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
          <div class="block relative whitespace-nowrap">
            <span class="inline-block">Maison super</span>
          </div>
        </span>
      </button>
    </div>
    <ol class="flex justify-between items-center content-center text-sm">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
