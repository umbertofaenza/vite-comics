<script></script>

<template>
  <main>
    <!-- jumbotron -->
    <div class="jumbotron"></div>

    <div class="container">
      <!-- comics -->
      <section class="comics">
        <h1>Current Series</h1>
        <div class="comics-wrapper"></div>
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
  }
}
</style>
