<script>
export default {
  data() {
    return {
      dcComicsList: [
        {
          text: "characters",
          href: "#",
          current: false,
        },
        {
          text: "comics",
          href: "#",
          current: false,
        },
        {
          text: "movies",
          href: "#",
          current: false,
        },
        {
          text: "tv",
          href: "#",
          current: false,
        },
        {
          text: "games",
          href: "#",
          current: false,
        },
        {
          text: "collectibles",
          href: "#",
          current: false,
        },
        {
          text: "videos",
          href: "#",
          current: false,
        },
        {
          text: "fans",
          href: "#",
          current: false,
        },
        {
          text: "news",
          href: "#",
          current: false,
        },
        {
          text: "shop",
          href: "#",
          current: false,
        },
      ],

      shopList: [
        {
          text: "Shop DC",
          href: "#",
          current: false,
        },
        {
          text: "Shop DC Collectibles",
          href: "#",
          current: false,
        },
      ],

      dcList: [
        {
          text: "characters",
          href: "#",
          current: false,
        },
        {
          text: "comics",
          href: "#",
          current: false,
        },
        {
          text: "movies",
          href: "#",
          current: false,
        },
        {
          text: "tv",
          href: "#",
          current: false,
        },
        {
          text: "games",
          href: "#",
          current: false,
        },
        {
          text: "collectibles",
          href: "#",
          current: false,
        },
        {
          text: "videos",
          href: "#",
          current: false,
        },
        {
          text: "fans",
          href: "#",
          current: false,
        },
        {
          text: "news",
          href: "#",
          current: false,
        },
        {
          text: "shop",
          href: "#",
          current: false,
        },
      ],

      sitesList: [
        {
          text: "Shop DC",
          href: "#",
          current: false,
        },
        {
          text: "Shop DC Collectibles",
          href: "#",
          current: false,
        },
        {
          text: "Shop DC",
          href: "#",
          current: false,
        },
        {
          text: "Shop DC Collectibles",
          href: "#",
          current: false,
        },
        {
          text: "Shop DC",
          href: "#",
          current: false,
        },
      ],
    };
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <!-- footer top -->
      <div class="footer-top">
        <!-- list wrappers -->
        <div class="list-wrappers">
          <!-- left -->
          <div class="list-wrapper__left">
            <!-- dc comics list -->
            <ul>
              <span class="ul-title">DC COMICS</span>
              <li v-for="link in dcComicsList">
                <a :href="link.href">
                  {{ link.text }}
                </a>
              </li>
            </ul>

            <!-- shop list -->
            <ul>
              <span class="ul-title">SHOP</span>
              <li v-for="link in shopList">
                <a :href="link.href">
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
          <!-- center -->
          <div class="list-wrapper__center">
            <!-- dc list -->
            <ul>
              <span class="ul-title">DC</span>
              <li v-for="link in dcList">
                <a :href="link.href">
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
          <!-- right -->
          <div class="list-wrapper__right">
            <!-- sites list -->
            <ul>
              <span class="ul-title">SITES</span>

              <li v-for="link in sitesList">
                <a :href="link.href">
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
