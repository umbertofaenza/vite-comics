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
      <!-- list wrappers -->
      <div class="list-wrappers">
        <!-- left -->
        <div class="list-wrapper__left">
          <!-- dc comics list -->
          <ul>
            DC COMICS
            <li v-for="link in dcComicsList">
              {{ link.text }}
            </li>
          </ul>

          <!-- shop list -->
          <ul>
            SHOP
            <li v-for="link in shopList">
              {{ link.text }}
            </li>
          </ul>
        </div>
        <!-- center -->
        <div class="list-wrapper__center">
          <!-- dc list -->
          <ul>
            DC
            <li v-for="link in dcList">
              {{ link.text }}
            </li>
          </ul>
        </div>
        <!-- right -->
        <div class="list-wrapper__right">
          <!-- sites list -->
          <ul>
            SITES
            <li v-for="link in sitesList">
              {{ link.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
