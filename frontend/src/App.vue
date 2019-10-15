<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  name: 'App',
  components: {
    Home
  },
  data: () => ({
    drawer: null
  })
}
</script>
