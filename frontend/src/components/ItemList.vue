<template>
  <div class="item-list">
    <p v-if="items.length === 0">Couldn't find anything</p>
    <item
      v-else
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import Item from '@/components/Item'

export default {
  name: 'ItemList',
  components: {Item},
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.item-list {
  display: flex;
  flex-wrap: wrap;
  max-width: 1500px;
  justify-content: center;
}
</style>
