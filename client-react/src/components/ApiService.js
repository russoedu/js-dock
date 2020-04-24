import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_ACCESS_PROTOCOL}://${process.env.REACT_APP_ACCESS_HOST}:${process.env.REACT_APP_ACCESS_PORT}/api/`

class ApiService {

  all (callback) {
    axios.get(`${baseUrl}`)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  get (id, callback) {
    axios.get(`${baseUrl}${id}`)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }

  add (data, callback) {
    axios.post(`${baseUrl}add/`, {
      desc: data
    })
      .then(() => {
        callback()
      })
      .catch((error) => {
        console.log(error)
        callback()
      })
  }

  update (data, id, callback) {
    axios.put(`${baseUrl}update/${id}`, {
      desc: data
    })
      .then(() => {
        callback()
      })
      .catch((error) => {
        console.log(error)
        callback()
      })
  }

  delete (id, callback) {
    axios.put(`${baseUrl}delete/${id}`)
      .then(() => {
        callback()
      })
      .catch((error) => {
        console.log(error)
        callback()
      })
  }
}

export default ApiService
