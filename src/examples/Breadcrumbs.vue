<template>
  <nav aria-label="breadcrumb">
    <ol
      class="px-0 pt-0 pb-0 mb-0 bg-transparent breadcrumb"
      :class="`${this.$store.state.isRTL ? '' : ' me-sm-6'} ${this.$store.state.isNavFixed ? 'text-dark' : 'text-white' }`"
    >
      <li class="text-sm breadcrumb-item">
        <a
          v-if="this.$store.state.isRTL"
          class="opacity-5 ps-2"
          href="#"
          :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-dark'"
          >لوحات القيادة</a
        >
        <a v-else 
        :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-dark'"
         class="opacity-8 text-decoration-none" href="#">Pages</a>
      </li>
      <li
        class="text-sm breadcrumb-item active"
        :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-dark'"
        aria-current="page"
      >
        {{ currentPage }}
      </li>
    </ol>
    <h6 class="mb-0 font-weight-bolder" :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-dark'">
      {{ currentPage }}
    </h6>
  </nav>
</template>

<script>
export default {
  name: "breadCrumbs",
  props: {
    currentPage: {
      required: true
    },
    textWhite: {
      type: String
    }
  }
};
</script>
