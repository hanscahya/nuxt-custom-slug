<template lang="pug">
  Pages-Home(v-if="!$route.params.slug")
  Pages-About(v-else-if="$route.params.slug === 'about'")
  Pages-Career(v-else-if="$route.params.slug === 'career'")
  Pages-Product(v-else-if="$route.params.slug === 'product'")
  PageNotFound(v-else)
</template>
