import api from '@/services/api'
const auth = {
    headers: {Authorization:'JWT ' + localStorage.getItem('token')} 
}
export default {
  getUsuarios (params = '') {
    return api().get('admin/')
  },
  postUsuarios (data) {
    return api().post('admin', data, {emulateJSON: true})
  },
  validarUsuario (data) {
    return api().get('admin/validar/' + data)
  }
}
