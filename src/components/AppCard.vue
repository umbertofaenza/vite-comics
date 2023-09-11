<script>
export default {
  props: {
    comic: Object,
  },
};
</script>

<template>
  <!-- card -->
  <div class="comic-card">
    <!-- media -->
    <div class="card-media">
      <img :src="comic.thumb" />
    </div>
    <!-- text -->
    <div class="card-text">{{ comic.series }}</div>
  </div>
</template>

<style lang="scss" scoped>
.comic-card {
  width: calc(100% / 6 - 30px);
  margin: 25px 15px;
  cursor: pointer;

  .card-media img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: top;
    margin-bottom: 10px;
  }

  .card-text {
    font-size: 0.9rem;
    color: #fff;
    text-transform: uppercase;
  }
}
</style>
