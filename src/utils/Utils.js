export default {
  getHost(url) {
    let host = url
      .replace(/^(http|https)?:\/\//, '')
      .replace(/\/.*$/, '')
    let parts = host.split('.').slice(-3)

    if (parts[0] === 'www') parts.shift()

    return parts.join('.')
  },

  formatDateTime(unixDate) {
    let date = new Date(unixDate * 1000)
    let hour = date.getUTCHours() + 1
    let minutes = ('0' + date.getUTCMinutes()).slice(-2)

    const formattedTime = `${hour}:${minutes}`

    return formattedTime
  }
}