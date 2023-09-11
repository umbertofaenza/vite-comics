<script>
import quickLinks from "../data/quick-links.js";

export default {
  data() {
    return {
      quickLinks,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <!-- quick links -->
      <div class="quick-links-container">
        <!-- single link -->
        <div v-for="link in quickLinks" class="quick-link">
          <div class="link-media">
            <img :src="'src/assets/' + link.iconPath" />
          </div>
          <div class="link-text">
            {{ link.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #0282f9;
  padding: 50px 0;

  .quick-links-container {
    display: flex;
    justify-content: space-around;

    .quick-link {
      display: flex;
      align-items: center;
      cursor: pointer;

      .link-media img {
        height: 50px;
        margin-right: 15px;
      }

      .link-text {
        color: #fff;
      }
    }
  }
}
</style>
