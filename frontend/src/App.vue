<template>
  <div id="app">
    
    <div v-if="false">
      <router-view />
    </div>
    <div v-else="">
      <Home />
    </div>

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
