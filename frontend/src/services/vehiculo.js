import api from '@/services/api'

export default {
  findbyUser () {
    return api().get('vehiculos/usuario/')
  },
  findById (_id) {
    return api().get('restaurant/' + _id)
  },
  create (data) {
    return api().post('restaurant', data)
  },
  update (data) {
    return api().put('restaurant/update', data)
  },
  delete (_id) {
    return api().delete('restaurant/' + _id)
  },
  productsFindAll (params = '') {
    return api().get('restaurant/products/all' + params)
  },
  productFindById (_id) {
    return api().get('restaurant/products?id=' + _id)
  },
  productCreate (data) {
    return api().post('restaurant/products', data)
  },
  productUpdate (data) {
    return api().put('restaurant/products/update', data)
  },
  productDelete (data) {
    return api().delete('restaurant/products/', data)
  }
}
