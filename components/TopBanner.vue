<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-indigo-600">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-indigo-800">
            <SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <p class="ml-3 font-medium text-white">
            <span class="md:inline">
              "Saya bukan pendatang", End racism and discrimination against
              ethnic Malaysian minorities. Sign the petition for
              #PendidikanUntukSemua
            </span>
          </p>
        </div>
        <div
          class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
        >
          <a
            href="https://www.change.org/p/prime-minister-s-office-of-malaysia-pendidikanuntuksemua-increase-non-bumiputera-quota-in-public-universities?utm_content=cl_sharecopy_29936772_en-GB%3A4&recruiter=1138360905&utm_source=share_petition&utm_medium=copylink&utm_campaign=share_petition"
            class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
          >
            Petition Link
          </a>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
          >
            <span class="sr-only">Dismiss</span>
            <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SpeakerphoneIcon, XIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    SpeakerphoneIcon,
    XIcon,
  },
}
</script>
