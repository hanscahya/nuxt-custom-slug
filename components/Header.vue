<template lang="pug">
  div.header(v-if="content")
    b-container
      b-row.py-4
        b-col.menu-wrapper
          //- left
          nuxt-link(to="/")
            b-img.logo(
              :src="content.logo_sm"
              :srcset="`${content.logo_lg} 2x, ${content.logo_sm} 1x`"
              :alt="content.logo_alt")

          //- center
          div.menus(v-if="$store.state.width > 768")
            div.item(
              v-for="(menu, menuIndex) in content.menus"
              :key="menuIndex")
              nuxt-link(
                v-if="!menu.sub_menus"
                :to="`${$route.params.lang ? $route.params.lang : 'id'}/${menu.slug}`"
                ) {{ menu.text }}&nbsp;

              span(v-else) {{ menu.text }}&nbsp;
              b-icon(v-if="menu.sub_menus" icon="chevron-down")
              div.sub-menus(v-if="menu.sub_menus")
                div.sub-item(
                  v-for="(subMenu, subMenuIndex) in menu.sub_menus"
                  :key="subMenuIndex")
                  nuxt-link(:to="subMenu.link") {{ subMenu.text }}

          //- right
          div.lang(v-if="$store.state.width > 768")
            span {{ currentLang }}&nbsp;
            b-icon(icon="chevron-down")
            div.lang-option
              div(@click="changeLanguage('en')") EN
              div(@click="changeLanguage('id')") ID
          div.lang(v-else)
            b-icon(icon="list")

</template>

<script>
  export default {
    data () {
      return {
        currentLang: 'ID',
        content: null
      }
    },

    async mounted() {
      /*
        Get header content
      */
      this.content = await this.$axios.$get('header');
    },

    methods: {
      changeLanguage(lang) {
        this.currentLang = lang === 'en' ? 'EN' : 'ID';

        this.$router.push({
          name: this.$route.name,
          params: {
            lang,
            slug: this.$route.params.slug
          }
        });
      }
    }
  }
</script>

<style lang="scss">
  .header {
    position: absolute;
    height: 10%;
    width: 100%;
    z-index: 10;

    color: #fff;
    font-family: "Eina_01_Regular";
    font-size: 14px;
    letter-spacing: 0.6px;

    .logo {
      max-width: 100px;
    }

    .menu-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .menus {
      display: flex;

      .item {
        margin-left: 20px;
        margin-right: 20px;

        cursor: pointer;

        a {
          color: #fff;
          text-decoration: none;
        }

        &:hover .sub-menus {
          display: block;
        }
      }

      .sub-menus {
        position: absolute;
        display: none;

        .sub-item {
          margin-top: 10px;
        }
      }
    }

    .lang {
      &:hover .lang-option {
        display: block;
      }

      .lang-option {
        position: absolute;
        display: none;

        div {
          margin-top: 10px;

          cursor: pointer;
        }
      }
    }
  }
</style>
