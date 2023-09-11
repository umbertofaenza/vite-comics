<script>
export default {
  data() {
    return {
      topMenuLinks: [
        {
          text: "characters",
          href: "#",
          current: false,
        },
        {
          text: "comics",
          href: "#",
          current: true,
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
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <!-- top navbar -->
      <div class="top-navbar">
        <!-- logo -->
        <div class="logo">
          <img src="../assets/img/dc-logo.png" alt="DC Logo" />
        </div>
        <!-- menu -->
        <div class="top-navbar__menu">
          <ul>
            <li
              v-for="link in topMenuLinks"
              :class="link.current ? 'active' : ''"
            >
              <a :href="link.href">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.top-navbar {
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;

    li {
      height: 150px;
      margin: 0 10px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.8rem;
      color: #464646;

      display: flex;
      align-items: center;

      &.active {
        box-shadow: inset 0px -5px 0px 0px #0282f9;
        color: #0282f9;
      }
    }
  }
}
</style>
