<template>
  <div>
    <v-app-bar :elevation="0">
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        variant="text"
        @click.stop="drawer = !drawer"/>
      <template #append>
        <!-- <v-btn>Schedule</v-btn>
        <v-btn>Speakers</v-btn>
        -->
        <NuxtLink class="d-none d-sm-block" to="/"><v-btn>Home</v-btn></NuxtLink>
        <!-- <NuxtLink class="d-none d-sm-block" to="/sponsors"><v-btn>Sponsors</v-btn></NuxtLink> -->
        <NuxtLink class="d-none d-sm-block" to="/venue"><v-btn>Venue</v-btn></NuxtLink>
        <NuxtLink class="d-none d-sm-block" to="/policies"><v-btn>Policies</v-btn></NuxtLink>
        <NuxtLink class="d-none d-sm-block" to="/about"><v-btn>About</v-btn></NuxtLink>
        <a class="d-none d-sm-block" href="https://suzuri.jp/kyobashirb" target="_blank"><v-btn>Goodies</v-btn></a>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <NuxtLink to="/"><v-list-item>Home</v-list-item></NuxtLink>
        <!-- <NuxtLink to="/sponsors"><v-list-item>Sponsors</v-list-item></NuxtLink> -->
        <NuxtLink to="/venue"><v-list-item>Venue</v-list-item></NuxtLink>
        <NuxtLink to="/policies"><v-list-item>Policies</v-list-item></NuxtLink>
        <NuxtLink to="/about"><v-list-item>About</v-list-item></NuxtLink>
        <a href="https://suzuri.jp/kyobashirb" target="_blank"><v-list-item>Goodies</v-list-item></a>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
}
</script>

<style scoped>
.v-btn {
  color: #222222;
}

.v-list-item {
  color: #222222;
  text-decoration: none;
}
</style>
