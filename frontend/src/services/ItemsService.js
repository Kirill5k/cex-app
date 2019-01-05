import axios from 'axios'

class ItemsService {
  url = '/api/items'

  search(query) {
    return axios.get(this.url, {params: {q: query}})
      .then(response => response.data)
  }
}

export default new ItemsService()
