<script>
import AppCard from "./AppCard.vue";

export default {
  props: {
    dcComics: Array,
  },
  components: { AppCard },
};
</script>

<template>
  <main>
    <!-- jumbotron -->
    <div class="jumbotron"></div>

    <div class="container">
      <!-- comics -->
      <section class="comics">
        <!-- title -->
        <h1>Current Series</h1>
        <!-- comics wrapper -->
        <div class="comics-wrapper">
          <!-- comics cards -->
          <AppCard
            v-for="comic in dcComics"
            :key="comic.series"
            :comic="comic"
          />
          <!-- laod more button -->
          <div class="load-more-btn">Load more</div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #1c1c1c;

  .jumbotron {
    height: 400px;
    background-image: url(../assets/img/jumbotron.jpg);
    margin-bottom: -30px;
  }

  .comics {
    h1 {
      display: inline-block;
      background-color: #0282f9;
      color: #fff;
      text-transform: uppercase;
      padding: 15px 30px;
    }

    .comics-wrapper {
      display: flex;
      flex-wrap: wrap;

      .load-more-btn {
        display: inline-block;
        background-color: #0282f9;
        color: #fff;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px 45px;
        margin: 20px auto;
        cursor: pointer;
      }
    }
  }
}
</style>
