Vue.component('list-item', {
  props: ['text', 'href'],
  template: '<li><a :href="href">{{ text }}</a></li>'
})

new Vue({
  el: '#sidemenu',
  data: {
    links: [
      { id: 0, text: 'Index', href: '/' },
      { id: 1, text: 'Tutorials', href: '/tutorials' },
      { id: 2, text: 'Components', href: '/components' },
      { id: 2, text: 'Vue ChartJS', href: '/charts' }
    ]
  }
})
