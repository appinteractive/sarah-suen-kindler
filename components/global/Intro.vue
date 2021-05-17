<template>
  <div class="relative -mx-56">
    <div
      class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <h2
        class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
      >
        Healing
      </h2>
      <p
        class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
      >
        Sarah-Suen Kindler
      </p>
      <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan
        in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id
        viverra nulla.
      </p>
    </div>
    <div
      class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
    >
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <!-- <div class="flex-shrink-0">
          <img
            class="h-48 w-full object-cover"
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixqx=AtHvmCCqF8&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80"
            alt=""
          />
        </div> -->
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <!-- <p class="text-sm font-medium text-cyan-600">
              <a href="#" class="hover:underline"> Article </a>
            </p> -->
            <a href="#" class="block">
              <p class="text-xl font-semibold text-gray-900">
                Über mich
              </p>
              <p class="mt-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium praesentium eius, ut atque fuga culpa,
                similique sequi cum eos quis dolorum.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <!-- <div class="flex-shrink-0">
          <img
            class="h-48 w-full object-cover"
            src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&amp;ixqx=AtHvmCCqF8&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80"
            alt=""
          />
        </div> -->
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <!-- <p class="text-sm font-medium text-cyan-600">
              <a href="#" class="hover:underline"> Video </a>
            </p> -->
            <nuxt-link to="tuina-massage" class="block">
              <p class="text-xl font-semibold text-gray-900">
                Tuina Massage
              </p>
              <p class="mt-3 text-base text-gray-500">
                Tuina ist eine therapeutische Massage und eine der fünf Säulen der Traditionellen chinesischen Medizin, verwendet in China für über 2000 Jahren.
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <!-- <div class="flex-shrink-0">
          <img
            class="h-48 w-full object-cover"
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&amp;ixqx=AtHvmCCqF8&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80"
            alt=""
          />
        </div> -->
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <!-- <p class="text-sm font-medium text-cyan-600">
              <a href="#" class="hover:underline"> Case Study </a>
            </p> -->
            <a href="#" class="block">
              <p class="text-xl font-semibold text-gray-900">
                Schröpfen
              </p>
              <p class="mt-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                harum rerum voluptatem quo recusandae magni placeat saepe
                molestiae, sed excepturi cumque corporis perferendis hic.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
a {
  text-decoration: none;
}
</style>
