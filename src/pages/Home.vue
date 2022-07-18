<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
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

  <!-- Menu section btn -->
  <div
    class="
      flex
      my-4
      md:justify-center
      px-5
      max-w-full
      overflow-x-scroll
      border-b-solid
      shadow-md
      scrollbar-nav
    "
  >
    <div class="flex text-sm">
      <div class="flex justify-between">
        <button class="py-2 mx-3">
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

        <button class="py-2 mx-3">
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

        <button class="py-2 mx-3">
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

        <button class="py-2 mx-3">
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

        <button class="py-2 mx-3">
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

        <button class="py-2 mx-3">
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

        <button class="py-2 mx-3">
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
        <button class="py-2 mx-3">
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
            <div class="relative whitespace-nowrap">
              <span class="inline-block">Maison super</span>
            </div>
          </span>
        </button>
      </div>
    </div>
  </div>
  <!-- end Menu section btn -->

  <div class="px-7">
    <p class="text-sm">Classement par ordre de pertinence</p>

    <div
      class="
        grid grid-cols-1
        md:grid-cols-4
        sm:grid-cols-2
        md:gap-5
        sm:gap-5
        my-4
      "
    >
      <div>
        <div class="my-2">
          <div className="relative h-62 w-full mb-3">
            <div className="absolute flex flex-col top-0 right-0 p-3">
              <button
                className="transition ease-in duration-300  hover:text-red-400 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-1 text-gray-700 opacity-40"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg
                  class="text-teal-500 fill-current h-16 w-16"
                  viewBox="0 0 60 60"
                >
                  <path
                    d="M41.05 18.44a6.6 6.6 0 00-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 01-13.66-7.55 7.33 7.33 0 00-.9 3.55 7.3 7.3 0 002.95 5.92 6.34 6.34 0 01-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 01-3 .1 6.74 6.74 0 006.2 4.93 12.8 12.8 0 01-9.81 2.9A17.89 17.89 0 0024 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 002.91-3.8c-1.28.77-2.7 1.33-4.2 1.62z"
                  />
                </svg>
              </button>
            </div>
            <img
              className="w-full object-fill rounded-2xl"
              src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720"
              alt="Image de l'annonce"
            />
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium">Badachro, Royaume-Uni</p>
          <p class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            4.71
          </p>
        </div>
        <p class="font-extralight">Professionnel</p>
        <p class="font-extralight">17-22 nov.</p>
        <p><span class="font-medium">207 €</span> / nuit</p>
      </div>

      <div>
        <div class="my-2">
          <div className="relative h-62 w-full mb-3">
            <div className="absolute flex flex-col top-0 right-0 p-3">
              <button
                className="transition ease-in duration-300 bg-gray-800 hover:text-red-400 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <img
              className="w-full object-fill rounded-2xl"
              src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720"
              alt="Image de l'annonce"
            />
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium">Badachro, Royaume-Uni</p>
          <p class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            4.71
          </p>
        </div>
        <p class="font-extralight">Professionnel</p>
        <p class="font-extralight">17-22 nov.</p>
        <p><span class="font-medium">207 €</span> / nuit</p>
      </div>

      <div>
        <div class="my-2">
          <div className="relative h-62 w-full mb-3">
            <div className="absolute flex flex-col top-0 right-0 p-3">
              <button
                className="transition ease-in duration-300 bg-gray-800 hover:text-red-400 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <img
              className="w-full object-fill rounded-2xl"
              src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720"
              alt="Image de l'annonce"
            />
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium">Badachro, Royaume-Uni</p>
          <p class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            4.71
          </p>
        </div>
        <p class="font-extralight">Professionnel</p>
        <p class="font-extralight">17-22 nov.</p>
        <p><span class="font-medium">207 €</span> / nuit</p>
      </div>
      <div>
        <div class="my-2">
          <div className="relative h-62 w-full mb-3">
            <div className="absolute flex flex-col top-0 right-0 p-3">
              <button
                className="transition ease-in duration-300 bg-gray-800 hover:text-red-400 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <img
              className="w-full object-fill rounded-2xl"
              src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720"
              alt="Image de l'annonce"
            />
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium">Badachro, Royaume-Uni</p>
          <p class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            4.71
          </p>
        </div>
        <p class="font-extralight">Professionnel</p>
        <p class="font-extralight">17-22 nov.</p>
        <p><span class="font-medium">207 €</span> / nuit</p>
      </div>
      <div>
        <div class="my-2">
          <div className="relative h-62 w-full mb-3">
            <div className="absolute flex flex-col top-0 right-0 p-3">
              <button
                className="transition ease-in duration-300 bg-gray-800 hover:text-red-400 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <img
              className="w-full object-fill rounded-2xl"
              src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720"
              alt="Image de l'annonce"
            />
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium">Badachro, Royaume-Uni</p>
          <p class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            4.71
          </p>
        </div>
        <p class="font-extralight">Professionnel</p>
        <p class="font-extralight">17-22 nov.</p>
        <p><span class="font-medium">207 €</span> / nuit</p>
      </div>
      <div>
        <div class="my-2">
          <div className="relative h-62 w-full mb-3">
            <div className="absolute flex flex-col top-0 right-0 p-3">
              <button
                className="transition ease-in duration-300 bg-gray-800 hover:text-red-400 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <img
              className="w-full object-fill rounded-2xl"
              src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=720"
              alt="Image de l'annonce"
            />
          </div>
        </div>
        <div class="flex justify-between">
          <p class="font-medium">Badachro, Royaume-Uni</p>
          <p class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            4.71
          </p>
        </div>
        <p class="font-extralight">Professionnel</p>
        <p class="font-extralight">17-22 nov.</p>
        <p><span class="font-medium">207 €</span> / nuit</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-nav::-webkit-scrollbar {
  display: none;
}
</style>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
