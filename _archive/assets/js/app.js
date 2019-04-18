Vue.component('list-item', {
  props: ['text', 'url'],
  template: '<li><a :href="url">{{ text }}</a></li>'
})

new Vue({
  el: '#sidemenu',
  data: {
    links: [
      { index: 0, text: 'Index', url: '/' },
      { index: 1, text: 'Tutorials', url: '/tutorials' },
      { index: 2, text: 'Components', url: '/components' },
      { index: 3, text: 'Vue ChartJS', url: '/charts' },
      { index: 4, text: 'Forecast', url: '/forecast' },
    ]
  }
})
