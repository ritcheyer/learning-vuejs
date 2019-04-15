<template>
  <ol id="side-nav">
    <li v-for="item in links" :key="item.id">
      <a :href="item.link">{{ item.text }}</a>
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'Side Nav',
    // props: {},
    data: () => {
      return {
        links: [
          { id: 0, text: 'Index', url: '/' },
          { id: 1, text: 'Tutorials', url: '/tutorials' },
          { id: 2, text: 'Components', url: '/components' },
          { id: 2, text: 'Vue ChartJS', url: '/charts' }
        ]
      }
    }
  }
</script>


<style scoped></style>
