Vue.component('list-item', {
  props: ['text', 'url'],
  template: '<li><a :href="url">{{ text }}</a></li>'
})

new Vue({
  el: '#sidemenu',
  data: {
    links: [
      { id: 0, text: 'Index', url: '/' },
      { id: 1, text: 'Tutorials', url: '/tutorials' },
      { id: 2, text: 'Components', url: '/components' }
    ]
  }
})
