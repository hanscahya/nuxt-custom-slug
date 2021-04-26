<template lang="pug">
  div(v-if="content")
    //- hero-1
    div.hero-1
      b-img(
        :src="$store.state.width > 576 ? content.hero_1.bg_lg : content.hero_1.bg_sm"
        :alt="$store.state.width > 576 ? content.hero_1.bg_lg_alt : content.hero_1.bg_sm_alt")
      b-container.content-wrapper
        b-row
          b-col(cols="12" lg="5")
            div.title(v-html="content.hero_1.title")
            div.app-button
              b-img(
                fluid
                :src="require('@/assets/icons/app-store-btn-150x48.png')"
                :srcset="`${require('@/assets/icons/app-store-btn-300x96@2x.png')} 2x, ${require('@/assets/icons/app-store-btn-150x48.png')} 1x`")
              b-img(
                fluid
                :src="require('@/assets/icons/google-play-btn-152-48.png')"
                :srcset="`${require('@/assets/icons/google-play-btn-304-96@2x.png')} 2x, ${require('@/assets/icons/google-play-btn-152-48.png')} 1x`")
          b-col(cols="12" lg="7")
            b-img.bitmap(:src="content.hero_1.bitmap" :src_set="content.hero_1.bitmap_set")

    //- merchant
    div.section-merchant
      b-container
        b-row
          b-col(cols="12" md="6")
            div.title(v-html="content.section_merchant.title")
            div.paragraph(v-html="content.section_merchant.paragraph")
          b-col.action-link(cols="12" lg="6")
            div.text
              span {{ content.section_merchant.all_merchants_text }}&nbsp;
              ArrowRight
        b-row.mt-3
          b-col(
            cols="4"
            md="3"
            lg="2"
            style="padding: 8px 10px;"
            v-for="(item, itemIndex) in merchants"
            :key="itemIndex")
            div.merchant-box
              b-img(:src="item.img")
              div.mt-2 {{ item.text }}

    //- about
    div.section-about
      b-img.bg(:src="`${$store.state.width < 768 ? content.section_about.bg_image_sm : content.section_about.bg_image_lg}`")
      b-container
        b-row(v-if="$store.state.width < 768")
          b-col
            b-img.bitmap(:src="content.section_about.bitmap" fluid)
        b-row
          b-col.anchor
            LineAnchor
            span &nbsp;{{ content.section_about.anchor }}
        b-row
          b-col.title_1(cols="12" md="5" v-html="content.section_about.title_1")
          b-col.paragraph_1(cols="12" md="6" offset-md="1" v-html="content.section_about.paragraph_1")
        b-row
          b-col(cols="12" md="5")
            div.title_2(v-html="content.section_about.title_2")
            div.paragraph_2(v-html="content.section_about.paragraph_2")
            ul
              li(
                v-for="(item, itemIndex) in content.section_about.list_items"
                :key="itemIndex")
                b-img(src="@/assets/icons/list-item.png")
                div {{ item }}
          b-col(v-if="$store.state.width > 768" cols="7")
            b-img.bitmap(:src="content.section_about.bitmap" fluid)

    //- product
    div.section-product
      b-container
        b-row
          b-col.anchor
            LineAnchor
            span &nbsp;{{ content.section_product.anchor }}
        b-row
          b-col.title(cols="12" md="5" v-html="content.section_product.title")
          b-col.paragraph(cols="12" md="6" offset-md="1" v-html="content.section_product.paragraph")

      div.product-tabs
        b-container
          b-row
            b-col.active-bar(
              cols="3"
              :offset="slide*3")
          b-row
            b-col.items(
                v-for="(item, itemIndex) in content.section_product.items"
                :key="itemIndex"
                cols="3"
                :class="{ active: itemIndex === slide }"
                @click="changeProduct(itemIndex)")
                b-img(:src="item.icon_sm" fluid)
                div {{ item.title }}
                
      VueSlickCarousel(
        ref="product-carousel"
        :arrows="false"
        :swipe="false"
        :dots="false")
        div(
          v-for="(item, itemIndex) in content.section_product.items"
          :key="itemIndex")
          b-container
            b-row
              b-col.bitmap(cols="12" md="6")
                b-img(:src="item.bitmap" fluid)
              b-col.description(cols="12" md="6")
                div
                  img(:src="item.icon_lg")
                  div.title(v-html="item.title")
                  div.paragraph(v-html="item.paragraph")
                  div.action-link
                    span {{ item.action_text }}&nbsp;
                    ArrowRight

    div.section-infographics(
      :style="{ backgroundImage: `url(${content.section_infographics.bg_image})` }")
      b-container
        b-row.paragraph
          b-col(
            cols="12"
            md="8"
            lg="6"
            v-html="content.section_infographics.paragraph")
        b-row
          b-col.item
            div {{ content.section_infographics.user_number }}
            div {{ content.section_infographics.user_label }}
          b-col.item
            div {{ content.section_infographics.merchant_number }}
            div {{ content.section_infographics.merchant_label }}
          b-col.item
            div {{ content.section_infographics.partner_number }}
            div {{ content.section_infographics.partner_label }}

    div.section-other-feature
      b-container
        b-row
          b-col(cols="12" md="6")
            b-img(:src="content.section_other_feature.feature_1.img" fluid)
          b-col.d-flex.justify-content-center.align-items-center(cols="12" md="5")
            div
              div.title(v-html="content.section_other_feature.feature_1.title")
              div.paragraph(v-html="content.section_other_feature.feature_1.paragraph")
        b-row.mt-5
          b-col(v-if="$store.state.width < 768" cols="12")
            b-img(:src="content.section_other_feature.feature_2.img" fluid)
          b-col.d-flex.justify-content-center.align-items-center(cols="12" md="5" offset-md="1")
            div
              div.title(v-html="content.section_other_feature.feature_2.title")
              div.paragraph(v-html="content.section_other_feature.feature_2.paragraph")
          b-col(v-if="$store.state.width > 768" cols="6")
            b-img(:src="content.section_other_feature.feature_2.img" fluid)

    b-img.w-100(src="https://i.imgur.com/7UYYsll.png")
    div.section-testimony
      b-container
        b-row
          b-col
            div.title(v-html="content.section_testimony.title")
        b-row
          b-col.d-flex
            div.items(
              v-for="(item, itemIndex) in content.section_testimony.items"
              :key="itemIndex")
              b-avatar(:src="item.avatar")
              div.paragraph(v-html="item.paragraph")
              div.name {{ item.name }}
              div.label {{ item.label }}
    
    div.section-contact-us-divider
    div.section-contact-us
      b-container
        b-row
          b-col(cols="12" md="6")
            b-img(fluid :src="content.section_contact_us.bitmap" :srcset="content.section_contact_us.bitmap_set")
          b-col.d-flex.justify-content-center.align-items-center(cols="12" md="6")
            div
              div.title(v-html="content.section_contact_us.title")
              div.paragraph(v-html="content.section_contact_us.paragraph")
              b-button {{ content.section_contact_us.button_text }}


</template>

<script lang="javascript">
  import index from '@/mixins/index'
  // local
  import ArrowRight from "@/assets/svg/arrow-right.vue";
  import LineAnchor from "@/assets/svg/line-anchor.vue";
  // 3rd party
  import VueSlickCarousel from "vue-slick-carousel";
  import "vue-slick-carousel/dist/vue-slick-carousel.css";
  import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

  export default {
    mixins: [index],
    components: {
      VueSlickCarousel,
      ArrowRight,
      LineAnchor
    },

    data() {
      return {
        content: null,

        merchants: [],
        slide: 0
      }
    },

    created() {
      if (process.browser){
        window.addEventListener('resize', this.homePageResized);
        this.homePageResized();
      }
    },

    async mounted() {
      /*
        Get content from API
        if no lang exist on route param, default to use Indonesian
      */
      let lang = 'id';
      let slug = this.$route.params.slug;
      if (this.$route.params.lang === 'en') lang = 'en';

      this.content = await this.$axios.$get(`content?lang=${lang}&slug=${slug}`);

      // Get default merchants
      this.getMerchantItems();
    },

    destroyed() {
      window.removeEventListener('resize', this.homePageResized);
    },

    methods: {
      homePageResized() {
        this.handleResize(); // mixins

        if (this.content) {
          this.getMerchantItems();
        }
      },
      getMerchantItems() {
        /*
          Handle amount merchants shown
          based on screen width
        */

        let width = this.$store.state.width;
        let items = this.content.section_merchant.items;

        if (width > 768) this.merchants = items;
        else if (width > 576) this.merchants = items.slice(0, 6);
        else this.merchants = items.slice(0, 3);
      },
      changeProduct(itemIndex) {
        /*
          Handle vue slick carousel
          On products tab
        */
        this.$refs["product-carousel"].goTo(itemIndex);
        this.slide = itemIndex;
      }
    }
  }
</script>

<style lang="scss">
  .hero-1 {
    > img {
      // background image
      width: 100%;
      min-height: 100vh;
      object-fit: cover;
    }

    .content-wrapper {
      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      // put content on top bg image
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      // on mobile show content vertically (image first)
      &> .row {
        flex-direction: column-reverse;

        .col-md-5:first-child {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
      }

      .app-button {
        margin-top: 1rem;

        img {
          cursor: pointer;
        }

        img:first-child {
          margin-right: 1rem;
        }
      }

      .bitmap {
        width: 100%;
      }

      @media screen and (max-width: 991px) {
        .app-button {
          margin-top: 1rem;

          display: flex;
          justify-content: center;
        }

        .title {
          font-size: 28px;
        }

        .bitmap {
          max-width: 400px;
        }
      }

      @media screen and (min-width: 992px) {
        text-align: left;

        .title {
          font-size: 48px;
        }

        // on desktop show content horizontaly (text first)
        &> .row {
          flex-direction: row;

          div:first-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      }
    }
  }

  .section-merchant {
    padding-top: 100px;

    .title {
      font-size: 18px;
    }
    .paragraph {
      padding-top: 16px;
    }

    .action-link {
      padding-top: 16px;

      @media screen and (min-width: 768px) {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        text-align: right;
      }

      .text {
        cursor: pointer;

        font-family: "Eina_01_Bold";
        font-size: 16px;
        color: #5f33ba;
        text-align: left;

        @media screen and (min-width: 768px) {
          text-align: right;
        }
      }
    }

    .merchant-box {
      cursor: pointer;

      border: 1px solid #e5edef;
      border-radius: 25px;

      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 18px 24px;

      text-align: center;
      font-family: Eina_01_Bold;
      font-size: 16px;

      img {
        width: 70px;
        height: 70px;
      }
    }
  }

  .section-about {
    position: relative;
    margin-top: 100px;
    background-color: #f9fcfd;

    img.bg {
      width: 100%;
    }
    img.bitmap {
      width: 100%;

      @media screen and (min-width: 1440px) {
        width: 120%;
      }
    }

    .container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      padding-top: 50px;
      @media screen and (min-width: 1440px) {
        padding-top: 100px;
      }

      .title_1 {
        font-family: "Eina_01_Bold";
        font-size: 24px;

        @media screen and (min-width: 1024px) {
          font-size: 30px;
        }
        @media screen and (min-width: 1440px) {
          font-size: 40px;
        }
      }
      .paragraph_1 {
        padding-top: 5px;
        font-family: "SF_Pro_Text_Regular";
        font-size: 14px;

        @media screen and (min-width: 1024px) {
          padding-top: 10px;
          font-size: 16px;
        }
        @media screen and (min-width: 1440px) {
          padding-top: 20px;
          font-size: 16px;
        }
      }
      .title_2 {
        font-family: "Eina_01_Bold";
        font-size: 16px;

        margin-top: 60px;
        @media screen and (min-width: 1440px) {
          font-size: 24px;
          margin-top: 160px;
        }
      }
      .paragraph_2 {
        margin-top: 10px;
        font-family: "SF_Pro_Text_Regular";
        font-size: 14px;

        @media screen and (min-width: 1024px) {
          font-size: 16px;
        }
      }
      ul {
        padding: 0;
        margin-top: 24px;

        li {
          font-family: "Eina_01_Bold";
          font-size: 14px;
          margin-top: 10px;

          display: flex;

          img {
            margin-right: 10px;
          }

          @media screen and (min-width: 1024px) {
            font-size: 16px;
            margin-top: 16px;
          }
        }
      }
    }
  }

  .section-product {
    background-color: #f9fcfd;
    padding-top: 50px;

    .container {
      .title {
        @media screen and (min-width: 1024px) {
          font-size: 30px;
        }
        @media screen and (min-width: 1440px) {
          font-size: 40px;
        }
      }
      .paragraph {
        padding-top: 20px;

        @media screen and (min-width: 1024px) {
          font-size: 16px;
        }
      }

      .bitmap {
        img {
          width: 100%;
        }
      }
      .description {
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 425px) {
          margin-top: 40px;
        }

        .action-link {
          cursor: pointer;
          margin-top: 20px;

          font-family: "Eina_01_Bold";
          font-size: 16px;
          color: #5f33ba;
          text-align: left;
        }
      }
    }

    .product-tabs {
      margin-top: 80px;
      border-top: 1px solid #f0ebfa;
      border-bottom: 1px solid #f0ebfa;

      .active-bar {
        border-top: 1px solid #7f4fe3;
      }

      .items {
        cursor: pointer;
        padding: 28px 0;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          margin-right: 10px;
        }

        div {
          font-family: "Eina_01_Bold";
          font-size: 16px;
        }
      }
    }
  }

  .section-infographics {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    padding: 80px 0;
    color: #fff;
    text-align: center;

    .paragraph {
      justify-content: center;
      font-size: 16px;
      margin-bottom: 60px;
    }

    .item {
      font-family: "Eina_01_Bold";

      // number
      div:first-child {
        font-size: 48px;
        @media screen and (max-width: 768px) {
          font-size: 32px;
        }
      }
      // label
      div:last-child {
        font-size: 18px;
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }

  .section-other-feature {
    padding-top: 150px;

    @media screen and (min-width: 1024) {
      .title {
        font-size: 40px;
      }
      .paragraph {
        font-size: 16px;
      }
    }
  }

  .section-testimony {
    background-color: #f6f7fa;
    padding-top: 100px;
    padding-bottom: 100px;
    overflow: hidden;

    .title {
      font-size: 40px;
    }

    .items {
      background-color: #fff;
      border: 1px solid #e5edef;
      border-radius: 24px;

      margin-top: 20px;
      margin-right: 20px;
      padding: 20px;

      min-width: 322px;
      min-height: 302px;

      .paragraph {
        margin-top: 24px;
      }
      .name {
        margin-top: 24px;
        font-family: "Eina_01_Bold";
        font-size: 18px;
      }
      .label {
        margin-top: 10px;
        font-family: "SF_Pro_Text_Regular";
        font-size: 14px;
      }
    }
  }

  .section-contact-us-divider {
    height: 100px;
    margin-top: -50px;
    margin-bottom: 100px;

    -ms-transform: skewY(-3deg);
    transform: skewY(-3deg);

    background-color: #f6f7fa;
  }
  .section-contact-us {
    margin-top: -50px;
    background-color: #fff;

    button {
      background-color: #5f33ba;
      border-radius: 100px;
      margin-top: 10px;
    }
  }
</style>
