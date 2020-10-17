const orphanages = require('./database/fakedata.js')

module.exports = {
  
  index(request, response) {
    return response.render('index')
  },

  orphanage(request, response) {
    return response.render('orphanage')
  },

  orphanages(request, response) {
    return response.render('orphanages', { orphanages })
  },

  createOphanage(request, response) {
    return response.render('create-orphanage')
  }
}