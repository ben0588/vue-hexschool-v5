<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          :class="{
            disabled: !page.has_pre
          }"
          @click.prevent="getProducts(page.current_page - 1)"
          >&lt;</a
        >
      </li>

      <li class="page-item" v-for="pageNum in page.total_pages" :key="page + 123">
        <a
          class="page-link"
          href="#"
          @click.prevent="getProducts(pageNum)"
          :class="{ active: page.current_page === pageNum }"
          >{{ pageNum }}</a
        >
      </li>

      <li class="page-item">
        <a
          class="page-link"
          href="#"
          :class="{
            disabled: !page.has_next
          }"
          @click.prevent="getProducts(page.current_page + 1)"
          >></a
        >
      </li>
    </ul>
  </nav>
</template>
<script setup>
const props = defineProps({
  page: Object,
  getProducts: Function
});
</script>
<style lang="scss"></style>
