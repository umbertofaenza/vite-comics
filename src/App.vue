<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppQuickLinks from "./components/AppQuickLinks.vue";

export default {
  components: { AppHeader, AppMain, AppFooter, AppQuickLinks },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppQuickLinks />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
