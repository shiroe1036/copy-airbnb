<template>
  <div class="text-center lg:w-2/3 w-full">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Microdosing synth tattooed vexillologist
    </h1>

    <form action="" @submit.prevent="handleSub">
      <ul class="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
        <li class="relative">
          <input
            class="sr-only peer"
            type="radio"
            value="yes"
            name="answer"
            id="answer_yes"
            v-model="checkedBtn"
            required
          />
          <label
            class="
              flex
              p-5
              bg-white
              border border-gray-300
              rounded-lg
              cursor-pointer
              focus:outline-none
              hover:bg-gray-50
              peer-checked:ring-green-500
              peer-checked:ring-2
              peer-checked:border-transparent
            "
            :class="[checkedBtn == 'yes' ? 'bg-green-500 text-white' : '']"
            for="answer_yes"
            >Yes</label
          >

          <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
            👍
          </div>
        </li>

        <li class="relative">
          <input
            class="sr-only peer"
            type="radio"
            value="no"
            name="answer"
            id="answer_no"
            v-model="checkedBtn"
            required
          />
          <label
            class="
              flex
              p-5
              bg-white
              border border-gray-300
              rounded-lg
              cursor-pointer
              focus:outline-none
              hover:bg-gray-50
              peer-checked:ring-red-500
              peer-checked:ring-2
              peer-checked:border-transparent
            "
            :class="[checkedBtn == 'no' ? 'bg-green-500 text-white' : '']"
            for="answer_no"
            >No</label
          >

          <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
            👎
          </div>
        </li>

        <li class="relative">
          <input
            class="sr-only peer"
            type="radio"
            value="maybe"
            name="answer"
            id="answer_maybe"
            v-model="checkedBtn"
            required
          />
          <label
            class="
              text-center
              p-5
              bg-white
              border border-gray-300
              rounded-lg
              cursor-pointer
              focus:outline-none
              hover:bg-green-500
              hover:text-white
              peer-checked:ring-yellow-500
              peer-checked:ring-2
              peer-checked:border-transparent
            "
            :class="[checkedBtn == 'maybe' ? 'bg-green-500 text-white' : '']"
            for="answer_maybe"
            >Maybe</label
          >

          <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
            🤔
          </div>
        </li>
      </ul>
      <button type="submit" class="px-4 py-3 bg-gray-500">Save</button>
    </form>
  </div>
</template>

<script>
// import carousel from "vue-owl-carousel";

export default {
  name: "About",
  // components: { carousel },
  data: function () {
    return {
      checkedBtn: "",
    };
  },
  methods: {
    handleSub: function(){
      console.log('sub')
    }
  }
};
</script>