Vue.component('list-item', {
  props: ['text', 'link'],
  template: '<li><a :href="link">{{ text }}</a></li>'
})

new Vue({
  el: '#sidemenu',
  data: {
    links: [
      { id: 0, text: 'Index', link: '/' },
      { id: 1, text: 'Tutorials', link: '/tutorials' },
      { id: 2, text: 'Components', link: '/components' }
    ]
  }
})
