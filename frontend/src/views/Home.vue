<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <search-bar @search="search" @clear="clear"/>
    <item-list
      v-if="items"
      :items="items"
    />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import ItemList from '@/components/ItemList'
import {mapActions, mapState, mapMutations} from 'vuex'

export default {
  name: 'home',
  components: {SearchBar, ItemList},
  computed: {
    ...mapState(['items'])
  },
  methods: {
    ...mapActions(['search']),
    ...mapMutations({clear: 'clearItems'})
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
