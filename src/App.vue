<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppQuickLinks from "./components/AppQuickLinks.vue";

import dcComics from "./data/dc-comics";
import quickLinks from "./data/quick-links";

export default {
  data() {
    return {
      dcComics,
      quickLinks,
    };
  },
  components: { AppHeader, AppMain, AppFooter, AppQuickLinks },
};
</script>

<template>
  <AppHeader />
  <AppMain :dcComics="dcComics" />
  <AppQuickLinks :quickLinks="quickLinks" />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
