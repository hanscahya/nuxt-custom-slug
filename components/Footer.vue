<template lang="pug">
  div(v-if="content")
    div.spacer
    div.footer
      b-img.divider(
        :src="$store.state.width > 576 ? content.divider_lg : content.divider_sm"
        :alt="$store.state.width > 576 ? content.divider_lg_alt : content.divider_sm_alt"
        fluid)
      b-container
        b-row
          b-col
            b-img.logo(
              :src="content.logo_sm"
              :srcset="`${content.logo_lg} 1440w, ${content.logo_sm} 576w`"
              :alt="$store.state.width > 576 ? content.logo_lg_alt : content.logo_sm_alt"
              width=110)
        b-row.justify-content-md-between
          b-col.sitemap-1(cols="6" md="auto")
            b-row
              b-col.title {{ content.sitemap_1.title}}
            b-row(v-for="(item, itemIndex) in content.sitemap_1.items" :key="itemIndex")
              b-col.item
                NuxtLink(:to="item.link") {{ item.text }}
          b-col.sitemap-2(cols="6" md="auto")
            b-row
              b-col.title {{ content.sitemap_2.title}}
            b-row(v-for="(item, itemIndex) in content.sitemap_2.items" :key="itemIndex")
              b-col.item
                NuxtLink(:to="item.link") {{ item.text }}
          b-col.sitemap-3(cols="6" md="auto")
            b-row
              b-col.title {{ content.sitemap_3.title}}
            b-row(v-for="(item, itemIndex) in content.sitemap_3.items" :key="itemIndex")
              b-col.item
                NuxtLink(:to="item.link") {{ item.text }}
          b-col.sitemap-4(cols="6" md="auto")
            b-row
              b-col.title {{ content.sitemap_4.title}}
            b-row(v-for="(item, itemIndex) in content.sitemap_4.items" :key="itemIndex")
              b-col.item
                NuxtLink(:to="item.link") {{ item.text }}
          b-col.sitemap-5(cols="12" md="auto")
            b-row
              b-col.title {{ content.social_media_link.title}}
            b-row
              b-col.social-media-wrapper
                a(:href="content.social_media_link.facebook" target="_blank")
                  b-img(:src="content.social_media_link.facebook_icon" :srcset="content.social_media_link.facebook_icon_set")
                a(:href="content.social_media_link.twitter" target="_blank")
                  b-img(:src="content.social_media_link.twitter_icon" :srcset="content.social_media_link.twitter_icon_set")
                a(:href="content.social_media_link.instagram" target="_blank")
                  b-img(:src="content.social_media_link.instagram_icon" :srcset="content.social_media_link.instagram_icon_set")
                a(:href="content.social_media_link.youtube" target="_blank")
                  b-img(:src="content.social_media_link.youtube_icon" :srcset="content.social_media_link.youtube_icon_set")
            b-row
              b-col.title {{ content.download_link.title}}
            b-row
              b-col.download-app-wrapper
                a(:href="content.download_link.google_play" target="_blank")
                  b-img(:src="content.download_link.google_play_icon" :srcset="content.download_link.google_play_icon_set")
            b-row
              b-col.download-app-wrapper
                a(:href="content.download_link.app_store" target="_blank")
                  b-img(:src="content.download_link.app_store_icon" :srcset="content.download_link.app_store_icon_set")

        b-row.my-4
          b-col
            hr

        b-row
          b-col.copyright
            div &copy; OVO 2021, All Right Reserved
            div Build with love by
              strong &nbsp;OVO Design

</template>

<script>
  export default {
    data () {
      return {
        content: null
      }
    },

    async mounted() {
      /*
        Get footer content
      */
      this.content = await this.$axios.$get('footer');
    }
  }
</script>

<style lang="scss" scoped>
.spacer {
  margin-top: 114px;
  padding-top: 250px;
}
.footer {
  background-color: #f7f8fa;
  margin-top: -200px;
  position: relative;

  .divider {
    margin-top: -114px;
  }

  // site map
  .container {
    margin-top: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .title {
    font-family: "Eina_01_Bold";
    font-size: 18px;

    margin-top: 30px;
    margin-bottom: 20px;
  }
  .item {
    font-family: "SF_Pro_Text_Regular";
    font-size: 16px;
    margin-bottom: 10px;

    a {
      color: #212529;
    }
  }

  .social-media-wrapper img {
    height: 40px;
    margin-bottom: 10px;
    margin-right: 10px;
    width: 40px;
  }

  .download-app-wrapper img {
    height: auto;
    margin-bottom: 10px;
    width: 175px;
  }

  .copyright {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      & > div {
        margin-bottom: 10px;
      }
    }

    strong {
      color: #00c6ce;
    }
  }
}
</style>
