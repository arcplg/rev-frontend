export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      unixTimeStamp () {
        return nuxtApp.$moment().unix()
      },
      formattedDate (d, options = {}) {
        let template = options?.needsYear ? 'YYYY/M/D' : 'M/D'
        template += options?.dayWeekLess ? '' : options?.dayWeekSimple ? ' ddd' : '(ddd)'
        return d ? nuxtApp.$moment.unix(d).format(template) : null
      },
      // 金額に区切りカンマをつける
      addComma (value) {
        return value.toLocaleString()
      },
    },
  }
})
