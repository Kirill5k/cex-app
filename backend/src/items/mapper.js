class ItemMapper {
  mapItem(item = {}) {
    return {
      id: item.boxId,
      name: item.boxName,
      image: item.imageUrls.large,
      category: item.categoryName,
      price: {
        sell: item.sellPrice,
        buy: item.cashPrice,
        exchange: item.exchangePrice
      }
    }
  }

  mapItems(boxes = []) {
    return boxes.map(this.mapItem)
  }
}

module.exports = new ItemMapper();