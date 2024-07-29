<template>
  <div>
    <v-app-bar :elevation="0">
      <v-app-bar-nav-icon class="d-flex d-sm-none" variant="text" @click.stop="drawer = !drawer" />
      <template #append>
        <NuxtLink v-for="(page, index) in pages" :key="index" class="d-none d-sm-block" :to="page.to">
          <v-btn>{{ page.title }}</v-btn>
        </NuxtLink>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <NuxtLink v-for="(page, index) in pages" :key="index" :to="page.to">
          <v-list-item>{{ page.title }}</v-list-item>
        </NuxtLink>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    pages: [
      { title: 'Home', to: '/' },
      { title: 'Schedule', to: '/schedule' },
      { title: 'Speakers', to: '/speakers' },
      { title: 'Sponsors', to: '/sponsors' },
      { title: 'Venue', to: '/venue' },
      { title: 'Policies', to: '/policies' },
      { title: 'About', to: '/about' },
      { title: 'Goodies', to: '/goodies' },
    ],
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
