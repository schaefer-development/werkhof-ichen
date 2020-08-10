import Vue from 'vue'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

Vue.filter('formatDate', function (value) {
  return format(Date.parse(value), 'd. MMMM yyyy | kk:mm', { locale: de })
})
