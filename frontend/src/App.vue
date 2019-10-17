<template>
  <div id="app">
    
    <div v-if='!sesion'>
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
    this.sesion = this.$cookies.get('token');
    console.log(this.sesion);
    if (this.$route.meta.isPublic === false && !this.sesion) {
      window.location.href = "/dashboard";
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$cookies.set("token", [], "5D", "");
      this.sesion = '';
      window.location.href = "/login";
    }
  }
}
</script>
