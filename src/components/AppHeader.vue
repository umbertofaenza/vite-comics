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
    <div class="top-navbar">
      <div class="logo">LOGO</div>
      <div class="top-navbar__menu">
        <ul>
          <li v-for="link in topMenuLinks">{{ link.text }}</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
