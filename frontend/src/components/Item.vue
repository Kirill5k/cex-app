<template>
  <div class="item">
    <div class="item__image-container">
      <img
        class="item__image"
        :src="item.image"
        :alt="item.name">
    </div>
    <div class="item__information">
      <h4 class="item__name">{{ item.name }}</h4>
      <small class="item__category">{{ item.subCategory}} / {{ item.category}}</small>
      <p class="item__price">Sell {{ item.price.sell }} | Buy {{ item.price.buy }} | Exchange {{ item.price.exchange }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 350px;
  display: flex;
  margin: 10px 20px;

  &__image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    box-sizing: border-box;
    padding: 5px 10px;
  }

  &__image {
    max-width: 140px;
    max-height: 140px;
  }

  &__information {
    width: 250px;
  }

  &__name {
    margin: 0 0 5px;
    font-size: 15px;
    font-weight: 400;
    word-wrap: break-word;
  }

  &__category {
    font-weight: 700;
    font-size: 10px;
  }

  &__price {
    font-size: 12px;
    text-align: center;
  }
}
</style>
