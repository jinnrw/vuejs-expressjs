import Api from '@/services/Api'

// export as an Object
export default {
  // a method called register
  login(credentials) {
    // use Axios post method
    return Api().post('login', credentials)
  },
  getNumber(username) {
    return Api().post('login', username)
  }
}

// How to use later
// AuthenticationService.register({
//   email: '123@gmail.com',
//   password: '123456'
// })