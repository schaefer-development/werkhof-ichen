module.exports = {
  settings: {
    requestsLogger: {
      enabled: true
    }
  },
  load: {
    before: ['requestsLogger']
  }
}
