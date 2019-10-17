import api from '@/services/api'

export default {
  refreshtoken (params = '') {
    return api().get('admin/refresh/')
  }
}
