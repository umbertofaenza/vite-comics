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
          text: "news",
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
          text: "Terms of use",
          href: "#",
          current: false,
        },
        {
          text: "Privacy policy (New)",
          href: "#",
          current: false,
        },
        {
          text: "Ad Choices",
          href: "#",
          current: false,
        },
        {
          text: "Advertising",
          href: "#",
          current: false,
        },
        {
          text: "Jobs",
          href: "#",
          current: false,
        },
        {
          text: "Subscriptions",
          href: "#",
          current: false,
        },
        {
          text: "Talent Workshops",
          href: "#",
          current: false,
        },
        {
          text: "CPSC Certificates",
          href: "#",
          current: false,
        },
        {
          text: "Ratings",
          href: "#",
          current: false,
        },
        {
          text: "Shop Help",
          href: "#",
          current: false,
        },
        {
          text: "Contact Us",
          href: "#",
          current: false,
        },
      ],

      sitesList: [
        {
          text: "DC",
          href: "#",
          current: false,
        },
        {
          text: "MAD Magazine",
          href: "#",
          current: false,
        },
        {
          text: "DC Kids",
          href: "#",
          current: false,
        },
        {
          text: "DC Universe",
          href: "#",
          current: false,
        },
        {
          text: "DC Power Visa",
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
    <!-- footer top -->
    <div class="footer-top">
      <div class="container">
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

    <!-- footer bottom -->
    <div class="footer-bottom">
      <div class="container">
        <!-- footer bottom left -->
        <div class="footer-bottom__left">
          <div class="sign-up-btn">SIGN-UP NOW!</div>
        </div>
        <!-- footer bottom right -->
        <div class="footer-bottom__right">
          <div class="socials">FOLLOW US</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
// footer top
.footer-top {
  background-image: url(/src/assets/img/dc-logo-bg.png),
    url(/src/assets/img/footer-bg.jpg);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: 77%, top left;
  background-size: 25%, cover;

  .list-wrappers {
    display: flex;
    padding: 30px 0;

    ul {
      .ul-title {
        display: inline-block;
        color: white;
        font-weight: bold;
        font-size: 1.15rem;
        margin-bottom: 10px;
      }

      li {
        color: grey;
        text-transform: capitalize;
        font-size: 0.85rem;
        padding: 3px 0;
      }
    }

    .list-wrapper__left,
    .list-wrapper__center,
    .list-wrapper__right {
      margin-right: 50px;
    }

    .list-wrapper__left {
      ul:first-child {
        margin-bottom: 20px;
      }
    }
  }
}

// footer bottom
.footer-bottom {
  height: 150px;
  background-color: #303030;
  display: flex;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-bottom__left {
    .sign-up-btn {
      color: white;
      font-weight: bold;
      font-size: 1.15rem;
      border: 2px solid #0282f9;
      padding: 15px;
    }
  }

  .footer-bottom__right {
    .socials {
      color: #0282f9;
      font-weight: bold;
      font-size: 1.3rem;
    }
  }
}
</style>
