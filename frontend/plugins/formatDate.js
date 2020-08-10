import Vue from 'vue'
import { format } from 'date-fns'


Vue.filter('formatDate', function (value) {
  return format(Date.parse(value), 'd. MMMM yyyy | kk:mm')
})
