<template>
  <div id="app">
    
    <div v-if='true'>
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
  }),
  sesion: [],
  created() {
    this.sesion = this.$store.state.usuario;
    if (this.$route.meta.isPublic === false && !this.$store.state.token) {
      window.location.href = "/dashboard";
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$cookies.set("token", [], "5D", "");
      window.location.href = "/";
    }
  }
}
</script>
