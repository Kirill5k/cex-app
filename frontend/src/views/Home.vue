<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <search-bar @search="search" @clear="clear"/>
    <div
      v-for="item in items"
      :key="item.id"
    >
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import itemService from '@/services/ItemsService'

export default {
  name: 'home',
  components: {
    SearchBar
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    async search(query) {
      this.items = await itemService.search(query)
    },
    clear() {
      this.items = []
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
