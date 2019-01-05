<template>
  <div class="search-bar">
    <input
      v-model="searchQuery"
      type="text"
      class="search-bar__input"
      placeholder="Search"
      @keyup.exact="search($event.target.value)"
    >
    <button
      v-if="searchQuery.length"
      class="search-bar__clear-button"
      @click="clear">
      &#x2715;
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search(queryString) {
      if (queryString.length > 2) {
        this.$emit('search', queryString)
      } else if (queryString.length === 0) {
        this.$emit('clear')
      }
    },
    clear() {
      this.searchQuery = ''
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  $c: &;

  width: 500px;
  position: relative;
  padding: 12px 24px;

  &__input {
    width: 100%;
    padding: 12px 24px;

    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 14px;
    line-height: 18px;

    color: #575756;
    background-color: transparent;
    background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg);
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 95% center;
    border-radius: 50px;
    border: 1px solid #575756;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: color(#575756 a(0.8));
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }
  }

  &__clear-button {
    position: absolute;
    border: 0;
    padding: 0;
    background: transparent;
    top: 24px;
    right: 32px;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    transform-style: preserve-3d;
    font-weight: 500;

    &:focus {
      outline: none;
    }
  }

  &:hover,
  &:focus {
    #{$c}__input {
      padding: 12px 0;
      outline: 0;
      border: 1px solid transparent;
      border-bottom: 1px solid #575756;
      border-radius: 0;
      background-position: 100% center;
    }

    #{$c}__clear-button {
      right: 56px;
    }
  }
}
</style>
